import NavBar from "../NavBar";
import Head from "next/head";
import HTMLMeta from "./metas";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <HTMLMeta/>
            </Head>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>Footer Here</footer>
            <style jsx>
                {`
                  div {
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  }
                  
                  
                `}
            </style>
            <style jsx global>
                {`
                    html, body {
                      padding: 0;
                      margin: 0;
                    }
                    
                    * {
                    box-sizing: border-box;
                    }
                    
                    header {
                  margin-bottom: 10vh;
                  }
                  
                  header, main, footer {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  }
                    
                    footer {
                      border-top: 1px solid grey;
                    }
                `}
            </style>
        </>
    );
};

export default Layout;