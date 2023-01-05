/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";
import styled from "@emotion/styled";

import type { BASE_OPTIONS } from "../../../../util/types";
import type { TEXT_BOX_PROPS } from "./textBox.types";

const TextBoxContainer = styled.div<BASE_OPTIONS>`
	font-size: 1.5rem;
`;

export const TextBox = ({
	"data-cy": dataCy,
	className,
	content,
	css: emoCSS,
	heading,
	id,
	secondaryHeading,
}: TEXT_BOX_PROPS): ReactElement => {
	return (
		<TextBoxContainer
			className={className}
			css={emoCSS}
			data-cy={dataCy}
			id={id}
		>
			<h2>{heading}</h2>
			<h3 id={`secondary-header-${id}`}>{secondaryHeading}</h3>
			<p>{content}</p>
		</TextBoxContainer>
	);
};
