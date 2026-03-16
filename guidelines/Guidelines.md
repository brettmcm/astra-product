# Astra UI Design System

`@brettmcm/astraui` is a React component library built with Tailwind CSS v4. Components are pre-styled with design tokens and ship with compiled CSS.

## ⚠ Critical Design Rules

Before building any screen, apply these mandatory rules:

1. **Every desktop page MUST include `SidebarNavigation`** — the dark 60px icon rail on the far left. It contains `SidebarButton` icons (Home, Film, Book, Folder) and a footer (Settings + Avatar). It is a **separate component** from `SecondaryNav` — never combine them.
2. **`brand-tertiary` is the page background canvas.** The `<main>` content area MUST use `bg-brand-tertiary`. This subtle lavender (#eaeaff) is what makes every screen feel like Astra. **Never use white or gray as the page background.**
3. **`surface-bg` is for elevated content on top of the canvas.** Forms, cards, panels, and content sections MUST be wrapped in `bg-surface-bg rounded-corner-lg` containers — they float on the branded background to create hierarchy. **Never place form fields directly on the page background.**
4. **Navigation hierarchy: SidebarNavigation → SecondaryNav → Tabs.** These are three separate, side-by-side panels. `SidebarNavigation` (60px dark rail, icon-only) is always present. `SecondaryNav` (~252px, light panel with text labels) is for pages with sub-sections. `Tabs` are tertiary only, inside the main content area.
5. **Keep it minimal and clean.** The branded canvas provides identity. Everything on top should be simple, quiet, and restrained. Do not use dark or saturated brand colors as backgrounds on content areas.
6. **ALL layout elements MUST have explicit spacing using flex + gap tokens.** This is critical to Astra's design. Never let cards, fields, or content elements stack without spacing. The rules:
   - `<main>` padding: **`p-2xl`** (24px)
   - Between section cards: **`flex flex-col gap-xl`** (16px) — every card must have a gap above and below
   - Inside each card: **`flex flex-col gap-lg`** (12px) between fields/elements
   - Side-by-side fields: **`flex gap-xl`** (16px) with `flex-1` children
   - Each logical section (e.g. Profile Photo, Personal Info, Security) gets its **own separate card** — never combine unrelated sections into one card

### Required page structure (every page)

```tsx
<div className="flex h-screen">
  <SidebarNavigation footer={...}>
    <SidebarButton icon={<Home />} />
    ...
  </SidebarNavigation>

  <SecondaryNav title="...">          {/* Optional — only for pages with sub-sections */}
    <SecondaryNavItem icon={...} label="..." />
  </SecondaryNav>

  <main className="flex-1 bg-brand-tertiary p-2xl overflow-y-auto">
    {/* Page header — on canvas, not in a card */}
    <div className="mb-xl">
      <h1 className="text-title text-text-primary">Page Title</h1>
      <p className="text-label-sm text-text-secondary mt-xs">Page description</p>
    </div>

    {/* Cards stack — MUST use flex + gap, each section = separate card */}
    <div className="flex flex-col gap-xl max-w-3xl">

      {/* Card 1 */}
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-label text-text-primary font-semibold mb-lg">Section Title</h2>
        <div className="flex flex-col gap-lg">           {/* Fields MUST have gap-lg */}
          <InputField label="Field" value="..." />
          <div className="flex gap-xl">                   {/* Side-by-side fields */}
            <div className="flex-1"><InputField label="First" /></div>
            <div className="flex-1"><InputField label="Last" /></div>
          </div>
        </div>
      </div>

      {/* Card 2 — separate card for next section */}
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-label text-text-primary font-semibold mb-lg">Another Section</h2>
        <div className="flex flex-col gap-lg">
          <InputField label="Field" value="..." />
        </div>
      </div>

    </div>
  </main>
</div>
```

**Spacing is NOT optional.** If cards or fields are touching with no gap, the layout is wrong. Always use `flex flex-col gap-xl` between cards and `flex flex-col gap-lg` between fields inside cards.

For detailed reference, see:
- **[DesignPrinciples.md](./DesignPrinciples.md)** — Design philosophy, brand surface usage, token pairings, and do/don't patterns
- **[Components.md](./Components.md)** — Component APIs, props, and usage examples
- **[Tokens.md](./Tokens.md)** — Design tokens, typography, theming, and styling architecture

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

## Styling Approach

- **Tailwind CSS v4** with `@theme inline` for token mapping
- **`cn()` utility** (exported) merges class names safely using `clsx` + `tailwind-merge`
- Components accept `className` prop for overrides
- Dark mode: add `.dark` class to `<html>` element (or use the `ThemeProvider`)

## Icons

**Always import icons from `lucide-react`.** Do not import icons from `@brettmcm/astraui`.

```tsx
import { Search, Home, Settings, ChevronDown, Plus, Trash2 } from 'lucide-react'
```

All Lucide icons accept: `size` (default 24), `color` (default `"currentColor"`), `strokeWidth` (default 2), `className`.

## Component API Quick Reference

Common mistakes to avoid when using these components:

### SidebarNavigation
- Pass `SidebarButton` components as **children** — there is NO `navItems` prop.
- Footer items go in the **`footer`** prop — there is NO `bottomNavItems` prop.

### Button
- Valid variants: `'primary' | 'neutral' | 'subtle'` — there is NO `'secondary'` or `'ghost'` variant.
- Icons use `iconStart` and `iconEnd` props — NOT `leftIcon`/`rightIcon`.

### Avatar
- Valid sizes: `'small' | 'medium' | 'large'` — there is NO `'xl'` size.
- Must specify `type`: `'image' | 'initial'`.

### Badge
- Uses `label` prop — NOT children. Example: `<Badge label="Active" variant="success" />`

### Form Fields
- Use `InputField`, `TextareaField`, `SelectField` — NOT raw HTML `<input>`, `<textarea>`, or `<select>`.
- All accept `label` and `description` props for consistent form layout.

## Build

- **Bundler:** Vite with `@tailwindcss/vite` plugin
- **Library build:** `npm run build:lib` — outputs ESM (.mjs), CJS (.cjs), and pre-compiled CSS
- **CSS is pre-compiled** — consumers do NOT need Tailwind configured to use this package
