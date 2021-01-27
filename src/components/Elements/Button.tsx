import styled from "styled-components"

interface ButtonProps {
  readonly primary?: boolean
}

/**
 * A configurable button component with props.
 *
 * @param primary boolean
 */
export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 0;
  background-color: ${({ primary }) => (primary ? "salmon" : "dodgerblue")};
  color: ${({ primary }) => (primary ? "var(--black)" : "#4d4d4d")};
`
