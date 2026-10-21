"use client";

import { useState } from "react";
import type { NewsCategory, NewsItem } from "../data/newsData";

const categoryColors: Record<NewsCategory, string> = {
  "不動産": "border-[#C5A065]/60 text-[#C5A065]",
  "介護": "border-blue-400/60 text-blue-400",
  "教育": "border-emerald-400/60 text-emerald-400",
  "IT・AI": "border-purple-400/60 text-purple-400",
  "経済": "border-rose-400/60 text-rose-400",
};

const categoryBg: Record<NewsCategory, string> = {
  "不動産": "bg-[#C5A065]/10",
  "介護": "bg-blue-400/10",
  "教育": "bg-emerald-400/10",
  "IT・AI": "bg-purple-400/10",
  "経済": "bg-rose-400/10",
};

function NewsBody({ text, linkify }: { text: string; linkify: boolean }) {
  const parts = text.split(/(https?:\/\/[^\s）]+)/g);
  return (
    <>
      {parts.map((part, index) =>
        linkify && part.startsWith("http") ? (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-[#C5A065] underline underline-offset-2 hover:text-[#E5C48A]"
          >
            {part}
          </a>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

export function NewsCard({
  item,
  heading: Heading = "h2",
}: {
  item: NewsItem;
  heading?: "h2" | "h3";
}) {
  const [open, setOpen] = useState(false);
  const bodyId = `news-body-${item.id}`;
  const excerpt = item.body.replace(/\s+/g, " ").trim();

  return (
    <article className="flex flex-col border border-[#C5A065]/20 bg-[#1E293B]/25 rounded-lg p-5 sm:p-6 hover:border-[#C5A065]/40 transition-colors">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <time className="text-xs tracking-wider text-[#C5A065]" dateTime={item.date.replace(/\./g, "-")}>
          {item.date}
        </time>
        <span
          className={`rounded border px-2 py-0.5 text-[11px] ${categoryColors[item.category]} ${categoryBg[item.category]}`}
        >
          {item.category}
        </span>
      </div>
      <Heading
        className={`mb-3 font-serif text-base font-semibold leading-snug ${open ? "" : "line-clamp-2 min-h-[2.75rem]"}`}
      >
        {item.title}
      </Heading>
      <p
        id={bodyId}
        className={`text-sm leading-relaxed text-[#B0B0B0] ${
          open ? "whitespace-pre-line" : "line-clamp-3 min-h-[calc(0.875rem*1.625*3)]"
        }`}
      >
        {open ? <NewsBody text={item.body} linkify /> : excerpt}
      </p>
      <button
        type="button"
        className="mt-4 self-start text-sm tracking-wide text-[#C5A065] hover:text-[#E5C888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A065]"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "閉じる ▲" : "続きを読む ▼"}
      </button>
    </article>
  );
}

export function NewsCardGrid({
  items,
  heading = "h2",
}: {
  items: NewsItem[];
  heading?: "h2" | "h3";
}) {
  return (
    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} heading={heading} />
      ))}
    </div>
  );
}
