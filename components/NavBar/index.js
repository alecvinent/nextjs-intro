import Link from 'next/link';

const NavBar = () => {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
                <Link href="/users">
                    <a>Users</a>
                </Link>
            </nav>
            <style jsx>
                {`
                  nav {
                  padding-top: 10px;
                  }
                  
                  a{
                  padding: 0 10px;
                  }
                `}
            </style>
        </>
    );
};

export default NavBar;