import { cn } from "./utils";
import { useState, useRef, useEffect, ReactNode } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: SelectOption[];
  value?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  state?: "empty" | "default";
  disabled?: boolean;
}

export function SelectField({
  options,
  value = "",
  onSelect,
  placeholder = "Select...",
  state = "default",
  disabled = false,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // exit animation flag
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const optionNodesRef = useRef<(HTMLDivElement | null)[]>([]);

  const selectedOption = options.find(
    (option) => option.value === value,
  );
  const displayValue = selectedOption
    ? selectedOption.label
    : placeholder;
  const isEmpty = !selectedOption;
  const currentState = isEmpty ? "empty" : state;

  const MAX_VISIBLE_WHEN_EMPTY = 2;
  const MAX_VISIBLE_WHEN_FILLED = 2;
  const ROW_PX = 36; // approx row height
  const maxVisible = isEmpty
    ? MAX_VISIBLE_WHEN_EMPTY
    : MAX_VISIBLE_WHEN_FILLED;

  // ---- helpers ----
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

  // ---- outside click to close ----
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
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
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
        case " ": // Space selects when open
          event.preventDefault();
          if (
            focusedIndex >= 0 &&
            focusedIndex < options.length
          ) {
            handleOptionClick(options[focusedIndex].value);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, options, disabled]);

  const handleOptionClick = (optionValue: string) => {
    onSelect(optionValue);
    closeDropdown();
  };

  const icon = (
    <div className="h-[4px] relative shrink-0 w-[16px]">
      <div className="absolute bottom-[-18.75%] left-0 right-0 top-[-18.75%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 6"
        >
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

  const containerWidth =
    currentState === "empty" ? "w-[255px]" : "w-[200px]";
  const textColor =
    currentState === "empty"
      ? "text-text-secondary"
      : "text-text-primary";

  return (
    <div
      className={cn("relative", containerWidth)}
      ref={selectRef}
    >
      <div className="content-stretch flex flex-col gap-[16px] items-start">
        <div
          className={cn(
            "bg-bg-subtle box-border content-stretch flex gap-[8px] items-center p-[12px] rounded-[8px] shrink-0 cursor-pointer transition-colors",
            containerWidth,
            !disabled &&
              "hover:bg-bg-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1",
            disabled && "opacity-50 cursor-not-allowed",
          )}
          onClick={() =>
            isOpen ? closeDropdown() : openDropdown()
          }
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? "select-list" : undefined}
          aria-activedescendant={
            focusedIndex >= 0
              ? `select-opt-${focusedIndex}`
              : undefined
          }
        >
          <p
            className={cn(
              "flex-[1_0_0] font-sans font-normal min-h-px min-w-px relative shrink-0 text-body-lg whitespace-pre-wrap",
              textColor,
            )}
          >
            {displayValue}
          </p>
          <div
            className={cn(
              "transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          >
            {icon}
          </div>
        </div>
      </div>
      {(isOpen || isClosing) && !disabled && (
        <div
          ref={optionsRef}
          id="select-list"
          className={cn(
            "absolute top-full left-0 mt-1 bg-background border border-border-medium rounded-[8px] shadow-lg z-50 overflow-y-auto",
            containerWidth,
            "transition-[opacity,transform] duration-200",
            isClosing
              ? "opacity-0 -translate-y-1"
              : "opacity-100 translate-y-0",
          )}
          role="listbox"
          style={{
            maxHeight: `${Math.max(ROW_PX * Math.min(maxVisible, options.length), ROW_PX * 2)}px`,
          }}
          data-state={isClosing ? "closing" : "open"}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              id={`select-opt-${index}`}
              className={cn(
                "px-3 py-2 cursor-pointer text-body-lg font-sans transition-colors",
                "hover:bg-bg-hover",
                focusedIndex === index && "bg-bg-hover",
                value === option.value &&
                  "bg-brand-wash text-brand font-medium",
              )}
              onClick={() => handleOptionClick(option.value)}
              onMouseEnter={() => setFocusedIndex(index)}
              role="option"
              aria-selected={value === option.value}
              ref={(el) => { optionNodesRef.current[index] = el; }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}