"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FileClock, Home, Icon, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      link: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      link: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      link: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      link: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  } , []);


  return (
    <div className="h-screen relative p-5 shadow-sm bg-white border">
      <div className="flex justify-center border-b">
        <Image src="/logo.svg" width={120} height={100} alt="logo" />
      </div>

      <div className="mt-10">
        {MenuList.map((item, index) => (
          <a href={item.link} key={index}> 
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer ${
                path == item.link ? "bg-primary text-white" : ""
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </div>
          </a>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
