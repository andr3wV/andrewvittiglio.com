"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/static/images/work1.png", alt: "Work 1", width: 600, height: 600, top: '0%', left: '0%', mobileTop: '-5%', mobileLeft: '5%' },
  { src: "/static/images/work2.png", alt: "Work 2", width: 600, height: 600, top: '5%', left: '-60%', mobileTop: '-3%', mobileLeft: '30%' },
  { src: "/static/images/work3.png", alt: "Work 3", width: 180, height: 180, top: '45%', left: '50%', mobileTop: '20%', mobileLeft: '0%' },
  { src: "/static/images/work4.png", alt: "Work 4", width: 220, height: 220, top: '50%', left: '-30%', mobileTop: '40%', mobileLeft: '5%' },
  { src: "/static/images/work5.jpeg", alt: "Work 5", width: 160, height: 160, top: '25%', left: '90%', mobileTop: '5%', mobileLeft: '0%' },
  { src: "/static/images/work6.jpeg", alt: "Work 6", width: 200, height: 200, top: '50%', left: '100%', mobileTop: '20%', mobileLeft: '60%' },
  { src: "/static/images/work7.jpg", alt: "Work 7", width: 140, height: 140, top: '70%', left: '40%', mobileTop: '40%', mobileLeft: '60%' },
];

export default function WorkCollage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-300 hover:scale-105 hover:brightness-110"
          style={{
            top: isMobile ? image.mobileTop : image.top,
            left: isMobile ? image.mobileLeft : image.left,
            width: isMobile ? `${image.width / 2}px` : `${image.width}px`,
            height: isMobile ? `${image.height / 2}px` : `${image.height}px`,
          }}
        >
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}
