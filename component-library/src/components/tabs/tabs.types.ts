import type {
  Dispatch,
  KeyboardEventHandler,
  ReactElement,
  ReactNode,
  SetStateAction
} from 'react';

import type { BASE_OPTIONS } from '../../util/types';

// INDEX
export interface TABS_EXAMPLE_PROPS extends BASE_OPTIONS {
  tabDetails: TAB_EXAMPLE_MODEL[];
  activeTabId: string;
  header?: string;
}

export interface TAB_EXAMPLE_MODEL
  extends TAB_EXAMPLE_FLAP_PROPS,
  TAB_EXAMPLE_PANEL_PROPS { }

export interface TAB_EXAMPLE_FLAP_PROPS extends BASE_OPTIONS {
  id: string;
  isActive?: boolean;
  keyDownHandler?: KeyboardEventHandler;
  tabChildren?: ReactNode | ReactNode[] | ReactElement | ReactElement[];
}

export interface TAB_EXAMPLE_PANEL_PROPS extends BASE_OPTIONS {
  id: string;
  tabTitle?: string;
  panelChildren?: ReactNode | ReactNode[] | ReactElement | ReactElement[];
}

// HOOKS
export interface TAB_CONTEXT {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>> | (() => void);
}

// PANEL ~N/A

// TAB 
export interface TAB_BUTTON_PROPS extends BASE_OPTIONS {
  id: string;
  keyDownHandler?: KeyboardEventHandler;
}

// Wrapper `TABS`
export interface TABS_PROPS extends BASE_OPTIONS {
  tabDetails: TAB_BUTTON_PROPS[];
  activeTabId?: string;
}
