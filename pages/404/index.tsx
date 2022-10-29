import Head from 'next/head';
import Image from 'next/image';
import { NextPageWithLayout } from './../page';

const PageNotFound: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <section className='text-center p-10 bg-slate-800'>
                <h1 className='font-mono text-3xl text-white pb-3'>Oops! Page not Found !</h1>
                <Image src="/images/404.gif" width={500} height={500} alt="404 page Not Found" />
            </section>
        </>
    );
}

export default PageNotFound;

