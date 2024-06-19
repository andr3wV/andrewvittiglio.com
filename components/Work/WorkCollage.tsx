"use client";

import Image from "next/image";

const images = [
  { src: "/static/images/work1.png", alt: "Work 1", width: 600, height: 600, top: '0%', left: '0%' },
  { src: "/static/images/work2.png", alt: "Work 2", width: 600, height: 600, top: '5%', left: '-60%' },
  { src: "/static/images/work3.png", alt: "Work 3", width: 180, height: 180, top: '45%', left: '50%' },
  { src: "/static/images/work4.png", alt: "Work 4", width: 220, height: 220, top: '50%', left: '-30%' },
  { src: "/static/images/work5.jpeg", alt: "Work 5", width: 160, height: 160, top: '25%', left: '90%' },
  { src: "/static/images/work6.jpeg", alt: "Work 6", width: 200, height: 200, top: '50%', left: '100%' },
  { src: "/static/images/work7.jpg", alt: "Work 7", width: 140, height: 140, top: '70%', left: '40%' },
];

export default function WorkCollage() {
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
