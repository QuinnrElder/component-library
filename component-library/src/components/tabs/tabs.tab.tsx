/** @jsxImportSource @emotion/react */
import React from "react";

import type { TAB_BUTTON_PROPS } from "./util/tabs.types";
import { useTabs } from "./util/tabs.hooks";
import { Button } from "./util/tabs.styles";

export const Tab = React.forwardRef(
	(
		{
			"data-cy": dataCy,
			children,
			className,
			css: emoCSS,
			id,
			keyDownHandler,
		}: TAB_BUTTON_PROPS,
		ref: React.Ref<HTMLButtonElement> | null
	) => {
		const { activeTab, setActiveTab } = useTabs();

		return (
			<Button
			    aria-controls={`panel-${id}`}
				aria-selected={activeTab === id ? true : false}
				className={className}
				css={emoCSS}
				data-cy={dataCy}
				id={id}
				onClick={() => setActiveTab(id)}
				onKeyDown={keyDownHandler}
				ref={ref}
				role={'tab'}
				tabIndex={activeTab === id ? undefined : -1}
			>
				{children}
			</Button>
		);
	}
);
