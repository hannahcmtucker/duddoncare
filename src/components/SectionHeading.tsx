import styled from '@emotion/styled'

const SectionHeading = styled.h2<{ isLight?: boolean }>`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: var(--spacing-large);
  margin-top: calc(var(--spacing-large) * 2 + var(--spacing-medium));
  padding-bottom: var(--spacing-normal);

  &::before {
    content: '';
    position: absolute;
    top: calc(-1 * var(--spacing-large));
    display: block;
    width: 40px;
    border-bottom: 2px solid
      ${props => (props.isLight ? 'white' : 'var(--color-text)')};
  }
`

export default SectionHeading
