import { cn } from './utils';
import { ReactNode } from 'react';

interface BadgeProps {
  label?: string;
  variant?: 'Default' | 'Success' | 'Warning' | 'Danger' | 'Brand' | 'Secondary';
  isRemovable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export function Badge({ 
  label = 'Label', 
  variant = 'Default', 
  isRemovable = true, 
  onRemove,
  className 
}: BadgeProps) {
  const baseStyles = 'box-border flex gap-[8px] items-center overflow-hidden px-[8px] py-[6px] rounded-[8px] w-fit h-fit';
  
  const variantStyles = {
    Default: 'bg-[#1e1e1e] text-white',
    Success: 'bg-[#47fc74] text-[#1e1e1e]',
    Warning: 'bg-[#f8d33f] text-[#1e1e1e]',
    Danger: 'bg-[#cf2828] text-[#1e1e1e]',
    Brand: 'bg-[#5250f3] text-white',
    Secondary: 'bg-[#d1d0f9] text-[#1e1e1e]'
  };

  const getIconColor = () => {
    switch (variant) {
      case 'Default':
      case 'Brand':
        return 'rgba(255, 255, 255, 1)';
      default:
        return 'rgba(30, 30, 30, 1)';
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      <p className="font-medium leading-[1.4] shrink-0 text-[14px]" style={{ fontFamily: 'Instrument Sans, sans-serif', fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
      {isRemovable && (
        <div 
          className="relative shrink-0 w-[6px] h-[6px] cursor-pointer hover:opacity-70 transition-opacity" 
          onClick={handleRemove}
        >
          <div className="absolute inset-[-12.5%]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path 
                d="M7 1L1 7M1 1L7 7" 
                stroke={getIconColor()} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}