# Astra UI — Components

All components are imported from `@brettmcm/astraui`.

## AstraLogo

```tsx
<AstraLogo size={32} />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `number` | `32` |
| `className` | `string` | — |

Brand mark rendered as an inline SVG. Uses `var(--brand)` for the background fill so it adapts to light/dark mode.

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
  activeSegment="home"
  onSegmentChange={(id) => {}}
/>
```

| Prop | Type | Default |
|---|---|---|
| `segments` | `{ id: string, icon: ReactNode }[]` | required |
| `activeSegment` | `string` | required |
| `onSegmentChange` | `(segmentId: string) => void` | required |

## SelectField

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
