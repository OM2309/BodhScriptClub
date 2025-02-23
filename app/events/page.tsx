"use client";

import Features from "@/components/Features";

export default function EventsPage() {
  return (
    <>
      {/* Video Section (Optimized for Fit) */}
      <div className="flex justify-center mt-32 gap-6">
        <video
          className="w-1/4 max-h-80 object-contain rounded-lg shadow-lg"
          loop
          muted
          poster="/images/Poster.png"
        >
          <source src="/video/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="w-1/2 max-h-96 object-contain rounded-2xl shadow-lg"
          loop
          muted
          poster="/images/Poster.png"
        >
          <source src="/video/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="w-1/4 max-h-80 object-contain rounded-lg shadow-lg"
          loop
          muted
          poster="/images/Poster.png"
        >
          <source src="/video/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Features Component */}
      <div className="mt-8 w-full px-4">
        <Features />
      </div>
    </>
  );
}
