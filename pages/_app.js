import {useState} from "react";
import Layout from "../components/Layout";

const App = ({Component, pageProps}) => {
    const [counter, setCounter] = useState(0);
    const handleCounter = () => setCounter(counter + 1);
    return (
        <Layout>
            <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
            <Component {...pageProps} counter={counter} />
        </Layout>
        )
};
export default App;