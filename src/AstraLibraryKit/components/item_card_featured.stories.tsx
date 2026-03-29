import type { Meta, StoryObj } from '@storybook/react-vite'
import { ItemCardFeatured } from './item_card_featured'

const meta = {
  title: 'Components/ItemCard Featured',
  component: ItemCardFeatured,
  args: {
    title: 'My Video Project',
    updated: 'Edited 2m ago',
    spec: '4K',
    duration: '0:01:30',
  },
} satisfies Meta<typeof ItemCardFeatured>

export default meta
type Story = StoryObj<typeof meta>

export const Overlay: Story = {
  args: {
    variant: 'overlay',
  },
}

export const Stacked: Story = {
  args: {
    variant: 'stacked',
  },
}

export const WithThumbnail: Story = {
  args: {
    variant: 'overlay',
    thumbnail: (
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=522&h=291&fit=crop"
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
    ),
  },
}
