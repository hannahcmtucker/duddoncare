import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

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
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }

  p {
    margin: 0 0 1em;
  }
`;

export default globalStyles;
