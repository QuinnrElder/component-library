/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";

import { css } from "@emotion/react";

import { useTabFocus, useTabs } from "./util/tabs.hooks";
import { Panel } from "./tabs.panel";
import { Tab } from "./tabs.tab";
import { TABS } from "./tabs.provider";
import {
	ACTIVE_TAB,
	Nav,
	TabExampleContainer,
	TabPanelContainer,
} from "./util/tabs.styles";

import type { TABS_EXAMPLE_PROPS } from "./util/tabs.types";
import { VISUALLY_HIDDEN } from "../../util/styles";

const TabList = ({ tabDetails }: TABS_EXAMPLE_PROPS): ReactElement => {
	const { tabsRef, handleKeyboardInteractions } = useTabFocus(tabDetails);
	const { activeTab } = useTabs();

	return (
		<Nav role="tablist" aria-label={"tabs navigation"}>
			<label id={"tabs navigation"} css={VISUALLY_HIDDEN}>
				tabs navigation
			</label>
			{tabDetails.length > 0
				? tabDetails.map((item, i) => {
						return (
							<Tab
								children={item.tabChildren}
								id={item.id}
								key={item.id}
								keyDownHandler={handleKeyboardInteractions}
								ref={(ref) => (tabsRef.current[i] = ref)}
								css={css`
									${activeTab === item.id && ACTIVE_TAB}
								`}
							/>
						);
				  })
				: null}
		</Nav>
	);
};

export const TabExample = ({
	"data-cy": dataCy,
	activeTabId,
	className,
	css: emoCSS,
	header,
	id,
	tabDetails,
}: TABS_EXAMPLE_PROPS): ReactElement => {
	return (
		<TabExampleContainer
			aria-labelledby={id}
			className={className}
			css={emoCSS}
			data-cy={dataCy}
		>
			{header && <h1 id={id}>{header}</h1>}
			<TABS tabDetails={tabDetails} activeTabId={activeTabId}>
				<TabList tabDetails={tabDetails} activeTabId={activeTabId} />
				<TabPanelContainer>
					{tabDetails.length > 0
						? tabDetails.map((item) => (
								<Panel
									children={item.panelChildren}
									id={item.id}
									key={item.id}
								/>
						  ))
						: null}
				</TabPanelContainer>
			</TABS>
		</TabExampleContainer>
	);
};
