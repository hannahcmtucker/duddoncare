import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { heroTitle, heroSubtitle } from '../copy'
import theme from '../theme'

export default function Hero() {
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
        <HeroTitle>{heroTitle}</HeroTitle>
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
  max-width: var(--line-length);
  margin: var(--gutter);
  color: white;
`

const HeroTitle = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: var(--font-size-hecto);

  @media (min-width: ${theme.media.medium}) {
    font-size: var(--font-size-mega);
  }

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-giga);
  }
`

const HeroText = styled.p`
  margin: var(--spacing-large) 0 0 0;
  font-size: var(--font-size-centi);

  @media (min-width: ${theme.media.medium}) {
    font-size: var(--font-size-hecto);
  }

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-mega);
  }
`
