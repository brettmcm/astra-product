# Astra UI — Components

All components are imported from `@brettmcm/astraui`.

## ⚠ Layout Rules — Read Before Building Any Screen

Astra's aesthetic is **minimal, clean, and simple**. Brand identity comes from the `brand-tertiary` page canvas — a subtle lavender background that all content sits on.

| Rule | Token / Class | Where |
|---|---|---|
| **`SidebarNavigation`** is ALWAYS present | `surface-dark` | 60px dark icon rail on the far left. Separate component from `SecondaryNav`. |
| **Page background** is ALWAYS `brand-tertiary` | `bg-brand-tertiary` | On `<main>`. Never white or gray. |
| **Page padding** is ALWAYS `p-2xl` | `p-2xl` (24px) | On `<main>`. Content must never touch edges. |
| **Each section = separate `surface-bg` card** | `bg-surface-bg rounded-corner-lg p-xl` | Each logical section (e.g. Profile Photo, Security) gets its own card. Never combine unrelated sections. |
| **Cards MUST have vertical spacing** | `flex flex-col gap-xl` (16px) | On the card stack wrapper. Cards must never touch — always `gap-xl` between them. |
| **Fields inside cards MUST have spacing** | `flex flex-col gap-lg` (12px) | On the field wrapper inside each card. Fields must never touch — always `gap-lg` between them. |
| **Side-by-side fields** | `flex gap-xl` + `flex-1` children | For field pairs like First Name / Last Name. |

**Spacing is critical.** If elements are touching with no gap, the layout is wrong. Always use flexbox with gap tokens — never rely on default margins or stack elements without explicit spacing.

## AstraLogo

```tsx
<AstraLogo size={32} />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `number` | `32` |
| `className` | `string` | — |

Brand mark rendered as an inline SVG. Uses `var(--brand-primary)` for the background fill so it adapts to light/dark mode.

## Button

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

## Avatar

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

## AvatarGroup

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

## Badge

```tsx
<Badge label="New" variant="brand" removable onRemove={() => {}} />
```

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | `'Label'` |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'brand' \| 'secondary'` | `'default'` |
| `removable` | `boolean` | `false` |
| `onRemove` | `() => void` | — |

## ChatBubbles

```tsx
<ChatBubbles type="ai" text="Hello, how can I help?" />
<ChatBubbles type="user" text="Generate a video" userAvatar={<Avatar />} />
```

| Prop | Type | Default |
|---|---|---|
| `type` | `'user' \| 'ai'` | `'ai'` |
| `text` | `string` | required |
| `userAvatar` | `ReactNode` | — |

## SecondaryNavItem

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

## SecondaryNav

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

**Layout rule:** `SecondaryNav` is the standard **secondary navigation** for pages with sub-sections. It sits between `SidebarNavigation` and the main content area. The standard layout is: `SidebarNavigation (60px)` → `SecondaryNav (~252px)` → `Main content (flex, bg-brand-tertiary)`. Use this pattern for settings, account pages, and any page with multiple sub-sections.

## PromptInput

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

## InputField

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

## PromptPane

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

Chat sidebar container. Pass `ChatBubbles` as children for the scrollable message area. The `PromptInput` is built in at the bottom. Prompt input props (`value`, `placeholder`, `onChange`, `onSend`, `onAttach`, `disabled`) are forwarded through.

**Layout rule:** PromptPane sits on the `brand-tertiary` page canvas like all other content. It naturally inherits the branded background — no additional wrapper needed.

## SearchComponent

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

## SegmentedControl

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

## SidebarButton

```tsx
<SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
```

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

Also accepts all native `<button>` HTML attributes. Icon button for vertical navigation rails. Default state shows the icon at 50% opacity; active state adds a `brand-tertiary` background and raises opacity to 85%.

## SidebarNavigation

```tsx
<SidebarNavigation
  footer={
    <>
      <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
      <Avatar type="image" src="/user.jpg" size="medium" shape="circle" />
    </>
  }
>
  <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
  <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
  <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
  <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
</SidebarNavigation>
```

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | — |
| `footer` | `ReactNode` | — |
| `className` | `string` | — |

Vertical navigation rail. AstraLogo is built in at the top. Dark surface background, 60px wide, full height.

**Layout rule:** Every desktop page MUST include `SidebarNavigation`. No exceptions — settings pages, empty states, dashboards, editors, and error pages all include the sidebar. It is the persistent application shell.

**Standard nav items — always use this exact configuration:**
- **Primary (top):** Home, Film, Book, Folder — all four, in this order. Set `active` on the current page's icon.
- **Footer (bottom):** Settings icon + user Avatar — always both present.

## SelectField

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

## TextareaField

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

## SwitchField

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

## Toast

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

## VideoControl

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

## ButtonGroup

