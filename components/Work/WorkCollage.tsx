"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const workExperiences = [
  { src: "/static/images/work1.png", alt: "Work 1", width: 600, height: 600 },
  { src: "/static/images/work2.png", alt: "Work 2", width: 600, height: 600 },
  { src: "/static/images/work3.png", alt: "Work 3", width: 180, height: 180 },
  { src: "/static/images/work4.png", alt: "Work 4", width: 220, height: 220 },
  { src: "/static/images/work5.jpeg", alt: "Work 5", width: 160, height: 160 },
  { src: "/static/images/work6.jpeg", alt: "Work 6", width: 200, height: 200 },
  { src: "/static/images/work7.jpg", alt: "Work 7", width: 140, height: 140 },
]

export default function WorkCollage() {
  return (
    <div className="w-full h-full py-4 px-2 sm:py-6 sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
      {workExperiences.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative w-full h-28 sm:h-32 md:h-36 flex items-center justify-center">
                <Image
                  src={work.src || "/placeholder.svg"}
                  alt={work.alt}
                  width={work.width}
                  height={work.height}
                  className="object-contain max-h-full max-w-full rounded-md"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

