import SignOut from "@/components/SignOut";
import PreloaderIcon from "@/icons/Preloader";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Archived() {
  const session = await getServerSession();
  return (
    <>
      {session ? (
        <>
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
            <SignOut />
          </aside>
          <section>
            <h1>Titulo</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              ullam, sed vitae eos sequi consectetur. Quod nostrum minus,
              debitis quae quas quia dicta iste explicabo exercitationem
              obcaecati, corporis animi unde.
            </p>
          </section>
        </>
      ) : (
        <main className="flex items-center justify-center w-full h-screen bg-neutral-950">
          <div className="flex flex-col items-center gap-2">
            <p>Cargando...</p>
            <PreloaderIcon />
          </div>
        </main>
      )}
    </>
  );
}
