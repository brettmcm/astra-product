import { cn } from "./utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface SidebarButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode;
  selected?: boolean;
  className?: string;
}

export function SidebarButton({
  icon,
  selected = false,
  className,
  ...rest
}: SidebarButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center p-3 rounded-lg transition-colors cursor-pointer",
        selected
          ? "bg-brand-tertiary text-text-primary"
          : "text-text-secondary hover:bg-bg-hover",
        className,
      )}
      aria-pressed={selected}
      {...rest}
    >
      <span className={cn("size-6", selected ? "opacity-85" : "opacity-50")}>
        {icon}
      </span>
    </button>
  );
}
