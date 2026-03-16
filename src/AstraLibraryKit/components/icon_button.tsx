import { cn } from './utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: 'primary' | 'neutral' | 'subtle';
  size?: 'medium' | 'small';
}

export function IconButton({
  icon,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  ...props
}: IconButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary cursor-pointer disabled:opacity-20 disabled:pointer-events-none'

  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-secondary',
    neutral: 'bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary',
    subtle: 'bg-transparent text-text-secondary hover:bg-bg-hover',
  }

  const sizes = {
    medium: 'size-[40px] p-3',
    small: 'size-[32px] p-2',
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      <span className="shrink-0">{icon}</span>
    </button>
  )
}
