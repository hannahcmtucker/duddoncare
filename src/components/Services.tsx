import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import SectionHeading from './SectionHeading'
import theme from '../theme'
import {
  servicesHeading,
  service1,
  service2,
  service3,
  service4,
} from '../copy'

export default function Services() {
  return (
    <Wrapper>
      <StaticImage
        src="../images/susieandemma.jpg"
        style={imageStyles}
        layout="fullWidth"
        alt=""
        objectPosition="center top"
      />
      <Overlay />
      <TextGridArea>
        <TextWrapper>
          <SectionHeading isLight>{servicesHeading}</SectionHeading>
          <List>
            <ListItem>{service1}</ListItem>
            <ListItem>{service2}</ListItem>
            <ListItem>{service3}</ListItem>
            <ListItem>{service4}</ListItem>
          </List>
        </TextWrapper>
      </TextGridArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
`

const imageStyles = {
  gridArea: '1/1',
  height: '100%',
  maxHeight: 500,
}

const Overlay = styled.div`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  opacity: 80%;
`

const TextGridArea = styled.div`
  grid-area: 1/1;
  position: relative;
  margin: var(--gutter);
`

const TextWrapper = styled.div`
  max-width: var(--line-length);
  margin: 0 auto;
  color: white;
`

const List = styled.ul`
  padding: 0;
  list-style: none;

  @media (min-width: ${theme.media.medium}) {
    columns: 2;
  }
`

const ListItem = styled.li`
  font-size: var(--font-size-deci);
  margin-bottom: 1em;

  @media (min-width: ${theme.media.large}) {
    font-size: var(--font-size-kilo);
  }
`
