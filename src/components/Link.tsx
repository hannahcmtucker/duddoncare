import * as React from 'react'
import styled from '@emotion/styled'

interface LinkProps {
  inverse?: boolean
  href: string
  children: React.ReactElement | string
  className?: string
}

const Link: React.FC<LinkProps> = ({ inverse = false, children, ...rest }) => {
  return (
    <StyledLink inverse={inverse} {...rest}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a<{ inverse: boolean }>`
  display: inline-block;
  color: ${props => (props.inverse ? 'white' : 'var(--color-primaryAlt)')};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => (props.inverse ? 'white' : 'var(--color-text)')};
    text-decoration: underline;
  }
`

export default Link
