'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import ProjectPreview from '../Projects/ProjectPreview';
import { resume } from './resume-constants';
import { ProjectModal } from '../Projects/types';
import ResumeItem from './ResumeItem';
import Image from 'next/image';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Resume() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<ProjectModal>({ active: false, index: 0 });

  return (
    <>
      {resume.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <ResumeItem
            index={index}
            title={project.title}
            url={project.url}
            role={project.role}
            setModal={setModal}
          />
        </motion.div>
      ))}
      <Image src="/static/images/project/resume.png" alt="Resume" width={550} height={500} className="mt-10"/>
      {breakpoint === 'desktop' && <ProjectPreview modal={modal} projects={resume} />}
    </>
  );
}
