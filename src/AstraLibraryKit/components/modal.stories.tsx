import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './modal'
import { Button } from './button'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    isOpen: { control: 'boolean' },
  },
  args: {
    isOpen: true,
    onClose: () => console.log('close'),
    title: 'Confirm Action',
    size: 'medium',
    children: <p className="text-text-secondary">Are you sure you want to proceed? This action cannot be undone.</p>,
    footer: (
      <div className="flex gap-3 justify-end">
        <Button variant="neutral">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    ),
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'small', title: 'Small Modal' },
}

export const Large: Story = {
  args: { size: 'large', title: 'Large Modal' },
}

export const NoFooter: Story = {
  args: { footer: undefined, title: 'Info', children: <p className="text-text-secondary">This is an informational modal.</p> },
}
