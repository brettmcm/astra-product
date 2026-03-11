# Astra UI Design System

## Overview

`@brettmcm/astraui` is a React component library built with Tailwind CSS v4. Components are pre-styled with design tokens and ship with compiled CSS.

## Setup

```tsx
// Styles are auto-imported when you import any component.
// No additional CSS import or Tailwind configuration is needed.
import { Button, Avatar, Badge } from '@brettmcm/astraui'
```

If styles aren't loading, explicitly import:
```tsx
import '@brettmcm/astraui/styles.css'
```

**Do NOT add `@source` rules for this package in the consumer's Tailwind config.** The package ships pre-compiled CSS with all required utility classes.

## Token System

### CSS Custom Properties

All design tokens are CSS custom properties defined in the package's CSS. They support light and dark modes via the `.dark` class on `<html>`.

#### Brand Colors
| Token | Light | Dark |
|---|---|---|
| `--brand` | `#5250f3` | `#6c6af7` |
| `--brand-hover` | `#4240d4` | `#5d5be8` |
| `--brand-dark` | `#3B3AC3` | `#4f4dd9` |
| `--brand-light` | `#d1d0f9` | `#3d3b6e` |
| `--brand-wash` | `#eaeaff` | `#2a2950` |
| `--brand-muted` | `#7b7ab8` | `#9594c8` |

#### Status Colors
| Token | Light | Dark |
|---|---|---|
| `--success` | `#47fc74` | `#34d058` |
| `--warning` | `#f8d33f` | `#e5b830` |
| `--danger` | `#cf2828` | `#e04545` |

#### Surface Colors
| Token | Light | Dark |
|---|---|---|
| `--surface-dark` | `#22222c` | `#1a1a24` |
| `--surface-dark-hover` | `#333341` | `#26263a` |
| `--surface-darkest` | `#1e1e1e` | `#111118` |

#### Text Colors
| Token | Light | Dark |
|---|---|---|
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.9)` |
| `--text-secondary` | `rgba(0,0,0,0.5)` | `rgba(255,255,255,0.55)` |
| `--text-tertiary` | `rgba(0,0,0,0.3)` | `rgba(255,255,255,0.3)` |

#### Border Colors
| Token | Light | Dark |
|---|---|---|
| `--border-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--border-medium` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |

#### Background Tints
| Token | Light | Dark |
|---|---|---|
| `--bg-faint` | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.03)` |
| `--bg-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--bg-hover` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` |

### Tailwind Theme Mapping

These CSS variables are mapped to Tailwind classes via `@theme inline`:

```
bg-brand, text-brand, border-brand
bg-brand-hover, bg-brand-dark, bg-brand-light, bg-brand-wash, bg-brand-muted
bg-success, bg-warning, bg-danger
text-text-primary, text-text-secondary, text-text-tertiary
bg-surface-dark, bg-surface-dark-hover, bg-surface-darkest
border-border-subtle, border-border-medium
bg-bg-faint, bg-bg-subtle, bg-bg-hover
```

### Typography

**Font:** `'Instrument Sans', system-ui, sans-serif`

| Class | Size | Line Height |
|---|---|---|
| `text-caption` | 9px | 14px |
| `text-body-xs` | 10px | 14px |
| `text-body-sm` | 12px | 1.2 |
| `text-body-md` | 14px | 1.4 |
| `text-body-lg` | 16px | 1.4 |
| `text-label-md` | 14px | 20px |
| `text-heading-sm` | 13px | 22px |
| `text-heading-md` | 15px | 25px |
| `text-heading-lg` | 24px | 32px |
| `text-heading-display` | 48px | 56px |

**Font weights:** `font-book` (450), `font-medium` (500), `font-semibold` (550)

## Components

All components are imported from `@brettmcm/astraui`.

### Button

```tsx
<Button variant="primary" size="medium" iconStart={<Icon />} iconEnd={<Icon />}>
  Label
</Button>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` |
| `size` | `'medium' \| 'small'` | `'medium'` |
| `iconStart` | `ReactNode` | — |
| `iconEnd` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |

Also accepts all native `<button>` HTML attributes.

### Avatar

```tsx
<Avatar type="image" src="/photo.jpg" size="large" shape="circle" />
<Avatar type="initial" initials="BM" size="medium" shape="square" />
```

| Prop | Type | Default |
|---|---|---|
| `type` | `'initial' \| 'image'` | `'image'` |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` |
| `shape` | `'circle' \| 'square'` | `'circle'` |
| `initials` | `string` | `'F'` |
| `src` | `string` | — |
| `alt` | `string` | `'Avatar'` |

Sizes: small=24px, medium=32px, large=40px.

### AvatarGroup

```tsx
<AvatarGroup
  avatars={[{ src: '/a.jpg' }, { src: '/b.jpg' }, { src: '/c.jpg' }]}
  maxVisible={3}
  spacing="spaced"
  size="md"
/>
```

| Prop | Type | Default |
|---|---|---|
| `avatars` | `{ src: string, alt?: string }[]` | required |
| `maxVisible` | `number` | `3` |
| `spacing` | `'overlap' \| 'spaced'` | `'spaced'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `showOverflow` | `boolean` | `true` |

Sizes: sm=32px, md=40px, lg=48px.

### Badge

```tsx
<Badge label="New" variant="brand" removable onRemove={() => {}} />
```

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | `'Label'` |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'brand' \| 'secondary'` | `'default'` |
| `removable` | `boolean` | `false` |
| `onRemove` | `() => void` | — |

