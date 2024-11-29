import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NxGo ✨ - Dashboard",
};

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex">{children}</div>;
}
