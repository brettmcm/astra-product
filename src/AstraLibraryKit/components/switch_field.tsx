import { cn } from './utils'
import { useState } from 'react'

interface SwitchFieldProps {
  label?: string;
  description?: string;
  hasDescription?: boolean;
  showLabel?: boolean;
  defaultSelected?: boolean;
  onChange?: (selected: boolean) => void;
  disabled?: boolean;
}

export function SwitchField({
  label = "Label",
  description = "Description",
  hasDescription = true,
  showLabel = true,
  defaultSelected = true,
  onChange,
  disabled = false
}: SwitchFieldProps) {
  const [selected, setSelected] = useState(defaultSelected);
  
  const handleToggle = () => {
    if (disabled) return;
    const newSelected = !selected;
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div className="flex gap-4 items-start w-[360px]">
      {/* Label and description section */}
      <div className="flex flex-1 flex-col gap-2 min-h-0 min-w-0">
        <div className="flex flex-col font-medium gap-4 leading-[1.4] text-base w-full">
          {showLabel && (
            <p className="text-[rgba(0,0,0,0.85)]">
              {label}
            </p>
          )}
          {hasDescription && (
            <p className="text-[rgba(0,0,0,0.5)] min-w-full whitespace-pre-wrap">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Switch toggle */}
      <button
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          "flex items-center h-[18.389px] w-[31.995px] rounded-[25811100px] transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          selected 
            ? "bg-[#5250f3] pl-[14.767px] pr-[0.769px] py-[0.769px]" 
            : "bg-[rgba(0,0,0,0.05)] px-[1.769px] py-[0.769px]"
        )}
      >
        <div className="bg-white rounded-[25811100px] size-[15.998px] transition-transform duration-200" />
      </button>
    </div>
  );
}