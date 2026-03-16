import type { Meta, StoryObj } from '@storybook/react-vite'
import { X } from 'lucide-react'
import { IconButton } from './icon_button'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'neutral', 'subtle'] },
    size: { control: 'select', options: ['medium', 'small'] },
    disabled: { control: 'boolean' },
  },
  args: {
    icon: <X size={16} />,
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Neutral: Story = {
  args: { variant: 'neutral' },
}

export const Subtle: Story = {
  args: { variant: 'subtle' },
}

export const Small: Story = {
  args: { size: 'small' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconButton icon={<X size={16} />} variant="primary" />
      <IconButton icon={<X size={16} />} variant="neutral" />
      <IconButton icon={<X size={16} />} variant="subtle" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconButton icon={<X size={16} />} size="medium" />
      <IconButton icon={<X size={16} />} size="small" />
    </div>
  ),
}
