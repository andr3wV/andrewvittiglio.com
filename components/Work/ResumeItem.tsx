import { ProjectModal } from '../Projects//types';
import Image from 'next/image';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ResumeItem({ index, url, setModal }: ProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full items-center justify-center"
    >
      <div className="transition-all group-hover:scale-105">
        <Image 
          src="/static/images/project/resume.png" 
          alt="Resume" 
          width={550} 
          height={500} 
          className="cursor-pointer"
        />
      </div>
    </a>
  );
}