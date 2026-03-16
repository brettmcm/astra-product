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

### Navigation hierarchy

Astra has three levels of navigation. Use them in order — never skip a level.

| Level | Component | Purpose |
|---|---|---|
| **Primary** | `SidebarNavigation` + `SidebarButton` | App-level navigation (Home, Film, Book, Folder). Always present on every page. |
| **Secondary** | `SecondaryNav` + `SecondaryNavItem` | Section-level navigation within a page (e.g. Settings > Profile, Billing, Notifications, Media). Used when a page has multiple sub-sections. |
| **Tertiary** | `Tabs` | Content-level navigation within the main content area (e.g. switching views or filters within a single section). Only used inside the main content panel. |

**Rules:**
- `Tabs` should ONLY be used as tertiary navigation within the main content area. Never use `Tabs` for primary or secondary navigation.
- If a page has sub-sections (like Settings), use `SecondaryNav` as secondary navigation — not `Tabs`.
- `Tabs` are for switching views or filtering content within a single section that already has its own `SecondaryNavItem` selected.

### Layout patterns

**Simple page (no secondary nav):**

```
[ SidebarNavigation 60px ] [ Main content (flex) ]
  surface-dark                 brand-tertiary background
                               └── surface-bg cards/panels float on top
```

**Page with secondary nav (standard for settings, detail views):**

```
[ SidebarNavigation 60px ] [ SecondaryNav ~252px ] [ Main content (flex) ]
  surface-dark                surface-secondary-bg    brand-tertiary background
                              border-right            └── surface-bg cards/panels float on top
```

### Standard sidebar items

The sidebar always has the same four primary nav items and two footer items. Set `active` on the item matching the current page.

```tsx
<div className="flex h-screen">
  {/* PRIMARY NAV — always present, always dark, always 60px */}
  <SidebarNavigation
    footer={
      <>
        <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
        <Avatar type="image" src="/user.jpg" size="medium" shape="circle" />
      </>
    }
  >
    <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} />
    <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
    <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
    <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
  </SidebarNavigation>

  {/* SECONDARY NAV — optional, for pages with sub-sections */}
  <SecondaryNav title="Settings">
    <SecondaryNavItem icon={<User className="size-full" strokeWidth={1.5} />} label="Profile" active />
    <SecondaryNavItem icon={<CreditCard className="size-full" strokeWidth={1.5} />} label="Billing" />
    <SecondaryNavItem icon={<Bell className="size-full" strokeWidth={1.5} />} label="Notifications" />
    <SecondaryNavItem icon={<Video className="size-full" strokeWidth={1.5} />} label="Media" />
  </SecondaryNav>

  {/* MAIN CONTENT — always brand-tertiary background */}
  <main className="flex-1 bg-brand-tertiary p-2xl overflow-y-auto">
    {/* Content sits inside surface-bg cards that float on the branded canvas */}
    <div className="max-w-2xl">
      <h1 className="text-title text-text-primary mb-xs">Profile</h1>
      <p className="text-label-sm text-text-secondary mb-xl">Manage your personal information</p>

      <div className="bg-surface-bg rounded-corner-lg p-xl space-y-xl">
        {/* Form fields go inside surface-bg containers */}
        <InputField label="Full Name" value="John Doe" />
        <InputField label="Email" value="john@example.com" />
        <TextareaField label="Bio" placeholder="Tell us about yourself..." />
        <SelectField label="Time Zone" options={timezones} />
      </div>

      <div className="flex justify-end gap-lg mt-xl">
        <Button variant="neutral">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  </main>
</div>
```

**Key points about this template:**
- `SidebarNavigation` is a **separate dark rail** (60px) — it is NEVER combined with `SecondaryNav`. They are two distinct side-by-side panels.
- `<main>` uses `bg-brand-tertiary` — this lavender background is what makes it feel like Astra. **Never use white or gray.**
- Form content is wrapped in a `bg-surface-bg rounded-corner-lg p-xl` container — a white card floating on the lavender canvas.
- Page heading and actions sit directly on the `brand-tertiary` canvas outside the card.

**Primary nav (top):** Home, Film, Book, Folder — always in this order, always all four present.
**Footer (bottom):** Settings icon + user Avatar — always both present.

### Main content area — layout and spacing

The `<main>` content area uses flexbox for all layout. Every element must be explicitly spaced using Astra's spacing tokens — never rely on default margins or arbitrary values. The goal is a clear vertical rhythm with generous breathing room.

#### Core structure rules

1. **`<main>` is always a flex column** with `p-2xl` padding and `overflow-y-auto`. All content inside flows vertically.
2. **Each logical section gets its own `surface-bg` card.** Never put multiple unrelated sections (e.g. "Personal Information" and "Security") inside a single card. Each section is a separate `bg-surface-bg rounded-corner-lg p-xl` container.
3. **Cards are separated by `gap-xl`** (16px). Use `flex flex-col gap-xl` on the content wrapper — never stack cards with no gap.
4. **Inside each card, fields are separated by `gap-lg`** (12px). Use `flex flex-col gap-lg` inside the card.
5. **Side-by-side fields use `flex gap-xl`** with equal `flex-1` children.
6. **Section headings go inside their card**, not floating between cards. Use `text-label text-text-primary font-semibold` for card section headings.
7. **Page header sits directly on the canvas** above the cards — not inside a card.

#### Do

