import { cn } from './utils'
import { useState } from 'react'
import { PromptInput } from './prompt_input'
import { Badge } from './badge'

interface Suggestion {
  label: string;
  prompt: string;
}

interface AIVideoCreationProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  onAttach?: () => void;
  suggestions?: Suggestion[];
  onSuggestionClick?: (suggestion: Suggestion) => void;
  disabled?: boolean;
  className?: string;
}

const DEFAULT_SUGGESTIONS: Suggestion[] = [
  { label: 'Sizzle reel', prompt: 'A Sizzle Reel of a design conference' },
  { label: 'Documentary', prompt: 'A Documentary about a design conference' },
  { label: 'Ad', prompt: 'An Ad for a design conference' },
]

export function AIVideoCreation({
  value,
  placeholder,
  onChange,
  onSend,
  onAttach,
  suggestions = DEFAULT_SUGGESTIONS,
  onSuggestionClick,
  disabled,
  className,
}: AIVideoCreationProps) {
  const [inputValue, setInputValue] = useState(value ?? '')

  const handleChange = (val: string) => {
    setInputValue(val)
    onChange?.(val)
  }

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setInputValue(suggestion.prompt)
    onChange?.(suggestion.prompt)
    onSuggestionClick?.(suggestion)
  }

  return (
    <div
      className={cn(
        'bg-brand-secondary border border-border-primary flex flex-col gap-4 items-start p-6 rounded-2xl w-full',
        className
      )}
    >
      <p className="font-sans font-medium text-heading text-text-primary">
        ✦ Create a new video
      </p>
      <PromptInput
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onSend={onSend}
        onAttach={onAttach}
        disabled={disabled}
        className="w-full"
      />
      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-3 items-center">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.label}
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={disabled}
              className="focus:outline-none disabled:pointer-events-none"
            >
              <Badge label={suggestion.label} variant="brand" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
