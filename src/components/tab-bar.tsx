import {
  Menubar,
  MenubarSeparator,
  MenubarContent,
  MenubarMenu,
  MenubarItem,
  MenubarTrigger,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { Button } from "./ui/button";
import { Home, Bell, MessageCircle, Settings } from "lucide-react";

//TODO add route support
const items = (
  Icon: React.ComponentType<{ className?: string }>,
  Route: string,
  Label: string
) => {
  return (
    <MenubarTrigger className="flex-1 flex justify-center">
      <span className="flex flex-col items-center gap-1 py-2">
        <Icon className="h-5 w-5" />
        <span className="text-xs text-center">{Label}</span>
      </span>
    </MenubarTrigger>
  );
};

const MobileTabBar = () => {
  return (
    <Menubar className="w-full justify-center">
      <MenubarMenu className="flex w-full justify-between">
        {items(Home, "/", "Home")}
        {items(Bell, "/notifications", "Notifications")}
        {items(MessageCircle, "/messages", "Messages")}
        {items(Settings, "/settings", "Settings")}
      </MenubarMenu>
    </Menubar>
  );
};

export default MobileTabBar;
