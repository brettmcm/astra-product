import { cn } from './utils';
import { ReactNode } from 'react';

interface Avatar {
  src: string;
  alt?: string;
}

interface AvatarGroupProps {
  avatars: Avatar[];
  maxVisible?: number;
  spacing?: 'overlap' | 'spaced';
  showOverflow?: boolean;
  overflowCount?: number;
  size?: 'sm' | 'md' | 'lg';
  onAvatarClick?: (index: number) => void;
  onOverflowClick?: () => void;
  className?: string;
}

function AvatarWrapper({ children, size = 'md', onClick }: { children: ReactNode; size?: 'sm' | 'md' | 'lg'; onClick?: () => void }) {
  const sizeStyles = {
    sm: 'size-[32px]',
    md: 'size-[40px]',
    lg: 'size-[48px]'
  };

  return (
    <div 
      className={cn(
        'relative rounded-full shrink-0 cursor-pointer transition-transform hover:scale-105',
        sizeStyles[size],
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
    >
      <div className={cn('overflow-hidden relative rounded-full', sizeStyles[size])}>
        <div className={cn('absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]', sizeStyles[size])}>
          {children}
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border border-border-medium inset-0 pointer-events-none rounded-full"
      />
    </div>
  );
}

function OverflowIndicator({ 
  count, 
  size = 'md', 
  onClick 
}: { 
  count: number; 
  size?: 'sm' | 'md' | 'lg'; 
  onClick?: () => void 
}) {
  const sizeStyles = {
    sm: 'size-[20px] text-body-xs',
    md: 'size-[24px] text-body-md',
    lg: 'size-[28px] text-body-lg'
  };

  return (
    <div 
      className={cn(
        'bg-brand flex items-center justify-center rounded-full shrink-0 font-medium transition-colors hover:bg-brand-hover cursor-pointer',
        sizeStyles[size],
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
    >
      <span className="leading-none text-white">+{count}</span>
    </div>
  );
}

export function AvatarGroup({
  avatars,
  maxVisible = 3,
  spacing = 'spaced',
  showOverflow = true,
  overflowCount,
  size = 'md',
  onAvatarClick,
  onOverflowClick,
  className
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = overflowCount ?? Math.max(0, avatars.length - maxVisible);
  const shouldShowOverflow = showOverflow && remainingCount > 0;

  if (spacing === 'overlap') {
    return (
      <div className={cn('flex items-center isolate', className)}>
        <div className="flex items-center relative">
          {visibleAvatars.map((avatar, index) => (
            <div key={index} className={cn('relative', index > 0 && '-ml-2')} style={{ zIndex: visibleAvatars.length - index }}>
              <AvatarWrapper 
                size={size} 
                onClick={onAvatarClick ? () => onAvatarClick(index) : undefined}
              >
                <img 
                  alt={avatar.alt || `Avatar ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                  src={avatar.src} 
                />
              </AvatarWrapper>
            </div>
          ))}
        </div>
        {shouldShowOverflow && (
          <div className="ml-2">
            <OverflowIndicator 
              count={remainingCount} 
              size={size} 
              onClick={onOverflowClick}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {visibleAvatars.map((avatar, index) => (
        <AvatarWrapper 
          key={index} 
          size={size} 
          onClick={onAvatarClick ? () => onAvatarClick(index) : undefined}
        >
          <img 
            alt={avatar.alt || `Avatar ${index + 1}`} 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            src={avatar.src} 
          />
        </AvatarWrapper>
      ))}
      {shouldShowOverflow && (
        <OverflowIndicator 
          count={remainingCount} 
          size={size} 
          onClick={onOverflowClick}
        />
      )}
    </div>
  );
}