/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTabs } from "../../util/tabs.hooks";
import { FOCUS_STYLES } from "../../../../util/styles";
import { BASE_OPTIONS } from "../../../../util/types";
import { TEXT_WITH_ICON_PROPS } from "./textWithIcon";

const TextWithIconContainer = styled.div<BASE_OPTIONS | TEXT_WITH_ICON_PROPS>``;
const Icon = styled.i<BASE_OPTIONS | TEXT_WITH_ICON_PROPS>`
	margin: auto;
	padding: 0.75rem 1rem 0;
`;

export const TextWithIcon = ({
	className,
	css: emoCSS,
	iconClassName,
	iconName,
	iconTitle,
	id,
}: TEXT_WITH_ICON_PROPS): ReactElement => {
	const { activeTab } = useTabs();
	return (
		<TextWithIconContainer
			css={css`
				${FOCUS_STYLES}
				${emoCSS}
				color: ${activeTab === (id as string).split("-")[1] ? "blue" : "black"};
			`}
			className={className}
			activeTab={activeTab}
			id={id}
			iconName={iconName}
			iconTitle={iconTitle}
		>
			<Icon className={iconClassName}>{iconName}</Icon>
			<div>{iconTitle}</div>
		</TextWithIconContainer>
	);
};
