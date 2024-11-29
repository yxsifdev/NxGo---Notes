import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-5xl mx-auto space-y-5">
      <section className="bg-white/10">
        <h1 className="text-blue-500">
          LAYOUT: ABOUT <span className="font-geistMono">layout.tsx</span>
        </h1>
        {children}
      </section>
    </main>
  );
}
