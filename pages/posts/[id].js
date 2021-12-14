import {useRouter} from "next/router";
import Title from "../../components/Title";
import {API_BASE} from "../../shared/baseUrl";
import Head from "next/head";

const Card = ({title, body}) => {
    return (
        <>
            <div className='card'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <style jsx>
                {`
                            .card {
                              margin: 1rem;
                              flex-basis: 45%;
                              padding: 1.5rem;
                              text-align: left;
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
        </>
    );
};

const PostView = ({post, error}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>CARGANDO...</div>
    }

    // const postId = router.query.id;
    // const [post, setPost] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchPost = async () => {
    //         setLoading(true);
    //         setError(null);
    //
    //         try {
    //             // next ya incluye a fetch
    //             const response = await fetch(API_BASE + '/posts/' + postId);
    //             if (!response.ok) {
    //                 throw new Error('Error fetching data');
    //             }
    //
    //             const newPost = await response.json();
    //             setPost(newPost);
    //         } catch (e) {
    //             setError(e.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchPost();
    // }, []);

    return (
        <>
            <Head>
                <title>Post {post.title} Page | Nextjs</title>
            </Head>
            <Title>Post Page</Title>
            {error && (<Card title="Error" body={error}/>)}

            {post && (
                <>
                    <Card title={post.title} body={post.body}/>
                </>
            )}
        </>
    );
};

export default PostView;

export async function getServerSideProps({ query }) {
    const response = await fetch(API_BASE + '/posts/'+query.id);
    const post = await response.json();
    console.log(post);

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    };
}

