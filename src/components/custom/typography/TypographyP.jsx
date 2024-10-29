import { cn } from "@/lib/utils.js";

export function TypographyP({ className, children, ...props }) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}
