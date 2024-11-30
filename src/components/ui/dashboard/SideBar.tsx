"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/icons/Home";
import SettingsIcon from "@/icons/Settings";
import FileIcon from "@/icons/File";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  count?: string;
}

const sidebarItems: SidebarItemProps[] = [
  { icon: <HomeIcon />, label: "Todas", href: "/dashboard", count: "0" },
  {
    icon: <FileIcon />,
    label: "Archivados",
    href: "/dashboard/archived",
    count: "0",
  },
  {
    icon: <SettingsIcon />,
    label: "Configuración",
    href: "/dashboard/settings",
  },
];

export default function SideBarComponent({
  userAvatar,
}: {
  userAvatar: string;
}) {
  const pathname = usePathname();

  return (
    <section className="fixed hidden md:block border-r border-zinc-800 min-w-[300px] h-screen px-2">
      <div>
        <aside className="flex items-center justify-between p-4 mb-5">
          <div className="text-2xl font-bold tracking-tight">Bienvenido</div>
          <Image
            src={userAvatar}
            alt="user-profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </aside>
        <nav className="space-y-1">
          {sidebarItems.map(({ icon, label, href, count }) => (
            <Link
              key={href}
              href={href}
              className={`flex justify-between text-sm font-medium items-center gap-2 px-4 py-1.5 transition-colors border-l-2 border-transparent hover:bg-zinc-800 rounded-md ${
                pathname === href && "bg-zinc-800"
              }`}
            >
              <div className="flex items-center gap-x-2">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
              <span>{count}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <button></button>
      </div>
    </section>
  );
}
