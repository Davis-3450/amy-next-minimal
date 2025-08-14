"use client";

import { usePathname, useRouter } from "next/navigation";
import { Bell, Home, MessageCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

type IconKey = "home" | "bell" | "message" | "settings";

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  home: Home,
  bell: Bell,
  message: MessageCircle,
  settings: Settings,
};

export interface TabItem {
  icon: IconKey;
  href: string;
  label: string;
  badge?: number;
}

const MobileTabBar = ({ tabs }: { tabs: TabItem[] }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex w-full justify-evenly">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = ICONS[tab.icon];

          return (
            <button
              key={tab.href}
              onClick={() => router.push(tab.href)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 w-full max-w-[80px]",
                "transition-all duration-300 ease-in-out",
                "hover:text-primary hover:scale-[1.02]",
                "active:scale-[0.98] active:duration-150",
                "transform will-change-transform",
                isActive
                  ? "text-primary bg-gradient-to-b from-primary/10 to-primary/20"
                  : "text-muted-foreground"
              )}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {typeof tab.badge === "number" && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-4 px-1 h-4 rounded-full bg-destructive text-white text-[10px] leading-4 text-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-xs text-center truncate w-full">
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
