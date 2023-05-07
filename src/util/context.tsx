import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
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
 * @param title The current page title to set in app context.
 * @returns The current page title, from app context.
 */
export const useTitle = (title?: string): string => {
  const { pageTitle, setAppContext } = useContext(AppContext);
  useEffect(() => {
    if (title !== undefined) {
      setAppContext((prev) => ({ ...prev, pageTitle: title }));
    }
  }, [setAppContext, title]);
  return pageTitle;
};
