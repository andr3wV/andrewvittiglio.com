"use client"
import { Tile } from "../Tiles/Tile"
import TileBackground from "../Tiles/TileBackground"
import { TileContent } from "../Tiles/TileContent"
import TileWrapper from "../Tiles/TileWrapper"
import { WorkBackground } from "./WorkBackground"
import WorkCollage from "./WorkCollage"
import TechnologyCollage from "./TechnologyCollage"
import Resume from "./Resume"
import { useEffect, useState } from "react"
import Contact from "./Contact"

export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
  grid?: string[]
  resume?: string
}

const workTiles: WorkTile[] = [
  {
    description: `Check Out`,
    title: "My Resume",
    image: {
      src: "/static/images/resume.png",
      width: 1300,
      height: 1500,
    },
    resume: "https://drive.google.com/file/d/1lFjmy5VwPaZku1RwiKEw2ITkDkQWZc2p/view?usp=sharing",
  },
  {
    description: `Some of my`,
    title: `Work Experience`,
    image: {
      src: "/static/images/work2.jpg",
      width: 600,
      height: 770,
    },
  },
  {
    description: "Some of my",
    title: `Favorite Technologies`,
    image: {
      src: "/static/images/tech-collage.png",
      width: 1300,
      height: 1500,
    },
  },
  {
    description: `I'm looking for work & projects!`,
    title: "Reach Out!",
    image: {
      src: "/static/images/publication-app.webp",
      width: 600,
      height: 717,
    },
  },
]

export default function Works({ progress = 0 }: { progress: number }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const index = Math.floor(progress * workTiles.length)
    setActiveIndex(index)
    console.log("Progress: ", progress, "Index: ", index)
  }, [progress])

  let translateY = Math.max(0, 50 - progress * 3 * 50)

  if (progress > 0.85) {
    translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
  }

  return (
    <TileWrapper numOfPages={workTiles.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        {workTiles.map((tile, index) => (
          <Tile key={index} page={index}>
            <div
              className={`grid min-h-screen w-full grid-cols-1 lg:grid-cols-2`}
              style={{
                transform: `translateY(${translateY}px)`,
                zIndex: activeIndex === index ? 1 : 0,
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
            >
              <div className="flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl">
                <div className="leading-10 text-white">
                  <div className="text-2xl font-medium md:text-3xl xl:text-4xl">{tile.description}</div>
                  <span className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{tile.title}</span>
                </div>
              </div>
              <div className="flex h-screen flex-1 justify-center lg:items-center">
                <div className="w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0">
                {index === 0 && activeIndex === 0 && <Resume />}
                {index === 1 && <WorkCollage />}
                  {index === 2 && <TechnologyCollage />}
                  {index === 3 && <Contact />}
                </div>
              </div>
            </div>
          </Tile>
        ))}
      </TileContent>
    </TileWrapper>
  )
}

