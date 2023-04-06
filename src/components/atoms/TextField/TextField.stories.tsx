import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextField from './TextField'

export default {
  title: 'atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const DefaultTextField = Template.bind({})
DefaultTextField.args = {
  children: 'label',
  placeholder: 'placeholder'
}
