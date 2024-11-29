"use client";

import { useSession, signOut } from "next-auth/react";

import Image from "next/image";
import SideBarComponent from "@/components/ui/dashboard/SideBar";
import Preloader from "@/icons/Preloader";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <SideBarComponent userAvatar={session.user?.image as string} />
          <main className="w-full p-4">
            <aside className="flex items-center justify-end gap-x-2">
              <Image
                src={session.user?.image as string}
                alt="user-profile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="pr-4 font-medium border-r-2 text-neutral-400 border-neutral-700">
                {session.user?.name || "unknown"}
              </p>
              <button
                onClick={async () => await signOut()}
                className="px-4 py-2 ml-2 transition-colors border rounded-lg hover:border-red-500 hover:bg-red-500/30 bg-neutral-900 border-neutral-800"
              >
                Cerrar Sesión
              </button>
            </aside>
          </main>
        </>
      ) : (
        <main className="flex items-center justify-center w-full h-screen bg-black">
          <div className="flex flex-col items-center gap-2">
            <p>Cargando...</p>
            <Preloader />
          </div>
        </main>
      )}
    </>
  );
}
