"use client";
import React, { useContext } from "react";
import { UserButton } from "@clerk/nextjs";
import { Search, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SearchContext } from "@/app/(context)/SearchContext";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Header({ toggleSideNav }: { toggleSideNav: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { userSearchInput, setUserSearchInput } = useContext(SearchContext);
  const isSettingsPage = pathname === "/dashboard/settings";

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setUserSearchInput(value);
    if (value) {
      router.push("/dashboard/search");
    }
  };

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

      <div className="hidden sm:block align-middle text-3xl relative font-bold ">
        <a href="/dashboard">VOOM</a>
      </div>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search in VOOM"
          className="outline-none bg-transparent text-black"
          value={userSearchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        <ModeToggle />
      </div>

      <div className="flex gap-5 items-center">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
