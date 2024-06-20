import { ProjectModal } from '../Projects//types';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ResumeItem({ index, title, url, setModal }: ProjectProps) {
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
      className="group flex w-full items-center justify-between border-b px-4 sm:px-10 sm:py-8"
    >
      <h2 className="text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 text-black sm:text-6xl items-center justify-center align-middle">
        {title}
      </h2>
    </a>
  );
}
