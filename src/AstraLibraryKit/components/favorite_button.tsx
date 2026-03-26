import { cn } from './utils'
import { Star } from './icons'
import { useState, ButtonHTMLAttributes } from 'react'

interface FavoriteButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  defaultFavorited?: boolean;
  onChange?: (favorited: boolean) => void;
  className?: string;
}

export function FavoriteButton({
  defaultFavorited = false,
  onChange,
  className,
  ...props
}: FavoriteButtonProps) {
  const [favorited, setFavorited] = useState(defaultFavorited);

  const handleClick = () => {
    const next = !favorited;
    setFavorited(next);
    onChange?.(next);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center size-6 rounded-full bg-surface-bg overflow-clip shrink-0',
        'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
        className
      )}
      aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
      {...props}
    >
      <Star
        size={14}
        strokeWidth={2}
        color={favorited ? 'var(--ads-brand-primary)' : 'currentColor'}
        fill={favorited ? 'var(--ads-brand-primary)' : 'none'}
      />
    </button>
  );
}
