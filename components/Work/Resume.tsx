'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import ProjectPreview from '../Projects/ProjectPreview';
import { resume } from './resume-constants';
import type { ProjectModal } from '../Projects/types';
import Image from 'next/image';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Resume() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<ProjectModal>({ active: false, index: 0 });

  return (
    <div className="w-full h-full py-4 px-2 sm:py-6 sm:px-4">
        {resume.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index / 10 }}
            className="w-full"
          >
            <a
              href={project.url}
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
          </motion.div>
        ))}
      {breakpoint === 'desktop' && <ProjectPreview modal={modal} projects={resume} />}
    </div>
  );
}
