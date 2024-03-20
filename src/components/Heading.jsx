import React from "react";

export default function Heading() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <a
        href="https://zach-me.vercel.app"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        {"🎉 "}
        <span className="sm:hidden">New Project Launch</span>
        <span className="hidden sm:inline">New Project Launch From ZCH. </span>
      </a>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
        URL too long? keep it simple
      </h1>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:hidden">
        Short The URL
      </h1>
      <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Shorten your URL here by entering the long URL & Press It
      </span>
    </section>
  );
}
