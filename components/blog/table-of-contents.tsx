import type { BlogPortableTextBlock } from "@/sanity/lib/types";

function getTextFromBlock(block: BlogPortableTextBlock) {
  const children = block.children;

  if (!Array.isArray(children)) {
    return "";
  }

  return children
    .map((child) => {
      if (child && typeof child === "object" && "text" in child) {
        return String(child.text ?? "");
      }

      return "";
    })
    .join("");
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getTableOfContents(body: BlogPortableTextBlock[]) {
  return body
    .filter((block) => block._type === "block")
    .map((block) => {
      const style = typeof block.style === "string" ? block.style : "normal";
      const text = getTextFromBlock(block);

      if (!text || (style !== "h2" && style !== "h3")) {
        return null;
      }

      return {
        id: slugifyHeading(text),
        text,
        level: style === "h3" ? 3 : 2,
      };
    })
    .filter(Boolean) as Array<{ id: string; text: string; level: 2 | 3 }>;
}

export function TableOfContents({ body }: { body: BlogPortableTextBlock[] }) {
  const items = getTableOfContents(body);

  if (!items.length) {
    return null;
  }

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-8 rounded-[1.5rem] border border-slate-900/10 bg-white/70 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          In this note
        </div>
        <nav className="mt-4 grid gap-3 text-sm">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={item.level === 3 ? "pl-3 text-slate-500" : "text-slate-700"}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
