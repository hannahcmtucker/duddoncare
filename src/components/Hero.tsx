import React from "react";
import styled from "@emotion/styled";
import { heroHeading, heroSubtitle } from "../copy";
import hands from "../images/hands.jpg";

export default function Hero() {
  return (
    <BackgroundImage>
      <Overlay />
      <TextWrapper>
        <HeroHeading>{heroHeading}</HeroHeading>
        <HeroSubtitle>{heroSubtitle}</HeroSubtitle>
      </TextWrapper>
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
  opacity: 60%;
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xLarge);
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
