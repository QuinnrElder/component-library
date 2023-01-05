/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// GLOBAL
export const FOCUS_STYLES = css`
  &:focus {
    html.safe-focus & {
      outline: 3px solid blue !important;
      outline-offset: -5rem !important;
    }
  }
`;
export const VISUALLY_HIDDEN = css`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  &:focus {
    bottom: auto;
    clip: auto;
    clip-path: none;
    left: 0;
    right: auto;
    top: 0;
  }
`;
