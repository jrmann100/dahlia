import { useContext, useEffect, useCallback } from 'react';
import createPouch from 'util/pouch';

interface AppContextValue {
  pageTitle: string;
  sidebarExpanded: boolean;
}

export const [AppContext, AppContextProvider] = createPouch<AppContextValue>({
  pageTitle: '',
  sidebarExpanded: JSON.parse(
    localStorage.getItem('AppContext.sidebarExpanded') ?? 'true'
  ),
});

/**
 * Getter/setter for the app title.
 * @param initialTitle The current page title to set in app context.
 * @returns The current page title, from app context, and its setter.
 */
export const useTitle = (
  initialTitle?: string
): [string, (title: string) => void] => {
  const { pageTitle, update } = useContext(AppContext);
  const setTitle = useCallback(
    (title: string): void => {
      update({ pageTitle: title });
    },
    [update]
  );
  useEffect(() => {
    if (initialTitle !== undefined) {
      setTitle(initialTitle);
    }
  }, [initialTitle, setTitle]);
  return [pageTitle, setTitle];
};

/**
 * Getter/setter for sidebar expanded state.
 * @returns The current sidebar expanded state, from app context, and its setter/toggler.
 */
export const useSidebar = (): [boolean, (expanded?: boolean) => void] => {
  const { sidebarExpanded, update } = useContext(AppContext);
  const setSidebarExpanded = useCallback(
    (expanded: boolean = !sidebarExpanded): void => {
      update({ sidebarExpanded: expanded });
      localStorage.setItem(
        'AppContext.sidebarExpanded',
        JSON.stringify(expanded)
      );
    },
    [sidebarExpanded, update]
  );
  return [sidebarExpanded, setSidebarExpanded];
};
