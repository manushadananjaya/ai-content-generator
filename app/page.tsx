"use client";
import Head from "next/head";
import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";

import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/moving-border";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Footer from "./dashboard/_components/Footer";

const Items = [
  {
    title: "Blog Content",
    link: "./dashboard",
    thumbnail: "ss1.png",
  },
  {
    title: "Blog Title",
    link: "./dashboard",
    thumbnail: "ss2.png",
  },
  {
    title: "Blog Topic",
    link: "./dashboard",
    thumbnail: "ss3.png",
  },

  {
    title: "Rewrite Article",
    link: "./dashboard",
    thumbnail: "ss4.png",
  },
  {
    title: "Text Improver",
    link: "./dashboard",
    thumbnail: "ss5.png",
  },
  {
    title: "Youtube Description",
    link: "./dashboard",
    thumbnail: "ss6.png",
  },

  {
    title: "Youtube Tags",
    link: "./dashboard",
    thumbnail: "ss7.png",
  },
  {
    title: "Youtube SEO Title",
    link: "./dashboard",
    thumbnail: "ss8.png",
  },
  {
    title: "Youtube SEO Title",
    link: "./dashboard",
    thumbnail: "ss8.png",
  },
  {
    title: "Blog Content",
    link: "./dashboard",
    thumbnail: "ss1.png",
  },
  {
    title: "Blog Title",
    link: "./dashboard",
    thumbnail: "ss2.png",
  },

  {
    title: "Blog Topic",
    link: "./dashboard",
    thumbnail: "ss3.png",
  },
  {
    title: "Rewrite Article",
    link: "./dashboard",
    thumbnail: "ss4.png",
  },
  {
    title: "Text Improver",
    link: "./dashboard",
    thumbnail: "ss5.png",
  },
  {
    title: "Youtube Description",
    link: "./dashboard",
    thumbnail: "ss6.png",
  },
];

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
        <div className="flex-1 flex justify-center"></div>
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
      <HeroParallax products={Items} />
      <WavyBackground className="max-w-7xl mx-auto min-h-[50vh] absolute">
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white">
              Examine the Potential of{" "}
              <FlipWords words={["Ai Chatting", "Ai Writing"]} />
            </h2>
            <p className="mt-4 text-xl text-gray-300 dark:text-gray-300">
              SuperCharge Your Workflow With The Power of AI
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <a href="/dashboard">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-9 py-4 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Try VOOM For Free
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
      <div className="flex items-center justify-center text-center mt-16">
        <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold text-black dark:text-white">
          Subscribe to Explore More
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Basic
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Free</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $0.00
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Premium
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Monthly</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $9.99
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Enterprise
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Yearly</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $99.99
            </span>
          </button>
        </BackgroundGradient>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
