import Title from "../components/Title";
import Layout from "../components/Layout";
import Head from "next/head";

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Hello | Nextjs</title>
            </Head>
            <Title>Home Page</Title>
            <p>Hello, NextJS</p>

            <style jsx>
                {`
                    p {color:darkgray;}
                    p:hover {color:darkred;}
                `}
            </style>
        </Layout>
    );
};

export default Home;