import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectField } from './select_field'

const sampleOptions = [
  { value: '1080p', label: '1080p' },
  { value: '4k', label: '4K' },
  { value: '720p', label: '720p' },
]

const meta = {
  title: 'Components/SelectField',
  component: SelectField,
  argTypes: {
    disabled: { control: 'boolean' },
    state: { control: 'select', options: ['default', 'empty'] },
  },
  args: {
    label: 'Resolution',
    description: 'Choose export resolution',
    options: sampleOptions,
    value: '1080p',
    placeholder: 'Select an option',
    disabled: false,
    onChange: (val: string) => console.log('change', val),
  },
} satisfies Meta<typeof SelectField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Empty: Story = {
  args: { value: '', state: 'empty' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const NoLabel: Story = {
  args: { label: undefined, description: undefined },
}
