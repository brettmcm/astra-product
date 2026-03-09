import { cn } from "./utils";
import { ReactNode, useState, useEffect } from "react";

interface ToastProps {
  message?: string;
  cancelText?: string;
  progress?: number;
  open?: boolean;
  onCancel?: () => void;
  onDismiss?: () => void;
  showCancel?: boolean;
  variant?: "default" | "success" | "error" | "warning";
  className?: string;
}

export function Toast({
  message = "Processing...",
  cancelText = "Cancel",
  progress = 0,
  open = true,
  onCancel,
  onDismiss,
  showCancel = true,
  variant = "default",
  className,
}: ToastProps) {
  const [internalProgress, setInternalProgress] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  // Animate progress in real-time on loop - stays in default variant
  useEffect(() => {
    const interval = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 100) {
          // When it hits 100%, immediately reset to loop
          setIsResetting(true);
          setTimeout(() => setIsResetting(false), 0);
          return 0;
        }
        return prev + 1; // Increment by 1% every 50ms (completes in 5 seconds)
      });
    }, 75);

    return () => clearInterval(interval);
  }, []);

  if (!open) return null;

  const variants = {
    default: "bg-[#5250f3]",
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-orange-500",
  };

  const loaderVariants = {
    default: "bg-[#3b3ac3]",
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-orange-600",
  };

  const progressWidth = Math.min(
    Math.max(internalProgress, 0),
    100,
  );

  return (
    <div
      className={cn(
        "box-border content-stretch flex gap-[6.772px] h-[34px] items-center min-h-[33.862px] overflow-clip pl-[10.159px] pr-[6.772px] py-[6.772px] rounded-[10.737px] shadow-[0px_0px_0.423px_0px_rgba(0,0,0,0.3),0px_0.847px_2.54px_0px_rgba(0,0,0,0.15)] relative transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      <div
        className={cn(
          "absolute h-[33.862px] left-0 top-0 rounded-l-[10.737px]",
          !isResetting &&
            "transition-all duration-[50ms] ease-linear",
          loaderVariants[variant],
        )}
        style={{ width: `${progressWidth}%` }}
      />
      <div className="content-stretch flex gap-[6.772px] items-center relative shrink-0 z-10">
        <div className="content-stretch flex gap-[3.386px] items-center relative shrink-0">
          <div
            className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[9.312px] text-white tracking-[0.0466px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[13.545px]">{message}</p>
          </div>
        </div>
        {showCancel && (
          <div className="content-stretch flex gap-[3.386px] items-center relative shrink-0">
            <button
              onClick={onCancel}
              className="bg-[#093077] hover:bg-[#0a3d8a] active:bg-[#082966] box-border content-stretch flex h-[20.317px] items-center px-[6.772px] py-[3.386px] relative rounded-[4.13px] shrink-0 transition-colors cursor-pointer"
            >
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-[450] justify-center leading-[0] not-italic relative shrink-0 text-[9.312px] text-white tracking-[0.0466px] whitespace-nowrap">
                <p className="leading-[13.545px]">
                  {cancelText}
                </p>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}