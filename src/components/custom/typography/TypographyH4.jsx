import { cn } from "@/lib/utils.js";

export function TypographyH4({ className, children, ...props }) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}
