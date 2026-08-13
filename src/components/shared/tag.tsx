import { cn } from "@/lib/utils";

/**
 * Tag
 */
function Tag({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-tight text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
