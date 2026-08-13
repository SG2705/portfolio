import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:opacity-90 active:scale-[0.99]",
        outline:
          "border border-border bg-card text-foreground shadow-soft hover:border-foreground/25 hover:bg-surface active:scale-[0.99]",
        ghost: "text-muted-foreground hover:bg-surface hover:text-foreground",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ActionVariants = VariantProps<typeof actionVariants>;

/**
 * ActionButton
 */
export function ActionButton({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ActionVariants) {
  return (
    <button
      className={cn(actionVariants({ variant, size }), className)}
      {...props}
    />
  );
}

/**
 * ActionLink
 */
export function ActionLink({
  className,
  variant,
  size,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & ActionVariants) {
  return (
    <a className={cn(actionVariants({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}
