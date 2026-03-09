import { cn } from './utils';
import { ReactNode } from 'react';

interface AvatarProps {
  type?: 'initial' | 'image';
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  initials?: string;
  src?: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
}

export function Avatar({
  type = 'image',
  size = 'large',
  shape = 'circle',
  initials = 'F',
  src,
  alt = 'Avatar',
  onClick,
  className
}: AvatarProps) {
  const sizeClasses = {
    small: 'size-[24px]',
    medium: 'size-[32px]',
    large: 'size-[40px]'
  };

  const shapeClasses = {
    circle: 'rounded-[999px]',
    square: 'rounded-[8px]'
  };

  const baseClasses = cn(
    sizeClasses[size],
    shapeClasses[shape],
    'relative overflow-hidden',
    onClick && 'cursor-pointer hover:opacity-90 transition-opacity',
    className
  );

  if (type === 'initial') {
    return (
      <div
        className={cn(baseClasses, 'bg-[#5250f3] flex items-center justify-center')}
        onClick={onClick}
      >
        <div className="text-white font-medium text-center leading-none font-['Instrument_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="text-[14px] leading-[1.4]">{initials}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {src && (
        <img
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={src}
        />
      )}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 border border-[rgba(0,0,0,0.15)] pointer-events-none',
          shapeClasses[shape]
        )}
      />
    </div>
  );
}