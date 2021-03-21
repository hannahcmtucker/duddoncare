import React from "react";
import styled from "@emotion/styled";
import { heroHeading, heroSubtitle } from "../copy";
import hands from "../images/hands.jpg";
import theme from "../theme";

export default function Hero() {
  return (
    <BackgroundImage>
      <Overlay />
      <Wrapper>
        <Text>
          <HeroHeading>{heroHeading}</HeroHeading>
          <HeroSubtitle>{heroSubtitle}</HeroSubtitle>
        </Text>
      </Wrapper>
    </BackgroundImage>
  );
}

const BackgroundImage = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${hands});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  opacity: 70%;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-large);

  @media (min-width: ${theme.media.large}) {
    padding: var(--spacing-xLarge);
  }
`;

const Text = styled.div`
  max-width: 65ch;
  color: white;
`;

const HeroHeading = styled.h1`
  margin: var(--spacing-xLarge) 0 0 0;
  font-weight: normal;
`;

const HeroSubtitle = styled.p`
  margin-top: var(--spacing-xLarge);
  font-size: var(--font-size-hecto);
`;
