import { cn } from './utils';
import { Search } from 'lucide-react';
import { InputHTMLAttributes, KeyboardEvent, useEffect, useState } from 'react';

interface SearchComponentProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onKeyDown'> {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function SearchComponent({
  value = '',
  onChange,
  onSearch,
  placeholder = 'Search',
  disabled = false,
  className,
  ...props
}: SearchComponentProps) {
  // === Ported typing animation from file_1 (no prop changes) ===
  const words = ['anything', 'clips', 'audio'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const base = placeholder?.trim() || 'Search';
  const currentWord = words[currentWordIndex];
  const animatedPlaceholder = `${base} ${currentWord.slice(0, currentCharIndex)}`.trim();

  useEffect(() => {
    // Only animate when field is empty so we don't distract while typing
    if (value && value.length > 0) return;

    const typingSpeed = 100; // ms per char
    const pauseAfterComplete = 2000; // ms after a word

    let timeout: ReturnType<typeof setTimeout>;

    if (currentCharIndex < currentWord.length) {
      timeout = setTimeout(() => setCurrentCharIndex((c) => c + 1), typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentCharIndex(0);
        setCurrentWordIndex((i) => (i + 1) % words.length);
      }, pauseAfterComplete);
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentWord, value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  return (
    <div className={cn('content-stretch flex gap-[8px] items-center w-full', className)}>
      <div className="bg-surface-bg box-border content-stretch flex gap-[8px] h-[40px] items-center px-[20px] py-[12px] relative rounded-[64px] w-full focus-within:ring-2 focus-within:ring-border-primary transition-all">
        <Search size={16} className="shrink-0 text-text-secondary" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={value ? placeholder : animatedPlaceholder}
          disabled={disabled}
          className="bg-transparent font-sans font-normal text-input-sm text-text-primary placeholder:text-text-secondary border-none outline-none w-full"

          {...props}
        />
      </div>
    </div>
  );
}
