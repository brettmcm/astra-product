import { cn } from "./utils";
import { ReactNode } from "react";

interface SegmentedControlProps {
  segments: Array<{
    id: string;
    icon: ReactNode;
  }>;
  activeSegment: string;
  onSegmentChange: (segmentId: string) => void;
  className?: string;
}

export function SegmentedControl({
  segments,
  activeSegment,
  onSegmentChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        "bg-surface-dark flex gap-1 items-center px-2 py-1 rounded-[14px] h-14 w-fit",
        className,
      )}
    >
      {segments.map((segment) => {
        const isActive = segment.id === activeSegment;

        return (
          <button
            key={segment.id}
            onClick={() => onSegmentChange(segment.id)}
            className={cn(
              "flex items-center justify-center p-3 rounded-lg size-12 transition-colors",
              isActive ? "bg-brand-muted" : "hover:bg-surface-dark-hover",
            )}
          >
            <div
              className={cn(
                "size-6 flex items-center justify-center",
                isActive ? "text-white" : "text-white/50",
              )}
            >
              {segment.icon}
            </div>
          </button>
        );
      })}
    </div>
  );
}