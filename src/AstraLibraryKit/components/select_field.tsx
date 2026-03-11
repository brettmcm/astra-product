import { cn } from "./utils";
import { useState, useRef, useEffect } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: SelectOption[];
  value?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  state?: "empty" | "default";
  disabled?: boolean;
  className?: string;
}

export function SelectField({
  options,
  value = "",
  onSelect,
  placeholder = "Select an option",
  label,
  description,
  state = "default",
  disabled = false,
  className,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const optionNodesRef = useRef<(HTMLDivElement | null)[]>([]);

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;
  const isEmpty = !selectedOption;

  const MAX_VISIBLE = 5;
  const ROW_PX = 36;

  const queueScrollIntoView = (index: number) => {
    if (index < 0) return;
    requestAnimationFrame(() => {
      const el = optionNodesRef.current[index];
      el?.scrollIntoView({ block: "nearest" });
    });
  };

  const openDropdown = () => {
    if (disabled) return;
    setIsClosing(false);
    setIsOpen(true);
    const startIndex = Math.max(
      options.findIndex((o) => o.value === value),
      0,
    );
    setFocusedIndex(startIndex);
    queueScrollIntoView(startIndex);
  };

  const closeDropdown = () => {
    if (!isOpen) return;
    setIsClosing(true);
    const t = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setFocusedIndex(-1);
    }, 180);
    return () => clearTimeout(t);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (disabled) return;

      if (!isOpen) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDropdown();
        }
        return;
      }

      switch (event.key) {
        case "Escape":
          event.preventDefault();
          closeDropdown();
          break;
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const next = Math.min(prev + 1, options.length - 1);
            queueScrollIntoView(next);
            return next;
          });
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const next = Math.max(prev - 1, 0);
            queueScrollIntoView(next);
            return next;
          });
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < options.length) {
            handleOptionClick(options[focusedIndex].value);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, options, disabled]);

  const handleOptionClick = (optionValue: string) => {
    onSelect(optionValue);
    closeDropdown();
  };

  return (
    <div className={cn("relative", className)} ref={selectRef}>
      <div className="flex flex-col gap-1.5">
        {label && (
          <span className="text-body-md font-medium text-text-primary">
            {label}
          </span>
        )}

        <div
          className={cn(
            "bg-bg-subtle flex items-center gap-2 rounded-lg px-3 py-2.5 cursor-pointer transition-colors",
            !disabled && "hover:bg-bg-hover",
            disabled && "opacity-50 cursor-not-allowed",
          )}
          onClick={() => (isOpen ? closeDropdown() : openDropdown())}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? "select-list" : undefined}
          aria-activedescendant={
            focusedIndex >= 0 ? `select-opt-${focusedIndex}` : undefined
          }
        >
          <span
            className={cn(
              "flex-1 font-sans text-body-md leading-[1.4]",
              isEmpty
                ? "text-text-secondary font-normal"
                : "text-text-primary font-normal",
            )}
          >
            {displayValue}
          </span>
          <svg
            className={cn(
              "shrink-0 text-text-secondary transition-transform duration-200",
              isOpen && "rotate-180",
            )}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {description && (
          <span className="text-body-sm text-text-secondary">
            {description}
          </span>
        )}
      </div>

      {(isOpen || isClosing) && !disabled && (
        <div
          ref={optionsRef}
          id="select-list"
          className={cn(
            "absolute top-full left-0 right-0 mt-1 bg-surface-bg border border-border-primary rounded-lg shadow-lg z-50 overflow-y-auto",
            "transition-[opacity,transform] duration-200",
            isClosing
              ? "opacity-0 -translate-y-1"
              : "opacity-100 translate-y-0",
          )}
          role="listbox"
          style={{
            maxHeight: `${ROW_PX * Math.min(MAX_VISIBLE, options.length)}px`,
          }}
          data-state={isClosing ? "closing" : "open"}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              id={`select-opt-${index}`}
              className={cn(
                "px-3 py-2 cursor-pointer text-body-md font-sans transition-colors",
                "hover:bg-bg-hover",
                focusedIndex === index && "bg-bg-hover",
                value === option.value &&
                  "bg-brand-tertiary text-brand-primary font-medium",
              )}
              onClick={() => handleOptionClick(option.value)}
              onMouseEnter={() => setFocusedIndex(index)}
              role="option"
              aria-selected={value === option.value}
              ref={(el) => {
                optionNodesRef.current[index] = el;
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
