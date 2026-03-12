# Astra UI — Design Principles & Token Usage

These guidelines define how to apply Astra tokens to produce layouts and interfaces that feel distinctly on-brand. They complement the token reference in [Tokens.md](./Tokens.md) and the component API in [Components.md](./Components.md).

## Core Philosophy

**Clean, branded, progressive.** Astra's identity comes from its purple-tinted surfaces — not just its accent color. Every screen should feel like it belongs to Astra, not like a generic SaaS template with a purple button. Use brand surface colors actively to create that identity.

---

## 1. Brand Surfaces Are What Make Astra Feel Like Astra

This is the most important principle. Astra does NOT look like a neutral gray/white app with purple accents. It uses **brand-tinted surface colors** throughout the UI to create a cohesive, distinctive feel.

### The brand surface palette

| Token | Role | When to use |
|---|---|---|
| `brand-tertiary` | **Default secondary pane fill** | Chat sidebars, inspector panels, settings panels, any secondary content area. This is the go-to background for anything that isn't the primary workspace. |
| `brand-secondary` | **Emphasis fill for interactive/highlighted elements** | AI chat bubbles, selected/active item backgrounds, highlighted rows, content blocks on a timeline, notification badges. |
| `brand-primary` | **Small, high-impact accent** | Primary buttons, active tab underlines, progress bars, seek handles. Never as a large area fill. |

### Rules — follow these strictly

- **Secondary panes MUST use `brand-tertiary`** — not `surface-bg`, not `surface-secondary-bg`, not plain white/gray. If a layout has a sidebar, panel, or secondary content area, it gets `brand-tertiary`.
- **Content blocks and highlighted items use `brand-secondary`** — timeline clips, selected list items, AI chat bubbles, active cards.
- **Every screen should have visible brand color in its surfaces** — if you've built a screen and it looks like it could belong to any app, you haven't used enough brand surface color.
- **The workspace/primary content area uses `surface-bg`** — this is the only major area that stays neutral. Everything around it should carry brand tinting.

### Do

```
✓ Chat sidebar with brand-tertiary background
✓ Settings panel with brand-tertiary background
✓ AI chat bubbles with brand-secondary background
✓ Selected list row with brand-secondary background
✓ Inspector/detail panel with brand-tertiary background
✓ Content cards on a branded surface with brand-secondary fills
```

### Don't

```
✗ All-white or all-gray layout with brand only on buttons
✗ Secondary pane using surface-bg or surface-secondary-bg (too neutral)
✗ Selected states using only gray/opacity changes instead of brand-secondary
✗ A screen where the only brand color is the logo and one button
```

---

## 2. Surface Color Defines Layout — Not Borders

The primary tool for creating visual hierarchy and separating regions is **surface color**, not borders or dividers.

### Do

- Use `surface-dark` for persistent navigation (sidebar rail).
- Use `brand-tertiary` for secondary panes (chat sidebar, inspector panels, settings areas).
- Use `surface-bg` for the primary content workspace.
- Let adjacent surfaces with different fills create implicit separation.

### Don't

- Don't wrap layout regions in bordered cards. If two areas need visual separation, give them different surface fills.
- Don't use `border-primary` between major layout columns — the surface color change is enough.
- Don't add background fills to regions that are already distinguished by their position and content.

### Surface Hierarchy (back to front)

```
surface-dark          → persistent chrome (sidebar nav)
brand-tertiary        → secondary panes (chat, inspectors, settings panels)
surface-bg            → primary workspace
bg-faint              → recessed areas within the workspace (e.g. empty track regions)
bg-subtle             → subtle grouping within a surface (e.g. metadata rows, input backgrounds)
brand-secondary       → highlighted/selected elements within any surface
surface-hover         → hover state for interactive surface regions
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
[ SidebarNavigation 60px ] [ Secondary pane (optional, 300-400px) ] [ Main workspace (flex) ]
  surface-dark                 brand-tertiary                            surface-bg
```

### Skeleton for every page

```tsx
<div className="flex h-screen">
  <SidebarNavigation footer={<>...</>}>
    <SidebarButton icon={<Home />} selected />
    <SidebarButton icon={<Film />} />
  </SidebarNavigation>
  <main className="flex-1">
    {/* page content */}
  </main>
</div>
```

---

## 5. Brand Color Roles

`brand-primary` (#5250f3) is a strong, saturated purple. It draws attention and should be used sparingly for maximum impact. The lighter brand tints (`brand-secondary`, `brand-tertiary`) are designed for larger areas.

### brand-primary — small accent only

- Primary action buttons (CTA in a modal footer, "Share" button)
- Active tab underlines
- Progress indicators (playhead, seek bar fill, progress bars)
- Focus rings

### brand-secondary — emphasis and selection

- AI chat bubble backgrounds
- Selected/active item highlights (list rows, timeline clips, toolbar items)
- Content blocks and media segments
- Notification or status indicators that need brand association

### brand-tertiary — large area tinting

- Secondary pane backgrounds (chat, inspector, settings)
- Selected sidebar item wash
- Card backgrounds on branded surfaces
- Any panel or region that should feel "Astra" without competing with the content

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
| Primary workspace | `surface-bg` | `text-primary` | none |
| Secondary pane (chat, inspector, settings) | **`brand-tertiary`** | `text-primary` | none |
| Navigation rail | `surface-dark` | `on-brand` | none |
| AI chat bubble | `brand-secondary` | `text-primary` | none |
| Selected/active list item | `brand-secondary` | `text-primary` | none |
| Interactive card | `surface-bg` | `text-primary` | `border-primary` |
| Input field | `bg-subtle` | `text-primary` | none (border on focus) |
| Floating toolbar | `surface-bg` | — | `border-primary` + shadow |
| Modal | `surface-bg` | `text-primary` | `border-secondary` (header/footer dividers) |
| Toast | `brand-primary` | `on-brand` | none |
| Disabled element | inherit | 50% opacity | inherit at 50% opacity |

**Self-check:** If your token pairings table for a new screen has no `brand-tertiary` or `brand-secondary` entries, revisit — the design likely needs more brand surface color.
