import React from 'react'
import styled from '@emotion/styled'
import { copyright } from '../copy'

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <TextWrapper>{copyright}</TextWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 0 var(--gutter);
  background-color: var(--color-primaryAlt);
`

const TextWrapper = styled.div`
  padding: var(--spacing-normal) 0;
  color: white;
  font-size: var(--font-size-pico);
  text-align: right;
  border-top: 1px solid white;
`
