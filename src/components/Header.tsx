import React from "react";
import styled from "@emotion/styled";
import PhoneIcon from "../icons/PhoneIcon";
import { phoneNumber } from "../copy";

// TODO use SVG for logo once exported properly
export default function Header() {
  return (
    <Wrapper>
      <div>To Do: Logo</div>
      <PhoneDetails />
    </Wrapper>
  );
}

const PhoneDetails = () => {
  return (
    <PhoneDetailsWrapper>
      <PhoneIcon />
      <div>{phoneNumber}</div>
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
