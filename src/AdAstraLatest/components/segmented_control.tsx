import { cn } from './utils';
import { ReactNode, useState } from 'react';

interface SegmentData {
  id: string;
  icon: ReactNode;
  label: string;
}

interface SegmentedControlProps {
  segments: SegmentData[];
  activeSegment?: string;
  onSegmentChange?: (segmentId: string) => void;
  className?: string;
}

export function SegmentedControl({
  segments,
  activeSegment,
  onSegmentChange,
  className
}: SegmentedControlProps) {
  const [internalActiveSegment, setInternalActiveSegment] = useState(segments[0]?.id || '');
  const currentActive = activeSegment ?? internalActiveSegment;

  const handleSegmentClick = (segmentId: string) => {
    if (activeSegment === undefined) {
      setInternalActiveSegment(segmentId);
    }
    onSegmentChange?.(segmentId);
  };

  return (
    <div className={cn(
      'bg-[#22222c] box-border flex gap-1 items-center px-2 py-1 rounded-[14px] h-14 w-fit',
      className
    )}>
      {segments.map((segment) => {
        const isActive = currentActive === segment.id;
        return (
          <button
            key={segment.id}
            onClick={() => handleSegmentClick(segment.id)}
            className={cn(
              'box-border flex flex-col items-center justify-center p-3 rounded-lg shrink-0 size-12 transition-all duration-200 hover:opacity-80',
              isActive ? 'bg-[#7b7ab8]' : 'bg-transparent'
            )}
            aria-label={segment.label}
          >
            <div className={cn(
              "size-6 flex items-center justify-center text-white",
              isActive ? "opacity-100" : "opacity-50"
            )}>
              {segment.icon}
            </div>
          </button>
        );
      })}
    </div>
  );
}