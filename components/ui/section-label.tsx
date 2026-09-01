export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
      {"// "}
      {children}
    </p>
  );
}
