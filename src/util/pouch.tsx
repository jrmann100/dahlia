import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
  useMemo,
  type Context,
  useCallback,
} from 'react';

type PouchUpdater<T> = (updatedValues: Partial<T> | ((prev: T) => T)) => void;

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
    const [contents, setContents] = useState<T>(defaults);

    const update = useCallback<PouchUpdater<T>>((updates) => {
      if (typeof updates === 'function') {
        setContents(updates);
      } else {
        setContents((prev) => ({ ...prev, ...updates }));
      }
    }, []);

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

export default createPouch;
