// Endless horizontal ticker. The list is rendered twice so the loop is seamless.
export default function Marquee({ items }: { items: string[] }) {
  return (
    <div
      className="marquee relative overflow-hidden py-5"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
      aria-label={`Technologies: ${items.join(", ")}`}
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex flex-none items-center">
            {items.map((item) => (
              <li key={item} className="flex items-center font-serif text-2xl text-neutral-800 sm:text-3xl">
                <span className="px-6 sm:px-8">{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
