# Astra UI Design System

## Overview

`@brettmcm/astraui` is a React component library built with Tailwind CSS v4. Components are pre-styled with design tokens and ship with compiled CSS.

## Available Exports

Every component and utility exported by `@brettmcm/astraui` is listed below. **Only these names can be imported from the package — do not attempt to import anything else.**

```tsx
// Components
import {
  AstraLogo,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  ChatBubbles,
  Checkbox,
  DurationBadge,
  FavoriteButton,
  InputField,
  ItemCard,
  ItemCardFeatured,
  Modal,
  SecondaryNav,
  SecondaryNavItem,
  PromptInput,
  PromptPane,
  RadioGroup,
  SearchComponent,
  SegmentedControl,
  SelectField,
  SidebarButton,
  SidebarNavigation,
  SwitchField,
  Tabs,
  TextareaField,
  ThemeProvider,
  Toast,
  Toolbar,
  ToolbarItem,
  Tooltip,
  VideoControl,
} from '@brettmcm/astraui'

// Hooks
import { useTheme } from '@brettmcm/astraui'

// Utility
import { cn } from '@brettmcm/astraui'

// Icons — always use lucide-react, NOT @brettmcm/astraui
import { Search, Home, Settings } from 'lucide-react'
```

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
| `--ads-brand-primary` | `#5250f3` | `#5250f3` |
| `--ads-brand-hover` | `#4240d4` | `#5d5be8` |
| `--ads-brand-dark` | `#3B3AC3` | `#4f4dd9` |
| `--ads-brand-secondary` | `#d1d0f9` | `#7B7AB8` |
| `--ads-brand-tertiary` | `#eaeaff` | `#161621` |
| `--ads-brand-muted` | `#7b7ab8` | `#9594c8` |

#### Status Colors
| Token | Light | Dark |
|---|---|---|
| `--ads-success` | `#47fc74` | `#47fc74` |
| `--ads-warning` | `#f8d33f` | `#f8d33f` |
| `--ads-danger` | `#cf2828` | `#cf2828` |

#### Surface Colors
| Token | Light | Dark |
|---|---|---|
| `--ads-surface-bg` | `#ffffff` | `#161621` |
| `--ads-surface-secondary-bg` | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.03)` |
| `--ads-surface-hover` | `#f5f5f7` | `#2a2a3a` |
| `--ads-surface-dark` | `#22222c` | `#1a1a24` |
| `--ads-surface-dark-hover` | `#333341` | `#26263a` |
| `--ads-surface-darkest` | `#1e1e1e` | `#111118` |

#### Text Colors
| Token | Light | Dark |
|---|---|---|
| `--ads-text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` |
| `--ads-text-secondary` | `rgba(0,0,0,0.5)` | `rgba(255,255,255,0.5)` |
| `--ads-text-tertiary` | `rgba(0,0,0,0.3)` | `rgba(255,255,255,0.3)` |

#### Border Colors
| Token | Light | Dark |
|---|---|---|
| `--ads-border-secondary` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.05)` |
| `--ads-border-primary` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |
| `--ads-border-selected` | `rgba(0,0,0,0.8)` | `rgba(0,0,0,0.8)` |

#### Background Tints
| Token | Light | Dark |
|---|---|---|
| `--ads-bg-faint` | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.03)` |
| `--ads-bg-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--ads-bg-hover` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` |
| `--ads-on-brand` | `#ffffff` | `#ffffff` |
| `--ads-on-reverse` | `#1e1e1e` | `#1e1e1e` |
| `--ads-input-bg` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.05)` |
| `--ads-modal-scrim` | `rgba(0,0,0,0.75)` | `rgba(0,0,0,0.75)` |

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

**Font families:**
- `font-display` — `'Instrument Sans', system-ui, sans-serif` (titles)
- `font-sans` — `'Instrument Sans', system-ui, sans-serif` (all other text)

| Class | Size | Weight | Line Height | Extra |
|---|---|---|---|---|
| `text-title` | 24px | 600 (SemiBold) | 1.4 | font-display |
| `text-heading` | 20px | 500 (Medium) | 1.4 | — |
| `text-caption` | 20px | 600 (SemiBold) | 1.4 | uppercase |
| `text-label` | 16px | 500 (Medium) | 1.4 | — |
| `text-label-sm` | 14px | 500 (Medium) | 1.4 | — |
| `text-input` | 16px | 400 (Regular) | 1.4 | — |
| `text-input-sm` | 14px | 500 (Medium) | 1.4 | — |
| `text-video-title` | 12px | 400 (Regular) | normal | — |

**Font weights:** `font-book` (450), `font-medium` (500), `font-semibold` (600)

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

### SecondaryNavItem

```tsx
<SecondaryNavItem
  icon={<Home className="size-full" strokeWidth={1.5} />}
  label="Profile"
  active
