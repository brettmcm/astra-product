import svgPaths from "./svg-91pgjdp26l";
import imgTypeImageSizeLargeShapeSquare from "figma:asset/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png";
import imgVideo from "figma:asset/e92a67f81fd098462003a57e57bc7449739a4a7a.png";
import imgRectangle19408 from "figma:asset/19d555e5c2ae8d7eccf902200fd5ea94f3e7ae8f.png";
import imgRectangle19409 from "figma:asset/3ef6c9f61fef479a72ed018844c1b071ee0c3b97.png";
import imgRectangle19411 from "figma:asset/3a225f7473fade72e2c4a9f4b5389b4a6caa0437.png";
import imgRectangle19412 from "figma:asset/e8c32795199603f9ffca6119cc83ce30c50e81c4.png";
import imgRectangle19413 from "figma:asset/3677c4be1b5e03738d7e85e3d47886dd7626e482.png";
import imgRectangle19414 from "figma:asset/fb91c79af27651da63ebb20e319423c0fde4424f.png";
import imgRectangle19415 from "figma:asset/ceeec632a3f898da3030e52e22576c9e330050db.png";
import { imgGroup14697 } from "./svg-dhq16";

/**
 * @figmaAssetKey fa04e8c1c6bf8354a25df6f19e0fad9410a9159f
 */
