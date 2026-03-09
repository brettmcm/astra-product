import { cn } from './utils';
import { ReactNode } from 'react';

interface AvatarGroupProps {
  avatars: string[];
  spacing?: 'overlap' | 'spaced';
  maxVisible?: number;
  showOverflow?: boolean;
  overflowText?: string;
  size?: 'sm' | 'md' | 'lg';
  onAvatarClick?: (index: number) => void;
  onOverflowClick?: () => void;
}

function Avatar({ 
  src, 
  size = 'md', 
  onClick, 
  className 
}: { 
  src: string; 
  size?: 'sm' | 'md' | 'lg'; 
  onClick?: () => void; 
  className?: string; 
}) {
  const sizeClasses = {
    sm: 'size-[32px]',
    md: 'size-[40px]', 
    lg: 'size-[48px]'
  };

  return (
    <div 
      className={cn(
        "relative rounded-full shrink-0 cursor-pointer hover:scale-105 transition-transform",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <div className={cn("overflow-hidden relative rounded-full", sizeClasses[size])}>
        <img 
          alt="Avatar" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={src} 
        />
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-full" 
      />
    </div>
  );
}

function OverflowCounter({ 
  count, 
  text, 
  size = 'md', 
  onClick, 
  className 
}: { 
  count: number; 
  text?: string; 
  size?: 'sm' | 'md' | 'lg'; 
  onClick?: () => void; 
  className?: string; 
}) {
  const sizeClasses = {
    sm: 'size-[32px] text-[12px]',
    md: 'size-[40px] text-[14px]',
    lg: 'size-[48px] text-[16px]'
  };

  const displayText = text || `+${count}`;

  return (
    <div 
      className={cn(
        "bg-[#5250f3] hover:bg-[#4440f0] cursor-pointer transition-colors flex items-center justify-center rounded-full shrink-0 font-medium text-white",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <span className="leading-none">{displayText}</span>
    </div>
  );
}

export function AvatarGroup({
  avatars,
  spacing = 'spaced',
  maxVisible = 3,
  showOverflow = true,
  overflowText,
  size = 'md',
  onAvatarClick,
  onOverflowClick
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const overflowCount = avatars.length - maxVisible;
  const hasOverflow = showOverflow && overflowCount > 0;

  if (spacing === 'overlap') {
    return (
      <div className="flex items-center isolate">
        <div className="flex items-center">
          {visibleAvatars.map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar}
              size={size}
              onClick={() => onAvatarClick?.(index)}
              className={index < visibleAvatars.length - 1 ? 'mr-[-8px] z-[2]' : 'z-[2]'}
            />
          ))}
        </div>
        {hasOverflow && (
          <OverflowCounter
            count={overflowCount}
            text={overflowText}
            size={size}
            onClick={onOverflowClick}
            className="ml-[8px] z-[1]"
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-[8px]">
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar}
          size={size}
          onClick={() => onAvatarClick?.(index)}
        />
      ))}
      {hasOverflow && (
        <OverflowCounter
          count={overflowCount}
          text={overflowText}
          size={size}
          onClick={onOverflowClick}
        />
      )}
    </div>
  );
}