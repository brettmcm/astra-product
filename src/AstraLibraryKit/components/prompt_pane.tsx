import { cn } from "./utils";
import { PromptInput } from "./prompt_input";
import { type ReactNode } from "react";

interface PromptPaneProps {
  children?: ReactNode;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  onAttach?: () => void;
  disabled?: boolean;
  className?: string;
}

export function PromptPane({
  children,
  value,
  placeholder,
  onChange,
  onSend,
  onAttach,
  disabled,
  className,
}: PromptPaneProps) {
  return (
    <div
      className={cn(
        "bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(255,255,255,0.05)] border-r border-border-primary flex flex-col gap-4 px-4 py-6 h-full w-[400px]",
        className,
      )}
    >
      <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-y-auto p-2.5 [&>*]:w-full">
        {children}
      </div>
      <div className="shrink-0 w-full">
        <PromptInput
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onSend={onSend}
          onAttach={onAttach}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
