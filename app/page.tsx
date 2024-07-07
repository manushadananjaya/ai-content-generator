"use client";
import Head from "next/head";
import { FlipWords } from "@/components/ui/flip-words";

import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/moving-border";

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

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 shadow-md",
        className
      )}
    >
      <div className="flex justify-between items-center py-4">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800"
        >
          VOOM
        </Button>
        <div className="flex-1 flex justify-center"></div>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen dark bg-gray-950 overflow-x-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Head>
        <title>VOOM - AI SaaS Platform</title>
        <meta name="description" content="VOOM - Your AI SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroParallax products={Items} />
      <div className="bg-grid-gray-500/[0.1]  dark:bg-grid-gray-500/[0.1]  ">
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={slideMoveContent}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex items-center justify-center text-center mt-16">
          <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">
            Subscribe to Explore More
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200">
              Basic
            </p>

            <p className="text-sm dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Free</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $0.00
              </span>
            </button>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200">
              Premium
            </p>

            <p className="text-sm dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Monthly</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $9.99
              </span>
            </button>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200">
              Enterprise
            </p>

            <p className="text-sm dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Yearly</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $99.99
              </span>
            </button>
          </BackgroundGradient>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
