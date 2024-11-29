import React from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const sidebarItems: SidebarItemProps[] = [
  { icon: <span>🏠</span>, label: "Dashboard", href: "/dashboard" },
  {
    icon: <span>⚙️</span>,
    label: "Configuración",
    href: "/dashboard/settings",
  },
  { icon: <span>📁</span>, label: "Archivados", href: "/dashboard/archived" },
];

export default function SideBarComponent({
  userAvatar,
}: {
  userAvatar: string;
}) {
  const pathname = usePathname();

  return (
    <section className="hidden md:block border-r border-white/10 min-w-[250px] h-screen">
      <div>
        <aside className="flex items-center justify-between p-4 mb-5">
          <div className="text-2xl font-bold tracking-tight">NxGo ✨</div>
          <Image
            src={userAvatar}
            alt="user-profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </aside>
        <nav className="">
          {sidebarItems.map(({ icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 transition-colors border-l-2 border-transparent hover:bg-blue-500/20 hover:border-blue-500 ${
                pathname === href &&
                "bg-blue-500/20 border-blue-500 font-medium"
              }`}
            >
              <span>{icon}</span>
              <span>{label}</span>
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
