"use client";
import Head from "next/head";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/moving-border";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const slideMoveContent = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "relative top-0 left-0 right-0 bg-white dark:bg-slate-900 z-50 px-4 sm:px-6 lg:px-8 shadow-md",
        className
      )}
    >
      <div className="flex justify-between items-center py-4">
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <Head>
        <title>VOOM - AI SaaS Platform</title>
        <meta name="description" content="VOOM - Your AI SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <WavyBackground className="max-w-7xl mx-auto min-h-[75vh]">
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white">
              Examine the Potential of{" "}
              <FlipWords words={["Ai Chatting", "Ai Writing"]} />
            </h2>
            <p className="mt-4 text-xl text-gray-300 dark:text-gray-400">
              SuperCharge Your Workflow With The Power of AI
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <a href="/dashboard">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-9 py-4 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Try VOOM
                </div>
              </button>
            </a>
          </div>
        </div>
      </WavyBackground>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={slideMoveContent}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
