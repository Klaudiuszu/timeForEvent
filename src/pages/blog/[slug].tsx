import { useRouter } from 'next/router';
import { client } from '../../lib/sanity';
import type { BlogPost } from '../../types';

export default function BlogPost({ post }: { post: BlogPost }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const posts = await client.fetch<BlogPost[]>('*[_type == "post"]{slug}');
    const paths = posts.map((post) => ({
        params: { slug: post.slug.current },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post = await client.fetch<BlogPost>(
        `*[_type == "post" && slug.current == $slug][0]{_id, title, content}`,
        { slug: params.slug }
    );

    return {
        props: {
            post,
        },
    };
}