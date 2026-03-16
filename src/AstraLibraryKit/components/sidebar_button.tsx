import { cn } from "./utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface SidebarButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode;
  active?: boolean;
  className?: string;
}

export function SidebarButton({
  icon,
  active = false,
  className,
  ...rest
}: SidebarButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center p-3 rounded-lg transition-colors cursor-pointer",
        active
          ? "bg-brand-tertiary text-text-primary"
          : "text-text-secondary hover:bg-bg-hover",
        className,
      )}
      aria-pressed={active}
      {...rest}
    >
      <span className={cn("size-6", active ? "opacity-85" : "opacity-50")}>
        {icon}
      </span>
    </button>
  );
}
