"use client";

import React, { useEffect, useState, Suspense, lazy } from "react";
import { Spotlight } from "@/components/ui/spotlight";

// Import Spline component
const Spline = lazy(() => import("@splinetool/react-spline"));

// Custom Typing Animation Component from your previous code
const TypingAnimation = ({
  children,
  className = "",
  duration = 100,
  delay = 0,
}: any) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started || !children) return;
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <div className={`inline-block font-bold ${className}`}>{displayedText}</div>
  );
};

// SplineScene component
function SplineScene({ scene, className }: any) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-black/[0.96] relative overflow-hidden mb-8">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-10 relative z-10 mt-4 flex flex-col justify-center">
          {/* Text container with minimum height */}
          <div className="min-h-[120px] md:min-h-[180px]">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
              <div className="bg-clip-text text-gray-200 orbitron-text">
                <TypingAnimation>Welcome to</TypingAnimation>
              </div>
              <div className="bg-clip-text text-cyber-blue">
                <TypingAnimation delay={1000}>Bodh Script Club</TypingAnimation>
              </div>
            </h1>
          </div>
          <p className="mt-2 text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Unlock the power of <span>creative coding</span> and
            <span> immersive UI design.</span>
            <br /> Join us to explore cutting-edge technologies and bring ideas
            to life.
          </p>
        </div>

        {/* Right content - Spline component */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
