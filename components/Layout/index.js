import NavBar from "../NavBar";
import Head from "next/head";
import Image from "next/image";
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
            <footer>
                <p>Using <br/> <a href="https://nextjs.org/" target="_blank" title={'NextJS'}><NextjsLogo width={30} height={30}/></a></p>
            </footer>
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

export function NextjsLogo({width=50, height=50}) {
    return (
        <Image src={'/images/next-js-seeklogo.com.svg'} width={width} height={height} alt={'NextJS'} />
    );
}