import { cn } from './utils';
import { ReactNode } from 'react';

interface BadgeProps {
  label?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'brand' | 'secondary';
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export function Badge({
  label = 'Label',
  variant = 'default',
  removable = false,
  onRemove,
  className
}: BadgeProps) {
  const variants = {
    default: 'bg-[#eaeaff] text-[rgba(0,0,0,0.85)]',
    success: 'bg-[#47fc74] text-[#1e1e1e]',
    warning: 'bg-[#f8d33f] text-[#1e1e1e]',
    danger: 'bg-[#cf2828] text-[#1e1e1e]',
    brand: 'bg-[#5250f3] text-white',
    secondary: 'bg-[#d1d0f9] text-[rgba(0,0,0,0.85)]'
  };

  const iconColors = {
    default: 'rgba(0, 0, 0, 0.85)',
    success: '#1e1e1e',
    warning: '#1e1e1e', 
    danger: '#1e1e1e',
    brand: 'white',
    secondary: 'rgba(0, 0, 0, 0.85)'
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className={cn(
      'box-border flex items-center gap-[8px] overflow-hidden px-[8px] py-[6px] rounded-[8px] w-fit',
      variants[variant],
      className
    )}>
      <span className="font-medium text-[14px] leading-[1.4] shrink-0">
        {label}
      </span>
      {removable && (
        <button
          onClick={handleRemove}
          className="relative shrink-0 size-[6px] cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Remove badge"
        >
          <div className="absolute inset-[-12.5%]">
            <svg 
              className="block size-full" 
              fill="none" 
              preserveAspectRatio="none" 
              viewBox="0 0 8 8"
            >
              <path 
                d="M7 1L1 7M1 1L7 7" 
                stroke={iconColors[variant]}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}