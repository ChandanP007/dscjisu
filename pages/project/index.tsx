import Head from "next/head";
import { getAllProjects, ProjectMeta } from "../../lib/project";


export default function Blog({ projects }: { projects: ProjectMeta[] }) {
    return (
        <>
            <Head>
                <title>Projects | Google Developer Student Clubs JIS University - Kolkata</title>
            </Head>
            <div className='lg:p-20 sm:p-2  flex  flex-col  bg-slate-900 py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl text-white font-mono'>Projects</h1>
                    <p className='text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        Projects made by our community with ❤️
                    </p>
                    <p className='text-white font-light font-mono pt-5 text-base px-5 text-clip'>Under Development ☁️</p>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:mx-5 justify-items-center pt-10'>
                </div>
            </div>

        </>
    );
}

export async function getStaticProps() {
    const events = getAllProjects()
        .map((post) => post.meta);

    return { props: { events } };
}


