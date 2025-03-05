import { MDXLayoutRenderer } from '@/components/MDXComponents';
import TopTracks from '@/components/Spotify/TopTracks';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';

export const metadata = {
  title: 'About - Andrew Vittiglio',
  description: 'About me - Andrew Vittiglio',
};

export default function About() {
  const author = allAuthors.find((p) => p.slug === 'about');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <AuthorLayout content={author}>
        <MDXLayoutRenderer content={author} />
        <TopTracks />
      </AuthorLayout>
    </MainLayout>
  );
}