### ChatBubbles

```tsx
<ChatBubbles type="ai" text="Hello, how can I help?" />
<ChatBubbles type="user" text="Generate a video" userAvatar={<Avatar />} />
```

| Prop | Type | Default |
|---|---|---|
| `type` | `'user' \| 'ai'` | `'ai'` |
| `text` | `string` | required |
| `userAvatar` | `ReactNode` | — |

### PromptInput

```tsx
<PromptInput
  placeholder="Describe your video"
  onChange={(val) => {}}
  onSend={() => {}}
  onAttach={() => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | `''` |
| `placeholder` | `string` | `'Describe your video'` |
| `onChange` | `(value: string) => void` | — |
| `onSend` | `() => void` | — |
| `onAttach` | `() => void` | — |
| `disabled` | `boolean` | `false` |

### SearchComponent

```tsx
<SearchComponent placeholder="Search" onChange={(val) => {}} onSearch={(val) => {}} />
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | `''` |
| `placeholder` | `string` | `'Search'` |
| `onChange` | `(value: string) => void` | — |
| `onSearch` | `(value: string) => void` | — |
| `disabled` | `boolean` | `false` |

Features animated placeholder typing through: 'anything', 'clips', 'audio'.

### SegmentedControl

```tsx
<SegmentedControl
  segments={[{ id: 'home', icon: <Home /> }, { id: 'video', icon: <Film /> }]}
  activeSegment="home"
  onSegmentChange={(id) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `segments` | `{ id: string, icon: ReactNode }[]` | required |
| `activeSegment` | `string` | required |
| `onSegmentChange` | `(segmentId: string) => void` | required |

### SelectField

```tsx
<SelectField
  options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]}
  value="1"
  onSelect={(val) => {}}
  placeholder="Select..."
/>
```

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value: string, label: string }[]` | required |
| `value` | `string` | `''` |
| `onSelect` | `(value: string) => void` | required |
| `placeholder` | `string` | `'Select...'` |
| `state` | `'empty' \| 'default'` | `'default'` |
| `disabled` | `boolean` | `false` |

Supports keyboard navigation (arrows, Enter, Escape).

### SwitchField

```tsx
<SwitchField label="Notifications" description="Enable push notifications" defaultSelected={true} />
```

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | `'Label'` |
| `description` | `string` | `'Description'` |
| `hasDescription` | `boolean` | `true` |
| `showLabel` | `boolean` | `true` |
| `defaultSelected` | `boolean` | `true` |
| `onChange` | `(selected: boolean) => void` | — |
| `disabled` | `boolean` | `false` |

### Toast

```tsx
<Toast message="Uploading..." progress={45} variant="default" showCancel onCancel={() => {}} />
```

| Prop | Type | Default |
|---|---|---|
| `message` | `string` | required |
| `progress` | `number` | `0` |
| `variant` | `'default' \| 'success' \| 'error' \| 'warning'` | `'default'` |
| `showCancel` | `boolean` | `true` |
| `onCancel` | `() => void` | — |
| `onDismiss` | `() => void` | — |

Auto-loops a progress animation when `progress <= 0`.

### VideoControl

```tsx
<VideoControl
  currentTime={30}
  totalTime={120}
  progress={25}
  isPlaying={false}
  onPlayPause={() => {}}
  onSeek={(pct) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `currentTime` | `number` | `0` |
| `totalTime` | `number` | `0` |
| `progress` | `number` (0-100) | `0` |
| `isPlaying` | `boolean` | `false` |
| `onPlayPause` | `() => void` | — |
| `onSeek` | `(progress: number) => void` | — |
| `onSettings` | `() => void` | — |
| `onBackward` | `() => void` | — |
| `onForward` | `() => void` | — |

## Icons

SVG icon components are available from the package:

```tsx
import { Button } from '@brettmcm/astraui'
// Icons are used inline within components
```

Available icons: `Play`, `Home`, `Film`, `Book`, `Folder`, `Settings`, `Video`, `Search`, `Scissors`, `Sliders`, `Type`, `Wand2`, `Mic`, `Music`, `Upload`, `X`.

All icons accept: `size` (default 24), `color` (default `"currentColor"`), `strokeWidth` (default 2), `className`.

## Styling Approach

- **Tailwind CSS v4** with `@theme inline` for token mapping
- **`cn()` utility** (exported) merges class names safely using `clsx` + `tailwind-merge`
- Components accept `className` prop for overrides
- Dark mode: add `.dark` class to `<html>` element (or use the `ThemeProvider`)

## Project Structure

```
src/
  index.ts                          # Package entry — exports all components
  styles.css                        # CSS entry — imports globals
  styles/
    globals.css                     # Tailwind v4 config, @theme, light/dark tokens
    figma-tokens.css                # Figma design token definitions
  AstraLibraryKit/
    components/
      avatar.tsx, avatar_group.tsx, badge.tsx, button.tsx,
      chat_bubbles.tsx, icons.tsx, prompt_input.tsx,
      search_component.tsx, segmented_control.tsx,
      select_field.tsx, share_modal.tsx, switch_field.tsx,
      toast.tsx, video_control.tsx, utils.ts
```

## Build

- **Bundler:** Vite with `@tailwindcss/vite` plugin
- **Library build:** `npm run build:lib` — outputs ESM (.mjs), CJS (.cjs), and pre-compiled CSS
- **CSS is pre-compiled** — consumers do NOT need Tailwind configured to use this package
