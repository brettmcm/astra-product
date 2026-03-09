import { cn } from './utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'Primary' | 'Neutral' | 'Subtle';
  size?: 'Medium' | 'Small';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  onClick?: () => void;
}

export function Button({
  label = 'Button',
  variant = 'Primary',
  size = 'Medium',
  iconStart,
  iconEnd,
  onClick,
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'box-border flex items-center justify-center rounded-[999px] font-sans leading-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    Medium: 'px-4 py-[10px] text-base gap-2 h-11',
    Small: 'p-2 text-xs gap-2 h-8'
  };
  
  const variantStyles = {
    Primary: {
      base: 'bg-[#5250f3] text-white border border-[#5250f3] shadow-lg',
      hover: 'hover:bg-[#403fcc] hover:shadow-xl',
      disabled: 'disabled:opacity-20'
    },
    Neutral: {
      base: 'bg-transparent text-[#5250f3] border border-[#5250f3] shadow-lg',
      hover: 'hover:bg-[#5250f3] hover:bg-opacity-5 hover:shadow-xl',
      disabled: 'disabled:opacity-50'
    },
    Subtle: {
      base: 'bg-transparent text-[#5250f3] border-transparent shadow-lg',
      hover: 'hover:bg-[#5250f3] hover:bg-opacity-5 hover:shadow-xl',
      disabled: 'disabled:opacity-50'
    }
  };
  
  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];
  
  // Adjust padding for Subtle variant
  const subtlePadding = variant === 'Subtle' ? 'px-3 py-[6px]' : '';
  const finalSizeStyles = variant === 'Subtle' ? subtlePadding : currentSize;
  
  return (
    <button
      className={cn(
        baseStyles,
        finalSizeStyles || currentSize,
        currentVariant.base,
        !disabled && currentVariant.hover,
        currentVariant.disabled,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconStart && (
        <span className="flex-shrink-0">
          {iconStart}
        </span>
      )}
      <span className="flex-shrink-0">{label}</span>
      {iconEnd && (
        <span className="flex-shrink-0">
          {iconEnd}
        </span>
      )}
    </button>
  );
}