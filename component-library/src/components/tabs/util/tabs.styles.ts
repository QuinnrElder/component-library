/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { FOCUS_STYLES } from "../../../util/styles";

import type { BASE_OPTIONS } from "../../../util/types";


export const ACTIVE_TAB = css`
  border: 3px solid blue;
  border-bottom: none;
`;

// STYLED COMPONENTS
export const Nav = styled.nav`
	margin-bottom: 0;
	padding: 0;
  display: flex;
  justify-content: start;
`;

export const TabExampleContainer = styled.section<BASE_OPTIONS>`
	width: 30%;
  margin: auto;
  h1 {
    font-size: 4rem;
    width: 100%;
  }
`;

export const Button = styled.button`
	${FOCUS_STYLES}
	background-color: white;
	border: 3px solid black;
	border-bottom: none;
	cursor: pointer;
	font-size: 1.2rem;
	margin: 0.25rem;
	margin-bottom: 0;
	margin-left: 0;
	padding: 1rem 0;
	width: 10rem;
  border-radius: 1rem 1rem 0 0;
	&:hover {
		border: 3px solid blue;
		border-bottom: none;
	}
`;

export const TabPanelContainer = styled.div<BASE_OPTIONS>`
	border: 3px solid black;
  border-radius: 0 1rem 1rem;
	text-align: center;
`;

export const TabPanel = styled.div<BASE_OPTIONS>`
	text-align: center;
  margin: 2%;
  padding: 10%;
`;
