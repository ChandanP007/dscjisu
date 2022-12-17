import Link from "next/link";
import { useEffect, useState } from "react";

import { IBlog } from '.././models/blog';
import BlogCard from "../components/cards/blog/BlogCard";



export default function Blog() {
    const [blogs, setblogs] = useState([]);

    // use effect 
    useEffect(() => {
        async function GetPost() {
            const res = await fetch(`${process.env.APP_URL}/api/blog/blogpost`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const blogs = await res.json()
            console.log(blogs)
            const UpvotedBlogs = blogs.sort((a: IBlog, b: IBlog) => b.reaction.upvote - a.reaction.upvote)
            // get only the first blog 
            const firstBlog = UpvotedBlogs.slice(0, 4)
            setblogs(firstBlog)
        }
        GetPost()
    }, [])



    return (
        <>
            <div className=" bg-slate-900 bg-gradient-to-r from-[#e52e71] to-[#ff8a00]">
                <div className="">
                    <div className=" mx-auto">
                        <div className="flex flex-col items-center justify-center h-full pt-5">
                            <h1 className="text-4xl font-bold text-white">Blog</h1>
                            <p className="text-white font-bold">Check Out Our Trending blogs</p>
                        </div>
                        <div className="lg:p-2 sm:p-2  flex  flex-col py-1">

                            <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  lg:mx-5 self-center justify-items-center content-center">
                                {
                                    blogs?.map((blog: IBlog) => {
                                        return (
                                            <BlogCard key={blog.slug}
                                                tag={blog.tags}
                                                title={blog.name}
                                                body={blog.description}
                                                author={blog.author}
                                                date={blog.date}
                                                blogImage={blog.blogImage}
                                                authorImage={blog.authorImage}
                                                blogslug={blog.slug}
                                                readingTime={""}

                                            />

                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="p-5 flex justify-center">
                            <Link href="/blog" passHref>
                                <button className="bg-yellow-400 p-5 rounded-lg">
                                    <h1 className=' text-black font-mono'>Explore Blogs</h1>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}