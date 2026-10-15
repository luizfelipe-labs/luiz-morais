"use client";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="flex items-center justify-around px-20 bg-black text-white">
      <div className="flex gap-4">
        <Link href="/" className="mr-3">
          <Image src="/luiz-morais/images/logouber.png" alt="Logo uber" width={70} height={20} />
        </Link>
        <div className="hidden md:flex items-center gap-1 mb-1 text-sm font-medium">
          <Link
            href="/ride"
            className="rounded-2xl hover:bg-zinc-800 transition-colors p-3"
          >
            Ride
          </Link>
          <Link
            href="/earn"
            className="rounded-2xl hover:bg-zinc-800 transition-colors p-3"
          >
            Earn
          </Link>
          <Link
            href="/Business"
            className="rounded-2xl hover:bg-zinc-800 transition-colors p-3"
          >
            Business
          </Link>
          <div className="relative">
            <button
              className="hover:bg-zinc-800 p-3 rounded-2xl flex transition-colors"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              About
              <ChevronDown size={16} />
            </button>

            {menuAberto && (
              <div className="absolute shadow-lg shadow-black/30 top-full left-0 mt-2 bg-zinc-50 rounded flex flex-col gap-5  md:pr-15 font-light pt-2 text-zinc-600 min-w-[220px]">

                <Link href="/about" className="whitespace-nowrap block w-full hover:bg-zinc-100">About us</Link>
                <Link href="/offerring" className="whitespace-nowrap block w-full hover:bg-zinc-100">Our offerrings</Link>
                <Link href="/works" className="whitespace-nowrap block w-full hover:bg-zinc-100">How Uber works</Link>
                <Link href="/sustainability" className="whitespace-nowrap block w-full hover:bg-zinc-100">Sustainability</Link>
                <div>
                  <Link href="/explore" className="whitespace-nowrap">Explore</Link>
                </div>

                <Link href="/newsroom" className="whitespace-nowrap block w-full hover:bg-zinc-900">Newsroom</Link>
                <Link href="/investor" className="whitespace-nowrap block w-full hover:bg-zinc-100">investor relations</Link>
                <Link href="/autonomous" className="whitespace-nowrap block w-full hover:bg-zinc-100">Autonomous</Link>
                <Link href="/advertising" className="whitespace-nowrap block w-full hover:bg-zinc-100">Uber Advertising</Link>
                <Link href="/blog" className="whitespace-nowrap block w-full hover:bg-zinc-100">Blog</Link>
                <Link href="/carrers" className="whitespace-nowrap block w-full hover:bg-zinc-100">Carrers</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-sm font-medium">
        <Globe size={16} />
        <span className="font-bold mr-3">En</span>
        <Link
          href="Help"
          className="rounded-2xl hover:bg-zinc-800 transition-colors p-3"
        >
          Help
        </Link>
        <Link
          href="Log in"
          className="rounded-2xl hover:bg-zinc-800 transition-colors p-3"
        >
          Log in
        </Link>
        <Link
          href="/Sign up"
          className="bg-white ml-2 text-black rounded-full p-2 hover:bg-zinc-300 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
