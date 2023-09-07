import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { ComponentProps, ElementType } from 'react'

export interface TextProps extends ComponentProps<'span'> {
  size: keyof typeof defaultTheme.sizes
  color: keyof typeof defaultTheme.colors
  as?: ElementType
}

export const Text = styled.span<TextProps>`
  color: ${({ color }) => defaultTheme.colors[color]};
  font-size: ${({ size }) => defaultTheme.sizes[size]};
`
