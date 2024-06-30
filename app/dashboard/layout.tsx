"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

function Layout({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider
        value={{ updateCreditUsage, setUpdateCreditUsage }}
      >
        <div className="bg-slate-100 h-screen">
          <div
            className={`md:w-64 fixed z-50 transition-transform ${
              isSideNavOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <SideNav
              toggleSideNav={toggleSideNav}
              isSideNavOpen={isSideNavOpen}
            />
          </div>
          <div className="md:ml-64">
            <Header toggleSideNav={toggleSideNav} />
            {children}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
