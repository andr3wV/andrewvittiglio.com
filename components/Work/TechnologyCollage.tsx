"use client";

import Image from "next/image";

const images = [
  { src: "/static/images/tech1.png", alt: "tech 1", width: 250, height: 300, top: '0%', left: '-20%' },
  { src: "/static/images/tech2.png", alt: "tech 2", width: 200, height: 600, top: '22%', left: '-40%' },
  { src: "/static/images/tech3.avif", alt: "tech 3", width: 200, height: 180, top: '45%', left: '90%' },
  { src: "/static/images/tech4.png", alt: "tech 4", width: 220, height: 220, top: '50%', left: '-13%' },
  { src: "/static/images/tech5.jpeg", alt: "tech 5", width: 300, height: 160, top: '7%', left: '70%' },
  { src: "/static/images/tech7.png", alt: "tech 7", width: 140, height: 140, top: '30%', left: '40%' },
  { src: "/static/images/tech8.png", alt: "tech 8", width: 140, height: 140, top: '70%', left: '40%' },
  { src: "/static/images/tech9.png", alt: "tech 9", width: 140, height: 140, top: '65%', left: '90%' },
  { src: "/static/images/tech10.png", alt: "tech 10", width: 250, height: 140, top: '70%', left: '-30%' },


];

export default function TechnologyCollage() {
  return (
    <div className="relative w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-300 hover:scale-105 hover:brightness-110"
          style={{
            top: image.top,
            left: image.left,
            width: `${image.width}px`,
            height: `${image.height}px`,
          }}
        >
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}
