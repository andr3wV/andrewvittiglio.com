'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { ReactElement, useContext, useState, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  // Ref for the element where the text will be displayed
  const textRef = useRef<HTMLHeadingElement>(null);

  // The array of strings to cycle through
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    'a software developer',
    'a 2017 US Open ballboy',
    'drinks apple juice out of a wine glass to feel fancy',
    '"a handsome young man" — my grandma',
    "Time Magazine's 2006 Person of the Year",
  ];

  // State to keep track of the current text and character index
  const [index, setIndex] = useState(0); // Index of the current string in the array
  const [charIndex, setCharIndex] = useState(0); // Index of the current character in the string
  const [isDeleting, setIsDeleting] = useState(false); // Whether the text is being deleted

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  useEffect(() => {
    const speed = isDeleting ? 25 : 60; // Speed of typing or deleting
    let timeout: NodeJS.Timeout | null = null;

    if (charIndex === texts[index].length + 1 && !isDeleting) {
      // Pause after typing the full string before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIndex === 0) {
      // Once text is fully deleted, move to the next string
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle back to start when reaching the end
    } else {
      // Typing or deleting
      timeout = setTimeout(() => {
        setCharIndex((currentCharIndex) => currentCharIndex + (isDeleting ? -1 : 1));
      }, speed);
    }

    if (textRef && textRef.current) {
      textRef.current.innerHTML = charIndex === 0 ? '&nbsp;' : texts[index].substring(0, charIndex);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [charIndex, index, isDeleting, texts]);

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm Andrew Vittiglio, I'm a founder, entrepreneur, and software developer.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                Andrew Vittiglio
              </h1>
              <h2
                ref={textRef}
                className="text-2xl font-medium opacity-80 sm:text-xl md:text-3xl xl:text-5xl"
              >
                I love building things.
              </h2>
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                Read more about me &rarr;
              </Link>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
