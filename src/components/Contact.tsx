import React from 'react'
import styled from '@emotion/styled'
import SectionHeading from './SectionHeading'
import Link from './Link'
import theme from '../theme'
import {
  contactHeading,
  contactSubText,
  emma,
  susie,
  phoneNumberEmma,
  phoneNumberSusie,
  emmaPhoneInternational,
  susiePhoneInternational,
  contactEmail,
  contactAddress,
} from '../copy'

export default function Contact(): JSX.Element {
  const mailTo = `mailto:${contactEmail}`
  const telEmma = `tel:${emmaPhoneInternational}`
  const telSusie = `tel:${susiePhoneInternational}`

  return (
    <ContactWrapper>
      <TextWrapper>
        <SectionHeading isLight>{contactHeading}</SectionHeading>
        <p>{contactSubText}</p>
        <Spacer>
          <p>
            <PhoneNumber href={telEmma} inverse>
              {phoneNumberEmma}
            </PhoneNumber>
            - {emma}
          </p>

          <p>
            <PhoneNumber href={telSusie} inverse>
              {phoneNumberSusie}
            </PhoneNumber>
            - {susie}
          </p>
        </Spacer>
        <Spacer>
          <Email href={mailTo} inverse>
            {contactEmail}
          </Email>
        </Spacer>
        <Spacer>
          <Address>{contactAddress}</Address>
        </Spacer>
      </TextWrapper>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  padding: var(--gutter);
  background-color: var(--color-primaryAlt);
`

const TextWrapper = styled.div`
  max-width: var(--line-length);
  color: white;
  margin: 0 auto;
`

const Spacer = styled.div`
  padding-top: var(--spacing-normal);
`
const PhoneNumber = styled(Link)`
  margin-right: var(--spacing-small);
`

const Email = styled(Link)`
  display: block;
  margin-bottom: 1em;
`

const Address = styled.p`
  font-size: var(--font-size-nano);

  @media (min-width: ${theme.media.medium}) {
    font-size: var(--font-size-centi);
  }
`
