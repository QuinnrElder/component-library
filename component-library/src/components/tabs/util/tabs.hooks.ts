import { createContext, useContext, useEffect, useRef } from 'react';

import type { TAB_CONTEXT, TABS_PROPS } from './tabs.types';

/**
 * Is the Context Provider for our TABS component.
 */
export const TabsContext = createContext<TAB_CONTEXT | undefined>(undefined);

/**
 * Custom checking for TAB_CONTEXT.
 */
export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      'This component must be used within a <TabWrapper> component.',
    );
  }
  return context;
};

export const useTabFocus = (items: TABS_PROPS['tabDetails']) => {
  // Initialize with `[]` as the default value.
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const activateTabRef = (index: number): void => {
    if (tabsRef.current[index] && tabsRef.current[index] instanceof HTMLButtonElement) {
      // tabsRef is Array<HTMLButtonElement | null>, but tsc is not
      // honoring the type check above even if !== null
      (tabsRef.current[index] as HTMLButtonElement).focus();
    }
  };

  const handleKeyboardInteractions = (e: React.KeyboardEvent<HTMLElement>): void => {
    const currentTabIndex = tabsRef.current.indexOf(e.target as HTMLButtonElement);

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        // Check index(s) for setting focus on next tab ~QRE:TODO
        activateTabRef(Math.min(currentTabIndex + 1));
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        // Check index(s) for setting focus on previous tab
        e.preventDefault();
        activateTabRef(Math.max(0, currentTabIndex - 1));
        break;
      case 'Home':
        // Set focus on first tab
        e.preventDefault();
        activateTabRef(0);
        break;
      case 'End':
        // Set focus on last tab
        e.preventDefault();
        activateTabRef(tabsRef.current.length - 1);
        break;
    }
  };

  useEffect(() => {
    // Cleanup old refs at the end of the array from removed items - these will be null values
    tabsRef.current = tabsRef.current.slice(0, items.length);
  }, [items.length]);

  return { tabsRef, handleKeyboardInteractions };
};
