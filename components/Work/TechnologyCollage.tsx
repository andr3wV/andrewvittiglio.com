"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { src: "/static/images/tech4.png", alt: "tech 4", width: 220, height: 220 },
  { src: "/static/images/tech2.png", alt: "tech 2", width: 200, height: 600 },
  { src: "/static/images/tech3.svg", alt: "tech 3", width: 200, height: 180 },
  { src: "/static/images/tech1.png", alt: "tech 1", width: 250, height: 300 },
  { src: "/static/images/tech5.jpeg", alt: "tech 5", width: 300, height: 160 },
  { src: "/static/images/tech7.png", alt: "tech 7", width: 140, height: 140 },
  { src: "/static/images/tech8.png", alt: "tech 8", width: 140, height: 140 },
  { src: "/static/images/tech9.png", alt: "tech 9", width: 140, height: 140 },
  { src: "/static/images/tech10.png", alt: "tech 10", width: 250, height: 140 },
];

export default function TechnologyCollage() {
  return (
    <div className="w-full h-full overflow-y-auto py-4 px-2 sm:py-6 sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 w-full h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center">
                <Image 
                  src={tech.src || "/placeholder.svg"} 
                  alt={tech.alt} 
                  width={tech.width} 
                  height={tech.height}
                  className="object-contain max-h-full max-w-full rounded-md"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}