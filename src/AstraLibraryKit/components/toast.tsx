import { cn } from "./utils";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  progress?: number;
  showCancel?: boolean;
  onCancel?: () => void;
  variant?: "default" | "success" | "error" | "warning";
  onDismiss?: () => void;
}

export function Toast({
  message,
  progress = 0,
  showCancel = true,
  onCancel,
  variant = "default",
  onDismiss,
}: ToastProps) {
  const [internalProgress, setInternalProgress] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const useLoop = progress <= 0;

  useEffect(() => {
    if (!useLoop) return;
    const startTime = Date.now();
    const CYCLE_DURATION = 7500; // fixed 7.5s per full sweep

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const cycleProgress =
        (elapsed % CYCLE_DURATION) / CYCLE_DURATION;
      const newProgress = cycleProgress * 100;

      // Detect when we've reset to avoid visual jump
      setInternalProgress((prev) => {
        if (newProgress < prev) {
          setIsResetting(true);
          setTimeout(() => setIsResetting(false), 0);
        }
        return newProgress;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    let animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [useLoop]);

  const variants = {
    default: "bg-[#5250F3]",
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  const progressVariants = {
    default: "bg-[#3B3AC3]",
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-600",
  };

  const clampedExternal = Math.min(Math.max(progress, 0), 100);
  const effectiveProgress = useLoop
    ? internalProgress
    : clampedExternal;

  return (
    <div
      className={cn(
        "box-border content-stretch flex gap-[6.772px] h-[34px] items-center min-h-[33.862px] overflow-clip pl-[10.159px] pr-[6.772px] py-[6.772px] rounded-[10.737px] shadow-[0px_0px_0.423px_0px_rgba(0,0,0,0.3),0px_0.847px_2.54px_0px_rgba(0,0,0,0.15)] relative",
        variants[variant],
      )}
    >
      {/* progress/loader strip */}
      <div
        className={cn(
          "absolute h-[33.862px] left-0 top-0 rounded-l-[10.737px]",
          // match file_1: linear, short transition while animating; drop during reset to avoid back-glide
          useLoop &&
            !isResetting &&
            "transition-all duration-[50ms] ease-linear",
          !useLoop && "transition-all duration-300 ease-out",
          progressVariants[variant],
        )}
        style={{ width: `${effectiveProgress}%` }}
      />

      <div className="content-stretch flex gap-[6.772px] items-center relative shrink-0 z-10">
        <div className="content-stretch flex gap-[3.386px] items-center relative shrink-0">
          <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[9.312px] text-white tracking-[0.0466px] whitespace-nowrap">
            <p className="leading-[13.545px]">{message}</p>
          </div>
        </div>
        {showCancel && (
          <div className="content-stretch flex gap-[3.386px] items-center relative shrink-0">
            <button
              onClick={onCancel}
              className="bg-[#093077] hover:bg-[#0a3a85] active:bg-[#072961] box-border content-stretch flex h-[20.317px] items-center px-[6.772px] py-[3.386px] relative rounded-[4.13px] shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <div className="flex flex-col font-['Inter',sans-serif] font-[450] justify-center leading-[0] not-italic relative shrink-0 text-[9.312px] text-white tracking-[0.0466px] whitespace-nowrap">
                <p className="leading-[13.545px]">Cancel</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}