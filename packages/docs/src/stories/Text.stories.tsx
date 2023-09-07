import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps, defaultTheme } from '@has-software/ui'

const sizeOptions = Object.keys(defaultTheme.sizes)
const colorOptions = Object.keys(defaultTheme.colors)

export default {
  title: 'Typegraph/Text',
  component: Text,
  args: { size: 'md', color: 'gray-900', children: 'Hello world' },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: sizeOptions,
    },
    color: {
      control: { type: 'select' },
      options: colorOptions,
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const AsParagraph: StoryObj<TextProps> = {
  args: {
    as: 'p',
  },
}
