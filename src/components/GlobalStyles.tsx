import * as React from "react";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

const globalStyles = css`
  ${emotionNormalize}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  input,
  select,
  textarea {
    font-family: inherit;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "Poppins", helvetica, arial, sans-serif;
    font-weight: normal;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }

  p {
    margin: 0 0 1em;
  }
`;
