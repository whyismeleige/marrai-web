"use client";

import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import Link from "next/link";

import type {
  BlogPortableTextBlock,
  PortableTextImage,
} from "@/sanity/lib/types";

import { SanityImage } from "./sanity-image";
import { slugifyHeading } from "./table-of-contents";

function getChildrenText(children: unknown) {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children
      .map((child) => (typeof child === "string" ? child : ""))
      .join("");
  }

  return "";
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-8 text-slate-700">{children}</p>
    ),
    h2: ({ children }) => {
      const text = getChildrenText(children);

      return (
        <h2
          id={slugifyHeading(text)}
          className="scroll-mt-24 pt-6 text-3xl font-normal tracking-[-0.04em] text-slate-950"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = getChildrenText(children);

      return (
        <h3
          id={slugifyHeading(text)}
          className="scroll-mt-24 pt-4 text-2xl font-normal tracking-[-0.035em] text-slate-950"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="pt-3 text-xl font-medium tracking-[-0.03em] text-slate-950">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="rounded-[1.5rem] border border-[#4C9A6A]/15 bg-[#4C9A6A]/8 px-5 py-4 text-base leading-8 text-slate-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="grid list-disc gap-2 pl-6 text-base leading-8 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="grid list-decimal gap-2 pl-6 text-base leading-8 text-slate-700">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a
            href={href}
            rel="noopener noreferrer"
            target={value?.blank === false ? undefined : "_blank"}
            className="font-medium text-[#326548] underline decoration-[#4C9A6A]/30 underline-offset-4"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="font-medium text-[#326548] underline decoration-[#4C9A6A]/30 underline-offset-4"
        >
          {children}
        </Link>
      );
    },
    externalLink: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";

      return (
        <a
          href={href}
          rel="noopener noreferrer"
          target={value?.blank === false ? undefined : "_blank"}
          className="font-medium text-[#326548] underline decoration-[#4C9A6A]/30 underline-offset-4"
        >
          {children}
        </a>
      );
    },
    internalPostLink: ({ children, value }) => {
      const slug =
        typeof value?.slug === "string"
          ? value.slug
          : typeof value?.reference?.slug?.current === "string"
            ? value.reference.slug.current
            : undefined;

      return (
        <Link
          href={slug ? `/blog/${slug}` : "/blog"}
          className="font-medium text-[#326548] underline decoration-[#4C9A6A]/30 underline-offset-4"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="rounded-md bg-slate-900/[0.06] px-1.5 py-0.5 text-[0.9em] text-slate-950">
        {children}
      </code>
    ),
  },
  types: {
    bodyImage: ({ value }) => {
      const image = value as PortableTextImage;

      return (
        <figure className="my-8 overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white/70 shadow-[0_16px_44px_rgba(15,23,42,0.05)]">
          <SanityImage
            image={image}
            alt={image.alt ?? ""}
            width={1200}
            height={720}
          />
          {image.caption ? (
            <figcaption className="px-5 py-3 text-sm text-slate-500">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    callout: ({ value }) => {
      const tone = typeof value?.tone === "string" ? value.tone : "note";
      const toneClass =
        tone === "warning"
          ? "border-amber-200 bg-amber-50 text-amber-900"
          : tone === "success"
            ? "border-[#4C9A6A]/20 bg-[#4C9A6A]/10 text-slate-800"
            : tone === "info"
              ? "border-sky-200 bg-sky-50 text-slate-800"
              : "border-slate-900/10 bg-white/72 text-slate-800";

      return (
        <aside className={`rounded-[1.5rem] border px-5 py-4 ${toneClass}`}>
          {typeof value?.title === "string" ? (
            <div className="text-sm font-medium text-slate-950">
              {value.title}
            </div>
          ) : null}
          {typeof value?.body === "string" ? (
            <p className="mt-2 text-sm leading-6">{value.body}</p>
          ) : null}
        </aside>
      );
    },
    codeBlock: ({ value }) => (
      <figure className="overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-slate-950 text-white">
        {typeof value?.filename === "string" || typeof value?.language === "string" ? (
          <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2 text-xs text-white/60">
            <span>{typeof value?.filename === "string" ? value.filename : "Code"}</span>
            <span>{typeof value?.language === "string" ? value.language : "text"}</span>
          </figcaption>
        ) : null}
        <pre className="overflow-x-auto p-4 text-sm leading-6">
          <code>{typeof value?.code === "string" ? value.code : ""}</code>
        </pre>
      </figure>
    ),
  },
};

export function PortableTextRenderer({
  value,
}: {
  value: BlogPortableTextBlock[];
}) {
  return (
    <div className="grid gap-6">
      <PortableText value={value} components={components} />
    </div>
  );
}
