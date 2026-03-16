import type { Meta, StoryObj } from '@storybook/react-vite'
import { AIVideoCreation } from './ai_video_creation'

const meta = {
  title: 'Components/AIVideoCreation',
  component: AIVideoCreation,
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    onSuggestionClick: (s: { label: string; prompt: string }) => console.log('suggestionClick', s),
    onSend: () => console.log('send'),
    onChange: (v: string) => console.log('change', v),
  },
  args: {
    placeholder: 'Describe your video',
    disabled: false,
    suggestions: [
      { label: 'Sizzle reel', prompt: 'A Sizzle Reel of a design conference' },
      { label: 'Documentary', prompt: 'A Documentary about a design conference' },
      { label: 'Ad', prompt: 'An Ad for a design conference' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AIVideoCreation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomSuggestions: Story = {
  args: {
    suggestions: [
      { label: 'Short film', prompt: 'A Short Film about a road trip across America' },
      { label: 'Tutorial', prompt: 'A Tutorial on how to use Figma' },
      { label: 'Music video', prompt: 'A Music Video for an indie pop song' },
      { label: 'Product demo', prompt: 'A Product Demo for a new mobile app' },
    ],
  },
}

export const NoSuggestions: Story = {
  args: { suggestions: [] },
}

export const Disabled: Story = {
  args: { disabled: true },
}
