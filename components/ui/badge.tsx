export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}
