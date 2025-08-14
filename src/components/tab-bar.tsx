"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Bell, MessageCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface TabItem {
  icon: React.ComponentType<{ className?: string }>;
  route: string;
  label: string;
}

const tabs: TabItem[] = [
  { icon: Home, route: "/home", label: "Home" },
  { icon: Bell, route: "/notifications", label: "Notifications" },
  { icon: MessageCircle, route: "/messages", label: "Messages" },
  { icon: Settings, route: "/settings", label: "Settings" },
];

const MobileTabBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex w-full justify-between">
        {tabs.map((tab) => {
          const isActive = pathname === tab.route;
          const Icon = tab.icon;

          return (
            <button
              key={tab.route}
              onClick={() => handleTabClick(tab.route)}
              className={cn(
                "flex-1 flex flex-col items-center gap-1 py-2 transition-colors",
                "hover:bg-gradient-to-b from-primary/10 to-primary/20",
                isActive && "bg-gradient-to-b from-primary/10 to-primary/20"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
              <span
                className={cn(
                  "text-xs text-center",
                  isActive && "text-primary"
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabBar;
