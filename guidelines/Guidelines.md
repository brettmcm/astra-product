# Astra UI Design System

## Overview

`@brettmcm/astraui` is a React component library built with Tailwind CSS v4. Components are pre-styled with design tokens and ship with compiled CSS.

For detailed reference, see:
- **[DesignPrinciples.md](./DesignPrinciples.md)** — Design philosophy, token usage guidelines, and do/don't patterns
- **[Components.md](./Components.md)** — Component APIs, props, and usage examples
- **[Tokens.md](./Tokens.md)** — Design tokens, typography, theming, and styling architecture

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

The package ships a small set of built-in icons. For any icon not in this set, **use `lucide-react` as the fallback**. The built-in icons follow the same props interface as Lucide, so they are drop-in compatible.

```tsx
// Built-in icons — import from the package
import { Search, Home, Settings } from '@brettmcm/astraui'

// Any other icon — import from lucide-react
import { ChevronDown, Plus, Trash2 } from 'lucide-react'
```

**Built-in icons:** `Play`, `Home`, `Film`, `Book`, `Folder`, `Settings`, `Video`, `Search`, `Scissors`, `Sliders`, `Type`, `Wand2`, `Mic`, `Music`, `Upload`, `X`, `MousePointer`, `Crop`, `MessageCircle`, `Star`.

All icons (both built-in and Lucide) accept: `size` (default 24), `color` (default `"currentColor"`), `strokeWidth` (default 2), `className`. The built-in `Star` icon also accepts `fill` (default `"none"`).

**Rule:** Do NOT import from `lucide-react` if the icon exists in `@brettmcm/astraui`. Always check the built-in list first.

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
      button_group.tsx, chat_bubbles.tsx, checkbox.tsx,
      duration_badge.tsx, favorite_button.tsx, icons.tsx,
      input_field.tsx, item_card.tsx, modal.tsx, prompt_input.tsx,
      prompt_pane.tsx, radio.tsx, search_component.tsx,
      segmented_control.tsx, select_field.tsx, share_modal.tsx,
      sidebar_button.tsx, sidebar_navigation.tsx, switch_field.tsx,
      tabs.tsx, textarea_field.tsx, toast.tsx, toolbar.tsx,
      toolbar_item.tsx, tooltip.tsx, video_control.tsx, utils.ts
```

## Build

- **Bundler:** Vite with `@tailwindcss/vite` plugin
- **Library build:** `npm run build:lib` — outputs ESM (.mjs), CJS (.cjs), and pre-compiled CSS
- **CSS is pre-compiled** — consumers do NOT need Tailwind configured to use this package
