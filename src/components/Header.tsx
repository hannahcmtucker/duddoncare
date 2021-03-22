import React from "react";
import styled from "@emotion/styled";
import PhoneIcon from "../icons/PhoneIcon";
import { phoneNumberEmma, phoneNumberSusie } from "../copy";
import Logo from "./Logo";
import Nav from "./Nav";
import theme from "../theme";

export default function Header(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Logo />
        <PhoneDetails />
      </Wrapper>
      <Nav />
    </>
  );
}

const PhoneDetails = () => {
  return (
    <PhoneDetailsWrapper>
      <PhoneIcon />
      <PhoneNumber>{phoneNumberEmma}</PhoneNumber>
      <PhoneNumber>{phoneNumberSusie}</PhoneNumber>
    </PhoneDetailsWrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-large);

  @media (min-width: ${theme.media.large}) {
    padding: var(--spacing-xLarge);
  }
`;

const PhoneDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: var(--spacing-normal);
`;

const PhoneNumber = styled.p`
  margin: 0;
  font-size: var(--font-size-deci);

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-kilo);
  }
`;
