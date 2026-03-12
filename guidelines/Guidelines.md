# Astra UI Design System

`@brettmcm/astraui` is a React component library built with Tailwind CSS v4. Components are pre-styled with design tokens and ship with compiled CSS.

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

## Build

- **Bundler:** Vite with `@tailwindcss/vite` plugin
- **Library build:** `npm run build:lib` — outputs ESM (.mjs), CJS (.cjs), and pre-compiled CSS
- **CSS is pre-compiled** — consumers do NOT need Tailwind configured to use this package
