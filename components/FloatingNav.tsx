"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Calendar, Home, Info, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { JSX } from "react/jsx-runtime";

export const FloatingNav = ({
  className,
}: {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setIsSticky(scrollYProgress.get() > 0.05);
    }
  });

  const navItems = [
    { name: "Home", link: "/", icon: <Home size={20} /> },
    { name: "Events", link: "/events", icon: <Calendar size={20} /> },
    { name: "About", link: "/about", icon: <Info size={20} /> },
    { name: "Members", link: "/members", icon: <Users size={20} /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: isSticky ? 0 : 10,
          opacity: 1,
          width: isSticky ? "100%" : "50%",
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-0 inset-x-0 mx-auto max-w-[600px] rounded-full dark:bg-black bg-black shadow-lg z-[5000] px-6 py-2 flex items-center justify-between border border-neutral-200 dark:border-white/[0.2] transition-all",
          className
        )}
      >
        {navItems.length > 0 ? (
          navItems.map((navItem, idx) => {
            const isActive = pathname === navItem.link;

            return (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 text-neutral-400 flex items-center space-x-2 text-sm transition-colors duration-200 group hover:text-cyber-blue",
                  isActive ? "text-cyber-blue font-semibold" : ""
                )}
              >
                <span className={cn(isActive ? "text-cyber-blue" : "")}>
                  {navItem.icon}
                </span>
                <span
                  className={cn(
                    'relative after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 after:group-hover:w-full after:shadow-[0_0_8px_cyan] hover:text-cyber-blue',
                    isActive ? "after:w-full text-cyber-blue" : ""
                  )}
                >
                  {navItem.name}
                </span>
              </Link>
            );
          })
        ) : (
          <p className="text-neutral-500 text-sm">
            No navigation items available
          </p>
        )}

        {/* Link to Join Us Page */}
        <Link href="/join-us">
          <button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-white hover:text-cyber-blue dark:text-white px-4 py-2 rounded-full hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-shadow duration-300">
            <span>Join us</span>
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