function PromptInput({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Prompt input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Describe your video
      </p>
      <div className="absolute bottom-[10px] right-[10px] size-[42px]" data-name="floating action">
        <div className="absolute aspect-[32/32] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <circle cx="21" cy="21" fill="var(--fill-0, #5250F3)" id="Ellipse 303" r="21" />
          </svg>
        </div>
        <div className="absolute inset-[23.81%_23.81%_19.05%_19.05%] overflow-clip" data-name="IconSend">
          <div className="absolute inset-[8.333%]" data-name="Icon">
            <div className="absolute inset-[-6.25%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                <path d={svgPaths.p29938100} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[24px] overflow-clip size-[20px] top-[103px]" data-name="IconPaperclip">
        <div className="absolute inset-[5.78%_10.67%_8.34%_8.34%]" data-name="Icon">
          <div className="absolute inset-[-5.82%_-6.17%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <path d={svgPaths.p25bfee80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type AvatarProps = {
  className?: string;
  initials?: string;
  type?: "Initial" | "Image";
  size?: "Large" | "Small" | "Medium";
  shape?: "Circle" | "Square";
};

/**
 * @figmaAssetKey b6b525a91a3defdebce2257b12df082daa57ed73
 */
function Avatar({ className, initials = "F", type = "Image", size = "Large", shape = "Circle" }: AvatarProps) {
  if (type === "Initial" && size === "Large" && shape === "Square") {
    return (
      <div className={className} data-name="Type=Initial, Size=Large, Shape=Square">
        <div className="absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[14px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.4] whitespace-pre">{initials}</p>
        </div>
      </div>
    );
  }
  if (type === "Initial" && size === "Medium" && shape === "Square") {
    return (
      <div className={className} data-name="Type=Initial, Size=Medium, Shape=Square">
        <div className="absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.4] whitespace-pre">{initials}</p>
        </div>
      </div>
    );
  }
  if (type === "Initial" && size === "Small" && shape === "Square") {
    return (
      <div className={className} data-name="Type=Initial, Size=Small, Shape=Square">
        <div className="absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.4] whitespace-pre">{initials}</p>
        </div>
      </div>
    );
  }
  if (type === "Image" && size === "Large" && shape === "Square") {
    return (
      <div className={className} data-name="Type=Image, Size=Large, Shape=Square">
        <div className="overflow-clip relative rounded-[inherit] size-[40px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (type === "Image" && size === "Medium" && shape === "Square") {
    return (
      <div className={className} data-name="Type=Image, Size=Medium, Shape=Square">
        <div className="overflow-clip relative rounded-[inherit] size-[32px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (type === "Image" && size === "Small" && shape === "Square") {
    return (
      <div className={className} data-name="Type=Image, Size=Small, Shape=Square">
        <div className="overflow-clip relative rounded-[inherit] size-[24px]">
          <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  if (type === "Initial" && size === "Large" && shape === "Circle") {
    return (
      <div className={className} data-name="Type=Initial, Size=Large, Shape=Circle">
        <div className="absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[14px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.4] whitespace-pre">{initials}</p>
        </div>
      </div>
    );
  }
  if (type === "Initial" && size === "Medium" && shape === "Circle") {
    return (
      <div className={className} data-name="Type=Initial, Size=Medium, Shape=Circle">
        <div className="absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.4] whitespace-pre">{initials}</p>
        </div>
      </div>
    );
  }
  if (type === "Initial" && size === "Small" && shape === "Circle") {
    return (
      <div className={className} data-name="Type=Initial, Size=Small, Shape=Circle">
        <div className="absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.4] whitespace-pre">{initials}</p>
        </div>
      </div>
    );
  }
  if (type === "Image" && size === "Medium" && shape === "Circle") {
    return (
      <div className={className} data-name="Type=Image, Size=Medium, Shape=Circle">
        <div className="overflow-clip relative rounded-[inherit] size-[32px]">
          <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
    );
  }
  if (type === "Image" && size === "Small" && shape === "Circle") {
    return (
      <div className={className} data-name="Type=Image, Size=Small, Shape=Circle">
        <div className="overflow-clip relative rounded-[inherit] size-[24px]">
          <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Image, Size=Large, Shape=Circle">
      <div className="overflow-clip relative rounded-[inherit] size-[40px]">
        <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}
type BubblesProps = {
  className?: string;
  content?: string;
  type?: "ai" | "user";
};

/**
 * @figmaAssetKey a3bd87e65f92f38928de94b695d4795be907eb71
 */
function Bubbles({ className, content = "Example message", type = "ai" }: BubblesProps) {
  if (type === "user") {
    return (
      <div className={className} data-name="type=user">
        <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Comment">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="slot">
                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.85)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[6px] px-0 relative shrink-0" data-name="avatar container">
          <Avatar size="Small" className="relative rounded-[999px] shrink-0 size-[24px]" />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="type=ai">
      <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[6px] px-0 relative shrink-0" data-name="avatar container">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Astra">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="block max-w-none size-full" src={imgGroup14697} />
          </div>
        </div>
      </div>
      <div className="basis-0 bg-[#d1d0f9] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Comment">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative w-full">
            <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="slot">
              <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[12px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type PromptPaneProps = {
  className?: string;
  children?: React.ReactNode | null;
};

/**
 * @figmaAssetKey 06e49f29c6f10ee6c83dfbf4530c5c907a0408be
 */
function PromptPane({ className, children = null }: PromptPaneProps) {
  return (
    <div className={className} data-name="prompt pane">
      <div className="box-border content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[16px] py-[24px] relative w-[400px]">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="chat">
          {children || (
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[10px] relative size-full">
                <Bubbles content="How can I help?" className="relative shrink-0 w-full" />
                <Bubbles content="Can you do X?" type="user" className="relative shrink-0 w-full" />
                <Bubbles content="Absolutely! I’ll do X" className="relative shrink-0 w-full" />
              </div>
            </div>
          )}
        </div>
        <PromptInput className="bg-white h-[135px] relative rounded-[24px] shrink-0 w-full" />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

/**
 * @figmaAssetKey 96627452f6e7f7f28aabc6ba43f7fa55949479e9
 */
function AstraLogo({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Astra Logo">
      <div className="relative shrink-0 size-[32px]" data-name="Content">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Content">
            <g clipPath="url(#clip0_1_1696)">
              <path d={svgPaths.p3b51bc00} fill="var(--fill-0, #5250F3)" />
              <g id="Grid"></g>
              <path d={svgPaths.p1d890080} fill="var(--fill-0, white)" id="Logo" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_1696">
              <path d={svgPaths.p3b51bc00} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 51e1f0c522e2006abf37415ff4ed82ce40a22722
 */
function SidebarNavigation({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Sidebar Navigation">
      <div className="box-border content-stretch flex flex-col h-[900px] items-center justify-between px-0 py-[12px] relative w-[60px]">
        <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-[60px]" data-name="Nav">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Navigation">
            <AstraLogo className="content-stretch flex items-start relative shrink-0" />
            <div className="box-border content-stretch flex flex-col items-center p-[12px] relative rounded-[8px] shrink-0" data-name="Sidebar Button">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24">
                <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-6.94%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
                      <path d={svgPaths.p75f09b2} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#d1d0f9] box-border content-stretch flex flex-col items-center p-[12px] relative rounded-[8px] shrink-0" data-name="Sidebar Button">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24">
                <div className="absolute inset-[8.333%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                      <path d={svgPaths.p3d93c00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-center p-[12px] relative rounded-[8px] shrink-0" data-name="Sidebar Button">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24">
                <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-7.81%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 23">
                      <path d={svgPaths.p294d3840} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-center p-[12px] relative rounded-[8px] shrink-0" data-name="Sidebar Button">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24">
                <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.94%_-6.25%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 21">
                      <path d={svgPaths.p6bbe170} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Navigation">
          <div className="box-border content-stretch flex flex-col items-center p-[12px] relative rounded-[8px] shrink-0" data-name="Sidebar Button">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24">
              <div className="absolute inset-[4.167%]" data-name="Icon">
                <div className="absolute inset-[-5.682%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <g id="Icon">
                      <path d={svgPaths.p22873300} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
                      <path d={svgPaths.p37cc82f0} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Avatar size="Medium" className="relative rounded-[999px] shrink-0 size-[32px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="actions">
      <div className="relative rounded-[999px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
          <p className="font-['Figma_Sans_VF:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#5250f3] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Export
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#5250f3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
      <div className="bg-[#5250f3] relative rounded-[999px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
          <p className="font-['Figma_Sans_VF:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Share
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#5250f3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[4px] rounded-[6px] top-[4px] translate-x-[-50%]" data-name="breadcrumb">
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Projects
      </p>
      <div className="h-[8px] relative shrink-0 w-[5px]">
        <div className="absolute inset-[-4.97%_-12.72%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
            <path d={svgPaths.p38646380} id="Vector 1" stroke="var(--stroke-0, black)" strokeOpacity="0.5" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Marin mountain biking
      </p>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="toolbar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="IconVideo">
            <div className="absolute inset-[20.83%_4.17%]" data-name="Icon">
              <div className="absolute inset-[-8.93%_-5.68%]" style={{ "--stroke-0": "rgba(82, 80, 243, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 17">
                  <g id="Icon">
                    <path d={svgPaths.p1ba9d300} stroke="var(--stroke-0, #5250F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d={svgPaths.p98fe00} stroke="var(--stroke-0, #5250F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <Actions />
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="aspect-[1920/1080] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="video">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#5250f3] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgVideo} />
      </div>
      <div className="absolute font-['Helvetica:Bold',sans-serif] leading-[0.89] left-[36px] not-italic text-[58px] text-nowrap text-white top-[194px] tracking-[-1.16px] whitespace-pre">
        <p className="mb-0">Mountain</p>
        <p>Biking</p>
      </div>
      <div className="absolute font-['Helvetica:Bold',sans-serif] leading-[0.89] left-[594px] not-italic text-[58px] text-nowrap text-white top-[194px] tracking-[-1.16px] whitespace-pre">
        <p className="mb-0">in</p>
        <p>Marin</p>
      </div>
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="video container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-0 relative w-full">
          <Video />
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-[8px] relative rounded-[999px] shrink-0 w-full" data-name="progress bar">
      <div className="absolute bg-[#5250f3] h-[8px] left-0 rounded-[999px] top-0 w-[181px]" data-name="progress" />
      <div className="absolute left-[171px] size-[14px] top-[-3px]">
        <div className="absolute inset-[-122.143%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
            <g filter="url(#filter0_d_1_1686)" id="Ellipse 304">
              <circle cx="24.1" cy="24.1" fill="var(--fill-0, white)" r="7" />
              <circle cx="24.1" cy="24.1" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.15" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48.2" id="filter0_d_1_1686" width="48.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="5" result="effect1_dropShadow_1_1686" />
                <feOffset />
                <feGaussianBlur stdDeviation="6.05" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1686" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1686" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdvanceControls() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="advance controls">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="IconRewind">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-8.93%_-6.25%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
              <g id="Icon">
                <path d={svgPaths.p3349e200} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2.5" />
                <path d={svgPaths.p9253180} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="IconFastForward">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-8.93%_-6.25%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
              <g id="Icon">
                <path d={svgPaths.pdcdee80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2.5" />
                <path d={svgPaths.p3708d380} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftControls() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left controls">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="IconPlay">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.94%_-8.93%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
              <path d={svgPaths.p117bd00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <AdvanceControls />
    </div>
  );
}

function RightControls() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="right controls">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="IconSettings">
        <div className="absolute inset-[4.167%]" data-name="Icon">
          <div className="absolute inset-[-5.682%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
              <g id="Icon">
                <path d={svgPaths.p22873300} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
                <path d={svgPaths.p37cc82f0} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timecode() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center left-1/2 top-[2px] translate-x-[-50%]" data-name="timecode">
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0:50
      </p>
      <div className="h-[10px] relative shrink-0 w-[6px]">
        <div className="absolute inset-[-3.86%_-10.72%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
            <path d={svgPaths.p25d74580} id="Vector 1" stroke="var(--stroke-0, black)" strokeOpacity="0.3" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4:24
      </p>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="controls">
      <LeftControls />
      <RightControls />
      <Timecode />
    </div>
  );
}

function Comments() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="comments">
      <div className="absolute left-[83px] overflow-clip size-[20px] top-0" data-name="IconMessageSquare">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.67%]" style={{ "--stroke-0": "rgba(82, 80, 243, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p11a45400} id="Icon" stroke="var(--stroke-0, #5250F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[345px] overflow-clip size-[20px] top-0" data-name="IconMessageSquare">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.67%]" style={{ "--stroke-0": "rgba(82, 80, 243, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p11a45400} id="Icon" stroke="var(--stroke-0, #5250F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[365px] overflow-clip size-[20px] top-0" data-name="IconMessageSquare">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.67%]" style={{ "--stroke-0": "rgba(82, 80, 243, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p11a45400} id="Icon" stroke="var(--stroke-0, #5250F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[541px] overflow-clip size-[20px] top-0" data-name="IconMessageSquare">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.67%]" style={{ "--stroke-0": "rgba(82, 80, 243, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p11a45400} id="Icon" stroke="var(--stroke-0, #5250F3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Control() {
  return (
    <div className="bg-[#d1d0f9] h-full overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[32px]" data-name="control">
      <div className="absolute left-[calc(50%+0.5px)] overflow-clip size-[16px] top-[calc(50%-0.063px)] translate-x-[-50%] translate-y-[-50%]" data-name="IconFilm">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <div className="absolute inset-[-6%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p1c5fcb00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Track() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="track">
      <div className="absolute h-[32px] left-[4px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19408} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[64px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19409} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[124px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgVideo} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[184px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19411} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[244px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19412} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[304px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19413} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[364px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19414} />
        </div>
      </div>
      <div className="absolute h-[32px] left-[424px] top-[4px] w-[58px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle19415} />
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[32px] left-[484px] top-[4px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[32px] left-[544px] top-[4px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[32px] left-[604px] top-[4px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[32px] left-[664px] top-[4px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[32px] left-[724px] top-[4px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[32px] left-[784px] top-[4px] w-[58px]" />
    </div>
  );
}

function Track1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-full" data-name="track">
      <Control />
      <Track />
    </div>
  );
}

function Control1() {
  return (
    <div className="bg-[#d1d0f9] h-full overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[32px]" data-name="control">
      <div className="absolute left-[calc(50%+0.5px)] overflow-clip size-[16px] top-[calc(50%-0.063px)] translate-x-[-50%] translate-y-[-50%]" data-name="IconMic">
        <div className="absolute inset-[4.17%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-5.45%_-8.57%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
              <path d={svgPaths.p26f6fd00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Track2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="track">
      <div className="absolute flex h-[15px] items-center justify-center left-[-885px] right-[204px] top-[calc(50%+0.438px)] translate-y-[-50%]">
        <div className="flex-none h-[15px] rotate-[180deg] scale-y-[-100%] w-[1579px]">
          <div className="overflow-clip relative size-full" data-name="sound wave">
            <div className="absolute bg-[#d1d0f9] bottom-[12.5%] left-0 rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[12.5%] left-[65px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[12.5%] left-[130px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[195px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[260px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[325px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[390px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[455px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[520px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[585px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[650px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[715px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[780px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[845px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[910px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[975px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1040px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1105px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1170px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1235px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1300px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1365px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[22.5%] left-[5px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[22.5%] left-[70px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[22.5%] left-[135px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[200px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[265px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[330px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[395px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[460px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[525px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[590px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[655px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[720px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[785px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[850px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[915px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[980px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1045px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1110px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1175px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1240px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1305px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1370px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[10px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[75px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[140px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[205px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[270px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[335px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[400px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[465px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[530px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[595px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[660px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[725px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[790px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[855px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[920px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[985px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1050px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1115px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1180px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1245px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1310px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1375px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[15px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[80px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[145px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[210px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[275px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[340px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[405px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[470px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[535px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[600px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[665px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[730px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[795px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[860px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[925px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[990px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1055px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1120px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1185px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1250px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1315px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1380px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[10%] left-[20px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[10%] left-[85px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[150px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[215px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[280px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[345px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[410px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[475px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[540px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[605px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[670px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[735px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[800px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[865px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[930px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[995px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1060px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1125px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1190px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1255px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1320px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1385px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[25px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[90px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[155px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[220px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[285px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[350px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[415px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[480px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[545px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[610px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[675px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[740px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[805px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[870px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[935px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1000px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1065px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1130px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1195px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1260px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1325px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1390px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-0 left-[30px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-0 left-[95px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[160px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[225px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[290px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[355px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[420px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[485px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[550px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[615px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[680px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[745px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[810px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[875px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[940px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1005px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1070px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1135px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1200px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1265px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1330px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1395px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[35px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[100px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[165px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[230px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[295px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[360px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[425px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[490px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[555px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[620px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[685px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[750px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[815px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[880px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[945px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1010px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1075px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1140px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1205px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1270px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1335px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1400px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[40%] left-[40px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[40%] left-[105px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[170px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[235px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[300px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[365px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[430px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[495px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[560px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[625px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[690px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[755px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[820px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[885px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[950px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1015px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1080px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1145px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1210px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1275px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1340px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1405px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[45px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[110px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[175px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[240px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[305px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[370px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[435px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[500px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[565px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[630px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[695px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[760px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[825px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[890px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[955px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1020px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1085px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1150px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1215px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1280px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1345px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1410px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[35%] left-[50px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[35%] left-[115px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[180px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[245px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[310px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[375px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[440px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[505px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[570px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[635px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[700px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[765px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[830px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[895px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[960px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1025px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1090px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1155px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1220px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1285px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1350px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1415px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[55px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[120px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[185px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[250px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[315px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[380px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[445px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[510px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[575px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[640px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[705px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[770px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[835px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[900px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[965px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1030px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1095px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1160px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1225px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1290px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1355px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1420px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[42.5%] left-[60px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[42.5%] left-[125px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[190px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[255px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[320px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[385px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[450px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[515px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[580px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[645px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[710px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[775px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[840px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[905px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[970px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1035px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1100px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1165px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1230px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1295px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1360px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1425px] rounded-[999px] top-[42.5%] w-[3px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Track3() {
  return (
    <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-full" data-name="track">
      <Control1 />
      <Track2 />
    </div>
  );
}

function Control2() {
  return (
    <div className="bg-[#d1d0f9] h-full overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[32px]" data-name="control">
      <div className="absolute left-[calc(50%+0.5px)] overflow-clip size-[16px] top-[calc(50%-0.063px)] translate-x-[-50%] translate-y-[-50%]" data-name="IconMusic">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.67%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p77c6000} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Track4() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="track">
      <div className="absolute flex h-[27px] items-center justify-center left-[-686px] right-[-593px] top-[calc(50%+0.438px)] translate-y-[-50%]">
        <div className="flex-none h-[27px] rotate-[180deg] scale-y-[-100%] w-[2177px]">
          <div className="overflow-clip relative size-full" data-name="sound wave">
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-0 rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[65px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[130px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[195px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[260px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[325px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[390px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[455px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[520px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[585px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[650px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[715px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[780px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[845px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[910px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[975px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1040px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1105px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1170px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[12.5%] left-[1235px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[12.5%] left-[1300px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[12.5%] left-[1365px] rounded-[999px] top-[12.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[5px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[70px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[135px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[200px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[265px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[330px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[395px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[460px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[525px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[590px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[655px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[720px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[785px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[850px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[915px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[980px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1045px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1110px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1175px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[22.5%] left-[1240px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[22.5%] left-[1305px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[22.5%] left-[1370px] rounded-[999px] top-[22.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[10px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[75px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[140px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[205px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[270px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[335px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[400px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[465px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[530px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[595px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[660px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[725px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[790px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[855px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[920px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[985px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1050px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1115px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1180px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1245px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[1310px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[1375px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[15px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[80px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[145px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[210px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[275px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[340px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[405px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[470px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[535px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[600px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[665px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[730px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[795px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[860px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[925px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[990px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1055px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1120px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1185px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1250px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[1315px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[1380px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[20px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[85px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[150px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[215px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[280px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[345px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[410px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[475px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[540px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[605px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[670px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[735px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[800px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[865px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[930px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[995px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1060px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1125px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1190px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[10%] left-[1255px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[10%] left-[1320px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[10%] left-[1385px] rounded-[999px] top-[10%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[25px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[90px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[155px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[220px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[285px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[350px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[415px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[480px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[545px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[610px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[675px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[740px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[805px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[870px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[935px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1000px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1065px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1130px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1195px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1260px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[1325px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[1390px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[30px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[95px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[160px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[225px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[290px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[355px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[420px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[485px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[550px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[615px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[680px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[745px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[810px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[875px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[940px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1005px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1070px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1135px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1200px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 left-[1265px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-0 left-[1330px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-0 left-[1395px] rounded-[999px] top-0 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[35px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[100px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[165px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[230px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[295px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[360px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[425px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[490px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[555px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[620px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[685px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[750px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[815px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[880px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[945px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1010px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1075px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1140px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1205px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[32.5%] left-[1270px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[1335px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[32.5%] left-[1400px] rounded-[999px] top-[32.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[40px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[105px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[170px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[235px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[300px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[365px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[430px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[495px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[560px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[625px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[690px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[755px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[820px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[885px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[950px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1015px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1080px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1145px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1210px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40%] left-[1275px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[40%] left-[1340px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[40%] left-[1405px] rounded-[999px] top-[40%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[45px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[110px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[175px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[240px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[305px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[370px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[435px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[500px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[565px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[630px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[695px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[760px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[825px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[890px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[955px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1020px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1085px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1150px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1215px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-1/4 left-[1280px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[1345px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-1/4 left-[1410px] rounded-[999px] top-1/4 w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[50px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[115px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[180px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[245px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[310px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[375px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[440px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[505px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[570px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[635px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[700px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[765px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[830px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[895px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[960px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1025px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1090px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1155px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1220px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[35%] left-[1285px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[35%] left-[1350px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[35%] left-[1415px] rounded-[999px] top-[35%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[55px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[120px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[185px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[250px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[315px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[380px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[445px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[510px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[575px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[640px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[705px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[770px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[835px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[900px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[965px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1030px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1095px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1160px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[20%] left-[1225px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[1290px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[1355px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[20%] left-[1420px] rounded-[999px] top-[20%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[60px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[125px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[190px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[255px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[320px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[385px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[450px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[515px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[580px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[645px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[710px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[775px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[840px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[905px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[970px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1035px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1100px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1165px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[42.5%] left-[1230px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[42.5%] left-[1295px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[42.5%] left-[1360px] rounded-[999px] top-[42.5%] w-[3px]" />
            <div className="absolute bg-[#d1d0f9] bottom-[42.5%] left-[1425px] rounded-[999px] top-[42.5%] w-[3px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Track5() {
  return (
    <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-full" data-name="track">
      <Control2 />
      <Track4 />
    </div>
  );
}

function Tracks() {
  return (
    <div className="relative shrink-0 w-full" data-name="tracks">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-0 relative w-full">
          <Track1 />
          <Track3 />
          <Track5 />
          <div className="absolute bottom-[-2.94px] flex items-center justify-center left-[194px] top-[-3.06px] w-0">
            <div className="flex-none h-px rotate-[90deg] w-[134px]">
              <div className="relative size-full" data-name="playhead indicator">
                <div className="absolute inset-[-4px_-0.56%_-4px_-2.99%]" style={{ "--stroke-0": "rgba(82, 80, 243, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 8">
                    <path d={svgPaths.p2f0b7800} fill="var(--stroke-0, #5250F3)" id="playhead indicator" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-[#d1d0f9] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="toolbar item">
        <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Size=24">
          <div className="absolute inset-[12.5%_16.79%_16.79%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-7.37%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2893ba80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="toolbar item">
        <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Size=24">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-6.944%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPaths.p18bde480} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="toolbar item">
        <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Size=24">
          <div className="absolute inset-[4.167%]" data-name="Icon">
            <div className="absolute inset-[-5.68%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <path d={svgPaths.p2fbd8e00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="toolbar item">
        <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Size=24">
          <div className="absolute inset-[12.5%_16.67%_12.5%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-6.94%_-7.35%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                <path d={svgPaths.p237d4000} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="toolbar item">
        <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Size=24">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-6.94%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPaths.p2e6e5ff0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Editor() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow h-full items-center min-h-px min-w-px overflow-clip pb-0 pt-[12px] px-0 relative shrink-0" data-name="editor">
      <Toolbar />
      <VideoContainer />
      <div className="relative shrink-0 w-full" data-name="video control">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[8px] px-[24px] relative w-full">
            <ProgressBar />
            <Controls />
          </div>
        </div>
      </div>
      <Comments />
      <Tracks />
      <div className="absolute bg-white h-[48px] left-[336px] rounded-[16px] top-[828px] w-[211px]" data-name="toolbar">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_12.1px_5px_rgba(0,0,0,0.1)]" />
        <Frame1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[900px] items-start relative shrink-0 w-full">
      <PromptPane className="bg-[rgba(255,255,255,0.5)] h-full relative shrink-0 w-[400px]">
        <div className="size-full">
          <div className="size-full" />
        </div>
      </PromptPane>
      <Editor />
    </div>
  );
}

function Editor1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="editor">
      <Frame />
    </div>
  );
}

export default function AstraVideoExample() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex items-start relative size-full" data-name="Astra Video - Example">
      <SidebarNavigation className="bg-white h-full relative shrink-0 w-[60px]" />
      <Editor1 />
    </div>
  );
}