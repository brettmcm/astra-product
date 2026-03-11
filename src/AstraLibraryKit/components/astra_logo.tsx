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
        <path
          d="M0 12.8C0 8.31958 0 6.07937 0.871948 4.36808C1.63893 2.86278 2.86278 1.63893 4.36808 0.871948C6.07937 0 8.31958 0 12.8 0H19.2C23.6804 0 25.9206 0 27.6319 0.871948C29.1372 1.63893 30.3611 2.86278 31.1281 4.36808C32 6.07937 32 8.31958 32 12.8V19.2C32 23.6804 32 25.9206 31.1281 27.6319C30.3611 29.1372 29.1372 30.3611 27.6319 31.1281C25.9206 32 23.6804 32 19.2 32H12.8C8.31958 32 6.07937 32 4.36808 31.1281C2.86278 30.3611 1.63893 29.1372 0.871948 27.6319C0 25.9206 0 23.6804 0 19.2V12.8Z"
          fill="var(--brand)"
        />
        <path
          d="M16.3472 3.99756C17.3609 11.2801 20.7163 14.635 27.9985 15.6489V16.3452C20.7158 17.359 17.3608 20.7154 16.3472 27.9985H15.6509C14.6371 20.715 11.2813 17.3588 3.99756 16.3452V15.6489C11.2808 14.6352 14.6369 11.2805 15.6509 3.99756H16.3472Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
