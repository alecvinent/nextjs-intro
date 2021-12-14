import {useRouter} from "next/router";
import Title from "../../components/Title";
import {API_BASE} from "../../shared/baseUrl";
import Head from "next/head";


const UserView = ({user}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>CARGANDO...</div>
    }

    return (
        <>
            <Head>
                <title>User {user.name} Page | Nextjs</title>
            </Head>
            <Title>User Page</Title>
            <p>Hello, {user.name}</p>
            <div className='card'>
                <h3>User</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>

            <style jsx>
                {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
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

export default UserView;

export async function getServerSideProps({ query }) {
    if (!query.id) {
        return {
            notFound: true,
            destination: '/',
            permanent: false,
        };
    }
    const response = await fetch(API_BASE + '/users/'+query.id);
    const user = await response.json();

    return {
        props: {
            user
        }
    };
}