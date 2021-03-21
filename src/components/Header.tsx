import React from "react";
import styled from "@emotion/styled";
import PhoneIcon from "../icons/PhoneIcon";
import { phoneNumberEmma, phoneNumberSusie } from "../copy";
import Nav from "./Nav";

// TODO use SVG for logo once exported properly
export default function Header() {
  return (
    <>
      <Wrapper>
        <div>To Do: Logo</div>
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
      <div>{phoneNumberEmma}</div>
      <div>{phoneNumberSusie}</div>
    </PhoneDetailsWrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const PhoneDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
