import { cn } from './utils';
import { ReactNode } from 'react';
import { Avatar } from './avatar';

interface ChatBubblesProps {
  type?: 'user' | 'ai';
  text: string;
  userAvatar?: ReactNode;
  className?: string;
}


function AiIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="12" fill="var(--brand-primary)" r="12" />
          <path d="M12 6.58301C12.371 8.04326 12.9716 9.21687 13.877 10.1221C14.7824 11.0273 15.9565 11.6282 17.417 11.999C15.9565 12.37 14.7824 12.9706 13.877 13.876C12.9715 14.7815 12.371 15.9563 12 17.417C11.629 15.9563 11.0285 14.7815 10.123 13.876C9.21741 12.9705 8.0429 12.37 6.58203 11.999C8.04288 11.6281 9.21738 11.0275 10.123 10.1221C11.0284 9.21688 11.629 8.04324 12 6.58301Z" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

export function ChatBubbles({ type = 'ai', text, userAvatar, className }: ChatBubblesProps) {
  if (type === 'user') {
    return (
      <div className={cn("box-border content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[32px] py-0 w-[254px]", className)}>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <div className="box-border content-stretch flex gap-[8px] items-start pl-[24px] pr-0 py-0 relative shrink-0 w-[254px]">
            <div className="bg-background flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] shrink-0">
              <div aria-hidden="true" className="absolute border border-border-secondary border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="size-full">
                <div className="box-border content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-h-px min-w-px relative shrink-0">
                    <p className="font-sans font-normal relative shrink-0 text-video-title text-text-primary w-full whitespace-pre-wrap">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[6px] px-0 relative shrink-0">
              <div className="relative rounded-full shrink-0 size-[24px]">
                {userAvatar || <Avatar type="initial" initials="U" size="small" shape="circle" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("box-border content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[32px] py-0 w-[254px]", className)}>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[6px] px-0 relative shrink-0">
          <div className="content-stretch flex items-start relative shrink-0">
            <AiIcon />
          </div>
        </div>
        <div className="bg-brand-secondary box-border content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[212px]">
          <div aria-hidden="true" className="absolute border border-border-secondary border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px relative shrink-0">
            <p className="flex-[1_0_0] font-sans font-normal min-h-px min-w-px relative shrink-0 text-video-title text-text-primary whitespace-pre-wrap">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}