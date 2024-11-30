"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      onClick={async () => await signOut()}
      className="px-4 py-2 ml-2 transition-colors border rounded-lg hover:border-red-500 hover:bg-red-500/30 bg-neutral-900 border-neutral-800"
    >
      Cerrar Sesión
    </button>
  );
}
