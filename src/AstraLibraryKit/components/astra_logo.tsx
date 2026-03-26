import { cn } from "./utils";

interface AstraLogoProps {
  size?: number;
  className?: string;
}

export function AstraLogo({ size = 32, className }: AstraLogoProps) {
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <svg
        className="block size-full"
        viewBox="0 0 32 32"
        fill="none"
        role="img"
        aria-label="Astra logo"
      >
        <rect
          width="32"
          height="32"
          rx="8"
          fill="var(--ads-brand-primary)"
        />
        <path
          d="M16.3472 3.99756C17.3609 11.2801 20.7163 14.635 27.9985 15.6489V16.3452C20.7158 17.359 17.3608 20.7154 16.3472 27.9985H15.6509C14.6371 20.715 11.2813 17.3588 3.99756 16.3452V15.6489C11.2808 14.6352 14.6369 11.2805 15.6509 3.99756H16.3472Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
