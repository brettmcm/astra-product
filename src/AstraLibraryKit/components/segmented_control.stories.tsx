import type { Meta, StoryObj } from '@storybook/react-vite'
import { SegmentedControl } from './segmented_control'
import { Home, Film, Music, Image } from 'lucide-react'

const meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  args: {
    segments: [
      { id: 'home', icon: <Home size={18} /> },
      { id: 'video', icon: <Film size={18} /> },
      { id: 'audio', icon: <Music size={18} /> },
      { id: 'image', icon: <Image size={18} /> },
    ],
    selectedSegment: 'home',
    onChange: (id: string) => console.log('change', id),
  },
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoSegments: Story = {
  args: {
    segments: [
      { id: 'home', icon: <Home size={18} /> },
      { id: 'video', icon: <Film size={18} /> },
    ],
    selectedSegment: 'home',
  },
}
