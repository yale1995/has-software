import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { ComponentProps, ElementType } from 'react'

export interface HeadingProps extends ComponentProps<'h2'> {
  size: keyof typeof defaultTheme.sizes
  color: keyof typeof defaultTheme.colors
  as?: ElementType
}

export const Heading = styled.span<HeadingProps>`
  color: ${({ color }) => defaultTheme.colors[color]};
  font-size: ${({ size }) => defaultTheme.sizes[size]};
`
