import { cn } from './utils'
import { ReactNode } from 'react'
import { DurationBadge } from './duration_badge'

interface ItemCardProps {
  title?: string;
  updated?: string;
  spec?: string;
  duration?: string;
  thumbnail?: ReactNode;
  className?: string;
}

export function ItemCard({
  title = 'Item Title',
  updated = 'Edited 2m ago',
  spec = '4K',
  duration = '0:01:30',
  thumbnail,
  className
}: ItemCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start overflow-clip rounded-corner-md w-[305px]',
        className
      )}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full aspect-[305/170] overflow-clip rounded-corner-md"
        style={!thumbnail ? { backgroundColor: '#868686' } : undefined}
      >
        {thumbnail && (
          <div className="absolute inset-0">
            {thumbnail}
          </div>
        )}
        {duration && (
          <DurationBadge duration={duration} className="absolute bottom-4 right-4 z-10" />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 items-start w-full py-3 text-content-text">
        <p className="text-label font-medium whitespace-nowrap">{title}</p>
        <p className="text-video-title whitespace-nowrap">
          {updated} · {spec}
        </p>
      </div>
    </div>
  );
}
