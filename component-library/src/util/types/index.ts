import type {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from 'react';
import { SerializedStyles } from "@emotion/react";

// GLOBAL
export interface BASE_OPTIONS {
  children?: ReactElement<any, string | JSXElementConstructor<any>> | ReactNode | ReactNode[] | ReactElement<any, string | JSXElementConstructor<any>>[];
  id?: string;
  "data-cy"?: string;
  className?: string;
  css?: SerializedStyles;
}
