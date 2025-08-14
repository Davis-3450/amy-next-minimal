import TabBar from "@/components/tab-bar";

export default function UserSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <TabBar />
    </div>
  );
}
