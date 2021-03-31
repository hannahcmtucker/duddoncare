import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { heroSubtitle } from '../copy'
import theme from '../theme'

export default function Hero(): JSX.Element {
  return (
    <Wrapper>
      <StaticImage
        src="../images/hands.jpg"
        style={imageStyles}
        layout="fullWidth"
        alt=""
        loading="eager"
      />
      <Overlay />
      <Text>
        <HeroText>{heroSubtitle}</HeroText>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
`

const imageStyles = {
  gridArea: '1/1',
  maxHeight: 500,
}

const Overlay = styled.div`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  opacity: 70%;
`

const Text = styled.div`
  grid-area: 1/1;
  position: relative;
  place-self: center;
  max-width: 65ch;
  margin: 0 var(--spacing-large);

  @media (min-width: ${theme.media.large}) {
    margin: 0 var(--spacing-xLarge);
  }
`

const HeroText = styled.p`
  font-size: var(--font-size-deci);
  color: white;
  margin: var(--spacing-large) 0;

  @media (min-width: ${theme.media.large}) {
    margin: var(--spacing-xLarge) 0;
    font-size: var(--font-size-giga);
  }
`
