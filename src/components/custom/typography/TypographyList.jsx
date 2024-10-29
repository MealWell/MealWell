import { cn } from "@/lib/utils.js";

export function TypographyList({ className, children, ...props }) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  );
}
