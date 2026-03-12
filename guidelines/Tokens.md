# Astra UI — Design Tokens

All design tokens are CSS custom properties defined in the package's CSS. They support light and dark modes via the `.dark` class on `<html>`.

## Brand Colors

| Token | Light | Dark |
|---|---|---|
| `--brand-primary` | `#5250f3` | `#5250f3` |
| `--brand-hover` | `#4240d4` | `#5d5be8` |
| `--brand-dark` | `#3B3AC3` | `#4f4dd9` |
| `--brand-secondary` | `#d1d0f9` | `#7B7AB8` |
| `--brand-tertiary` | `#eaeaff` | `#161621` |
| `--brand-muted` | `#7b7ab8` | `#9594c8` |

## Status Colors

| Token | Light | Dark |
|---|---|---|
| `--success` | `#47fc74` | `#47fc74` |
| `--warning` | `#f8d33f` | `#f8d33f` |
| `--danger` | `#cf2828` | `#cf2828` |

## Surface Colors

| Token | Light | Dark |
|---|---|---|
| `--surface-bg` | `#ffffff` | `#161621` |
| `--surface-secondary-bg` | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.03)` |
| `--surface-hover` | `#f5f5f7` | `#2a2a3a` |
| `--surface-dark` | `#22222c` | `#1a1a24` |
| `--surface-dark-hover` | `#333341` | `#26263a` |
| `--surface-darkest` | `#1e1e1e` | `#111118` |

## Text Colors

| Token | Light | Dark |
|---|---|---|
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` |
| `--text-secondary` | `rgba(0,0,0,0.5)` | `rgba(255,255,255,0.5)` |
| `--text-tertiary` | `rgba(0,0,0,0.3)` | `rgba(255,255,255,0.3)` |

## Border Colors

| Token | Light | Dark |
|---|---|---|
| `--border-secondary` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.05)` |
| `--border-primary` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |
| `--border-selected` | `rgba(0,0,0,0.8)` | `rgba(0,0,0,0.8)` |

## Background Tints

| Token | Light | Dark |
|---|---|---|
| `--bg-faint` | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.03)` |
| `--bg-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--bg-hover` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` |
| `--on-brand` | `#ffffff` | `#ffffff` |
| `--on-reverse` | `#1e1e1e` | `#1e1e1e` |
| `--input-bg` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.05)` |
| `--modal-scrim` | `rgba(0,0,0,0.75)` | `rgba(0,0,0,0.75)` |

## Spacing

| Token | Value | Tailwind |
|---|---|---|
| `--space-xs` | `4px` | `gap-xs`, `p-xs`, `m-xs` |
| `--space-sm` | `6px` | `gap-sm`, `p-sm`, `m-sm` |
| `--space-md` | `8px` | `gap-md`, `p-md`, `m-md` |
| `--space-lg` | `12px` | `gap-lg`, `p-lg`, `m-lg` |
| `--space-xl` | `16px` | `gap-xl`, `p-xl`, `m-xl` |
| `--space-2xl` | `24px` | `gap-2xl`, `p-2xl`, `m-2xl` |

## Corner Radius

| Token | Value | Tailwind |
|---|---|---|
| `--corner-sm` | `4px` | `rounded-corner-sm` |
| `--corner-md` | `8px` | `rounded-corner-md` |
| `--corner-lg` | `16px` | `rounded-corner-lg` |
| `--corner-full` | `999px` | `rounded-corner-full` |

## Tailwind Theme Mapping

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

## Typography

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
