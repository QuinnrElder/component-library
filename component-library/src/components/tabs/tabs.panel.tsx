/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";

import { useTabs } from "./tabs.hooks";

import type { BASE_OPTIONS } from "../../util/types";

import { TabPanel } from "./tabs.styles";
import { FOCUS_STYLES } from "../../util/styles";

export const Panel = ({
	"data-cy": dataCy,
	children,
	className,
	css: emoCSS,
	id,
}: BASE_OPTIONS) => {
	const { activeTab } = useTabs();
	const isActive = activeTab === id;

	return (
		<TabPanel
			aria-labelledby={id}
			className={className}
			data-cy={dataCy}
			id={`panel-${id}`}
			role="tabpanel"
			tabIndex={0}
			css={css`
				${FOCUS_STYLES}
				display: ${isActive ? "block" : "none"};
				${emoCSS}
			`}
		>
			{children}
		</TabPanel>
	);
};
