export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex cursor-default items-center rounded-md border border-neutral-200 bg-white px-2.5 py-1 font-mono text-xs text-neutral-700 transition-colors hover:border-ink hover:bg-ink hover:text-white">
      {children}
    </span>
  );
}
