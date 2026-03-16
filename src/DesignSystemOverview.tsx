import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { AstraLogo } from './AstraLibraryKit/components/astra_logo'
import { Avatar } from './AstraLibraryKit/components/avatar'
import { AvatarGroup } from './AstraLibraryKit/components/avatar_group'
import { Badge } from './AstraLibraryKit/components/badge'
import { Button } from './AstraLibraryKit/components/button'
import { ButtonGroup } from './AstraLibraryKit/components/button_group'
import { ChatBubbles } from './AstraLibraryKit/components/chat_bubbles'
import { DurationBadge } from './AstraLibraryKit/components/duration_badge'
import { ItemCard } from './AstraLibraryKit/components/item_card'
import { FavoriteButton } from './AstraLibraryKit/components/favorite_button'
import { PromptInput } from './AstraLibraryKit/components/prompt_input'
import { PromptPane } from './AstraLibraryKit/components/prompt_pane'
import { SearchComponent } from './AstraLibraryKit/components/search_component'
import { SegmentedControl } from './AstraLibraryKit/components/segmented_control'
import { InputField } from './AstraLibraryKit/components/input_field'
import { SelectField } from './AstraLibraryKit/components/select_field'
import { SidebarButton } from './AstraLibraryKit/components/sidebar_button'
import { SidebarNavigation } from './AstraLibraryKit/components/sidebar_navigation'
import { TextareaField } from './AstraLibraryKit/components/textarea_field'
import { SwitchField } from './AstraLibraryKit/components/switch_field'
import { Toast } from './AstraLibraryKit/components/toast'
import { Tooltip } from './AstraLibraryKit/components/tooltip'
import { Checkbox } from './AstraLibraryKit/components/checkbox'
import { RadioGroup } from './AstraLibraryKit/components/radio'
import { Modal } from './AstraLibraryKit/components/modal'
import { Tabs } from './AstraLibraryKit/components/tabs'
import { Toolbar } from './AstraLibraryKit/components/toolbar'
import { ToolbarItem } from './AstraLibraryKit/components/toolbar_item'
import { SecondaryNav } from './AstraLibraryKit/components/secondary_nav'
import { SecondaryNavItem } from './AstraLibraryKit/components/secondary_nav_item'
import { VideoControl } from './AstraLibraryKit/components/video_control'
import { Home, Film, Book, Folder, Settings, MousePointer, Search, Crop, Scissors, MessageCircle } from './AstraLibraryKit/components/icons'

// ─── Layout helpers ──────────────────────────────────────────────────────────

function Section({ id, title, description, children, status }: {
  id: string
  title: string
  description: string
  children: React.ReactNode
  status?: 'complete' | 'partial' | 'missing'
}) {
  const statusColors = {
    complete: 'bg-emerald-100 text-emerald-800',
    partial: 'bg-amber-100 text-amber-800',
    missing: 'bg-red-100 text-red-800',
  }
  const statusLabels = {
    complete: 'Ready',
    partial: 'Needs work',
    missing: 'Missing',
  }

  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-start justify-between gap-4 mb-1">
        <h2 className="text-[20px] font-semibold text-foreground tracking-tight">{title}</h2>
        {status && (
          <span className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        )}
      </div>
      <p className="text-[13px] text-text-secondary mb-5 max-w-[600px]">{description}</p>
      {children}
    </section>
  )
}

function ExampleRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-wider mb-2">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

function TokenSwatch({ color, name, value }: { color: string; name: string; value: string }) {
  return (
    <div className="flex items-center gap-3 min-w-[220px]">
      <div
        className="size-10 rounded-lg border border-border-secondary shrink-0"
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="text-[12px] font-medium text-text-primary">{name}</p>
        <p className="text-[11px] text-text-tertiary font-mono">{value}</p>
      </div>
    </div>
  )
}

function TypographySample({ className: cls, label, meta }: { className: string; label: string; meta: string }) {
  return (
    <div className="mb-3">
      <p className="text-[10px] font-medium text-text-tertiary uppercase tracking-wider mb-1">{label} <span className="normal-case font-mono">({meta})</span></p>
      <p className={cls}>The quick brown fox jumps over the lazy dog</p>
    </div>
  )
}

// ─── Nav sidebar ─────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing & Radius' },
  { id: 'astra-logo', label: 'Astra Logo' },
  { id: 'button', label: 'Button' },
  { id: 'button-group', label: 'Button Group' },
  { id: 'badge', label: 'Badge' },
  { id: 'duration-badge', label: 'Duration Badge' },
  { id: 'favorite-button', label: 'Favorite Button' },
  { id: 'item-card', label: 'Item Card' },
  { id: 'avatar', label: 'Avatar' },
  { id: 'avatar-group', label: 'Avatar Group' },
  { id: 'chat-bubbles', label: 'Chat Bubbles' },
  { id: 'prompt-input', label: 'Prompt Input' },
  { id: 'prompt-pane', label: 'Prompt Pane' },
  { id: 'search', label: 'Search' },
  { id: 'segmented-control', label: 'Segmented Control' },
  { id: 'sidebar-button', label: 'Sidebar Button' },
  { id: 'sidebar-navigation', label: 'Sidebar Navigation' },
  { id: 'input-field', label: 'Input Field' },
  { id: 'select-field', label: 'Select Field' },
  { id: 'switch-field', label: 'Switch Field' },
  { id: 'textarea-field', label: 'Textarea Field' },
  { id: 'toast', label: 'Toast' },
  { id: 'modal', label: 'Modal' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'tooltip', label: 'Tooltip' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'radio-group', label: 'Radio Group' },
  { id: 'toolbar-item', label: 'Toolbar Item' },
  { id: 'toolbar', label: 'Toolbar' },
  { id: 'secondary-nav-item', label: 'SecondaryNavItem' },
  { id: 'secondary-nav', label: 'SecondaryNav' },
  { id: 'video-control', label: 'Video Control' },
  { id: 'completeness', label: 'Completeness Audit' },
]

// ─── Main ────────────────────────────────────────────────────────────────────

