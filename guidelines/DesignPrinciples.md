# Astra UI — Design Principles & Token Usage

These guidelines define how to apply Astra tokens to produce layouts and interfaces that feel distinctly on-brand. They complement the token reference in [Tokens.md](./Tokens.md) and the component API in [Components.md](./Components.md).

## Core Philosophy

**Minimal, clean, simple.** Every decision should reduce visual noise. The UI should feel light, airy, and restrained — generous whitespace, subtle typography, and quiet surfaces. Complexity is revealed progressively, not shown all at once.

Astra's brand identity comes from its background canvas. **`brand-tertiary` is the primary background color for all page content areas.** It's a subtle lavender (#eaeaff in light mode) that gives every screen its Astra identity. Surface colors (`surface-bg`, `bg-faint`, `bg-subtle`) are then layered on top to create content hierarchy — cards, panels, and interactive elements rise off the branded canvas.

---

## 1. brand-tertiary Is the Page Background

This is the most important principle. The main content area of every page sits on a `brand-tertiary` background. Content is then elevated using surface colors on top of it.

### How it works

- **`brand-tertiary`** is the base canvas — the background behind all page content (outside the sidebar nav).
- **`surface-bg`** is used for elevated content on top of the canvas — cards, panels, form containers, content sections, modals. These white/light surfaces "float" on the lavender background and create hierarchy.
- **`bg-faint` / `bg-subtle`** are used for recessed or grouped areas within elevated surfaces — input backgrounds, metadata rows, secondary groupings.

### Rules

- **The page background is `brand-tertiary`** — apply it to the main content wrapper that sits next to `SidebarNavigation`.
- **Cards, content panels, and interactive areas use `surface-bg`** — they sit on top of the branded background, creating a layered card-on-canvas feel.
- **`brand-primary` is for small accents only** — buttons, active tab underlines, progress bars. Never as a section background.
- **`brand-secondary` is for small interactive highlights only** — AI chat bubbles, selected toolbar items. Not for large areas.
- **Keep it simple and minimal.** The lavender canvas provides brand identity — everything on top of it should be clean, quiet, and restrained.

### Do

```
✓ Page background in brand-tertiary
✓ Content cards and panels in surface-bg floating on the branded canvas
✓ Form sections and grouped content elevated in surface-bg containers
✓ Small brand-primary accents on buttons and indicators
✓ Clean, minimal layouts with generous whitespace
```

### Don't

```
✗ Plain white/gray page backgrounds with no brand-tertiary
✗ Dark or saturated backgrounds (brand-primary, brand-secondary) on large areas
✗ Busy, heavy, or visually loud layouts
✗ Skipping the branded canvas and putting everything on surface-bg
```

---

## 2. Surface Color Defines Layout — Not Borders

The primary tool for creating visual hierarchy and separating regions is **surface color**, not borders or dividers. Content hierarchy is created by layering lighter surfaces on top of the `brand-tertiary` canvas.

### Do

- Use `surface-dark` for persistent navigation (sidebar rail).
- Use `brand-tertiary` as the page background canvas.
- Use `surface-bg` for elevated content — cards, panels, form containers, content sections.
- Let the contrast between the branded canvas and white elevated surfaces create implicit separation.

### Don't

- Don't wrap layout regions in bordered cards when the surface elevation already separates them.
- Don't use `border-primary` between major layout columns — the surface color change is enough.
- Don't use plain white/gray as the page background — the canvas should always be `brand-tertiary`.

### Surface Hierarchy (bottom to top)

```
surface-dark          → persistent chrome (sidebar nav only)
brand-tertiary        → page background canvas (primary branded surface)
surface-bg            → elevated content (cards, panels, forms, content sections)
bg-faint              → recessed areas within elevated surfaces
bg-subtle             → subtle grouping within elevated surfaces (input backgrounds, metadata)
surface-hover         → hover state for interactive regions
```

---

## 3. Borders Are for Interactive Elements

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

## 4. Every Desktop Screen MUST Include SidebarNavigation

**This is non-negotiable.** Every desktop page layout starts with `SidebarNavigation` on the left. There are no exceptions — settings pages, empty states, onboarding flows, error pages, dashboards, editors — all of them include the sidebar. It is the persistent shell of the application.

- The sidebar is always `surface-dark` — it anchors the interface.
- Icon-only navigation with `SidebarButton` components.
- `AstraLogo` at top, settings and avatar pinned to footer.
- Secondary panes (chat, inspectors) sit between the sidebar and the main workspace.
- **Never build a desktop page without `SidebarNavigation`.** If you're unsure whether to include it, include it.

### Layout structure (left to right)

```
[ SidebarNavigation 60px ] [ Main content area (flex) ]
  surface-dark                 brand-tertiary background
                               └── surface-bg cards/panels float on top
```

### Standard navigation items

The sidebar always has the same four primary nav items and two footer items. Set `selected` on the item matching the current page.

```tsx
<div className="flex h-screen">
  <SidebarNavigation
    footer={
      <>
        <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
        <Avatar type="image" src="/user.jpg" size="medium" shape="circle" />
      </>
    }
  >
    <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} selected />
    <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
    <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
    <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
  </SidebarNavigation>
  <main className="flex-1 bg-brand-tertiary">
    {/* surface-bg cards and panels float on the branded canvas */}
  </main>
</div>
```

**Primary nav (top):** Home, Film, Book, Folder — always in this order, always all four present.
**Footer (bottom):** Settings icon + user Avatar — always both present.

---

## 5. Brand Color Roles — Use Sparingly

Brand color should be used with restraint. Most of the screen should be neutral. The brand palette creates identity through small, intentional touches — not by painting large areas.

### brand-primary — small accents only

- Primary action buttons (CTA in a modal footer, "Share" button)
- Active tab underlines
- Progress indicators (playhead, seek bar fill, progress bars)
- Focus rings

### brand-secondary — small interactive highlights only

- AI chat bubble backgrounds (built into the component)
- Selected toolbar item backgrounds (built into the component)
- **Do not use as a background for cards, rows, panels, or large sections**

### brand-tertiary — secondary pane background only

- The secondary left-column pane (chat sidebar, inspector, settings panel)
- **This is the only large branded surface in the layout**
- Do not apply it to cards, content areas, or multiple panels

### Don't

- Don't fill entire sections, headers, or backgrounds with `brand-primary` — it's too strong for large areas.
- Don't use brand colors for body text unless it's a link or active tab label.
- Don't combine `brand-primary` background with `brand-secondary` text — use `on-brand` (white) on brand fills.

---

## 6. Text Color Hierarchy

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

## 7. Progressive Disclosure

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

## 8. Spacing & Density

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

## 9. Dark Mode

All token-based colors flip automatically via the `.dark` class. When building new UI:

- **Always use semantic tokens** — never hardcode hex values for colors that should adapt.
- **Test both modes** — some components (like `FavoriteButton`, `DurationBadge`) appear on media thumbnails and must work on both light and dark backgrounds regardless of mode.
- **`on-brand` stays white in both modes** — it's for text on brand-colored or dark surfaces.
- **`on-reverse` stays dark in both modes** — it's for elements that must contrast against white/light surfaces in both modes (e.g. the dot separator in `ItemCard` metadata).

---

## Quick Reference: Token Pairings

| Context | Background | Text | Border |
|---|---|---|---|
| **Page canvas** | **`brand-tertiary`** | `text-primary` | none |
| Navigation rail | `surface-dark` | `on-brand` | none |
| Elevated cards / content panels | `surface-bg` | `text-primary` | optional `border-secondary` or shadow |
| Input field | `bg-subtle` | `text-primary` | none (border on focus) |
| Floating toolbar | `surface-bg` | — | `border-primary` + shadow |
| Modal | `surface-bg` | `text-primary` | `border-secondary` (header/footer dividers) |
| Toast | `brand-primary` | `on-brand` | none |
| Disabled element | inherit | 50% opacity | inherit at 50% opacity |

**Self-check:** The page canvas should be `brand-tertiary`. Content cards and panels should be `surface-bg` floating on top. The result should feel minimal and clean — a subtle branded background with crisp white content surfaces layered on it.
