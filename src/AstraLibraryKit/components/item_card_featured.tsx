import { cn } from './utils'
import { ReactNode } from 'react'
import { DurationBadge } from './duration_badge'

interface ItemCardFeaturedProps {
  title?: string;
  updated?: string;
  spec?: string;
  duration?: string;
  variant?: 'overlay' | 'stacked';
  thumbnail?: ReactNode;
  className?: string;
}

export function ItemCardFeatured({
  title = 'Item Title',
  updated = 'Edited 2m ago',
  spec = '4K',
  duration = '0:01:30',
  variant = 'overlay',
  thumbnail,
  className
}: ItemCardFeaturedProps) {
  const isOverlay = variant === 'overlay'

  return (
    <div
      className={cn(
        'flex flex-col items-start overflow-clip rounded-corner-md aspect-[522/291] min-w-0',
        className
      )}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full flex-1 min-h-0 rounded-corner-md overflow-clip"
        style={!thumbnail ? { backgroundColor: '#868686' } : undefined}
      >
        {thumbnail && (
          <div className="absolute inset-0">
            {thumbnail}
          </div>
        )}

        {duration && (
          <DurationBadge
            duration={duration}
            className="absolute top-4 right-4 z-10"
          />
        )}

        {isOverlay && (
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 items-start justify-end p-3 backdrop-blur-[4px] text-overlay-text">
            <p className="text-heading font-medium w-full">{title}</p>
            <p className="text-video-title w-full">
              {updated} · {spec}
            </p>
          </div>
        )}
      </div>

      {/* Info (stacked only) */}
      {!isOverlay && (
        <div className="flex flex-col gap-1 items-start w-full p-3 text-content-text">
          <p className="text-heading font-medium w-full">{title}</p>
          <p className="text-video-title w-full">
            {updated} · {spec}
          </p>
        </div>
      )}
    </div>
  )
}
