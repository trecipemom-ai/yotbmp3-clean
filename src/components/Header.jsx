import Link from "next/link";
import { Music2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-105 transition">
            <Music2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
              YOTB<span className="text-red-500">MP3</span>
            </span>
            <span className="text-[10px] -mt-1 font-medium text-slate-400">
              yotbmp3.com
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#how-it-works" className="hover:text-red-500 transition">
            How It Works
          </a>
          <a href="#features" className="hover:text-red-500 transition">
            Features
          </a>
          <a href="#quality" className="hover:text-red-500 transition">
            Quality
          </a>
          <a href="#faq" className="hover:text-red-500 transition">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}