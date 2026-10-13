"use client";
import { useState } from "react";
import { Link } from "@/src/i18n/routing"
import {useTranslations} from 'next-intl';

export default function Langbtn() {
  const t = useTranslations('Lang');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="relative inline-block text-left z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <g 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"/>
              <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"/>
            </g>
          </svg>

          <span className="hidden md:inline text-gray-200">{t('currentLang')}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 hidden md:inline ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`absolute right-0 mt-2 bg-[#0b0620]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          } md:w-40 w-24`}
        >
          <ul className="py-1">
            <li>
              <Link
                href="/"
                locale="es"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 transition text-gray-200"
              >
                <span className="md:hidden">ES</span>
                <span className="hidden md:inline">Español</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                locale="en"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 transition text-gray-200"
              >
                <span className="md:hidden">EN</span>
                <span className="hidden md:inline">English</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}