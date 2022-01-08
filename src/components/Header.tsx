import React from 'react'
import styled from '@emotion/styled'
import PhoneIcon from '../icons/PhoneIcon'
import Logo from './Logo'
import Nav from './Nav'
import theme from '../theme'
import _PhoneNumber from './PhoneNumber'
import { people } from '../constants'

export default function Header() {
  return (
    <>
      <Wrapper>
        <Logo />
        <PhoneDetails />
      </Wrapper>
      <Nav />
    </>
  )
}

const PhoneDetails = () => {
  return (
    <PhoneDetailsWrapper>
      <PhoneIcon />
      {people.map(person => (
        <PhoneNumber person={person} />
      ))}
    </PhoneDetailsWrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gutter);
`

const PhoneDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: var(--spacing-normal);
`

const PhoneNumber = styled(_PhoneNumber)`
  margin: 0;
  font-size: var(--font-size-deci);

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-kilo);
  }
`
