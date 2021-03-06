import Title from "../components/Title";
import Head from "next/head";

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;