/>
```

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | required |
| `label` | `string` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

Also accepts all native `<button>` HTML attributes. Active state uses `brand-tertiary` background with `brand-primary` text. Inactive state shows `text-secondary` with hover to `bg-hover`.

### SecondaryNav

```tsx
<SecondaryNav title="Settings">
  <SecondaryNavItem icon={<Home className="size-full" strokeWidth={1.5} />} label="Profile" active />
  <SecondaryNavItem icon={<Film className="size-full" strokeWidth={1.5} />} label="Billing" />
  <SecondaryNavItem icon={<Book className="size-full" strokeWidth={1.5} />} label="Notifications" />
  <SecondaryNavItem icon={<Folder className="size-full" strokeWidth={1.5} />} label="Media" />
</SecondaryNav>
```

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | required |
| `children` | `ReactNode` | required |
| `className` | `string` | — |

Vertical navigation panel with heading and `SecondaryNavItem` children. Uses `surface-secondary-bg` background with a right `border-primary` border. 252px default width, full height. Used for secondary navigation within settings or detail views.

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
  prefix={<Search size={16} />}
  suffix="USD"
  onChange={(val) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | — |
| `placeholder` | `string` | `'I am a placeholder...'` |
| `label` | `string` | — |
| `description` | `string` | — |
| `prefix` | `ReactNode` | — |
| `suffix` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |
| `onChange` | `(value: string) => void` | — |

Also accepts all native `<input>` HTML attributes (except `onChange` which uses the simplified signature above). `prefix` and `suffix` render inside the input container — use for icons, units, or short labels.

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
  selectedSegment="home"
  onChange={(id) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `segments` | `{ id: string, icon: ReactNode }[]` | required |
| `selectedSegment` | `string` | required |
| `onChange` | `(segmentId: string) => void` | required |

### SidebarButton

```tsx
<SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
```

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

Also accepts all native `<button>` HTML attributes. Default state: 50% opacity icon, no background. Active state: `brand-tertiary` background, 85% opacity icon.

### SidebarNavigation

```tsx
<SidebarNavigation
  footer={<><SidebarButton icon={<Settings />} /><Avatar src="/photo.jpg" size="medium" /></>}
>
  <SidebarButton icon={<Home />} active />
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
  onChange={(val) => {}}
  placeholder="Select an option"
/>
```

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value: string, label: string }[]` | required |
| `value` | `string` | `''` |
| `onChange` | `(value: string) => void` | required |
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

### RadioGroup

```tsx
<RadioGroup
  options={[
    { value: 'opt1', label: 'Option 1', description: 'First option' },
    { value: 'opt2', label: 'Option 2' },
  ]}
  value="opt1"
  onChange={(val) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value: string, label: string, description?: string }[]` | required |
| `value` | `string` | — |
| `defaultValue` | `string` | `''` |
| `onChange` | `(value: string) => void` | — |
| `name` | `string` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |

Supports controlled (`value`) and uncontrolled (`defaultValue`) modes. Each option can have an optional `description` displayed below the label.

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

### ItemCardFeatured

```tsx
<ItemCardFeatured
  variant="overlay"
  title="My Video"
  updated="Edited 2m ago"
  spec="4K"
  duration="0:01:30"
/>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `'overlay' \| 'stacked'` | `'overlay'` |
| `title` | `string` | `'Item Title'` |
| `updated` | `string` | `'Edited 2m ago'` |
| `spec` | `string` | `'4K'` |
| `duration` | `string` | `'0:01:30'` |
| `thumbnail` | `ReactNode` | — |
| `className` | `string` | — |

Featured card with locked aspect ratio (522:291). **Overlay** variant renders title and metadata over the thumbnail with a backdrop blur. **Stacked** variant places info below the thumbnail. Uses `DurationBadge` for duration.

### ThemeProvider

```tsx
import { ThemeProvider, useTheme } from '@brettmcm/astraui'

// Wrap your app root
<ThemeProvider>
  <App />
</ThemeProvider>

// Use the hook in any child component
function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useTheme()
  return <Button onClick={toggleTheme}>{theme}</Button>
}
```

| Export | Type | Description |
|---|---|---|
| `ThemeProvider` | Component | Wrap at app root. Manages `.dark` class on `<html>` and persists to `localStorage`. |
| `useTheme()` | Hook | Returns `{ theme, toggleTheme, setTheme }` |

Reads `localStorage('astra-theme')` on mount, falls back to `prefers-color-scheme`. Must be an ancestor of any component calling `useTheme()`.

## Icons

**Always import icons from `lucide-react`.** Do not import icons from `@brettmcm/astraui`.

```tsx
import { Search, Home, Settings, ChevronDown, Plus, Trash2 } from 'lucide-react'
```

All Lucide icons accept: `size` (default 24), `color` (default `"currentColor"`), `strokeWidth` (default 2), `className`.

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
