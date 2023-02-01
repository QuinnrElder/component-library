/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { FOCUS_STYLES } from "../../../util/styles";

import type { BASE_OPTIONS } from "../../../util/types";

export const ACTIVE_TAB = css`
  border: 3px solid blue;

	@media (min-width: 80rem) {
		border-bottom: none;
  }
`;

// STYLED COMPONENTS
export const Nav = styled.nav`
	margin-bottom: 0;
	padding: 0;
  display: flex;
  justify-content: start;
`;

export const TabExampleContainer = styled.div<BASE_OPTIONS>`
	width: 40%;
  margin: auto;
  margin-bottom: 3rem;
  h1 {
    font-size: 2rem;
  }

	@media (min-width: 60rem) {
		h1 {
			font-size: 2rem;
		}
  }
	@media (min-width: 80rem) {
		h1 {
			font-size: 3rem;
		}
  }
`;

export const Button = styled.div`
	${FOCUS_STYLES}
	background-color: white;
	border: 3px solid black;
  border-radius: 1rem;
	cursor: pointer;
	font-size: .7rem;
	padding: 0;
	margin: 0 .25rem .5rem;
	width: 6rem;
	&:hover {
		border: 3px solid blue;

		i {
			color: blue;
		}
	}

	p {
		display: none;
	} 

	@media (min-width: 40rem) {
		width: 10rem;
  }
	
	@media (min-width: 60rem) {
		padding: .5rem 0;
    font-size: 1rem;
		width: 10rem;
		p {
			display: block;
		} 
  }
	
	@media (min-width: 80rem) {
		border-radius: 1rem 1rem 0 0;
		border-bottom: none;
		margin: 0.25rem 0 0;
		&:hover {
			border-bottom: none;
		}
  }
`;

export const TabPanelContainer = styled.div<BASE_OPTIONS>`
	border: 3px solid black;
  border-radius: 1rem;
	text-align: center;

	@media (min-width: 80rem) {
    border-radius: 0 1rem 1rem;
  }
`;

export const TabPanel = styled.div<BASE_OPTIONS>`
	text-align: center;
  margin: 2%;
  padding: 10%;
`;
