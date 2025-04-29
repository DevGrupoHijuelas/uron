"use client";
import React from 'react';

const SectionB = () => {
  return (
    
    <section
      id="sectionB"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/Luminagreen.mp4" type="video/mp4" />
      </video>
    </section>

  );
};

export default SectionB;
