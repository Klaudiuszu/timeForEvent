// src/pages/blog/index.tsx
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { client } from '../../lib/sanity';
import type { BlogPost } from '@/types';

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('blog')}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/blog/${post.slug.current}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const posts = await client.fetch<BlogPost[]>('*[_type == "post"]{_id, title, slug}');
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}