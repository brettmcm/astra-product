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
| `--brand-primary` | `#5250f3` | `#5250f3` |
| `--brand-hover` | `#4240d4` | `#5d5be8` |
| `--brand-dark` | `#3B3AC3` | `#4f4dd9` |
| `--brand-secondary` | `#d1d0f9` | `#7B7AB8` |
| `--brand-tertiary` | `#eaeaff` | `#161621` |
| `--brand-muted` | `#7b7ab8` | `#9594c8` |

#### Status Colors
| Token | Light | Dark |
|---|---|---|
| `--success` | `#47fc74` | `#47fc74` |
| `--warning` | `#f8d33f` | `#f8d33f` |
| `--danger` | `#cf2828` | `#cf2828` |

#### Surface Colors
| Token | Light | Dark |
|---|---|---|
| `--surface-bg` | `#ffffff` | `#161621` |
| `--surface-secondary-bg` | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.03)` |
| `--surface-hover` | `#f5f5f7` | `#2a2a3a` |
| `--surface-dark` | `#22222c` | `#1a1a24` |
| `--surface-dark-hover` | `#333341` | `#26263a` |
| `--surface-darkest` | `#1e1e1e` | `#111118` |

#### Text Colors
| Token | Light | Dark |
|---|---|---|
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` |
| `--text-secondary` | `rgba(0,0,0,0.5)` | `rgba(255,255,255,0.5)` |
| `--text-tertiary` | `rgba(0,0,0,0.3)` | `rgba(255,255,255,0.3)` |

#### Border Colors
| Token | Light | Dark |
|---|---|---|
| `--border-secondary` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.05)` |
| `--border-primary` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |
| `--border-selected` | `rgba(0,0,0,0.8)` | `rgba(0,0,0,0.8)` |

#### Background Tints
| Token | Light | Dark |
|---|---|---|
| `--bg-faint` | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.03)` |
| `--bg-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--bg-hover` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` |
| `--on-brand` | `#ffffff` | `#ffffff` |
| `--on-reverse` | `#1e1e1e` | `#1e1e1e` |
| `--input-bg` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.05)` |
| `--modal-scrim` | `rgba(0,0,0,0.75)` | `rgba(0,0,0,0.75)` |

### Tailwind Theme Mapping

These CSS variables are mapped to Tailwind classes via `@theme inline`:

```
bg-brand-primary, text-brand-primary, border-brand-primary
bg-brand-hover, bg-brand-dark, bg-brand-secondary, bg-brand-tertiary, bg-brand-muted
bg-success, bg-warning, bg-danger
text-text-primary, text-text-secondary, text-text-tertiary
bg-surface-bg, bg-surface-secondary-bg, bg-surface-hover, bg-surface-dark, bg-surface-dark-hover, bg-surface-darkest
border-border-secondary, border-border-primary, border-border-selected
bg-bg-faint, bg-bg-subtle, bg-bg-hover
text-on-brand, text-on-reverse
bg-input-bg
bg-modal-scrim
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

### AstraLogo

```tsx
<AstraLogo size={32} />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `number` | `32` |
| `className` | `string` | — |

Brand mark rendered as an inline SVG. Uses `var(--brand-primary)` for the background fill so it adapts to light/dark mode.

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

### InputField

```tsx
<InputField
  label="Label"
  description="Description"
  value="Value"
  placeholder="I am a placeholder..."
  onChange={(val) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | — |
| `placeholder` | `string` | `'I am a placeholder...'` |
| `label` | `string` | — |
| `description` | `string` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |
| `onChange` | `(value: string) => void` | — |

Also accepts all native `<input>` HTML attributes (except `onChange` which uses the simplified signature above).

### PromptPane

```tsx
<PromptPane
  value={inputValue}
  onChange={setInputValue}
  onSend={handleSend}
  onAttach={handleAttach}
>
  <ChatBubbles type="ai" text="How can I help?" />
  <ChatBubbles type="user" text="Can you trim the first 5 seconds?" />
</PromptPane>
```

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | — |
| `value` | `string` | — |
| `placeholder` | `string` | — |
| `onChange` | `(value: string) => void` | — |
| `onSend` | `() => void` | — |
| `onAttach` | `() => void` | — |
| `disabled` | `boolean` | — |
| `className` | `string` | — |

Chat sidebar container. Pass `ChatBubbles` as children for the scrollable message area. The `PromptInput` is built in at the bottom. Prompt input props are forwarded through.

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

### SidebarButton

```tsx
<SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} selected />
```

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | required |
| `selected` | `boolean` | `false` |
| `className` | `string` | — |

Also accepts all native `<button>` HTML attributes. Default state: 50% opacity icon, no background. Selected state: `brand-tertiary` background, 85% opacity icon.

### SidebarNavigation

```tsx
<SidebarNavigation
  footer={<><SidebarButton icon={<Settings />} /><Avatar src="/photo.jpg" size="medium" /></>}
>
  <SidebarButton icon={<Home />} selected />
  <SidebarButton icon={<Film />} />
</SidebarNavigation>
```

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | — |
| `footer` | `ReactNode` | — |
| `className` | `string` | — |

Vertical navigation rail. AstraLogo built in at top. Pass `SidebarButton` children for nav items, `footer` for settings/avatar pinned to bottom. Dark surface, 60px wide, full height.

### SelectField

```tsx
<SelectField
  label="Label"
  description="Description"
  options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]}
  value="1"
  onSelect={(val) => {}}
  placeholder="Select an option"
/>
```

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value: string, label: string }[]` | required |
| `value` | `string` | `''` |
| `onSelect` | `(value: string) => void` | required |
| `placeholder` | `string` | `'Select an option'` |
| `label` | `string` | — |
| `description` | `string` | — |
| `state` | `'empty' \| 'default'` | `'default'` |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |

Supports keyboard navigation (arrows, Enter, Escape).

### TextareaField

```tsx
<TextareaField
  label="Label"
  description="Description"
  value="Value"
  placeholder="Your text goes here..."
  onChange={(val) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | — |
| `placeholder` | `string` | `'Your text goes here...'` |
| `label` | `string` | — |
| `description` | `string` | — |
| `rows` | `number` | `3` |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |
| `onChange` | `(value: string) => void` | — |

Also accepts all native `<textarea>` HTML attributes (except `onChange` which uses the simplified signature above). Supports vertical resize by default (disabled when `disabled`).

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
