import { cn } from './utils'
import { ReactNode, useEffect, useCallback } from 'react'
import { X } from './icons'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  className
}: ModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const sizes = {
    small: 'w-[360px]',
    medium: 'w-[480px]',
    large: 'w-[640px]'
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-modal-scrim z-50 transition-opacity"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
          'bg-surface-bg rounded-2xl shadow-xl max-h-[90vh] overflow-hidden flex flex-col',
          sizes[size],
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-5 border-b border-border-secondary">
            <h2 className="text-heading text-text-primary">{title}</h2>
            <button
              onClick={onClose}
              className="size-6 flex items-center justify-center rounded-md hover:bg-bg-hover transition-colors"
            >
              <X size={16} color="var(--ads-text-secondary)" />
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
        {footer && (
          <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-border-secondary">
            {footer}
          </div>
        )}
      </div>
    </>
  );
}
