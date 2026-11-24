import { heldProperties, modelHouses } from "../data/companyProfile";

function PropertyItems({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-[#E5E5E5] leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A065]/80" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PropertyBlock({
  label,
  items,
  titleId,
  heading: Heading,
}: {
  label: string;
  items: readonly string[];
  titleId: string;
  heading: "h2" | "h4";
}) {
  return (
    <div>
      <p className="text-xs tracking-[0.2em] text-[#C5A065] mb-3">{label}</p>
      <Heading
        id={titleId}
        className="text-2xl md:text-3xl font-serif font-bold mb-6"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {label}
      </Heading>
      <PropertyItems items={items} />
    </div>
  );
}

export function HeldPropertyLists({ headingLevel = "h2" }: { headingLevel?: "h2" | "h4" }) {
  const Heading = headingLevel;

  return (
    <>
      <section className="border-t border-[#C5A065]/15 pt-12" aria-labelledby="held-properties-title">
        <PropertyBlock label="保有物件" items={heldProperties} titleId="held-properties-title" heading={Heading} />
      </section>
      <section className="border-t border-[#C5A065]/15 pt-12" aria-labelledby="model-houses-title">
        <PropertyBlock label="モデルハウス" items={modelHouses} titleId="model-houses-title" heading={Heading} />
      </section>
    </>
  );
}
