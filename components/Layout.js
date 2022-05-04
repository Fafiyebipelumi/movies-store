import Head from 'next/head'
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Movies Store</title>
                <meta name='keywords' content='Movies Store Website' />
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    );
}

export default Layout;