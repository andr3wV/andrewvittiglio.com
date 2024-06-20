"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

const images = [
  { src: "/static/images/tech1.png", alt: "tech 1", width: 250, height: 300, top: '0%', left: '0%', mobileTop: '-5%', mobileLeft: '5%' },
  { src: "/static/images/tech2.png", alt: "tech 2", width: 200, height: 600, top: '22%', left: '-40%', mobileTop: '-5%', mobileLeft: '60%' },
  { src: "/static/images/tech3.avif", alt: "tech 3", width: 200, height: 180, top: '45%', left: '90%', mobileTop: '20%', mobileLeft: '0%' },
  { src: "/static/images/tech4.png", alt: "tech 4", width: 220, height: 220, top: '50%', left: '-13%', mobileTop: '40%', mobileLeft: '5%' },
  { src: "/static/images/tech5.jpeg", alt: "tech 5", width: 300, height: 160, top: '7%', left: '70%', mobileTop: '5%', mobileLeft: '0%' },
  { src: "/static/images/tech7.png", alt: "tech 7", width: 140, height: 140, top: '30%', left: '40%', mobileTop: '40%', mobileLeft: '60%' },
  { src: "/static/images/tech8.png", alt: "tech 8", width: 140, height: 140, top: '70%', left: '40%', mobileTop: '10%', mobileLeft: '60%' },
  { src: "/static/images/tech9.png", alt: "tech 9", width: 140, height: 140, top: '65%', left: '90%', mobileTop: '20%', mobileLeft: '60%' },
  { src: "/static/images/tech10.png", alt: "tech 10", width: 250, height: 140, top: '70%', left: '-20%', mobileTop: '30%', mobileLeft: '60%' },

];

export default function TechCollage() {
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
