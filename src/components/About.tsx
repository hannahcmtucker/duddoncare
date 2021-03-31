import React from 'react'
import styled from '@emotion/styled'
import SectionHeading from './SectionHeading'
import {
  aboutHeading,
  aboutParagraph1,
  aboutParagraph2,
  aboutParagraph3,
  aboutParagraph4,
  aboutQualifications1,
  aboutQualifications2,
  aboutQualifications3,
  aboutQualifications4,
  aboutQualifications5,
} from '../copy'

export default function About(): JSX.Element {
  return (
    <AboutWrapper>
      <TextWrapper>
        <SectionHeading>{aboutHeading}</SectionHeading>
        <AboutParagraph>{aboutParagraph1}</AboutParagraph>
        <AboutParagraph>{aboutParagraph2}</AboutParagraph>
        <AboutParagraph>{aboutParagraph3}</AboutParagraph>
        <AboutParagraph>{aboutParagraph4}</AboutParagraph>
        <ul>
          <ListItem>{aboutQualifications1}</ListItem>
          <ListItem>{aboutQualifications2}</ListItem>
          <ListItem>{aboutQualifications3}</ListItem>
          <ListItem>{aboutQualifications4}</ListItem>
          <ListItem>{aboutQualifications5}</ListItem>
        </ul>
      </TextWrapper>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--gutter);
`

const TextWrapper = styled.div`
  width: 65ch;
`

const AboutParagraph = styled.p`
  margin-bottom: 1.5em;
`

const ListItem = styled.li`
  margin-bottom: 0.5em;
`
