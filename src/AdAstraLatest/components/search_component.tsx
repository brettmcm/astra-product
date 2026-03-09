import { cn } from './utils';
import { useState, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import { Search } from './icons';

interface SearchComponentProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  width?: string;
  className?: string;
}

export function SearchComponent({
  value: controlledValue,
  placeholder = 'Search',
  onChange,
  onSearch,
  onFocus,
  onBlur,
  disabled = false,
  width = 'w-[177px]',
  className
}: SearchComponentProps) {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const words = ['anything', 'clips', 'audio'];
  const currentWord = words[currentWordIndex];
  const displayedText = 'Search ' + currentWord.slice(0, currentCharIndex);
  
  useEffect(() => {
    const typingSpeed = 100; // Speed of typing each character
    const pauseAfterComplete = 2000; // Pause after completing a word
    const pauseBeforeNext = 500; // Pause before starting next word
    
    let timeout: NodeJS.Timeout;
    
    if (isTyping && currentCharIndex < currentWord.length) {
      // Continue typing current word
      timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
    } else if (currentCharIndex === currentWord.length) {
      // Completed current word, pause then move to next
      timeout = setTimeout(() => {
        setCurrentCharIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, pauseAfterComplete);
    }
    
    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentWord, currentWordIndex, isTyping, words.length]);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };
  
  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };
  
  return (
    <div className={cn('flex gap-[8px] items-center', className)}>
      <div 
        className={cn(
          'bg-[#22222c] box-border flex gap-[4px] h-[40px] items-center px-[20px] py-[12px] relative rounded-[64px] shrink-0',
          width,
          disabled && 'opacity-50 cursor-not-allowed',
          isFocused && 'ring-2 ring-white/20'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn(
          "transition-opacity duration-200",
          isHovered ? "opacity-100" : "opacity-50"
        )}>
          <Search size={16} className="text-white" />
        </div>
        <input
          type="text"
          value={value}
          placeholder={displayedText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={cn(
            "font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[14px] bg-transparent border-none outline-none w-full",
            "text-white placeholder:text-white placeholder:opacity-70",
            "disabled:cursor-not-allowed"
          )}
          style={{ fontVariationSettings: "'wdth' 100" }}
        />
      </div>
    </div>
  );
}