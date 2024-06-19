'use client';

import Pagination from '@/components/Pagination';
import { CoreContent } from '@/lib/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import { ComponentProps, useState } from 'react';
import Script from 'next/script';

interface Props {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: ComponentProps<typeof Pagination>;
}

export default function ListLayout({ title, pagination }: Props) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <div className="space-y-2 rounded-lg pt-8 pb-3 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {title}
        </h1>
        <div className="relative max-w-full">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-6 w-6 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Why I hate Agile, a short 🧵
          </p>
          &mdash; Andrew (@avittig){' '}
          <a href="https://twitter.com/avittig/status/1775303347198959901?ref_src=twsrc%5Etfw">
            April 2, 2024
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            I know{' '}
            <a href="https://twitter.com/hashtag/ChatGPT4?src=hash&amp;ref_src=twsrc%5Etfw">
              #ChatGPT4
            </a>{' '}
            was an unnecessary gift to all us developers, but I'm really disappointed with how badly
            badly it now performs on programming tasks. <br />
            <br />
            Even simple things, like how to add a new line in an HTML fails miserably. Pretty sad, I
            sad, I miss the May 2023 days😓
          </p>
          &mdash; Andrew (@avittig){' '}
          <a href="https://twitter.com/avittig/status/1771665007454916941?ref_src=twsrc%5Etfw">
            March 23, 2024
          </a>
        </blockquote>
        <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></Script>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  );
}
