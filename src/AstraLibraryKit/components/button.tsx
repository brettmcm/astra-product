import { cn } from './utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'neutral' | 'subtle';
  size?: 'medium' | 'small';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  iconStart,
  iconEnd,
  children,
  disabled = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-sans leading-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer hover:cursor-pointer'
  
  const variants = {
    primary: 'bg-[#5250f3] text-white border border-[#5250f3] hover:bg-[#d1d0f9] hover:text-[#5250f3] disabled:opacity-20 disabled:hover:bg-[#5250f3] disabled:hover:text-white',
    neutral: 'bg-transparent text-[#5250f3] border border-[#5250f3] hover:bg-[#5250f3] hover:text-white disabled:opacity-50',
    subtle: 'bg-transparent text-[#5250f3] border-none hover:bg-gray-100 disabled:opacity-50'
  }
  
  const sizes = {
    medium: size === 'medium' && variant === 'subtle' ? 'h-10 px-3 py-1.5 text-base' : 'h-10 px-4 py-2.5 text-base',
    small: 'h-8 p-2 text-xs'
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'cursor-not-allowed',
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {iconStart && <span className="shrink-0">{iconStart}</span>}
      <span className="shrink-0">{children}</span>
      {iconEnd && <span className="shrink-0">{iconEnd}</span>}
    </button>
  )
}