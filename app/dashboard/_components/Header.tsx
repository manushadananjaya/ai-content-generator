"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Search, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header(
  { toggleSideNav }: { toggleSideNav: any },
  { onSearchInput }: any
) {
  const pathname = usePathname();
  const isSettingsPage = pathname === "/dashboard/settings";

  return (
    <div className="p-5 shadow-sm bg-white border-b-2 flex justify-between items-center z-20">
      {isSettingsPage ? (
        <a href="/dashboard" className="md:hidden">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
        </a>
      ) : (
        <Button className="md:hidden" onClick={toggleSideNav}>
          <Menu size={24} />
        </Button>
      )}
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent text-white"
          onChange={(event) => onSearchInput(event.target.value)}
        />
      </div>
      <div className="flex gap-5 items-center">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
