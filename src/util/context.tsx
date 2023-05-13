import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

interface AppContextValue {
  pageTitle: string;
}

export const AppContext = createContext<
  AppContextValue & {
    setAppContext: React.Dispatch<React.SetStateAction<AppContextValue>>;
  }
>({
  pageTitle: '',
  setAppContext: () => {},
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appContext, setAppContext] = useState<AppContextValue>({
    pageTitle: '',
  });
  const value = useMemo(() => ({ ...appContext, setAppContext }), [appContext]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Getter/setter for the app title.
 * @param initialTitle The current page title to set in app context.
 * @returns The current page title, from app context.
 */
export const useTitle = (
  initialTitle?: string
): [string, (title: string) => void] => {
  const { pageTitle, setAppContext } = useContext(AppContext);
  const setTitle = useCallback(
    (title: string): void => {
      setAppContext((prev) => ({ ...prev, pageTitle: title }));
    },
    [setAppContext]
  );
  useEffect(() => {
    if (initialTitle !== undefined) {
      setTitle(initialTitle);
    }
  }, [setAppContext, initialTitle, setTitle]);
  return [pageTitle, setTitle];
};
