"use client";
import Head from "next/head";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/moving-border";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          VOOM
        </Button>
        <div className="flex-1 flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Tools">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/chat">Text Generator</HoveredLink>
                <HoveredLink href="/chat">Image Generator</HoveredLink>
                <HoveredLink href="/chat">AI Writing</HoveredLink>
                <HoveredLink href="/chat">Video Generator</HoveredLink>
                <HoveredLink href="/chat">Email Generator</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item=""></MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>VOOM - AI SaaS Platform</title>
        <meta name="description" content="VOOM - Your AI SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WavyBackground className="max-w-7xl mx-auto pb-16 sm:pb-24 lg:pb-40">
        <Navbar className="top-2" />

        <main className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white">
              Examine the Potential of{" "}
              <FlipWords words={["Ai Chatting", "Ai Writing"]} />
            </h2>
          </div>
          <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <a href="/dashboard">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-9 py-4 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Get Started
                </div>
              </button>
            </a>
          </div>
        </main>
      </WavyBackground>
    </div>
  );
}
