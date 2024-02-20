import ListLayout from '@/layouts/MDX/ListLayout';
import MainLayout from '@/layouts/MainLayout';
import { sortedBlogPost } from '@/lib/utils/contentlayer';
import { POSTS_PER_PAGE } from '@/types/default';
import { allBlogs } from 'contentlayer/generated';

export const metadata = {
  title: 'Blog - Andrew Vittiglio',
  description: 'My Blogs - Andrew Vittiglio',
};

export default function Blog() {
  const activePosts = allBlogs.filter((p) => p.draft === false);
  const posts = sortedBlogPost(activePosts);
  console.log('blog pre');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  console.log('blog post');
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <MainLayout>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Blog"
      />
    </MainLayout>
  );
}
