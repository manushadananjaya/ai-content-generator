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
        <title>AIwave - AI SaaS Platform</title>
        <meta name="description" content="AIwave - Your AI SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WavyBackground className="max-w-7xl mx-auto pb-16 sm:pb-24 lg:pb-40">
        <Navbar className="top-2" />

        <main className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Examine the Potential of{" "}
                  <FlipWords words={["Ai Chatting", "Ai Writing"]} />
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  AIwave is your ultimate AI SaaS platform. Explore our features
                  and see how we can help your business grow.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 bg-gray-200 text-gray-800 text-lg font-medium rounded-md hover:bg-gray-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Features
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <p className="ml-3 text-lg text-gray-700">
                      Feature One: Description of feature one.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <p className="ml-3 text-lg text-gray-700">
                      Feature Two: Description of feature two.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <p className="ml-3 text-lg text-gray-700">
                      Feature Three: Description of feature three.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8 text-center text-gray-500">
              &copy; 2024 AIwave. All rights reserved.
            </div>
          </div>
        </footer>
      </WavyBackground>
    </div>
  );
}
