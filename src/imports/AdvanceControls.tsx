import svgPaths from "./svg-es9lmf4lwo";

function AdvanceControlsHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
        <div className="absolute inset-[-8.93%_-6.25%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
            <g id="Icon">{children}</g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AdvanceControls() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full" data-name="advance controls">
      <AdvanceControlsHelper>
        <path d={svgPaths.p3349e200} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="2.5" />
        <path d={svgPaths.p9253180} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="2.5" />
      </AdvanceControlsHelper>
      <AdvanceControlsHelper>
        <path d={svgPaths.pdcdee80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="2.5" />
        <path d={svgPaths.p3708d380} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="2.5" />
      </AdvanceControlsHelper>
    </div>
  );
}