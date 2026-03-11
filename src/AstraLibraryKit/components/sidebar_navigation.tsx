import { cn } from "./utils";
import { AstraLogo } from "./astra_logo";
import { type ReactNode } from "react";

interface SidebarNavigationProps {
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function SidebarNavigation({
  children,
  footer,
  className,
}: SidebarNavigationProps) {
  return (
    <nav
      className={cn(
        "bg-surface-bg h-full w-[60px] border-r border-border-primary flex flex-col items-center py-3",
        className,
      )}
    >
      <div className="shrink-0">
        <AstraLogo size={32} />
      </div>
      <div className="flex flex-col items-center gap-2 mt-3 w-full">
        {children}
      </div>
      {footer && (
        <div className="mt-auto flex flex-col items-center gap-2 w-full">
          {footer}
        </div>
      )}
    </nav>
  );
}
