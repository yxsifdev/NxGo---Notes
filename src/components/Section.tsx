import React from "react";

interface Props {
  className?: string;
  defaultClass: "on" | "off";
}

export default function SectionComponent({
  children,
  className,
  defaultClass = "on",
}: Props & { children: React.ReactNode }) {
  return (
    <section
      className={`${
        defaultClass === "on" ? "bg-neutral-900 max-w-5xl mx-auto" : ""
      } ${className || ""}`}
    >
      {children}
    </section>
  );
}
