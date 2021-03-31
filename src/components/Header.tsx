import React from 'react'
import styled from '@emotion/styled'
import PhoneIcon from '../icons/PhoneIcon'
import {
  phoneNumberEmma,
  phoneNumberSusie,
  emmaPhoneInternational,
  susiePhoneInternational,
} from '../copy'
import Logo from './Logo'
import Nav from './Nav'
import theme from '../theme'
import Link from './Link'

export default function Header(): JSX.Element {
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
  const telEmma = `tel:${emmaPhoneInternational}`
  const telSusie = `tel:${susiePhoneInternational}`

  return (
    <PhoneDetailsWrapper>
      <PhoneIcon />
      <PhoneNumber href={telEmma}>{phoneNumberEmma}</PhoneNumber>
      <PhoneNumber href={telSusie}>{phoneNumberSusie}</PhoneNumber>
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

const PhoneNumber = styled(Link)`
  margin: 0;
  font-size: var(--font-size-deci);

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-kilo);
  }
`
