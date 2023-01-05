import { BASE_OPTIONS } from "../../../../util/types";

export interface TEXT_WITH_ICON_PROPS extends BASE_OPTIONS {
  activeTab: string;
  iconTitle: string;
  iconName: string;
  iconClassName: string;
  id: ICON_ID;
}

export type ICON_ID = 'icon-one' | 'icon-two' | 'icon-three'
