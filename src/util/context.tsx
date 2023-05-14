import { useEffect } from 'react';
import { createPouch, usePouch } from 'util/pouch';

interface AppContextValue {
  pageTitle: string;
  sidebarExpanded: boolean;
  showLoader: boolean;
}

export const [AppContext, AppContextProvider] = createPouch<AppContextValue>(
  {
    pageTitle: '',
    showLoader: false,
    sidebarExpanded: JSON.parse(
      localStorage.getItem('AppContext.sidebarExpanded') ?? 'true'
    ),
  },
  () => {
    const [expanded] = usePouch(AppContext, 'sidebarExpanded');
    useEffect(() => {
      localStorage.setItem(
        'AppContext.sidebarExpanded',
        JSON.stringify(expanded)
      );
    }, [expanded]);
    return null;
  }
);
