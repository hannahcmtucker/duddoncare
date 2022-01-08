import React from 'react'
import styled from '@emotion/styled'
import SectionHeading from './SectionHeading'
import Link from './Link'
import _PhoneNumber from './PhoneNumber'
import theme from '../theme'
import {
  contactHeading,
  contactSubText,
  contactEmail,
  contactAddress,
} from '../copy'
import { people } from '../constants'

export default function Contact() {
  return (
    <ContactWrapper>
      <TextWrapper>
        <SectionHeading isLight>{contactHeading}</SectionHeading>
        <p>{contactSubText}</p>
        <Spacer>
          {people.map(person => (
            <p key={person}>
              <PhoneNumber person={person} inverse /> - {person}
            </p>
          ))}
        </Spacer>
        <Spacer>
          <Email href={`mailto:${contactEmail}`} inverse>
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
const PhoneNumber = styled(_PhoneNumber)`
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
