import { cn } from './utils'

interface DurationBadgeProps {
  duration: string;
  className?: string;
}

export function DurationBadge({
  duration,
  className
}: DurationBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center px-2 py-1.5 rounded-corner-md bg-field-bg overflow-clip',
        className
      )}
    >
      <span className="text-label-sm text-overlay-text whitespace-nowrap">
        {duration}
      </span>
    </div>
  );
}
