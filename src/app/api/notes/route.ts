import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import db from "@/lib/db";
import { authOptions } from "@/lib/authOptions";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log("SHOW SESSION");
    console.log(session);

    if (session) {
      const findUser = await db.user.findUnique({
        where: { username: session.user?.name as string },
      });

      console.log("SHOW USER");
      console.log(findUser);
      const notes = await db.note.findMany({
        where: { authorId: findUser?.id },
      });
      console.log("SHOW NOTES");
      console.log(notes);
    }

    return NextResponse.json({ text: "Lista de notas" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: "Ocurrió un error desconocido." });
    }
  }
}

// export async function POST(request: NextRequest) {}
