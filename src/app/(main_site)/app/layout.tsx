import TabBar, { type TabItem } from "@/components/tab-bar";

const tabs: TabItem[] = [
  { icon: "home", href: "/app/home", label: "Home" },
  { icon: "bell", href: "/app/inbox", label: "Inbox", badge: 0 },
  // { icon: "message", href: "/app/messages", label: "Messages" }, // placeholder
  { icon: "settings", href: "/app/settings", label: "Settings" },
];

export default function UserSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <TabBar tabs={tabs} />
    </div>
  );
}
