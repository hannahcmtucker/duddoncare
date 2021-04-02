import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import SectionHeading from './SectionHeading'
import theme from '../theme'
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
  emma,
  susie,
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
        <ProfileImages />
      </TextWrapper>
    </AboutWrapper>
  )
}

const ProfileImages: React.FC = () => {
  return (
    <ProfileImagesWrapper>
      <ImageWrapper>
        <StaticImage
          src="../images/emma.jpg"
          style={wrapperStyles}
          imgStyle={imageStyles}
          alt={emma}
          placeholder="blurred"
        />
        <p>{emma}</p>
      </ImageWrapper>
      <ImageWrapper>
        <StaticImage
          src="../images/susie.jpg"
          style={wrapperStyles}
          imgStyle={imageStyles}
          alt={susie}
          placeholder="blurred"
        />
        <p>{susie}</p>
      </ImageWrapper>
    </ProfileImagesWrapper>
  )
}

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--gutter);
`

const TextWrapper = styled.div`
  width: var(--line-length);
`

const AboutParagraph = styled.p`
  margin-bottom: 1.5em;
`

const ListItem = styled.li`
  margin-bottom: 0.5em;
`

const ProfileImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: var(--line-length);
  margin-top: var(--spacing-xLarge);

  @media (min-width: ${theme.media.regular}) {
    flex-direction: row;
  }

  @media (min-width: ${theme.media.large}) {
    justify-content: space-between;
    padding: 0 100px;
  }
`

const ImageWrapper = styled.div`
  text-align: center;

  @media (min-width: ${theme.media.regular}) {
    & + & {
      margin-left: 20px;
    }
  }
`

const wrapperStyles = {
  margin: '16px',
  width: '150px',
  height: '200px',
}

const imageStyles = {
  borderRadius: '50%',
}
