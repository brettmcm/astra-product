import { cn } from './utils'
import { ReactNode, useState, useRef, useCallback, useEffect } from 'react'

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: ReactNode;
  className?: string;
}

export function Tooltip({
  content,
  position = 'top',
  delay = 200,
  children,
  className
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  const arrowPositions = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-surface-dark border-x-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-surface-dark border-x-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-surface-dark border-y-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-surface-dark border-y-transparent border-l-transparent'
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 pointer-events-none',
            positions[position]
          )}
        >
          <div
            className={cn(
              'bg-surface-dark text-label-sm px-3 py-1.5 rounded-lg whitespace-nowrap',
              'animate-in fade-in duration-150',
              className
            )}
            style={{ color: 'var(--ads-on-brand)' }}
          >
            {content}
            <div
              className={cn(
                'absolute w-0 h-0 border-4',
                arrowPositions[position]
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
