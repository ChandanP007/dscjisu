import Head from "next/head";

export default function Videos() {
    return (
        <>
            <Head>
                <title>Videos | Google Developer Student Clubs JIS University - Kolkata</title>
            </Head>
            <div className='lg:p-20 sm:p-2 bg-white flex  flex-col  dark:bg-[#182232] py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl dark:text-white  font-serif'>Videos</h1>
                    <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        Videos made by our community with ❤️
                    </p>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:mx-5 justify-items-center pt-10'>
                </div>
            </div>

        </>
    )
}