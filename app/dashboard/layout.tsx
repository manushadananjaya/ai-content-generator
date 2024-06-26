"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import { SearchContext } from "../(context)/SearchContext";
import Footer from "./_components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider
        value={{ updateCreditUsage, setUpdateCreditUsage }}
      >
        <SearchContext.Provider value={{ userSearchInput, setUserSearchInput }}>
          <div className="min-h-screen flex flex-col bg-slate-100">
            <div
              className={`fixed z-50 transition-transform ${
                isSideNavOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 md:w-64`}
            >
              <SideNav
                toggleSideNav={toggleSideNav}
                isSideNavOpen={isSideNavOpen}
              />
            </div>
            {isSideNavOpen && (
              <div
                className="fixed inset-0 bg-black opacity-50 md:hidden"
                onClick={toggleSideNav}
              ></div>
            )}
            <div className="flex-grow md:ml-64 flex flex-col">
              <Header toggleSideNav={toggleSideNav} />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </SearchContext.Provider>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
