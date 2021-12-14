import Title from "../components/Title";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
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