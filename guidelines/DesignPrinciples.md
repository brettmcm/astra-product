# Astra UI — Design Principles & Token Usage

These guidelines define how to apply Astra tokens to produce layouts and interfaces that feel on-brand. They complement the token reference in [Tokens.md](./Tokens.md) and the component API in [Components.md](./Components.md).

## Core Philosophy

**Clean, minimal, progressive.** Every decision should reduce visual noise. Prefer fewer elements, subtler treatments, and showing complexity only when the user asks for it.

---

## 1. Surface Color Defines Layout — Not Borders

The primary tool for creating visual hierarchy and separating regions is **surface color**, not borders or dividers.

### Do

- Use `surface-dark` for persistent navigation (sidebar rail).
- Use `surface-secondary-bg` or `brand-tertiary` for secondary panes (chat sidebar, inspector panels).
- Use `surface-bg` for the primary content area.
- Let adjacent surfaces with different fills create implicit separation.

### Don't

- Don't wrap layout regions in bordered cards. If two areas need visual separation, give them different surface fills.
- Don't use `border-primary` between major layout columns — the surface color change is enough.
- Don't add background fills to regions that are already distinguished by their position and content.

### Surface Hierarchy (back to front)

```
surface-dark          → persistent chrome (sidebar nav)
surface-secondary-bg  → secondary panes (chat, inspectors)
  or brand-tertiary
surface-bg            → primary workspace
bg-faint              → recessed areas within the workspace (e.g. empty track regions)
bg-subtle             → subtle grouping within a surface (e.g. metadata rows, input backgrounds)
surface-hover         → hover state for interactive surface regions
```

---

## 2. Borders Are for Interactive Elements

Borders should communicate interactivity or containment within a component — never layout structure.

### Where borders belong

- **Buttons** (`border-primary` on `neutral` variant)
- **Inputs, selects, textareas** (`border-primary` on focus/default)
- **Cards that are interactive units** (e.g. `ItemCard` — a clickable card is a component, not a layout region)
- **Floating overlays** (toolbar, modals, dropdowns — `border-primary` + shadow to lift off surface)

### Where borders don't belong

- Between sidebar and content area (surface color difference handles this)
- Around static content groups or sections
- As horizontal dividers between list items (use spacing or `bg-faint` instead)

---

## 3. Left-Column Navigation Is the Default

All full-page layouts use a **60px left navigation rail** (`SidebarNavigation`). This is the primary navigation pattern.

- The sidebar is always `surface-dark` — it anchors the interface.
- Icon-only navigation with `SidebarButton` components.
- `AstraLogo` at top, settings and avatar pinned to footer.
- Secondary panes (chat, inspectors) sit between the sidebar and the main workspace.

### Layout structure (left to right)

```
[ Sidebar 60px ] [ Secondary pane (optional, 300-400px) ] [ Main workspace (flex) ]
  surface-dark       surface-secondary-bg / brand-tertiary       surface-bg
```

---

## 4. Brand Color Is an Accent — Never a Fill

