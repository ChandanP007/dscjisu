import Head from "next/head";
import BlogCard from "../../components/cards/blog/BlogCard";
import { getAllPosts, PostMeta } from "../../lib/blog";


export default function Blog({ blogs }: { blogs: PostMeta[] }) {
    return (
        <>
            <Head>

                <title>Blog | DSC JIS University</title>
                <meta name="keywords" content="gdsc, jis university , jisu, gdsc jisu, kolkata" />
                <meta name="description" content="The Google Developer Student Club, JIS UNIVERSITY, 💐 welcomes all of you wholeheartedly. We Welcome students to grow and learn together.
                    We at JIS University build a peer-to-peer learning process making a better environment for students to learn and develop.
                    This year our Club is aiming to organize resourceful Bootcamps and Interesting Workshops. The major idea is to learn new skills through hands-on workshops and create innovative projects which will help in the betterment of our society." />

            </Head>
            <div className='lg:p-20 sm:p-2  flex  flex-col  bg-slate-900 py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Blogs</span></h1>
                    <p className='text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        Thanks to our community for writing these blogs.
                    </p>
                </div>
                <div className='grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  lg:mx-5 self-center justify-items-center content-center'>
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog.slug}
                                tag={blog.tags}
                                title={blog.title}
                                body={blog.body}
                                author={blog.author}
                                date={blog.date}
                                blogImage={blog.blogImage}
                                authorImage={blog.authorImage}
                                blogslug={blog.slug}
                                readingTime={blog.readingTime}

                            />
                        ))

                    }
                </div>
            </div>

        </>
    );
}

export async function getStaticProps() {
    const blogs = getAllPosts()
        .map((post) => post.meta);

    return { props: { blogs } };
}


