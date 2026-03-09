import { cn } from './utils';
import { useState } from 'react';

interface SwitchFieldProps {
  label?: string;
  description?: string;
  showLabel?: boolean;
  hasDescription?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function SwitchField({
  label = "Label",
  description = "Description", 
  showLabel = true,
  hasDescription = false,
  checked = false,
  onChange,
  disabled = false
}: SwitchFieldProps) {
  const [internalChecked, setInternalChecked] = useState(checked);
  
  const isChecked = checked !== undefined ? checked : internalChecked;
  
  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const selectField = (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[1.4] relative shrink-0 text-[16px] w-full">
        {showLabel && (
          <p className="relative shrink-0 text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        {hasDescription && (
          <p className="min-w-full relative shrink-0 text-[rgba(0,0,0,0.5)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );

  const element = (
    <div 
      aria-hidden="true" 
      className="absolute border-[0.769px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[25811100px]" 
    />
  );

  const primitiveSpan = (
    <div className="bg-white relative rounded-[25811100px] shrink-0 size-[15.998px] transition-transform duration-200 ease-in-out">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.998px]" />
    </div>
  );

  return (
    <div className={cn("content-stretch flex gap-[16px] items-start w-[360px]", disabled && "opacity-50")}>
      {selectField}
      <button
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          "box-border content-stretch flex h-[18.389px] items-center py-[0.769px] relative rounded-[25811100px] shrink-0 w-[31.995px] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#5250f3] focus:ring-offset-2",
          isChecked 
            ? "bg-[#5250f3] pl-[14.767px] pr-[0.769px] hover:bg-[#4441d9]" 
            : "bg-[rgba(0,0,0,0.05)] px-[1.769px] hover:bg-[rgba(0,0,0,0.1)]",
          disabled && "cursor-not-allowed hover:bg-[rgba(0,0,0,0.05)]"
        )}
        role="switch"
        aria-checked={isChecked}
        aria-label={label}
      >
        {element}
        {primitiveSpan}
      </button>
    </div>
  );
}