`brand-primary` (#5250f3) is used to draw attention to the single most important interactive element or active state on screen. It should never be used as a large area fill.

### Correct uses of brand-primary

- **Primary action buttons** (CTA in a modal footer, "Share" button)
- **Active/selected states** (selected toolbar item background uses `brand-secondary`, active tab underline uses `brand-primary`)
- **Progress indicators** (playhead, seek bar fill, progress bars)
- **AI/system identity** (chat bubble background for AI messages uses `brand-secondary`)

### Correct uses of brand-secondary / brand-tertiary

- `brand-secondary` (`#d1d0f9`) — selected state backgrounds (toolbar item, sidebar button), AI chat bubbles, track control icons
- `brand-tertiary` (`#eaeaff`) — secondary pane fills, very subtle wash for selected sidebar items

### Don't

- Don't fill entire sections, headers, or backgrounds with `brand-primary`.
- Don't use brand colors for text unless it's a link or active tab label.
- Don't combine `brand-primary` background with `brand-secondary` text — use `on-brand` (white) on brand fills.

---

## 5. Text Color Hierarchy

Use the three-tier text opacity system consistently:

| Token | Use for |
|---|---|
| `text-primary` | Titles, labels, body text, input values — anything the user must read |
| `text-secondary` | Descriptions, helper text, timestamps, breadcrumb separators, secondary metadata |
| `text-tertiary` | Placeholders, disabled labels, decorative text, very low-priority annotations |

### Rules

- A screen should be majority `text-primary` and `text-secondary`. `text-tertiary` appears rarely.
- Don't use raw colors — always use the semantic token so dark mode works.
- On `surface-dark` or `brand-primary` backgrounds, use `on-brand` (white) instead of the text-* tokens.
- Metadata rows (like "Edited 2m ago · 4K") use `text-primary` at the smallest type size (`text-video-title`), not `text-secondary` at a larger size. Reduce importance through scale, not opacity, when both are options.

---

## 6. Progressive Disclosure

Show only what's needed at rest. Reveal complexity through interaction.

### Patterns

- **Collapsed by default** — Track details (EQ, compressor) are hidden until a track is selected/expanded.
- **Floating toolbars** — The timeline toolbar appears contextually in the workspace, not as a permanent menu bar.
- **Modals for focused tasks** — Export settings, sharing, and confirmations use `Modal` to isolate a task from the workspace.
- **Tooltips for icon-only elements** — Use `Tooltip` to label icon buttons rather than adding persistent text labels.

### Rules

- If a control is only used occasionally, it should be hidden behind an expand, hover, or click.
- Avoid showing more than one level of settings at once — nest behind tabs or expandable sections.
- Prefer inline progressive disclosure (expand-in-place) over navigation to a new page.

---

## 7. Spacing & Density

Astra uses a compact-but-breathable density. The intent is professional — not cramped, not airy. **Always use spacing tokens instead of raw pixel values.**

### Spacing Tokens

| Token | Value | Tailwind | Use for |
|---|---|---|---|
| `--space-xs` | 4px | `gap-xs`, `p-xs` | Between related metadata items, tight inline gaps |
| `--space-sm` | 6px | `gap-sm`, `p-sm` | Small vertical gaps (e.g. metadata row items, badge padding-y) |
| `--space-md` | 8px | `gap-md`, `p-md` | Default gap within components, nav item spacing, toolbar gaps |
| `--space-lg` | 12px | `gap-lg`, `p-lg` | Component internal padding (cards, panes), between related groups |
| `--space-xl` | 16px | `gap-xl`, `p-xl` | Page-level side padding, pane padding, between sections |
| `--space-2xl` | 24px | `gap-2xl`, `p-2xl` | Page-level top/bottom padding, major section separation |

### When to use which

- **Page-level padding:** `space-xl` (16px) to `space-2xl` (24px)
- **Between major sections:** `space-lg` (12px) to `space-xl` (16px)
- **Within components:** `space-md` (8px) to `space-lg` (12px) gaps
- **Between related metadata items:** `space-xs` (4px) to `space-sm` (6px)

### Corner Radius Tokens

| Token | Value | Use for |
|---|---|---|
| `--corner-sm` | 4px | Small elements (dot separators, mini badges) |
| `--corner-md` | 8px | Layout containers, cards, inputs, badges, toolbar items |
| `--corner-lg` | 16px | Floating overlays (toolbar, modal, large cards) |
| `--corner-full` | 999px | Buttons (pill shape), avatars, toggles |

---

## 8. Dark Mode

All token-based colors flip automatically via the `.dark` class. When building new UI:

- **Always use semantic tokens** — never hardcode hex values for colors that should adapt.
- **Test both modes** — some components (like `FavoriteButton`, `DurationBadge`) appear on media thumbnails and must work on both light and dark backgrounds regardless of mode.
- **`on-brand` stays white in both modes** — it's for text on brand-colored or dark surfaces.
- **`on-reverse` stays dark in both modes** — it's for elements that must contrast against white/light surfaces in both modes (e.g. the dot separator in `ItemCard` metadata).

---

## Quick Reference: Token Pairings

| Context | Background | Text | Border |
|---|---|---|---|
| Primary workspace | `surface-bg` | `text-primary` | none |
| Secondary pane | `surface-secondary-bg` | `text-primary` | none |
| Navigation rail | `surface-dark` | `on-brand` | none |
| Interactive card | `surface-bg` | `text-primary` | `border-primary` |
| Input field | `input-bg` | `text-primary` | `border-primary` (on focus) |
| Floating toolbar | `surface-bg` | — | `border-primary` + shadow |
| Modal | `surface-bg` | `text-primary` | `border-secondary` (header/footer dividers) |
| Toast | `brand-primary` | `on-brand` | none |
| Disabled element | inherit | 50% opacity | inherit at 50% opacity |
