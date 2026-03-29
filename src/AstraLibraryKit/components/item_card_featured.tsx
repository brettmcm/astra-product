import { cn } from './utils'
import { ReactNode } from 'react'
import { DurationBadge } from './duration_badge'
import { Badge } from './badge'

interface ItemCardFeaturedProps {
  title?: string;
  updated?: string;
  spec?: string;
  duration?: string;
  tags?: string[];
  variant?: 'overlay' | 'stacked';
  thumbnail?: ReactNode;
  className?: string;
}

export function ItemCardFeatured({
  title = 'Item Title',
  updated = 'Edited 2m ago',
  spec = '4K',
  duration = '0:01:30',
  tags = ['Tag Label'],
  variant = 'overlay',
  thumbnail,
  className
}: ItemCardFeaturedProps) {
  const isOverlay = variant === 'overlay'

  return (
    <div
      className={cn(
        'flex flex-col items-start overflow-clip rounded-corner-md w-[522px]',
        className
      )}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full h-[291px] shrink-0 rounded-corner-md overflow-clip"
        style={!thumbnail ? {
          backgroundImage: 'linear-gradient(168deg, rgb(26, 58, 42) 8%, rgb(45, 90, 58) 42%, rgb(74, 122, 74) 92%)'
        } : undefined}
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
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 items-start justify-end p-3 backdrop-blur-[4px]">
            <div className="flex flex-col gap-1 items-start w-full text-overlay-text">
              <p className="text-heading font-medium w-full">{title}</p>
              <p className="text-video-title w-full">
                {updated} · {spec}
              </p>
            </div>
            {tags.length > 0 && (
              <div className="flex items-start gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} label={tag} variant="secondary" />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info (stacked only) */}
      {!isOverlay && (
        <div className="flex flex-col gap-4 items-start w-full p-3">
          <div className="flex flex-col gap-1 items-start w-full text-content-text">
            <p className="text-heading font-medium w-full">{title}</p>
            <p className="text-video-title w-full">
              {updated} · {spec}
            </p>
          </div>
          {tags.length > 0 && (
            <div className="flex items-start gap-2">
              {tags.map((tag) => (
                <Badge key={tag} label={tag} variant="secondary" />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
