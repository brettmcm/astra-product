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
    default: 'bg-brand-tertiary text-text-primary',
    success: 'bg-success text-surface-darkest',
    warning: 'bg-warning text-surface-darkest',
    danger: 'bg-danger text-surface-darkest',
    brand: 'bg-brand-primary text-white',
    secondary: 'bg-brand-secondary text-text-primary'
  };

  const iconColors = {
    default: 'var(--ads-text-primary)',
    success: 'var(--ads-surface-darkest)',
    warning: 'var(--ads-surface-darkest)',
    danger: 'var(--ads-surface-darkest)',
    brand: 'white',
    secondary: 'var(--ads-text-primary)'
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
      <span className="font-medium text-label-sm leading-none shrink-0">
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