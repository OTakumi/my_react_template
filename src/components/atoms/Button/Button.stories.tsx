import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {}

export const TextButton = Template.bind({})
TextButton.args = {
  type: 'button',
  variant: 'text',
  primary: true,
  children: 'TEXT',
  disabled: false
}

export const ContaiedButton = Template.bind({})
ContaiedButton.args = {
  type: 'button',
  variant: 'contained',
  primary: true,
  children: 'CONTAINED',
  disabled: false
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  type: 'button',
  variant: 'outline',
  primary: true,
  children: 'OUTLINE',
  disabled: false
}