export default function DesignSystemOverview() {
  const { theme, toggleTheme } = useTheme()
  const [selectedSegment, setSelectedSegment] = useState('seg-1')
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [switchOn, setSwitchOn] = useState(true)
  const [promptValue, setPromptValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Fixed sidebar nav */}
      <nav className="fixed top-0 left-0 bottom-0 w-[220px] border-r border-border bg-background overflow-y-auto py-8 px-5 z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M0 12.8C0 8.32 0 6.08.87 4.37A8 8 0 0 1 4.37.87C6.08 0 8.32 0 12.8 0h6.4c4.48 0 6.72 0 8.43.87a8 8 0 0 1 3.5 3.5C32 6.08 32 8.32 32 12.8v6.4c0 4.48 0 6.72-.87 8.43a8 8 0 0 1-3.5 3.5C25.92 32 23.68 32 19.2 32h-6.4c-4.48 0-6.72 0-8.43-.87a8 8 0 0 1-3.5-3.5C0 25.92 0 23.68 0 19.2V12.8Z" fill="var(--brand-primary)" />
              <path d="M16.35 4c1.01 7.28 4.37 10.64 11.65 11.65v.7c-7.28 1.01-10.64 4.37-11.65 11.65h-.7C14.64 20.72 11.28 17.36 4 16.35v-.7C11.28 14.64 14.64 11.28 15.65 4h.7Z" stroke="#fff" />
            </svg>
            <span className="text-[15px] font-semibold text-foreground">Astra UI</span>
          </div>
          <button
            onClick={toggleTheme}
            className="size-7 flex items-center justify-center rounded-md bg-bg-subtle hover:bg-bg-hover transition-colors text-text-secondary"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
          </button>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-text-tertiary font-medium mb-3">Design System</p>
        <ul className="flex flex-col gap-0.5">
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <button
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block w-full text-left text-[13px] text-text-secondary hover:text-brand-primary hover:bg-brand-tertiary rounded-md px-2 py-1.5 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <main className="ml-[220px] flex-1 max-w-[960px] px-10 py-10 flex flex-col gap-14">
        {/* Header */}
        <div>
          <h1 className="text-[32px] font-semibold text-foreground tracking-tight leading-tight">Astra Design System</h1>
          <p className="text-[15px] text-text-secondary mt-2 max-w-[600px]">
            Component and token inventory for <span className="font-mono text-[13px] bg-brand-tertiary px-1.5 py-0.5 rounded">@brettmcm/astraui v0.1.1</span>. Use this overview to assess design system completeness and guide the authoring of usage guidelines.
          </p>
        </div>

        {/* ────────────────── TOKENS ────────────────── */}

        <Section
          id="colors"
          title="Colors"
          description="Core palette unified via CSS custom properties. Brand purple (--brand-primary) is the primary interactive color. All components consume tokens from globals.css."
          status="complete"
        >
          <ExampleRow label="Brand">
            <TokenSwatch color="var(--brand-primary)" name="--brand-primary" value="bg-brand-primary" />
            <TokenSwatch color="var(--brand-hover)" name="--brand-hover" value="bg-brand-hover" />
            <TokenSwatch color="var(--brand-dark)" name="--brand-dark" value="bg-brand-dark" />
            <TokenSwatch color="var(--brand-secondary)" name="--brand-secondary" value="bg-brand-secondary" />
            <TokenSwatch color="var(--brand-tertiary)" name="--brand-tertiary" value="bg-brand-tertiary" />
            <TokenSwatch color="var(--brand-muted)" name="--brand-muted" value="bg-brand-muted" />
          </ExampleRow>
          <ExampleRow label="Status">
            <TokenSwatch color="var(--success)" name="--success" value="bg-success" />
            <TokenSwatch color="var(--warning)" name="--warning" value="bg-warning" />
            <TokenSwatch color="var(--danger)" name="--danger" value="bg-danger" />
            <TokenSwatch color="var(--destructive)" name="--destructive" value="bg-destructive" />
          </ExampleRow>
          <ExampleRow label="Surfaces">
            <TokenSwatch color="var(--surface-dark)" name="--surface-dark" value="bg-surface-dark" />
            <TokenSwatch color="var(--surface-dark-hover)" name="--surface-dark-hover" value="bg-surface-dark-hover" />
            <TokenSwatch color="var(--surface-darkest)" name="--surface-darkest" value="bg-surface-darkest" />
          </ExampleRow>
          <ExampleRow label="Text & Borders (opacity-based)">
            <TokenSwatch color="var(--text-primary)" name="--text-primary" value="text-text-primary" />
            <TokenSwatch color="var(--text-secondary)" name="--text-secondary" value="text-text-secondary" />
            <TokenSwatch color="var(--border-primary)" name="--border-primary" value="border-border-primary" />
            <TokenSwatch color="var(--border-secondary)" name="--border-secondary" value="border-border-secondary" />
            <TokenSwatch color="var(--bg-faint)" name="--bg-faint" value="bg-bg-faint" />
            <TokenSwatch color="var(--bg-subtle)" name="--bg-subtle" value="bg-bg-subtle" />
            <TokenSwatch color="var(--bg-hover)" name="--bg-hover" value="bg-bg-hover" />
          </ExampleRow>

          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-[12px] text-emerald-800">
            <strong>Resolved:</strong> All components now consume CSS custom properties via Tailwind utilities (e.g. <code>bg-brand-primary</code>, <code>text-text-primary</code>). Tokens are defined in <code>globals.css :root</code> and registered in the <code>@theme inline</code> block. styles/figma-tokens.css remains as the Figma reference layer.
          </div>
        </Section>

        <Section
          id="typography"
          title="Typography"
          description="Instrument Sans is the sole UI typeface. Semantic type scale tokens aligned to Figma (text-title, text-heading, text-label, text-input, text-video-title, text-caption) with font-book (450) and font-semibold (600) weights."
          status="complete"
        >
          <ExampleRow label="Type Scale">
            <div className="w-full">
              <TypographySample className="font-display text-title font-semibold" label="Title" meta="text-title / font-display / font-semibold (600) / 24px/1.4" />
              <TypographySample className="font-sans text-heading font-medium" label="Heading" meta="text-heading / font-medium (500) / 20px/1.4" />
              <TypographySample className="font-sans text-caption font-semibold uppercase" label="Caption" meta="text-caption / font-semibold (600) / 20px/1.4 / uppercase" />
              <TypographySample className="font-sans text-label font-medium" label="Label" meta="text-label / font-medium (500) / 16px/1.4" />
              <TypographySample className="font-sans text-label-sm font-medium" label="Label Small" meta="text-label-sm / font-medium (500) / 14px/1.4" />
              <TypographySample className="font-sans text-input font-book" label="Input" meta="text-input / font-book (450) / 16px/1.4" />
              <TypographySample className="font-sans text-input-sm font-medium" label="Input Small" meta="text-input-sm / font-medium (500) / 14px/1.4" />
              <TypographySample className="font-sans text-video-title font-book" label="Video Title" meta="text-video-title / font-book (450) / 12px/normal" />
            </div>
          </ExampleRow>
          <ExampleRow label="Font Weights">
            <div className="w-full flex gap-8">
              <p className="font-sans text-label font-book">Book (450) <span className="text-video-title text-text-secondary">font-book</span></p>
              <p className="font-sans text-label font-medium">Medium (500) <span className="text-video-title text-text-secondary">font-medium</span></p>
              <p className="font-sans text-label font-semibold">Semibold (600) <span className="text-video-title text-text-secondary">font-semibold</span></p>
            </div>
          </ExampleRow>
          <ExampleRow label="Font Families">
            <div className="w-full flex flex-col gap-2">
              <p className="font-display text-label">Display <span className="text-video-title text-text-secondary">- Title text (via <code className="text-video-title">font-display</code> / <code className="text-video-title">--font-display</code>)</span></p>
              <p className="font-sans text-label">Sans <span className="text-video-title text-text-secondary">- All other UI text (via <code className="text-video-title">font-sans</code> / <code className="text-video-title">--font-sans</code>)</span></p>
            </div>
          </ExampleRow>
          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-[12px] text-emerald-800">
            <strong>Resolved:</strong> Type scale realigned to match Figma type system. Tokens: <code>text-title</code> (24px), <code>text-heading</code> (20px), <code>text-caption</code> (20px/uppercase), <code>text-label</code> (16px), <code>text-label-sm</code> (14px), <code>text-input</code> (16px), <code>text-input-sm</code> (14px), <code>text-video-title</code> (12px). Font weights: <code>font-book</code> (450), <code>font-semibold</code> (600). Font families: <code>font-display</code> (titles), <code>font-sans</code> (all other text).
          </div>
        </Section>

        <Section
          id="spacing"
          title="Spacing & Radius"
          description="Spacing scale from Figma tokens (4px increments) and border radius tokens."
          status="partial"
        >
          <ExampleRow label="Spacing Scale">
            <div className="flex items-end gap-4">
              {[
                { name: 'spacer-1', px: 4 },
                { name: 'spacer-2', px: 8 },
                { name: 'spacer-2.5', px: 12 },
                { name: 'spacer-3', px: 16 },
                { name: 'spacer-4', px: 24 },
                { name: 'spacer-5', px: 32 },
                { name: 'spacer-6', px: 40 },
              ].map(s => (
                <div key={s.name} className="flex flex-col items-center gap-1">
                  <div className="bg-brand-primary rounded-sm" style={{ width: s.px, height: s.px }} />
                  <span className="text-[9px] text-text-tertiary font-mono">{s.px}px</span>
                  <span className="text-[9px] text-text-tertiary">{s.name}</span>
                </div>
              ))}
            </div>
          </ExampleRow>
          <ExampleRow label="Border Radius">
            <div className="flex items-center gap-6">
              {[
                { name: 'Small', px: 2 },
                { name: 'Medium', px: 5 },
                { name: 'Large', px: 13 },
                { name: 'Full', px: 9999 },
              ].map(r => (
                <div key={r.name} className="flex flex-col items-center gap-1">
                  <div
                    className="size-12 border-2 border-brand-primary bg-brand-tertiary"
                    style={{ borderRadius: r.px }}
                  />
                  <span className="text-[10px] text-text-secondary font-medium">{r.name}</span>
                  <span className="text-[9px] text-text-tertiary font-mono">{r.px}px</span>
                </div>
              ))}
            </div>
          </ExampleRow>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-[12px] text-amber-800">
            <strong>Gap:</strong> Figma spacer tokens use unitless numbers (<code>--spacer-2: 8</code>). The Tailwind theme defines a separate radius scale via <code>--radius</code>. These two systems are not unified.
          </div>
        </Section>

        <hr className="border-border-secondary" />

        {/* ────────────────── COMPONENTS ────────────────── */}

        <Section
          id="astra-logo"
          title="Astra Logo"
          description="Brand mark — purple rounded square with a white four-pointed star. Scales via the size prop."
          status="complete"
        >
          <ExampleRow label="Sizes">
            <div className="flex items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <AstraLogo size={24} />
                <span className="text-video-title text-text-tertiary">24</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AstraLogo size={32} />
                <span className="text-video-title text-text-tertiary">32</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AstraLogo size={48} />
                <span className="text-video-title text-text-tertiary">48</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AstraLogo size={64} />
                <span className="text-video-title text-text-tertiary">64</span>
              </div>
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Sidebar:</strong> App icon at the top of the navigation rail</li>
              <li><strong>Chat bubbles:</strong> AI avatar identifier alongside responses</li>
            </ul>
          </div>
        </Section>

        <Section
          id="button"
          title="Button"
          description="Primary action trigger. Three visual variants, two sizes, optional leading/trailing icons. Extends native button attributes."
          status="complete"
        >
          <ExampleRow label="Variants">
            <Button variant="primary">Primary</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="subtle">Subtle</Button>
          </ExampleRow>
          <ExampleRow label="Sizes">
            <Button size="medium">Medium</Button>
            <Button size="small">Small</Button>
          </ExampleRow>
          <ExampleRow label="States">
            <Button disabled>Disabled</Button>
            <Button variant="neutral" disabled>Disabled Neutral</Button>
          </ExampleRow>
          <ExampleRow label="With Icons">
            <Button iconStart={<span>+</span>}>Add Item</Button>
            <Button variant="neutral" iconEnd={<span>&rarr;</span>}>Next</Button>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Primary:</strong> "Export" and "Share" actions in the editor toolbar</li>
              <li><strong>Neutral:</strong> Secondary actions like "Cancel" in modals or "Export" when paired with a primary Share button</li>
            </ul>
          </div>
        </Section>

        <Section
          id="button-group"
          title="Button Group"
          description="Layout container for grouping buttons with five alignment modes. Uses the existing Button component as children."
          status="complete"
        >
          <ExampleRow label="Justify (full width, space between)">
            <div className="w-[360px]">
              <ButtonGroup align="justify">
                <Button variant="neutral">Cancel</Button>
                <Button variant="primary">Save</Button>
              </ButtonGroup>
            </div>
          </ExampleRow>
          <ExampleRow label="Start">
            <div className="w-[360px]">
              <ButtonGroup align="start">
                <Button variant="neutral">Cancel</Button>
                <Button variant="primary">Save</Button>
              </ButtonGroup>
            </div>
          </ExampleRow>
          <ExampleRow label="End">
            <div className="w-[360px]">
              <ButtonGroup align="end">
                <Button variant="neutral">Cancel</Button>
                <Button variant="primary">Save</Button>
              </ButtonGroup>
            </div>
          </ExampleRow>
          <ExampleRow label="Center">
            <div className="w-[360px]">
              <ButtonGroup align="center">
                <Button variant="neutral">Cancel</Button>
                <Button variant="primary">Save</Button>
              </ButtonGroup>
            </div>
          </ExampleRow>
          <ExampleRow label="Stack (vertical, full width)">
            <div className="w-[360px]">
              <ButtonGroup align="stack">
                <Button variant="neutral">Cancel</Button>
                <Button variant="primary">Save</Button>
              </ButtonGroup>
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Modal footer:</strong> Cancel + Save actions with justify or end alignment</li>
              <li><strong>Mobile dialogs:</strong> Stacked full-width buttons for touch targets</li>
              <li><strong>Form actions:</strong> Submit + secondary actions aligned to start or end</li>
            </ul>
          </div>
        </Section>

        <Section
          id="badge"
          title="Badge"
          description="Compact label for status, tags, and categories. Six color variants with optional dismiss action."
          status="complete"
        >
          <ExampleRow label="Variants">
            <Badge label="Default" variant="default" />
            <Badge label="Success" variant="success" />
            <Badge label="Warning" variant="warning" />
            <Badge label="Danger" variant="danger" />
            <Badge label="Brand" variant="brand" />
            <Badge label="Secondary" variant="secondary" />
          </ExampleRow>
          <ExampleRow label="Removable">
            <Badge label="Tag" variant="default" removable onRemove={() => {}} />
            <Badge label="Filter" variant="brand" removable onRemove={() => {}} />
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Success/Warning/Danger:</strong> Export status indicators (completed, processing, failed)</li>
              <li><strong>Removable Default:</strong> Applied filters in the asset library search</li>
            </ul>
          </div>
        </Section>

        <Section
          id="duration-badge"
          title="Duration Badge"
          description="Compact timecode label with semi-transparent background. Designed to overlay video thumbnails or sit inline with metadata."
          status="complete"
        >
          <ExampleRow label="Timecodes">
            <DurationBadge duration="0:01:30" />
            <DurationBadge duration="0:00:15" />
            <DurationBadge duration="1:24:07" />
          </ExampleRow>
          <ExampleRow label="On dark surface">
            <div className="flex items-center gap-3 bg-surface-dark rounded-lg p-4">
              <DurationBadge duration="0:04:22" />
              <DurationBadge duration="0:30:00" />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Video thumbnail:</strong> Overlaid in the bottom-right corner to show clip length</li>
              <li><strong>Timeline:</strong> Inline timecode labels next to clips or markers</li>
            </ul>
          </div>
        </Section>

        <Section
          id="favorite-button"
          title="Favorite Button"
          description="24px circular toggle button with a star icon. Surface background with stroked star when inactive, filled brand-primary star when active. Adapts to dark mode via surface-bg token."
          status="complete"
        >
          <ExampleRow label="Default vs Favorited">
            <div className="flex items-center gap-4">
              <FavoriteButton />
              <FavoriteButton defaultFavorited />
            </div>
          </ExampleRow>
          <ExampleRow label="On thumbnail">
            <div className="flex items-center gap-4 rounded-lg p-4 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(168deg, rgb(26, 58, 42) 8%, rgb(45, 90, 58) 42%, rgb(74, 122, 74) 92%)' }}>
              <FavoriteButton />
              <FavoriteButton defaultFavorited />
            </div>
          </ExampleRow>
          <ExampleRow label="Dark mode">
            <div className="dark bg-surface-darkest rounded-lg p-4 flex items-center gap-4">
              <FavoriteButton />
              <FavoriteButton defaultFavorited />
            </div>
          </ExampleRow>
          <ExampleRow label="Dark mode on thumbnail">
            <div className="dark rounded-lg p-4 flex items-center gap-4 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(168deg, rgb(26, 58, 42) 8%, rgb(45, 90, 58) 42%, rgb(74, 122, 74) 92%)' }}>
              <FavoriteButton />
              <FavoriteButton defaultFavorited />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Video thumbnail:</strong> Overlaid in the top-right corner for quick bookmarking</li>
              <li><strong>Project card:</strong> Inline favorite toggle next to the project title</li>
            </ul>
          </div>
        </Section>

        <Section
          id="item-card"
          title="Item Card"
          description="Content card with a media area (gradient or thumbnail), duration badge overlay, title, and metadata row with dot separator. 305px default width."
          status="complete"
        >
          <ExampleRow label="Default (gradient)">
            <ItemCard
              title="Mountain biking"
              updated="Edited 2m ago"
              spec="4K"
              duration="0:01:30"
            />
          </ExampleRow>
          <ExampleRow label="With thumbnail image">
            <ItemCard
              title="Forest trail ride"
              updated="Edited 1h ago"
              spec="1080p"
              duration="0:04:22"
              thumbnail={
                <img
                  src="https://images.unsplash.com/photo-1604677657548-4ced0c4f40c6?w=632&h=354&fit=crop"
                  alt="Forest trail"
                  className="size-full object-cover"
                />
              }
            />
          </ExampleRow>
          <ExampleRow label="Dark mode">
            <div className="dark bg-surface-darkest rounded-xl p-6">
              <div className="flex gap-4">
                <ItemCard
                  title="Mountain biking"
                  updated="Edited 2m ago"
                  spec="4K"
                  duration="0:01:30"
                />
                <ItemCard
                  title="Sunset canyon"
                  updated="Edited 5m ago"
                  spec="1080p"
                  duration="0:12:45"
                  thumbnail={
                    <img
                      src="https://images.unsplash.com/photo-1553105659-d918b253f0f2?w=632&h=354&fit=crop"
                      alt="Sunset canyon"
                      className="size-full object-cover"
                    />
                  }
                />
              </div>
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Project grid:</strong> Video project cards in the home/library view</li>
              <li><strong>Recent items:</strong> Recently edited project cards in the dashboard</li>
            </ul>
          </div>
        </Section>

        <Section
          id="avatar"
          title="Avatar"
          description="User identity display with image or initial fallback. Three sizes, two shapes."
          status="complete"
        >
          <ExampleRow label="Image Avatars">
            <Avatar type="image" size="large" src="https://i.pravatar.cc/80?img=1" alt="User" />
            <Avatar type="image" size="medium" src="https://i.pravatar.cc/80?img=2" alt="User" />
            <Avatar type="image" size="small" src="https://i.pravatar.cc/80?img=3" alt="User" />
          </ExampleRow>
          <ExampleRow label="Initial Avatars">
            <Avatar type="initial" size="large" initials="BM" />
            <Avatar type="initial" size="medium" initials="AK" shape="square" />
            <Avatar type="initial" size="small" initials="Z" />
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Small, circle:</strong> Sidebar navigation footer (current user)</li>
              <li><strong>Medium, initial fallback:</strong> Collaborator list in the share modal when no profile photo exists</li>
            </ul>
          </div>
        </Section>

        <Section
          id="avatar-group"
          title="Avatar Group"
          description="Stacked avatar collection with overflow indicator. Supports overlap and spaced layouts."
          status="complete"
        >
          <ExampleRow label="Spaced (default)">
            <AvatarGroup
              avatars={[
                { src: 'https://i.pravatar.cc/80?img=4', alt: 'Alice' },
                { src: 'https://i.pravatar.cc/80?img=5', alt: 'Bob' },
                { src: 'https://i.pravatar.cc/80?img=6', alt: 'Carol' },
                { src: 'https://i.pravatar.cc/80?img=7', alt: 'Dave' },
                { src: 'https://i.pravatar.cc/80?img=8', alt: 'Eve' },
              ]}
              maxVisible={3}
            />
          </ExampleRow>
          <ExampleRow label="Overlap">
            <AvatarGroup
              avatars={[
                { src: 'https://i.pravatar.cc/80?img=9', alt: 'A' },
                { src: 'https://i.pravatar.cc/80?img=10', alt: 'B' },
                { src: 'https://i.pravatar.cc/80?img=11', alt: 'C' },
                { src: 'https://i.pravatar.cc/80?img=12', alt: 'D' },
              ]}
              maxVisible={3}
              spacing="overlap"
            />
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Overlap, maxVisible=3:</strong> Active collaborators indicator in the editor header</li>
              <li><strong>Spaced:</strong> "Shared with" list in project share modal</li>
            </ul>
          </div>
        </Section>

        <Section
          id="chat-bubbles"
          title="Chat Bubbles"
          description="Conversational message display for AI assistant and user. Includes avatar and directional layout."
          status="complete"
        >
          <ExampleRow label="Conversation">
            <div className="w-full max-w-[400px] flex flex-col gap-3 bg-brand-tertiary rounded-xl p-4">
              <ChatBubbles type="ai" text="How can I help with your video?" />
              <ChatBubbles type="user" text="Can you add a title overlay at the beginning?" />
              <ChatBubbles type="ai" text="Sure! I'll add a text overlay to the first 3 seconds. What text would you like?" />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>AI + User pair:</strong> Prompt pane conversation in the video editor sidebar</li>
              <li><strong>AI only:</strong> Onboarding welcome message when a user opens a new project</li>
            </ul>
          </div>
        </Section>

        <Section
          id="prompt-input"
          title="Prompt Input"
          description="Multi-line text input with send and attach actions. Designed for AI assistant interactions."
          status="complete"
        >
          <ExampleRow label="Default">
            <div className="w-full max-w-[400px]">
              <PromptInput
                value={promptValue}
                onChange={setPromptValue}
                onSend={() => setPromptValue('')}
                onAttach={() => {}}
                placeholder="Describe your video"
              />
            </div>
          </ExampleRow>
          <ExampleRow label="Disabled">
            <div className="w-full max-w-[400px]">
              <PromptInput disabled placeholder="Waiting for response..." />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Default:</strong> Bottom of the prompt pane for issuing video edit commands</li>
              <li><strong>Disabled:</strong> Shown while AI is "thinking" / generating a response</li>
            </ul>
          </div>
        </Section>

        <Section
          id="prompt-pane"
          title="Prompt Pane"
          description="Chat sidebar container with a scrollable children slot for ChatBubbles and a pinned PromptInput at the bottom."
          status="complete"
        >
          <ExampleRow label="With chat bubbles">
            <div className="h-[500px] w-[400px] rounded-lg overflow-hidden border border-border-primary">
              <PromptPane>
                <ChatBubbles type="ai" text="How can I help?" />
                <ChatBubbles type="user" text="Can you trim the first 5 seconds?" />
                <ChatBubbles type="ai" text="Done! I've trimmed the first 5 seconds from your clip." />
              </PromptPane>
            </div>
          </ExampleRow>
          <ExampleRow label="Empty (no messages)">
            <div className="h-[350px] w-[400px] rounded-lg overflow-hidden border border-border-primary">
              <PromptPane />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Editor sidebar:</strong> AI chat pane for issuing video edit commands and receiving responses</li>
              <li><strong>Slot pattern:</strong> Pass <code>ChatBubbles</code> as children; <code>PromptInput</code> is built in</li>
            </ul>
          </div>
        </Section>

        <Section
          id="search"
          title="Search Component"
          description="Search input with animated cycling placeholder text. Dark surface treatment for toolbar use."
          status="complete"
        >
          <ExampleRow label="Default (dark)">
            <div className="w-full max-w-[400px]">
              <SearchComponent
                value={searchValue}
                onChange={setSearchValue}
                onSearch={() => {}}
                placeholder="Search"
              />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Toolbar:</strong> Global search in the top navigation bar</li>
              <li><strong>Asset panel:</strong> Filtering media clips, audio, and templates within the asset library</li>
            </ul>
          </div>
        </Section>

        <Section
          id="segmented-control"
          title="Segmented Control"
          description="Icon-based toggle for switching between mutually exclusive views. Dark surface with animated selection."
          status="complete"
        >
          <ExampleRow label="Interactive">
            <SegmentedControl
              segments={[
                { id: 'seg-1', icon: <span className="text-[14px]">A</span> },
                { id: 'seg-2', icon: <span className="text-[14px]">B</span> },
                { id: 'seg-3', icon: <span className="text-[14px]">C</span> },
              ]}
              selectedSegment={selectedSegment}
              onChange={setSelectedSegment}
            />
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Timeline view toggle:</strong> Switch between storyboard, timeline, and split views</li>
              <li><strong>Preview modes:</strong> Toggle between preview, split-screen compare, and side-by-side</li>
            </ul>
          </div>
        </Section>

        <Section
          id="sidebar-button"
          title="Sidebar Button"
          description="Icon button for vertical navigation rails. Two states: default (dimmed) and active (brand-tertiary background)."
          status="complete"
        >
          <ExampleRow label="States">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} />
                <span className="text-video-title text-text-tertiary">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
                <span className="text-video-title text-text-tertiary">Active</span>
              </div>
            </div>
          </ExampleRow>
          <ExampleRow label="Navigation rail">
            <div className="bg-surface-bg border border-border-primary rounded-lg flex flex-col items-center gap-2 py-3 w-[60px]">
              <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
              <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
              <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
              <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
              <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>App sidebar:</strong> Primary navigation between Home, Projects, Library, Assets, Settings</li>
              <li><strong>Toolbar:</strong> Tool selection in vertical tool palettes</li>
            </ul>
          </div>
        </Section>

        <Section
          id="sidebar-navigation"
          title="Sidebar Navigation"
          description="Vertical navigation rail composing AstraLogo, SidebarButton children, and an optional footer slot for settings and avatar."
          status="complete"
        >
          <ExampleRow label="Default">
            <div className="h-[500px] rounded-lg overflow-hidden border border-border-primary">
              <SidebarNavigation
                footer={
                  <>
                    <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
                    <Avatar type="image" src="https://i.pravatar.cc/48?img=5" size="medium" shape="circle" />
                  </>
                }
              >
                <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
                <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
                <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
                <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
              </SidebarNavigation>
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>App shell:</strong> Primary navigation rail on the left edge of the editor</li>
              <li><strong>Slot pattern:</strong> Pass <code>SidebarButton</code> children for nav items; use <code>footer</code> for settings and user avatar</li>
            </ul>
          </div>
        </Section>

        <Section
          id="input-field"
          title="Input Field"
          description="Text input with optional label and description. Matches form field pattern used by SelectField."
          status="complete"
        >
          <ExampleRow label="With label & description">
            <div className="w-[280px]">
              <InputField
                label="Project name"
                description="Used as the title when exporting"
                value={inputValue}
                onChange={setInputValue}
                placeholder="Enter project name..."
              />
            </div>
          </ExampleRow>
          <ExampleRow label="Empty (placeholder)">
            <div className="w-[280px]">
              <InputField
                label="Tags"
                description="Comma-separated keywords"
                placeholder="e.g. travel, vlog, 4k"
              />
            </div>
          </ExampleRow>
          <ExampleRow label="No label / no description">
            <div className="w-[280px]">
              <InputField placeholder="Quick rename..." />
            </div>
          </ExampleRow>
          <ExampleRow label="With prefix">
            <div className="w-[280px]">
              <InputField
                label="Search"
                prefix={<Search size={16} />}
                placeholder="Find clips..."
              />
            </div>
          </ExampleRow>
          <ExampleRow label="With suffix">
            <div className="w-[280px]">
              <InputField
                label="Duration"
                suffix="sec"
                placeholder="0"
              />
            </div>
          </ExampleRow>
          <ExampleRow label="Disabled">
            <div className="w-[280px]">
              <InputField
                label="File path"
                description="Managed by the system"
                value="/exports/final-cut.mp4"
                disabled
              />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Project settings:</strong> Project name, description, tags</li>
              <li><strong>Export dialog:</strong> Custom filename, output path</li>
              <li><strong>Search inputs:</strong> Use <code>prefix</code> for a search icon</li>
              <li><strong>Unit inputs:</strong> Use <code>suffix</code> for units like "sec", "px", "USD"</li>
            </ul>
          </div>
        </Section>

        <Section
          id="select-field"
          title="Select Field"
          description="Dropdown selector with keyboard navigation (Arrow keys, Enter, Escape). Animated dropdown with max 2 visible items."
          status="complete"
        >
          <ExampleRow label="Interactive">
            <div className="w-[240px]">
              <SelectField
                options={[
                  { value: '1080p', label: '1080p (Full HD)' },
                  { value: '720p', label: '720p (HD)' },
                  { value: '4k', label: '4K (Ultra HD)' },
                ]}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Select resolution..."
              />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Export settings:</strong> Resolution, format (MP4 / WebM / MOV), and frame rate selectors</li>
              <li><strong>Project settings:</strong> Aspect ratio selection (16:9, 9:16, 1:1)</li>
            </ul>
          </div>
        </Section>

        <Section
          id="switch-field"
          title="Switch Field"
          description="Toggle with label and optional description. Purple active state with smooth animation."
          status="complete"
        >
          <ExampleRow label="With description">
            <SwitchField
              label="Auto-save"
              description="Automatically save changes every 30 seconds"
              defaultSelected={switchOn}
              onChange={setSwitchOn}
            />
          </ExampleRow>
          <ExampleRow label="Label only">
            <SwitchField label="HD Preview" hasDescription={false} />
          </ExampleRow>
          <ExampleRow label="Disabled">
            <SwitchField label="Locked" description="This setting is managed by your team admin" disabled />
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Settings panel:</strong> Toggle auto-save, HD preview, audio normalization</li>
              <li><strong>Share modal:</strong> "Allow comments" and "Allow downloads" toggles</li>
            </ul>
          </div>
        </Section>

        <Section
          id="textarea-field"
          title="Textarea Field"
          description="Multi-line text input with optional label and description. Same form field pattern as InputField and SelectField."
          status="complete"
        >
          <ExampleRow label="With label & description">
            <div className="w-[320px]">
              <TextareaField
                label="Description"
                description="Brief summary shown on the project card"
                value={textareaValue}
                onChange={setTextareaValue}
                placeholder="Describe your project..."
              />
            </div>
          </ExampleRow>
          <ExampleRow label="Empty (placeholder)">
            <div className="w-[320px]">
              <TextareaField
                label="Notes"
                description="Internal notes, not visible to viewers"
                placeholder="Add revision notes..."
              />
            </div>
          </ExampleRow>
          <ExampleRow label="No label / no description">
            <div className="w-[320px]">
              <TextareaField placeholder="Quick comment..." rows={2} />
            </div>
          </ExampleRow>
          <ExampleRow label="Disabled">
            <div className="w-[320px]">
              <TextareaField
                label="Transcript"
                description="Auto-generated from audio track"
                value="Mountain biking through the Pacific Northwest trails offers an incredible mix of terrain and scenery..."
                disabled
              />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Project settings:</strong> Description, revision notes, metadata</li>
              <li><strong>Export dialog:</strong> Custom embed code, transcript output</li>
            </ul>
          </div>
        </Section>

        <Section
          id="toast"
          title="Toast"
          description="Ephemeral notification with progress bar and optional cancel action. Four semantic variants with auto-dismiss animation."
          status="complete"
        >
          <ExampleRow label="Variants">
            <div className="flex flex-col gap-3 w-full max-w-[360px]">
              <Toast message="Exporting video..." variant="default" progress={45} />
              <Toast message="Export complete!" variant="success" progress={100} showCancel={false} />
              <Toast message="Export failed. Try again." variant="error" />
              <Toast message="Large file may take longer" variant="warning" progress={20} />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Default + progress:</strong> Video export progress indicator</li>
              <li><strong>Success:</strong> "Saved" confirmation after auto-save or share link copy</li>
            </ul>
          </div>
        </Section>

        <Section
          id="toolbar-item"
          title="Toolbar Item"
          description="Individual icon button used inside a Toolbar. 32×32px with an 8px corner radius. Selected state uses brand-secondary background with 85% opacity icon; default has 50% opacity icon."
          status="complete"
        >
          <ExampleRow label="Default vs Selected">
            <div className="flex items-center gap-3">
              <ToolbarItem icon={<MousePointer size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<MousePointer size={24} strokeWidth={2} />} selected />
            </div>
          </ExampleRow>
          <ExampleRow label="Various icons">
            <div className="flex items-center gap-3">
              <ToolbarItem icon={<Search size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<Crop size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<Scissors size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<MessageCircle size={24} strokeWidth={2} />} />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Timeline toolbar:</strong> Individual tool actions (select, crop, cut, comment)</li>
              <li><strong>Any icon button group:</strong> Composable inside a Toolbar container</li>
            </ul>
          </div>
        </Section>

        <Section
          id="toolbar"
          title="Toolbar"
          description="Floating toolbar container with rounded-2xl corners, surface background, primary border, and elevated shadow. Composes ToolbarItem children with 8px gap."
          status="complete"
        >
          <ExampleRow label="Default (from Figma)">
            <Toolbar>
              <ToolbarItem icon={<MousePointer size={24} strokeWidth={2} />} selected />
              <ToolbarItem icon={<Search size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<Crop size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<Scissors size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<MessageCircle size={24} strokeWidth={2} />} />
            </Toolbar>
          </ExampleRow>
          <ExampleRow label="Different selection">
            <Toolbar>
              <ToolbarItem icon={<MousePointer size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<Search size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<Crop size={24} strokeWidth={2} />} selected />
              <ToolbarItem icon={<Scissors size={24} strokeWidth={2} />} />
              <ToolbarItem icon={<MessageCircle size={24} strokeWidth={2} />} />
            </Toolbar>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Timeline toolbar:</strong> Floating tool palette below the video editor canvas</li>
              <li><strong>Canvas overlay:</strong> Contextual tool options for the active editing mode</li>
            </ul>
          </div>
        </Section>

        <Section
          id="video-control"
          title="Video Control"
          description="Playback controls with interactive progress bar, timecode display, play/pause toggle, and settings. Supports drag-to-seek."
          status="complete"
        >
          <ExampleRow label="Default">
            <div className="w-full">
              <VideoControl
                isPlaying={false}
                currentTime={67}
                totalTime={264}
                progress={25.4}
                onPlayPause={() => {}}
                onSeek={() => {}}
                onSettings={() => {}}
              />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Editor:</strong> Main video playback control bar below the preview canvas</li>
              <li><strong>Preview modal:</strong> Simplified playback controls in the full-screen preview overlay</li>
            </ul>
          </div>
        </Section>

        <Section
          id="modal"
          title="Modal"
          description="Dialog overlay with scrim backdrop, title bar, scrollable content area, and optional footer. Closes on Escape key and backdrop click. Three sizes."
          status="complete"
        >
          <ExampleRow label="Open modal">
            <div className="flex items-center gap-3">
              <Button variant="primary" size="small" onClick={() => { setModalSize('small'); setModalOpen(true); }}>Small</Button>
              <Button variant="primary" size="small" onClick={() => { setModalSize('medium'); setModalOpen(true); }}>Medium</Button>
              <Button variant="primary" size="small" onClick={() => { setModalSize('large'); setModalOpen(true); }}>Large</Button>
            </div>
          </ExampleRow>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Export settings"
            size={modalSize}
            footer={
              <>
                <Button variant="neutral" size="medium" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button variant="primary" size="medium" onClick={() => setModalOpen(false)}>Export</Button>
              </>
            }
          >
            <p className="text-text-secondary text-label-sm">
              Choose your export format and quality. The video will be rendered in the background and you'll receive a notification when it's ready.
            </p>
          </Modal>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Share dialog:</strong> Invite collaborators by email with permission controls</li>
              <li><strong>Export settings:</strong> Configure format, resolution, and quality before export</li>
              <li><strong>Confirmation:</strong> Destructive action confirmation before deleting a project</li>
            </ul>
          </div>
        </Section>

        <Section
          id="tabs"
          title="Tabs"
          description="Horizontal tab bar with underline indicator. Supports controlled and uncontrolled modes with keyboard-accessible tab switching."
          status="complete"
        >
          <ExampleRow label="Default">
            <div className="w-full">
              <Tabs
                tabs={[
                  { id: 'details', label: 'Details', content: <p className="text-text-secondary text-label-sm">Project name, description, and thumbnail settings.</p> },
                  { id: 'permissions', label: 'Permissions', content: <p className="text-text-secondary text-label-sm">Manage who can view, edit, and share this project.</p> },
                  { id: 'export', label: 'Export', content: <p className="text-text-secondary text-label-sm">Format, resolution, and quality settings for video export.</p> },
                ]}
                defaultTab="details"
              />
            </div>
          </ExampleRow>
          <ExampleRow label="Two tabs">
            <div className="w-full">
              <Tabs
                tabs={[
                  { id: 'comments', label: 'Comments', content: <p className="text-text-secondary text-label-sm">No comments yet. Be the first to leave feedback.</p> },
                  { id: 'activity', label: 'Activity', content: <p className="text-text-secondary text-label-sm">Video uploaded 2 hours ago. Last edited 30 minutes ago.</p> },
                ]}
              />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Project settings:</strong> Switch between Details, Permissions, and Export tabs</li>
              <li><strong>Inspector panel:</strong> Toggle between Comments and Activity views</li>
            </ul>
          </div>
        </Section>

        <Section
          id="tooltip"
          title="Tooltip"
          description="Contextual hint shown on hover or focus. Supports four positions with an arrow indicator and configurable show delay."
          status="complete"
        >
          <ExampleRow label="Positions">
            <div className="flex items-center gap-8 py-6">
              <Tooltip content="Top tooltip" position="top">
                <Button variant="neutral" size="small">Top</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" position="bottom">
                <Button variant="neutral" size="small">Bottom</Button>
              </Tooltip>
              <Tooltip content="Left tooltip" position="left">
                <Button variant="neutral" size="small">Left</Button>
              </Tooltip>
              <Tooltip content="Right tooltip" position="right">
                <Button variant="neutral" size="small">Right</Button>
              </Tooltip>
            </div>
          </ExampleRow>
          <ExampleRow label="With icon button">
            <div className="py-4">
              <Tooltip content="Settings" position="bottom">
                <button className="p-2 rounded-lg bg-bg-subtle hover:bg-bg-hover transition-colors">
                  <Settings className="size-5" strokeWidth={1.5} />
                </button>
              </Tooltip>
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Toolbar icons:</strong> Label icon-only buttons in the timeline toolbar</li>
              <li><strong>Sidebar nav:</strong> Show page names on hover for collapsed sidebar icons</li>
            </ul>
          </div>
        </Section>

        <Section
          id="checkbox"
          title="Checkbox"
          description="Selection control with optional label and description. Uses brand-primary for checked state with an animated checkmark."
          status="complete"
        >
          <ExampleRow label="States">
            <div className="flex flex-col gap-4">
              <Checkbox label="Enable auto-save" description="Save changes automatically every 30 seconds" defaultChecked />
              <Checkbox label="Show grid overlay" />
              <Checkbox label="Normalize audio" description="Automatically adjust volume levels across clips" />
            </div>
          </ExampleRow>
          <ExampleRow label="Disabled">
            <div className="flex flex-col gap-4">
              <Checkbox label="Managed by admin" description="This setting cannot be changed" disabled defaultChecked />
              <Checkbox label="Unavailable" disabled />
            </div>
          </ExampleRow>
          <ExampleRow label="Without label">
            <div className="flex items-center gap-4">
              <Checkbox defaultChecked />
              <Checkbox />
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Settings panel:</strong> Multi-select options like export formats or notification preferences</li>
              <li><strong>Share modal:</strong> "Allow comments", "Allow downloads" as independent toggles</li>
            </ul>
          </div>
        </Section>

        <Section
          id="radio-group"
          title="Radio Group"
          description="Single-select group with label and optional description per option. Supports controlled and uncontrolled modes."
          status="complete"
        >
          <ExampleRow label="Default">
            <RadioGroup
              options={[
                { value: '720', label: '720p', description: 'Standard definition — smaller file size' },
                { value: '1080', label: '1080p', description: 'Full HD — recommended for most exports' },
                { value: '4k', label: '4K', description: 'Ultra HD — best quality, largest file' },
              ]}
              defaultValue="1080"
            />
          </ExampleRow>
          <ExampleRow label="Without descriptions">
            <RadioGroup
              options={[
                { value: 'mp4', label: 'MP4' },
                { value: 'webm', label: 'WebM' },
                { value: 'mov', label: 'MOV' },
              ]}
              defaultValue="mp4"
            />
          </ExampleRow>
          <ExampleRow label="Disabled">
            <RadioGroup
              options={[
                { value: 'free', label: 'Free', description: 'Watermarked, 720p max' },
                { value: 'pro', label: 'Pro', description: 'No watermark, up to 4K' },
              ]}
              defaultValue="free"
              disabled
            />
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Export dialog:</strong> Resolution or format selection</li>
              <li><strong>Project settings:</strong> Visibility (private / unlisted / public)</li>
            </ul>
          </div>
        </Section>

        <Section
          id="secondary-nav-item"
          title="SecondaryNavItem"
          description="Navigation item with icon and label for secondary navigation. Active state uses brand-tertiary background with brand-primary text."
          status="complete"
        >
          <ExampleRow label="Active">
            <div className="w-[223px]">
              <SecondaryNavItem icon={<Home className="size-full" strokeWidth={1.5} />} label="Profile" active />
            </div>
          </ExampleRow>
          <ExampleRow label="Inactive">
            <div className="w-[223px]">
              <SecondaryNavItem icon={<Film className="size-full" strokeWidth={1.5} />} label="Billing" />
            </div>
          </ExampleRow>
          <ExampleRow label="Inactive (hover to preview)">
            <div className="w-[223px]">
              <SecondaryNavItem icon={<Book className="size-full" strokeWidth={1.5} />} label="Notifications" />
            </div>
          </ExampleRow>
        </Section>

        <Section
          id="secondary-nav"
          title="SecondaryNav"
          description="Vertical navigation panel with heading and SecondaryNavItem children. Used for secondary navigation within settings or detail views."
          status="complete"
        >
          <ExampleRow label="Settings example">
            <div className="h-[400px]">
              <SecondaryNav title="Settings">
                <SecondaryNavItem icon={<Home className="size-full" strokeWidth={1.5} />} label="Profile" active />
                <SecondaryNavItem icon={<Film className="size-full" strokeWidth={1.5} />} label="Billing" />
                <SecondaryNavItem icon={<Book className="size-full" strokeWidth={1.5} />} label="Notifications" />
                <SecondaryNavItem icon={<Folder className="size-full" strokeWidth={1.5} />} label="Media" />
              </SecondaryNav>
            </div>
          </ExampleRow>
          <div className="mt-2 bg-bg-faint border border-border-secondary rounded-lg p-4 text-[12px] text-text-secondary">
            <p className="font-medium text-text-primary mb-1">Example uses</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Settings pages:</strong> Profile, Billing, Notifications, Media tabs</li>
              <li><strong>Detail views:</strong> Sub-navigation within a secondary pane</li>
            </ul>
          </div>
        </Section>

        <hr className="border-border-secondary" />

        {/* ────────────────── COMPLETENESS AUDIT ────────────────── */}

        <Section
          id="completeness"
          title="Completeness Audit"
          description="Full reassessment of design system coverage across tokens, components, accessibility, dark mode, testing, and documentation."
          status="partial"
        >
          <div className="space-y-4">
            {/* Scoreboard */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                <p className="text-[28px] font-semibold text-emerald-700">16</p>
                <p className="text-[11px] text-emerald-600 font-medium">Components</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                <p className="text-[28px] font-semibold text-emerald-700">7</p>
                <p className="text-[11px] text-emerald-600 font-medium">Token categories</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                <p className="text-[28px] font-semibold text-emerald-700">5</p>
                <p className="text-[11px] text-emerald-600 font-medium">Tested components</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                <p className="text-[28px] font-semibold text-emerald-700">3</p>
                <p className="text-[11px] text-emerald-600 font-medium">Guideline files</p>
              </div>
            </div>

            {/* What's solid */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="font-medium text-[13px] text-emerald-800 mb-2">What's solid</p>
              <ul className="text-[12px] text-emerald-700 list-disc pl-4 space-y-1">
                <li>All 16 components are functional with well-defined TypeScript interfaces and sensible defaults</li>
                <li>Unified token layer: all components consume CSS custom properties via Tailwind utilities — zero hardcoded hex/rgba values</li>
                <li>Token architecture: <code>:root</code> vars + <code>@theme inline</code> registration = full Tailwind class support</li>
                <li>Dark mode: complete <code>.dark</code> overrides for all Astra tokens; ThemeProvider with localStorage persistence and system preference detection</li>
                <li>Semantic type scale aligned to Figma: <code>text-title</code>, <code>text-heading</code>, <code>text-label</code>, <code>text-input</code>, <code>text-video-title</code>, <code>text-caption</code>; <code>font-book</code> (450) / <code>font-semibold</code> (600) weights; <code>font-display</code> + <code>font-sans</code> families</li>
                <li>Focus rings use <code>focus:ring-brand-primary</code> consistently across all interactive components</li>
                <li>Components support <code>className</code> pass-through for composition</li>
                <li>Dual ESM/CJS build with type exports</li>
                <li>SelectField has excellent accessibility: full ARIA roles, keyboard nav (Arrow, Enter, Space, Escape)</li>
                <li>5 components have Vitest tests (Button, Badge, SwitchField, Toast, cn utility)</li>
                <li>New form components: InputField, TextareaField, SelectField all share a consistent label/description pattern</li>
                <li>New composition components: AstraLogo (scalable brand mark), PromptPane (chat sidebar with children slot)</li>
                <li>Surface tokens (<code>--surface-bg</code>, <code>--surface-hover</code>) support both light and dark modes without conditional classes</li>
                <li>Usage guidelines authored in <code>guidelines/</code> folder (Guidelines.md, Components.md, Tokens.md) for Figma Make transfer</li>
              </ul>
            </div>

            {/* Resolved items */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="font-medium text-[13px] text-emerald-800 mb-2">Resolved</p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="text-left text-emerald-600">
                    <th className="pb-1 font-medium w-[140px]">Area</th>
                    <th className="pb-1 font-medium">Resolution</th>
                  </tr>
                </thead>
                <tbody className="text-emerald-700">
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Token consumption</td>
                    <td>All components use CSS custom properties via Tailwind utilities</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Token unification</td>
                    <td>Unified Astra token layer in <code>globals.css</code>; figma-tokens.css retained as Figma reference</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Typography tokens</td>
                    <td>Semantic type scale with paired line-heights and custom font weights registered in <code>@theme inline</code></td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Dark mode tokens</td>
                    <td>Complete <code>.dark</code> overrides: brand, status, surfaces, text, borders, bg tints, toast-cancel</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Dark mode toggle</td>
                    <td>ThemeProvider with <code>useTheme()</code> hook, localStorage persistence, <code>prefers-color-scheme</code> detection</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Focus ring tokens</td>
                    <td>All interactive components now use <code>focus:ring-brand-primary</code> instead of generic <code>blue-500</code> / <code>gray-400</code></td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Surface tokens</td>
                    <td>Added <code>--surface-bg</code> and <code>--surface-hover</code> with light/dark values — eliminates conditional <code>bg-white dark:bg-surface-dark</code> patterns</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Form field pattern</td>
                    <td>Consistent label/input/description layout across InputField, TextareaField, and SelectField — shared typography tokens and spacing</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Missing components</td>
                    <td>Added InputField, TextareaField, AstraLogo, and PromptPane — reducing component gap</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="py-1.5">Usage guidelines</td>
                    <td>Three guideline files authored in <code>guidelines/</code> (Guidelines.md, Components.md, Tokens.md) — excluded from npm package</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Remaining gaps */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-medium text-[13px] text-amber-800 mb-2">Remaining gaps</p>
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="text-left text-amber-600">
                    <th className="pb-1 font-medium w-[140px]">Area</th>
                    <th className="pb-1 font-medium">Issue</th>
                    <th className="pb-1 font-medium w-[70px]">Priority</th>
                  </tr>
                </thead>
                <tbody className="text-amber-800">
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Accessibility</td>
                    <td>Most components lack ARIA roles/labels. SegmentedControl needs <code>role="tablist"</code> + keyboard nav. SwitchField needs <code>role="switch"</code> + <code>aria-checked</code>. Toast needs <code>role="status"</code> + <code>aria-live</code>. VideoControl needs slider ARIA. Only SelectField has comprehensive a11y.</td>
                    <td><span className="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">High</span></td>
                  </tr>
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Missing components</td>
                    <td>No Modal, Tooltip, Dropdown Menu, Tabs, Checkbox, Radio</td>
                    <td><span className="bg-amber-200 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Medium</span></td>
                  </tr>
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Component states</td>
                    <td>No loading states on interactive components. No error states on form components. InputField, TextareaField, and SelectField have empty/default states. AvatarGroup, Badge, SegmentedControl lack disabled state.</td>
                    <td><span className="bg-amber-200 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Medium</span></td>
                  </tr>
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Usage docs</td>
                    <td>Guidelines authored (Components.md, Tokens.md) but per-component accessibility guidelines still missing</td>
                    <td><span className="bg-amber-200 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Medium</span></td>
                  </tr>
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Test coverage</td>
                    <td>5 of 16 components tested (Button, Badge, SwitchField, Toast, cn). Missing: Avatar, AvatarGroup, AstraLogo, ChatBubbles, InputField, PromptInput, PromptPane, SearchComponent, SegmentedControl, SelectField, TextareaField, VideoControl</td>
                    <td><span className="bg-amber-200 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Medium</span></td>
                  </tr>
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Spacing tokens</td>
                    <td>Figma spacers are unitless numbers; need <code>px</code> or <code>rem</code> conversion and <code>@theme inline</code> registration</td>
                    <td><span className="bg-yellow-100 text-yellow-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Low</span></td>
                  </tr>
                  <tr className="border-t border-amber-200">
                    <td className="py-1.5">Animation system</td>
                    <td>Transitions are generally consistent (200ms default) but easing functions vary. No documented transition timing or motion tokens.</td>
                    <td><span className="bg-yellow-100 text-yellow-700 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Low</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Accessibility detail */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-medium text-[13px] text-red-800 mb-2">Accessibility by component</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">SelectField</span><span className="text-emerald-600 font-medium">Excellent</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">Badge</span><span className="text-emerald-600 font-medium">Good</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">Button</span><span className="text-amber-600 font-medium">Fair</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">Avatar</span><span className="text-amber-600 font-medium">Fair</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">PromptInput</span><span className="text-amber-600 font-medium">Fair</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">SearchComponent</span><span className="text-amber-600 font-medium">Fair</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">SegmentedControl</span><span className="text-red-600 font-medium">Poor</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">SwitchField</span><span className="text-red-600 font-medium">Poor</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">Toast</span><span className="text-red-600 font-medium">Poor</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">VideoControl</span><span className="text-red-600 font-medium">Poor</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">ChatBubbles</span><span className="text-red-600 font-medium">Poor</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">AvatarGroup</span><span className="text-amber-600 font-medium">Fair</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">InputField</span><span className="text-emerald-600 font-medium">Good</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">TextareaField</span><span className="text-emerald-600 font-medium">Good</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">AstraLogo</span><span className="text-emerald-600 font-medium">Good</span></div>
                <div className="flex justify-between border-b border-red-100 py-1"><span className="text-red-700">PromptPane</span><span className="text-amber-600 font-medium">Fair</span></div>
              </div>
            </div>

            {/* Guidelines writing order */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-medium text-[13px] text-blue-800 mb-2">Recommended next steps</p>
              <ol className="text-[12px] text-blue-700 list-decimal pl-4 space-y-1">
                <li><strong>Accessibility pass</strong> - Add ARIA roles, keyboard nav, and live regions to SegmentedControl, SwitchField, Toast, VideoControl, ChatBubbles</li>
                <li><strong>Component states</strong> - Add loading, error, and disabled states where missing</li>
                <li><strong>Token reference doc</strong> - Canonical color, typography, spacing, and radius values</li>
                <li><strong>Component guidelines</strong> - Expand existing guidelines with per-component accessibility docs and variant guidance</li>
                <li><strong>Test coverage</strong> - Expand from 5/16 to full coverage, prioritizing interactive components (SelectField, InputField, TextareaField, SegmentedControl, VideoControl)</li>
                <li><strong>Missing components</strong> - Modal, Tooltip, Tabs, Checkbox, Radio</li>
                <li><strong>Spacing tokens</strong> - Register Figma spacer scale in <code>@theme inline</code></li>
                <li><strong>Motion tokens</strong> - Define standard durations and easing functions</li>
              </ol>
            </div>
          </div>
        </Section>

        <footer className="text-[11px] text-text-tertiary pt-4 pb-8 border-t border-border-secondary">
          Astra Design System Overview &middot; @brettmcm/astraui v0.1.1 &middot; Generated {new Date().toLocaleDateString()}
        </footer>
      </main>
    </div>
  )
}
