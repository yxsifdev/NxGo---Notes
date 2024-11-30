import { Metadata } from "next";
import { getServerSession } from "next-auth";
export const metadata: Metadata = {
  title: "NxGo ✨ - Dashboard",
};

import SideBarComponent from "@/components/ui/dashboard/SideBar";

export default async function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  console.log(session?.user?.image);
  return (
    <div className="flex">
      <SideBarComponent
        userAvatar={
          session?.user?.image ||
          "https://yt3.googleusercontent.com/wpc2B6nslz9DW_pd-KZjlQ26Ds9DLVom3yeMFy87sIZcfZGe7AXVqlZUvP-ePshI7VXvqiDRpWQ=s900-c-k-c0x00ffffff-no-rj"
        }
      />
      {session && (
        <main className="ml-0 md:ml-[300px] w-full p-4">{children}</main>
      )}
    </div>
  );
}
