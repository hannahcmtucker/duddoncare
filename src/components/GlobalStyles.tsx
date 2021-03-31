import * as React from 'react'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import theme from '../theme'

export default function GlobalStyles(): JSX.Element {
  return <Global styles={globalStyles} />
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
    font-size: ${theme.fontSize.centi};
    color: ${theme.colors.text};

    --font-size-nano: ${theme.fontSize.nano};
    --font-size-centi: ${theme.fontSize.centi};
    --font-size-deci: ${theme.fontSize.deci};
    --font-size-hecto: ${theme.fontSize.hecto};
    --font-size-kilo: ${theme.fontSize.kilo};
    --font-size-mega: ${theme.fontSize.mega};
    --font-size-giga: ${theme.fontSize.giga};

    --spacing-small: ${theme.spacing.small};
    --spacing-medium: ${theme.spacing.medium};
    --spacing-normal: ${theme.spacing.normal};
    --spacing-large: ${theme.spacing.large};
    --spacing-xLarge: ${theme.spacing.xLarge};

    --color-text: ${theme.colors.text};
    --color-secondary: ${theme.colors.secondary};
    --color-primary: ${theme.colors.primary};
    --color-primaryAlt: ${theme.colors.primaryAlt};

    --gutter: ${theme.gutter.mobile};
    --line-length: ${theme.lineLength};
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
    font-family: 'Poppins', helvetica, arial, sans-serif;
    font-weight: normal;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
  }

  p {
    margin: 0 0 1em 0;
  }

  button {
    font-family: 'Poppins', helvetica, arial, sans-serif;
  }

  a {
    color: ${theme.colors.primaryAlt};
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${theme.colors.primaryAlt};
    text-decoration: underline;
  }

  @media (min-width: ${theme.media.large}) {
    html {
      font-size: ${theme.fontSize.deci};
      --gutter: ${theme.gutter.tablet};
    }
  }

  @media (min-width: ${theme.media.xLarge}) {
    html {
      --gutter: ${theme.gutter.desktop};
    }
  }
`
