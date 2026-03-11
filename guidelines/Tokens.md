# Astra UI — Design Tokens

All design tokens are CSS custom properties defined in the package's CSS. They support light and dark modes via the `.dark` class on `<html>`.

## Brand Colors

| Token | Light | Dark |
|---|---|---|
| `--brand` | `#5250f3` | `#6c6af7` |
| `--brand-hover` | `#4240d4` | `#5d5be8` |
| `--brand-dark` | `#3B3AC3` | `#4f4dd9` |
| `--brand-light` | `#d1d0f9` | `#3d3b6e` |
| `--brand-wash` | `#eaeaff` | `#2a2950` |
| `--brand-muted` | `#7b7ab8` | `#9594c8` |

## Status Colors

| Token | Light | Dark |
|---|---|---|
| `--success` | `#47fc74` | `#34d058` |
| `--warning` | `#f8d33f` | `#e5b830` |
| `--danger` | `#cf2828` | `#e04545` |

## Surface Colors

| Token | Light | Dark |
|---|---|---|
| `--surface` | `#ffffff` | `#22222c` |
| `--surface-hover` | `#f5f5f7` | `#2a2a3a` |
| `--surface-dark` | `#22222c` | `#1a1a24` |
| `--surface-dark-hover` | `#333341` | `#26263a` |
| `--surface-darkest` | `#1e1e1e` | `#111118` |

## Text Colors

| Token | Light | Dark |
|---|---|---|
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.9)` |
| `--text-secondary` | `rgba(0,0,0,0.5)` | `rgba(255,255,255,0.55)` |
| `--text-tertiary` | `rgba(0,0,0,0.3)` | `rgba(255,255,255,0.3)` |

## Border Colors

| Token | Light | Dark |
|---|---|---|
| `--border-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--border-medium` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |

## Background Tints

| Token | Light | Dark |
|---|---|---|
| `--bg-faint` | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.03)` |
| `--bg-subtle` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.06)` |
| `--bg-hover` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` |

## Tailwind Theme Mapping

These CSS variables are mapped to Tailwind classes via `@theme inline`:

```
bg-brand, text-brand, border-brand
bg-brand-hover, bg-brand-dark, bg-brand-light, bg-brand-wash, bg-brand-muted
bg-success, bg-warning, bg-danger
text-text-primary, text-text-secondary, text-text-tertiary
bg-surface, bg-surface-hover, bg-surface-dark, bg-surface-dark-hover, bg-surface-darkest
border-border-subtle, border-border-medium
bg-bg-faint, bg-bg-subtle, bg-bg-hover
```

## Typography

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
