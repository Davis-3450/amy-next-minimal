import { ModeToggle } from "@/components/mode-toggle";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ModeToggle />
    </div>
  );
}
