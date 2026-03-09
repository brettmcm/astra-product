import { cn } from './utils';
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
    <div className={cn('content-stretch flex gap-[8px] items-center', className)}>
      <div className="bg-[#22222c] box-border content-stretch flex gap-[4px] h-[40px] items-center px-[20px] py-[12px] relative rounded-[64px] shrink-0 w-[177px] focus-within:ring-2 focus-within:ring-white/20 transition-all">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={value ? placeholder : animatedPlaceholder}
          disabled={disabled}
          className="bg-transparent font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.4] opacity-70 text-[14px] text-white placeholder:text-white placeholder:opacity-70 border-none outline-none w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
          {...props}
        />
      </div>
    </div>
  );
}
