import { cn } from './utils';
import { useState, useRef, useEffect } from 'react';

interface SelectFieldOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  value?: string;
  label?: string;
  showLabel?: boolean;
  description?: string;
  hasDescription?: boolean;
  placeholder?: string;
  options?: SelectFieldOption[];
  disabled?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function SelectField({
  value = '',
  label = 'Label',
  showLabel = true,
  description = 'Description',
  hasDescription = true,
  placeholder = 'Select an option',
  options = [],
  disabled = false,
  onChange,
  onFocus,
  onBlur
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;
  const isEmpty = !value;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < options.length) {
            handleSelect(options[focusedIndex].value);
          }
          break;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, focusedIndex, options]);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      onFocus?.();
    }
  };

  const handleBlur = () => {
    onBlur?.();
  };

  const ChevronIcon = () => (
    <div className="h-[4px] relative shrink-0 w-[16px]">
      <div className="absolute bottom-[-18.75%] left-0 right-0 top-[-18.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 6">
          <g opacity="0.5">
            <path 
              d="M4 1L8 5L12 1" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeOpacity="0.5" 
              strokeWidth="1.5" 
            />
          </g>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-[8px] items-start w-[360px] relative" ref={selectRef}>
      <div 
        className={cn(
          "bg-black/5 relative rounded-[8px] w-full cursor-pointer transition-colors",
          disabled && "opacity-50 cursor-not-allowed",
          isOpen && "ring-2 ring-blue-500 ring-opacity-50"
        )}
        onClick={handleClick}
        onBlur={handleBlur}
        tabIndex={0}
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border flex gap-[8px] items-center px-[20px] py-[12px] relative w-full h-[48px]">
            <p className={cn(
              "flex-1 font-normal text-[16px] leading-[1.4] whitespace-pre-wrap",
              isEmpty ? "text-black/50" : "text-black/85"
            )}>
              {displayValue}
            </p>
            <div className={cn(
              "transition-transform duration-200",
              isOpen && "rotate-180"
            )}>
              <ChevronIcon />
            </div>
          </div>
        </div>
        
        {isOpen && options.length > 0 && (
          <div 
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto"
          >
            {options.map((option, index) => (
              <div
                key={option.value}
                className={cn(
                  "px-3 py-2 cursor-pointer transition-colors text-[16px]",
                  focusedIndex === index && "bg-blue-50",
                  value === option.value && "bg-blue-100 text-blue-900",
                  "hover:bg-gray-50"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(option.value);
                }}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}