```
✓ Each form section in its own surface-bg card (Profile Photo, Personal Info, Security, Danger Zone = 4 cards)
✓ flex flex-col gap-xl between cards
✓ flex flex-col gap-lg between fields inside a card
✓ flex gap-xl for side-by-side fields (First Name + Last Name)
✓ p-xl padding inside every card
✓ p-2xl padding on the main content area
✓ Section headings inside their card as the first element
```

#### Don't

```
✗ Putting all form sections in one giant card with no separation
✗ Inconsistent or tight spacing between fields (cramming content)
✗ Floating section headings between cards without clear ownership
✗ Using arbitrary pixel values instead of spacing tokens
✗ Missing padding on cards or the main wrapper
✗ Letting content touch the edges of cards or the page
```

#### Settings / form page template

```tsx
<main className="flex-1 bg-brand-tertiary p-2xl overflow-y-auto">
  {/* Page header — directly on canvas */}
  <div className="mb-xl">
    <h1 className="text-title text-text-primary">Profile</h1>
    <p className="text-label-sm text-text-secondary mt-xs">Manage your personal information and account details.</p>
  </div>

  {/* Cards stack — each section is its own card */}
  <div className="flex flex-col gap-xl max-w-3xl">

    {/* Section 1: Profile Photo */}
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      <h2 className="text-label text-text-primary font-semibold mb-lg">Profile Photo</h2>
      <div className="flex items-center gap-lg">
        <Avatar type="initial" initials="SC" size="large" />
        <Button variant="neutral" size="small">Change Photo</Button>
        <button className="text-label-sm text-brand-primary">Remove</button>
      </div>
    </div>

    {/* Section 2: Personal Information */}
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      <h2 className="text-label text-text-primary font-semibold mb-lg">Personal Information</h2>
      <div className="flex flex-col gap-lg">
        <div className="flex gap-xl">
          <div className="flex-1">
            <InputField label="First Name" value="Sarah" />
          </div>
          <div className="flex-1">
            <InputField label="Last Name" value="Chen" />
          </div>
        </div>
        <InputField label="Email Address" value="sarah.chen@example.com" description="This is your primary contact email" />
        <InputField label="Username" value="sarahchen" description="Your unique username across Astra" />
      </div>
    </div>

    {/* Section 3: Security */}
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      <h2 className="text-label text-text-primary font-semibold mb-lg">Security</h2>
      <div className="flex flex-col gap-lg">
        <InputField label="Current Password" type="password" value="••••••••" />
        <div className="flex gap-xl">
          <div className="flex-1">
            <InputField label="New Password" placeholder="I am a placeholder..." />
          </div>
          <div className="flex-1">
            <InputField label="Confirm Password" placeholder="I am a placeholder..." />
          </div>
        </div>
        <div>
          <Button variant="primary">Update Password</Button>
        </div>
      </div>
    </div>

    {/* Section 4: Danger Zone */}
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      <h2 className="text-label text-danger font-semibold mb-lg">Danger Zone</h2>
      <p className="text-label-sm text-text-secondary mb-lg">Once you delete your account, there is no going back. Please be certain.</p>
      <button className="text-label-sm text-danger">Delete Account</button>
    </div>

  </div>
</main>
```

#### Dashboard / multi-card page template

```tsx
<main className="flex-1 bg-brand-tertiary p-2xl overflow-y-auto">
  <div className="flex flex-col gap-2xl">

    {/* Header row — title + actions */}
    <div className="flex items-center justify-between">
      <h1 className="text-title text-text-primary">Welcome back, Jamie</h1>
      <div className="flex items-center gap-lg">
        <SearchComponent placeholder="Search" />
        <Button variant="primary">New Project</Button>
      </div>
    </div>

    {/* Two-column feature row */}
    <div className="flex gap-xl">
      <div className="flex-1 bg-surface-bg rounded-corner-lg p-xl">
        {/* Hero card content */}
      </div>
      <div className="w-[320px] bg-surface-bg rounded-corner-lg p-xl">
        {/* Activity panel */}
      </div>
    </div>

    {/* Card grid section */}
    <div>
      <h2 className="text-heading text-text-primary mb-lg">Recently Viewed</h2>
      <div className="grid grid-cols-4 gap-xl">
        <ItemCard title="..." duration="0:01:30" />
        <ItemCard title="..." duration="0:01:30" />
        <ItemCard title="..." duration="0:01:30" />
        <ItemCard title="..." duration="0:01:30" />
      </div>
    </div>

  </div>
</main>
```

#### Spacing reference

| Context | Token | Value | Tailwind |
|---|---|---|---|
| Main content padding | `space-2xl` | 24px | `p-2xl` |
| Between section cards | `space-xl` | 16px | `gap-xl` |
| Between dashboard sections | `space-2xl` | 24px | `gap-2xl` |
| Inside cards (padding) | `space-xl` | 16px | `p-xl` |
| Between fields inside a card | `space-lg` | 12px | `gap-lg` |
| Between side-by-side fields | `space-xl` | 16px | `gap-xl` |
| Below section heading in card | `space-lg` | 12px | `mb-lg` |
| Below page header | `space-xl` | 16px | `mb-xl` |
| Page header title → subtitle | `space-xs` | 4px | `mt-xs` |

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

### brand-tertiary — the page background canvas

- **This is the primary background color for all page content areas** — the main content wrapper next to `SidebarNavigation` always uses `bg-brand-tertiary`.
- Content cards, panels, and form containers use `surface-bg` and float on top of this branded canvas.
- This subtle lavender (#eaeaff) is what makes every screen feel like Astra.
- **Every page must have `brand-tertiary` as its background** — never use plain white or gray as the page background.

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
**Always use spacing between internal layout elements like cards, form fields, items, etc.**

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
