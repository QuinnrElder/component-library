/** @jsxImportSource @emotion/react */
import { ReactElement, useMemo, useState } from "react";

import { TabsContext } from "./tabs.hooks";
import type { TABS_PROPS } from "./tabs.types";

export const TABS = ({
	activeTabId,
	children,
	tabDetails,
}: TABS_PROPS): ReactElement => {
	const [activeTab, setActiveTab] = useState(activeTabId ?? tabDetails[0].id);

	/**
	 * Memoize the context to prevent unnecessary renders.
	 */
	const memoizedContextValue = useMemo(
		() => ({
			activeTab,
			setActiveTab,
		}),
		[activeTab, setActiveTab]
	);

	return (
		<TabsContext.Provider value={memoizedContextValue}>
			{children}
		</TabsContext.Provider>
	);
};
