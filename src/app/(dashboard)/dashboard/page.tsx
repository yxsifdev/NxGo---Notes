"use client";

import { useSession } from "next-auth/react";

import Image from "next/image";
import Preloader from "@/icons/Preloader";
import SignOut from "@/components/SignOut";
import ListNotes from "./list-notes";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <aside className="flex items-center justify-end gap-x-2">
            <Image
              src={
                session.user?.image ||
                "https://yt3.googleusercontent.com/wpc2B6nslz9DW_pd-KZjlQ26Ds9DLVom3yeMFy87sIZcfZGe7AXVqlZUvP-ePshI7VXvqiDRpWQ=s900-c-k-c0x00ffffff-no-rj"
              }
              alt="user-profile"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="pr-4 font-medium border-r-2 text-neutral-400 border-neutral-700">
              {session.user?.name || "unknown"}
            </p>
            <SignOut />
          </aside>
          <section className="mt-5">
            <h1 className="font-bold text-3xl">Organiza tus Notas</h1>
            <p className="max-w-2xl text-zinc-500 mt-2">
              ¿Por qué esperar? Ya puedes comenzar ahora y lleva la organización
              de tus proyectos al siguiente nivel. 💡
            </p>
            <ListNotes />
          </section>
        </>
      ) : (
        <main className="flex items-center justify-center w-full h-[50vh] bg-neutral-950">
          <div className="flex flex-col items-center gap-2">
            <p>Cargando...</p>
            <Preloader />
          </div>
        </main>
      )}
    </>
  );
}
