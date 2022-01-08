import React from 'react'
import theme from '../theme'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import VisuallyHidden from './VisuallyHidden'
import { logoLinkText } from '../copy'

export default function Logo() {
  const { site } = useStaticQuery(query)

  return (
    <LogoLink href={site.siteMetadata.siteUrl}>
      <LogoSvg />
      <VisuallyHidden>{logoLinkText}</VisuallyHidden>
    </LogoLink>
  )
}

const query = graphql`
  query Logo {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const LogoSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1298 698.1">
      <path
        fill={theme.colors.primaryAlt}
        d="M647.1 95c-91.5 28.3-165.5 96.7-201.3 184.6-40 .8-82.9 7.5-125.5 19.3 41.7-120 155.8-206.1 290-206.1 12.5 0 24.8.7 36.8 2.2z"
      />
      <path
        fill={theme.colors.primaryAlt}
        d="M928.8 407.3c.1-2.5.1-5 .1-7.5 0-153.6-108.6-281.9-253.2-312.2-21.2-4.5-43.2-6.8-65.8-6.8-142.5 0-263.2 93.4-304.1 222.4-16.4 5-32.7 10.8-48.7 17.2C310.6 138 479.2 4.8 678.9 4.8c230.3 0 419.2 177.1 438 402.5H928.8z"
      />
      <path
        fill={theme.colors.primary}
        d="M876.5 340.8c-11.7 31.7-35.3 60.8-69.9 89.4-32.1 26.6-98 49.3-176.1 49.3-17.7 0-36-1.2-54.7-3.7-51.2-7-182.9-54.4-311.4-54.4-62.6 0-124.4 11.2-175.9 43.8 19-49 84.3-98.5 164.8-132.4 15.7-6.6 32-12.6 48.6-18 4.7-1.5 9.5-3 14.2-4.3 41.2-12 84.1-19.5 125.3-20.8 4.2-.1 8.3-.2 12.4-.2 2.3 0 4.7 0 7 .1 3.3.1 6.6.1 9.7.1 44.4 0 74.6-6 96.8-18.9 2.3-1.3 4.6-1.9 6.9-1.9 8.9 0 16.5 9.1 12.6 18.7-15.1 37-57.2 50.3-132 56.2 62.6 27 142.1 67.7 215.2 69.6 2.6.1 5.2.1 7.8.1 30.3 0 60.3-4.7 89.3-16.1 4.8-1.9 9.6-4 14.4-6.2 39.3-18.7 63.5-40.1 78.4-59.6 2-2.7 4.7-3.8 7.3-3.8 6.1 0 11.9 5.9 9.3 13z"
      />
      <path d="M481.4 401.8l-4 1.5c.4-.2.8-.5 1.2-.7l2.8-.8z" />
      <path
        fill={theme.colors.primary}
        d="M813.1 312.2c0 20.6-4.8 36.7-24.6 63.2l-.1.1c-2.5 3.4-5.8 6.1-9.5 8.1-.2.1-.5.2-.8.4-15 7.1-30.9 12.5-47.7 16.1s-34.3 5.4-52.6 5.4c-6.5 0-13-.2-19.7-.7 3-.8 6.1-1.6 9.4-2.6 38.9-11.1 96.4-35 126.8-94.6 1.9-3.7 5.3-5.4 8.7-5.4 5.1.1 10.1 3.8 10.1 10zm-162.2 86.2c-.4.2-.8.5-1.2.7l4-1.5-2.8.8z"
      />
      <path
        fill={theme.colors.primary}
        d="M755.6 337.2v.1c-1.6 7.8-6 14.6-12.3 19.5-6 4.7-12.3 9-19.1 13.1-3.6 2.2-7.4 4.2-11.3 6.2-16.5 8.5-35.2 15.4-56.8 20.9l-2.6.7-2.7.7c22.3-13.2 62-38.8 77.8-68.3 4.2-7.8 7.4-14.4 10-20.1 4.2-9.3 18.1-6.7 18.5 3.5.4 9.2-.2 17.1-1.5 23.7z"
      />
      <path
        fill={theme.colors.primaryAlt}
        d="M84.5 562.2c10.9 5.5 19.2 13.4 25 23.8 5.8 10.4 8.7 22.7 8.7 37 0 14.2-2.9 26.4-8.7 36.7-5.8 10.3-14.1 18.2-25 23.6-10.9 5.4-23.9 8.2-39.2 8.2H4.6V553.9h40.7c15.2 0 28.3 2.8 39.2 8.3zM89.1 665c10-10 15.1-24 15.1-42 0-18.1-5-32.2-15.1-42.4-10-10.2-24.6-15.2-43.8-15.2h-27v114.7h27c19.1 0 33.7-5.1 43.8-15.1zm147.5-81v107.4h-13.8v-18.9c-3.1 6.7-8 11.8-14.6 15.3s-13.9 5.3-22 5.3c-12.9 0-23.4-4-31.5-11.9-8.1-7.9-12.2-19.4-12.2-34.5V584h13.6v61.2c0 11.7 2.9 20.6 8.8 26.8 5.8 6.2 13.8 9.2 23.9 9.2 10.4 0 18.6-3.3 24.8-9.8 6.2-6.6 9.2-16.2 9.2-28.9V584h13.8zm31.8 24.5c4.5-8.3 10.6-14.8 18.4-19.3 7.8-4.5 16.6-6.8 26.5-6.8 9.4 0 18 2.3 25.6 6.9 7.6 4.6 13.2 10.6 16.7 17.9v-61.4h13.8v145.6h-13.8v-24c-3.3 7.5-8.7 13.6-16.1 18.4-7.5 4.8-16.3 7.2-26.4 7.2-9.8 0-18.7-2.3-26.5-6.9-7.8-4.6-13.9-11.1-18.3-19.5s-6.6-18.1-6.6-29.1c.1-11 2.3-20.6 6.7-29zm81.9 6.4c-3.5-6.6-8.4-11.6-14.5-15.2-6.1-3.5-12.8-5.3-20.2-5.3-7.6 0-14.4 1.7-20.5 5.1-6 3.4-10.8 8.4-14.3 14.9s-5.2 14.2-5.2 23.1c0 8.8 1.7 16.5 5.2 23.1 3.5 6.6 8.2 11.7 14.3 15.2 6 3.5 12.9 5.2 20.5 5.2 7.3 0 14.1-1.8 20.2-5.3s10.9-8.6 14.5-15.2c3.5-6.6 5.3-14.2 5.3-22.8s-1.7-16.2-5.3-22.8zm51-6.4c4.5-8.3 10.6-14.8 18.4-19.3 7.8-4.5 16.6-6.8 26.5-6.8 9.4 0 18 2.3 25.6 6.9 7.6 4.6 13.2 10.6 16.7 17.9v-61.4h13.8v145.6h-13.8v-24c-3.3 7.5-8.7 13.6-16.1 18.4-7.5 4.8-16.3 7.2-26.4 7.2-9.8 0-18.7-2.3-26.5-6.9-7.8-4.6-13.9-11.1-18.3-19.5s-6.6-18.1-6.6-29.1 2.2-20.6 6.7-29zm81.8 6.4c-3.5-6.6-8.4-11.6-14.5-15.2-6.1-3.5-12.8-5.3-20.2-5.3-7.6 0-14.4 1.7-20.5 5.1-6 3.4-10.8 8.4-14.3 14.9s-5.2 14.2-5.2 23.1c0 8.8 1.7 16.5 5.2 23.1 3.5 6.6 8.2 11.7 14.3 15.2 6 3.5 12.9 5.2 20.5 5.2 7.3 0 14.1-1.8 20.2-5.3s10.9-8.6 14.5-15.2c3.5-6.6 5.3-14.2 5.3-22.8s-1.7-16.2-5.3-22.8zm70.4 71.4c-8.1-4.5-14.4-11-19.1-19.3-4.7-8.3-7-18.1-7-29.2 0-11.1 2.4-20.9 7.1-29.2 4.7-8.3 11.1-14.8 19.3-19.3 8.1-4.5 17.2-6.8 27.4-6.8 10.1 0 19.3 2.3 27.5 6.8s14.6 11 19.3 19.3c4.7 8.3 7 18.1 7 29.2 0 11-2.4 20.7-7.1 29.1-4.7 8.4-11.2 14.9-19.5 19.4-8.3 4.5-17.4 6.8-27.5 6.8-10.3-.1-19.3-2.3-27.4-6.8zm46.9-10.1c6-3.2 10.9-8.1 14.7-14.6 3.7-6.5 5.6-14.5 5.6-23.9 0-9.4-1.8-17.4-5.5-23.9s-8.5-11.3-14.6-14.6c-6-3.2-12.6-4.8-19.7-4.8s-13.6 1.6-19.7 4.8c-6 3.2-10.9 8.1-14.5 14.6-3.6 6.5-5.4 14.5-5.4 23.9 0 9.4 1.8 17.4 5.4 23.9 3.6 6.5 8.4 11.3 14.4 14.6 6 3.2 12.5 4.8 19.6 4.8 7.1 0 13.7-1.6 19.7-4.8zM741.9 594c8.1 7.9 12.2 19.5 12.2 34.5v63h-13.6v-61.4c0-11.7-2.9-20.6-8.8-26.8-5.8-6.2-13.8-9.2-23.9-9.2-10.4 0-18.6 3.3-24.8 9.8-6.2 6.6-9.2 16.2-9.2 28.9v58.6H660V584h13.8v18.3c3.4-6.6 8.3-11.6 14.8-15.1 6.4-3.5 13.7-5.2 21.8-5.2 12.9.1 23.4 4 31.5 12z"
      />
      <path
        fill={theme.colors.primary}
        d="M838.9 586.7c6-10.7 14.3-19.1 24.7-25.1 10.4-6 22-9.1 34.7-9.1 15 0 28 3.6 39.2 10.8 11.1 7.2 19.3 17.4 24.4 30.7h-21.4c-3.8-8.3-9.3-14.6-16.4-19.1-7.2-4.5-15.7-6.7-25.7-6.7-9.6 0-18.2 2.2-25.8 6.7-7.6 4.5-13.6 10.8-17.9 19-4.3 8.2-6.5 17.8-6.5 28.8 0 10.9 2.2 20.4 6.5 28.6 4.3 8.2 10.3 14.5 17.9 19 7.6 4.5 16.2 6.7 25.8 6.7 10 0 18.5-2.2 25.7-6.6 7.1-4.4 12.6-10.7 16.4-19h21.4c-5.1 13.1-13.3 23.3-24.4 30.4-11.2 7.2-24.2 10.7-39.2 10.7-12.7 0-24.3-3-34.7-9-10.4-6-18.7-14.3-24.7-24.9-6-10.6-9.1-22.6-9.1-36s3.1-25.2 9.1-35.9zm149.6 21.4c4.5-8.3 10.6-14.8 18.4-19.4 7.8-4.6 16.5-6.9 26.1-6.9 9.4 0 17.6 2 24.6 6.1s12.1 9.2 15.5 15.3v-19.7h18.1v107.8h-18.1v-20.1c-3.5 6.3-8.8 11.5-15.8 15.6s-15.2 6.2-24.5 6.2c-9.6 0-18.2-2.4-26-7.1-7.7-4.7-13.8-11.3-18.3-19.9-4.5-8.5-6.7-18.2-6.7-29.1 0-10.8 2.2-20.4 6.7-28.8zm79.7 8c-3.3-6-7.7-10.7-13.3-13.9-5.6-3.2-11.7-4.8-18.4-4.8-6.7 0-12.8 1.6-18.3 4.7s-9.9 7.7-13.2 13.8c-3.3 6-4.9 13.1-4.9 21.3 0 8.3 1.6 15.4 4.9 21.5 3.3 6.1 7.7 10.8 13.2 14 5.5 3.2 11.6 4.8 18.3 4.8 6.7 0 12.8-1.6 18.4-4.8 5.6-3.2 10-7.9 13.3-14 3.3-6.1 4.9-13.2 4.9-21.4 0-8.1-1.6-15.2-4.9-21.2zm84.7-29.3c5.8-3.4 13-5.1 21.4-5.1v18.5h-4.7c-20.1 0-30.1 10.9-30.1 32.7v58.6h-17.9V583.6h17.9v17.5c3.1-6.1 7.6-10.9 13.4-14.3zm139.8 57.4h-86.2c.7 10.6 4.3 18.9 10.9 24.9 6.6 6 14.7 9 24.1 9 7.7 0 14.2-1.8 19.4-5.4 5.2-3.6 8.8-8.4 10.9-14.5h19.3c-2.9 10.4-8.7 18.8-17.3 25.3-8.7 6.5-19.4 9.7-32.3 9.7-10.2 0-19.4-2.3-27.5-6.9-8.1-4.6-14.4-11.1-19-19.6-4.6-8.5-6.9-18.3-6.9-29.4 0-11.2 2.2-20.9 6.7-29.3 4.5-8.4 10.7-14.9 18.8-19.4 8.1-4.5 17.3-6.8 27.8-6.8 10.2 0 19.3 2.2 27.2 6.7 7.9 4.5 13.9 10.6 18.2 18.4 4.3 7.8 6.4 16.6 6.4 26.5.1 3.4-.1 7-.5 10.8zm-22.4-32.1c-3-4.9-7.1-8.7-12.3-11.2-5.2-2.6-10.9-3.8-17.2-3.8-9.1 0-16.8 2.9-23.1 8.7-6.4 5.8-10 13.8-10.9 24h68.1c-.1-6.9-1.6-12.8-4.6-17.7z"
      />
    </svg>
  )
}

const LogoLink = styled.a`
  width: 160px;

  @media (min-width: ${theme.media.large}) {
    width: 220px;
  }
`
