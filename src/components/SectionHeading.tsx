import styled from '@emotion/styled'

const SectionHeading = styled.h2`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: var(--spacing-large);
  margin-top: calc(var(--spacing-large) + var(--spacing-medium));

  &::before {
    content: '';
    position: absolute;
    top: calc(-1 * var(--spacing-medium));
    display: block;
    width: 50px;
    border-bottom: 3px solid var(--color-text);
  }
`

export default SectionHeading
