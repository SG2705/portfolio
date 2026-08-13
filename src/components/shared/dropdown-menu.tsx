import {
  type ButtonHTMLAttributes,
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdown() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("Dropdown components must be used within a DropdownMenu");
  }

  return context;
}

interface DropdownMenuProps {
  children: ReactNode;
}

/**
 * DropdownMenu
 */
function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
}

interface DropdownMenuTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

/**
 * DropdownMenuTrigger
 */
function DropdownMenuTrigger({ children, asChild }: DropdownMenuTriggerProps) {
  const { open, setOpen, triggerRef } = useDropdown();

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(!open);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    },
    [open, setOpen],
  );

  if (asChild && children) {
    // Clone the child and add our props
    const child = children as React.ReactElement<
      ButtonHTMLAttributes<HTMLButtonElement>
    >;

    return (
      <child.type
        {...child.props}
        ref={triggerRef}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          child.props.onClick?.(e);
          handleClick();
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
          child.props.onKeyDown?.(e);
          handleKeyDown(e);
        }}
        aria-expanded={open}
        aria-haspopup="menu"
      />
    );
  }

  return (
    <button
      ref={triggerRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={open}
      aria-haspopup="menu"
      type="button"
    >
      {children}
    </button>
  );
}

interface DropdownMenuContentProps {
  children: ReactNode;
  align?: "start" | "end";
  className?: string;
}

/**
 * DropdownMenuContent
 */
function DropdownMenuContent({
  children,
  align = "start",
  className,
}: DropdownMenuContentProps) {
  const { open, setOpen, triggerRef } = useDropdown();
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        contentRef.current &&
        !contentRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen, triggerRef]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      role="menu"
      className={cn(
        "absolute top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-card p-1 shadow-lifted",
        "animate-in fade-in-0 zoom-in-95",
        align === "end" ? "right-0" : "left-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface DropdownMenuItemProps {
  children: ReactNode;
  onSelect?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * DropdownMenuItem
 */
function DropdownMenuItem({
  children,
  onSelect,
  className,
  disabled = false,
}: DropdownMenuItemProps) {
  const { setOpen } = useDropdown();

  const handleClick = useCallback(() => {
    if (disabled) return;
    onSelect?.();
    setOpen(false);
  }, [disabled, onSelect, setOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect?.();
        setOpen(false);
      }
    },
    [disabled, onSelect, setOpen],
  );

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-surface focus:bg-surface",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {children}
    </div>
  );
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
};
