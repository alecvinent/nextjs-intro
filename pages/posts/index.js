import {useState, useEffect} from "react";

import Link from "next/link";
import Title from "../../components/Title";
import Layout from "../../components/Layout";
import {API_BASE} from "../../shared/baseUrl";
import {useRouter} from "next/router";

const PostIndex = ({posts}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>CARGANDO...</div>
    }

    /*
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);

            try {
                // next ya incluye a fetch
                const response = await fetch(API_BASE + '/posts');
                if (!response.ok){
                    throw new Error('Error fetching data');
                }

                const newPosts = await response.json();
                setPosts(newPosts);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    */

    return (
        <Layout>
            <Title>Posts Page</Title>
            <p>Hello, NextJS</p>

            <div className='grid'>
                {posts && posts.map(post => {
                    return (
                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
                            <a className='card'>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
            <style jsx>
                {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
            </style>
        </Layout>
    );
};
export default PostIndex;

export async function getStaticProps(context) {
    const response = await fetch(API_BASE + '/posts');
    const posts = await response.json();

    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            posts
        }
    };
}
//
// export async function getStaticPaths() {
//     const response = await fetch(API_BASE + '/posts');
//     const allPosts = await response.json();
//     const paths = allPosts.map(post => {
//         return {
//             params: {
//                 id: post.id
//             }
//         }
//     });
//
//     return {
//         paths,
//         fallback: true,
//     }
// }

