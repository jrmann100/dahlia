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
  sidebarExpanded: boolean;
}

export const AppContext = createContext<
  AppContextValue & {
    setAppContext: React.Dispatch<React.SetStateAction<AppContextValue>>;
  }
>({
  pageTitle: '',
  sidebarExpanded: true,
  setAppContext: () => {},
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appContext, setAppContext] = useState<AppContextValue>({
    pageTitle: '',
    sidebarExpanded: JSON.parse(
      localStorage.getItem('AppContext.sidebarExpanded') ?? 'true'
    ),
  });
  const value = useMemo(() => ({ ...appContext, setAppContext }), [appContext]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Getter/setter for the app title.
 * @param initialTitle The current page title to set in app context.
 * @returns The current page title, from app context, and its setter.
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

/**
 * Getter/setter for sidebar expanded state.
 * @returns The current sidebar expanded state, from app context, and its setter/toggler.
 */
export const useSidebar = (): [boolean, (expanded?: boolean) => void] => {
  const { sidebarExpanded, setAppContext } = useContext(AppContext);
  const setSidebarExpanded = useCallback(
    (expanded: boolean = !sidebarExpanded): void => {
      setAppContext((prev) => ({ ...prev, sidebarExpanded: expanded }));
      localStorage.setItem(
        'AppContext.sidebarExpanded',
        JSON.stringify(expanded)
      );
    },
    [setAppContext, sidebarExpanded]
  );
  return [sidebarExpanded, setSidebarExpanded];
};
