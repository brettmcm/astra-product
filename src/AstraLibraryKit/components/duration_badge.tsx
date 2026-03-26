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
        'inline-flex items-center px-2 py-1.5 rounded-lg bg-input-bg overflow-clip',
        className
      )}
    >
      <span className="text-input-sm whitespace-nowrap" style={{ color: 'var(--ads-on-brand)' }}>
        {duration}
      </span>
    </div>
  );
}
