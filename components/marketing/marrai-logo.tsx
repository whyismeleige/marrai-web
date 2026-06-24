import { cn } from "@/lib/utils";

type MarraiLogoProps = {
  className?: string;
};

export function MarraiLogo({ className }: MarraiLogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={cn("shrink-0", className)}
    >
      <path
        d="M8.5 12.2V7.8c0-1.3 1-2.3 2.3-2.3h4.4c.7 0 1.3.3 1.8.8l6.4 6.4c.5.5.8 1.1.8 1.8v4.4c0 1.3-1 2.3-2.3 2.3h-4.4c-.7 0-1.3-.3-1.8-.8L9.3 14c-.5-.5-.8-1.1-.8-1.8Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M10 9.9v3.4c0 .5.2 1 .6 1.3l6.8 6.8c.4.4.9.6 1.3.6h3.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 10.4 10.4 21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
