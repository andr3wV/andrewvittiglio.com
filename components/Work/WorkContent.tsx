import Image from 'next/image';
import Link from 'next/link';
import { WorkContainer } from './WorkContainer';
import { WorkLeft } from './WorkLeft';
import { WorkRight } from './WorkRight';
import { WorkTile } from './workTiles';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image, grid, resume } = work;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-2xl font-medium md:text-3xl xl:text-4xl">{description}</div>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <span className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{title}</span>
        </a>
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className="sm:mt-10 md:mt-24 z-50">
          {resume ? (
            <Link href={resume} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="/static/images/resume.png"
                  alt="Resume Thumbnail"
                  width={image.width}
                  height={image.height}
                />
              </a>
            </Link>
          ) : grid ? (
            <div className="grid gap-4">
              {/* First row - single column, full width */}
              <div className="w-full h-48 relative">
                <Image src={grid[0]} alt={`image-0`} layout="fill" objectFit="cover" />
              </div>
              {/* Second row - three columns */}
              <div className="grid grid-cols-3 gap-4">
                {grid.slice(1, 4).map((src, index) => (
                  <div key={index} className="relative h-48">
                    <Image src={src} alt={`image-${index + 1}`} layout="fill" objectFit="cover" />
                  </div>
                ))}
              </div>
              {/* Third row - three columns */}
              <div className="grid grid-cols-3 gap-4">
                {grid.slice(4, 7).map((src, index) => (
                  <div key={index} className="relative h-48">
                    <Image src={src} alt={`image-${index + 4}`} layout="fill" objectFit="cover" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Image src={image.src} alt={title} width={image.width} height={image.height} />
          )}
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