```tsx
<ButtonGroup align="justify">
  <Button variant="neutral">Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | required |
| `align` | `'justify' \| 'start' \| 'end' \| 'center' \| 'stack'` | `'justify'` |
| `className` | `string` | — |

Layout container for grouping Button components. Five alignment modes: `justify` (full-width, space-between with equal flex), `start`, `end`, `center` (horizontal), and `stack` (vertical with full-width buttons).

## Checkbox

```tsx
<Checkbox label="Accept terms" description="You agree to our terms of service" defaultChecked />
```

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `description` | `string` | — |
| `defaultChecked` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |

Selection control with optional label and description. 20px checkbox with `brand-primary` fill and animated checkmark when checked. Uses `role="checkbox"` and `aria-checked` for accessibility.

## DurationBadge

```tsx
<DurationBadge duration="0:01:30" />
```

| Prop | Type | Default |
|---|---|---|
| `duration` | `string` | required |
| `className` | `string` | — |

Compact timecode label with `input-bg` background, 8px horizontal padding, 6px vertical padding, 8px border radius. Text uses `text-input-sm` (14px medium) in white (`--on-brand`). Designed to overlay video thumbnails or sit inline with metadata.

## FavoriteButton

```tsx
<FavoriteButton defaultFavorited={false} onChange={(fav) => {}} />
```

| Prop | Type | Default |
|---|---|---|
| `defaultFavorited` | `boolean` | `false` |
| `onChange` | `(favorited: boolean) => void` | — |
| `className` | `string` | — |

24px circular toggle button. Uses `surface-bg` background (adapts to dark mode), stroked `Star` icon when inactive, filled `brand-primary` star when favorited. Also accepts all native `<button>` HTML attributes.

## ItemCard

```tsx
<ItemCard
  title="Mountain biking"
  updated="Edited 2m ago"
  spec="4K"
  duration="0:01:30"
  thumbnail={<img src="/thumb.jpg" className="size-full object-cover" />}
/>
```

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | `'Item Title'` |
| `updated` | `string` | `'Edited 2m ago'` |
| `spec` | `string` | `'4K'` |
| `duration` | `string` | `'0:01:30'` |
| `thumbnail` | `ReactNode` | — |
| `className` | `string` | — |

Content card with 305px default width, 8px border radius, `surface-bg` background, `border-primary` border. Media area at 316:177 aspect ratio displays a gradient or custom `thumbnail` with a `DurationBadge` absolutely positioned in the bottom-right (12px inset). Description area shows title (`text-label`) and metadata row (`text-video-title`) with a 3px dot separator. Fully dark-mode compatible via semantic tokens.

## Modal

```tsx
<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Export settings"
  size="medium"
  footer={
    <>
      <Button variant="neutral">Cancel</Button>
      <Button variant="primary">Export</Button>
    </>
  }
>
  <p>Modal content here</p>
</Modal>
```

| Prop | Type | Default |
|---|---|---|
| `isOpen` | `boolean` | required |
| `onClose` | `() => void` | required |
| `title` | `string` | — |
| `children` | `ReactNode` | required |
| `footer` | `ReactNode` | — |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `className` | `string` | — |

Dialog overlay with `modal-scrim` backdrop, title bar with close button, scrollable content area, and optional footer. Closes on Escape key and backdrop click. Locks body scroll while open. Sizes: small=360px, medium=480px, large=640px. Uses `role="dialog"` and `aria-modal` for accessibility.

## RadioGroup

```tsx
<RadioGroup
  options={[
    { value: '720', label: '720p', description: 'Standard definition' },
    { value: '1080', label: '1080p', description: 'Full HD' },
  ]}
  defaultValue="1080"
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

Single-select group with label and optional description per option. Supports controlled (`value`) and uncontrolled (`defaultValue`) modes. 20px radio circles with `brand-primary` fill dot when selected. Uses `role="radiogroup"` and `role="radio"` with `aria-checked`.

## Tabs

```tsx
<Tabs
  tabs={[
    { id: 'details', label: 'Details', content: <DetailsPanel /> },
    { id: 'export', label: 'Export', content: <ExportPanel /> },
  ]}
  defaultTab="details"
  onChange={(tabId) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `tabs` | `{ id: string, label: string, content: ReactNode }[]` | required |
| `defaultTab` | `string` | first tab |
| `onChange` | `(tabId: string) => void` | — |
| `className` | `string` | — |

Horizontal tab bar with `brand-primary` underline indicator and panel switching. Active tab uses `text-brand-primary`, inactive uses `text-text-secondary` with hover to `text-text-primary`. Uses `role="tablist"`, `role="tab"` with `aria-selected`, and `role="tabpanel"` for accessibility.

**Layout rule:** Tabs are **tertiary navigation only** — used inside the main content area to switch views or filter content within a single section. Do NOT use Tabs for primary navigation (use `SidebarNavigation`) or secondary navigation (use `SecondaryNav`). If a page has sub-sections like Settings, those are `SecondaryNavItem`s in a `SecondaryNav`, not Tabs.

## Toolbar

```tsx
<Toolbar>
  <ToolbarItem icon={<MousePointer size={24} />} selected />
  <ToolbarItem icon={<Search size={24} />} />
  <ToolbarItem icon={<Scissors size={24} />} />
</Toolbar>
```

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | required |
| `className` | `string` | — |

Floating toolbar container. 48px height, 16px border radius, `surface-bg` background, `border-primary` border, elevated shadow (`0px 0px 12.1px 0px rgba(0,0,0,0.1)`). 8px gap and 8px horizontal padding. Composes `ToolbarItem` children.

## ToolbarItem

```tsx
<ToolbarItem icon={<MousePointer size={24} strokeWidth={2} />} selected />
```

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | required |
| `selected` | `boolean` | `false` |
| `className` | `string` | — |

32px icon button with 8px border radius. Default state: 50% opacity icon, no background. Selected state: `brand-secondary` background, 85% opacity icon. Also accepts all native `<button>` HTML attributes.

## ThemeProvider

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

## Tooltip

```tsx
<Tooltip content="Save changes" position="top">
  <Button variant="primary">Save</Button>
</Tooltip>
```

| Prop | Type | Default |
|---|---|---|
| `content` | `string` | required |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| `delay` | `number` (ms) | `200` |
| `children` | `ReactNode` | required |
| `className` | `string` | — |

Contextual hint shown on hover or focus. Uses `surface-dark` background with white text (`--on-brand`) and a 4px CSS border-arrow. Configurable show delay. Wraps the trigger element inline.
