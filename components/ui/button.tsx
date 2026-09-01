import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
}

export function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
      : "border border-border text-foreground hover:border-accent hover:text-accent";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
