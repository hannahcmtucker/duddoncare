import React from 'react'
import styled from '@emotion/styled'

export default function Nav(): JSX.Element {
  return <NavWrapper />
}

// TODO: change div to nav once navigation added
const NavWrapper = styled.div`
  background-color: var(--color-primaryAlt);
  padding: var(--spacing-small);
`
