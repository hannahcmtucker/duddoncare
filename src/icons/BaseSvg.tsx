import React from "react";
import styled from "@emotion/styled";

export default function BaseSvg({
  viewBox = "0 0 24 24",
  size = "1.5em",
  fillColor = "currentColor",
  children,
}) {
  return (
    <Svg
      viewBox={viewBox}
      width={size}
      height={size}
      fillColor={fillColor}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </Svg>
  );
}

const Svg = styled.svg<{ fillColor: string }>`
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
  transition: transform 0.2s ease-out;
  ${(props) => `fill: ${props.fillColor}`};
`;
