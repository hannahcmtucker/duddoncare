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
  height: '100%',
  maxHeight: 500,
}

const Overlay = styled.div`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  opacity: 80%;
`

const Text = styled.div`
  grid-area: 1/1;
  position: relative;
  place-self: center;
  max-width: 55ch;
  margin: var(--gutter);
`

const HeroText = styled.p`
  margin: 0;
  font-size: var(--font-size-deci);
  color: white;

  @media (min-width: ${theme.media.medium}) {
    font-size: var(--font-size-kilo);
  }

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-giga);
  }
`
