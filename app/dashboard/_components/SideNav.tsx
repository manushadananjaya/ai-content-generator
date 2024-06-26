"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FileClock, Home, Icon, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";

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
      link: "/dashboard/Billing",
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
    <div className="h-screen p-5 shadow-sm bg-white border">
      <div className="flex justify-center border-b">
        <Image src="/logo.svg" width={120} height={100} alt="logo" />
      </div>
      
      <div className="mt-10">
        {MenuList.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer ${path == item.link ? 'bg-primary text-white' : ''}`}
          >
            <item.icon size={20} /> 
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
