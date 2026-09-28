import Link from "next/link";
import { Music2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <Music2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              YOTB<span className="text-red-500">MP3</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
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
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} YOTBMP3 (yotbmp3.com). All rights reserved.</p>
          <p>Designed for personal, non-commercial use.</p>
        </div>
      </div>
    </footer>
  );
}