import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
  useMemo,
  type Context,
  useCallback,
  useContext,
} from 'react';

type PouchUpdater<T> = React.Dispatch<React.SetStateAction<T>>;

type PouchWithUpdater<T> = T & {
  update: PouchUpdater<T>;
};

export const createPouch = <T,>(
  defaults: T,
  Manager?: FC
): [Context<PouchWithUpdater<T>>, FC<PropsWithChildren>] => {
  const Pouch = createContext<PouchWithUpdater<T>>({
    ...defaults,
    update: () => {},
  });

  const PouchProvider: FC<PropsWithChildren> = ({ children }) => {
    const [contents, update] = useState<T>(defaults);

    const value = useMemo(
      () => ({
        ...contents,
        update,
      }),
      [contents, update]
    );
    return (
      <Pouch.Provider value={value}>
        <>
          {Manager !== undefined && <Manager />}
          {children}
        </>
      </Pouch.Provider>
    );
  };
  return [Pouch, PouchProvider];
};

export const usePouch = <T, K extends keyof T>(
  pouch: Context<PouchWithUpdater<T>>,
  key: K
): [T[K], (value: T[K]) => void] => {
  const { update, ...contents } = useContext(pouch);
  const value = (contents as T)[key];

  const setValue = useCallback(
    (newValue: T[K]): void => {
      update((prev) => ({ ...prev, [key]: newValue }));
    },
    [update, key]
  );

  return [value, setValue];
};
