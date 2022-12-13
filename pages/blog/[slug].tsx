import LoadingButton from '@mui/lab/LoadingButton';
import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import toc from "rehype-toc";
import remarkGfm from "remark-gfm";
import YouTube from "../../components/cards/youtube/YoutubeCard";
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/blog";


interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {

    const { slug, author, authorImage, blogImage, body, date, tags, title } = post.meta;

    const [like, setlike] = useState(0);
    const [love, setlove] = useState(0);
    const [unicorn, setunicorn] = useState(0);
    const [wow, setwow] = useState(0);
    const [upvote, setupvote] = useState(0);
    const [loading, setloading] = useState(false);
    // retreive the post data from /api/blog/slug with slug as parameter

    async function UpdateReaction(love: number, like: number, unicorn: number, wow: number, upvote: number, slug: string) {
        await fetch(`/api/blog/updatereaction`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                love,
                like,
                unicorn,
                wow,
                upvote,
                slug
            })
        }).then(
            (res) => res.json()
        ).then(
            (data) => {
                console.log(data);
                setloading(false);
                // reload the window
                // window.location.reload();
            }
        )

    }

    useEffect(() => {
        async function GetPost() {
            await fetch(`/api/blog/blogpost`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    slug,
                    author,
                    authorImage,
                    blogImage,
                    body: post.source,
                    date,
                    description: body,
                    tags,
                    name: title
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setlike(data[0]?.reaction?.like || 0);
                    setlove(data[0]?.reaction?.love || 0);
                    setunicorn(data[0]?.reaction?.unicorn || 0);
                    setwow(data[0]?.reaction?.wow || 0);
                    setupvote(data[0]?.reaction?.upvote || 0);
                    // console.log(data);
                });
        }

        GetPost()
    }, []);



    return (
        <>
            <Head>
                <title>{post.meta.title}</title>
                <meta name="description" content={post.meta.body} />
                <meta name="og:title" content={post.meta.title} />
                <meta name="og:description" content={post.meta.body} />
                <meta name="og:image" content={`https://dscjisu.vercel.app` + post.meta.blogImage} />
            </Head>
            <main className="bg-black">
                <div className="py-20 mx-auto lg:max-w-[65%] xs:max-w-[75%]">
                    <div>
                        <div>
                            <Image src={post.meta.blogImage} alt="blog image" width="1920" height="1080" className="bg-black rounded-lg" />
                        </div>
                        <h1 className="lg:text-7xl text-4xl py-4 font-bold text-white">{post.meta.title}</h1>
                        <p className="text-gray-400 text-lg  mb-5">{post.meta.body}</p>
                        <p className="bg-teal-300 p-2 mt-6 rounded-lg text-black inline ">{post.meta.tags}</p>
                        <div className="py-10 bg-slate-900 my-10 rounded-lg">
                            <div className="flex lg:flex-row  flex-col gap-4 justify-center lg:text-start text-center items-center ">
                                <div>
                                    <Image
                                        src={post.meta.authorImage}
                                        alt={post.meta.author}
                                        width={50}
                                        height={50}
                                        className=" rounded-full"
                                    />
                                </div>
                                <div className="lg:flex flex-col justify-start lg:text-left">
                                    <p className="text-white">{post.meta.author}</p>
                                    <div className="flex gap-2 flex-col">
                                        <p className="text-white">Published On: {post.meta.date.slice(0, 15)}</p>
                                    </div>
                                    <p className="text-white">{post.meta.readingTime}</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" pb-10">
                                <article>
                                    <h1>Table of Content</h1>
                                    <MDXRemote {...post.source} components={{ YouTube, Image }} />
                                </article>
                            </div>
                            <div className="p-2 rounded-md sticky bottom-5 bg-slate-900">
                                <div className="flex  gap-1 rounded text-white justify-center">
                                    <div className="lg:basis-0  flex justify-center content-center text-center bg-blue-500 hover:bg-blue-800 rounded-md">
                                        <LoadingButton
                                            size="small"
                                            title="Love the Post"
                                            onClick={
                                                () => {
                                                    setlike(like + 1)
                                                    // ReactionIncrement()
                                                    // UpdateReaction(love, post.meta.slug)
                                                    setloading(true)
                                                    UpdateReaction(love, like, unicorn, wow, upvote, slug)
                                                }
                                            }
                                            loading={loading}
                                            className="text-white p-0"
                                        // variant="outlined"
                                        >
                                            <h1> {like} 👍</h1>
                                        </LoadingButton>
                                    </div>
                                    <div className=" bg-red-400 rounded  hover:bg-red-800 flex justify-center content-center text-center">
                                        <LoadingButton
                                            size="small"
                                            title="Love the Post"
                                            onClick={
                                                () => {
                                                    setlove(love + 1)
                                                    // ReactionIncrement()
                                                    // UpdateReaction(love, post.meta.slug)
                                                    setloading(true)
                                                    UpdateReaction(love, like, unicorn, wow, upvote, slug)
                                                }
                                            }
                                            loading={loading}
                                            className="text-white"
                                        // variant="outlined"
                                        >
                                            <h1>{love} ❤️</h1>
                                            {/* <h1> {like} 👍</h1> */}
                                        </LoadingButton>
                                    </div>
                                    <div className=" bg-red-400 rounded  hover:bg-red-800 flex justify-center content-center text-center">
                                        <LoadingButton
                                            size="small"
                                            title="Love the Post"
                                            onClick={
                                                () => {
                                                    setunicorn(unicorn + 1)
                                                    // UpdateReaction(unicorn, slug)
                                                    setloading(true)
                                                    UpdateReaction(love, like, unicorn, wow, upvote, slug)
                                                }
                                            }
                                            loading={loading}
                                            className="text-white"

                                        // variant="outlined"
                                        >
                                            <h1>{unicorn} 🦄</h1>
                                        </LoadingButton>
                                    </div>
                                    <div className=" bg-red-400 rounded  hover:bg-red-800 flex justify-center content-center text-center">

                                        <LoadingButton
                                            size="small"
                                            title="Wow the Post"
                                            onClick={
                                                () => {
                                                    setwow(wow + 1)
                                                    // UpdateReaction(wow, slug)
                                                    setloading(true)
                                                    UpdateReaction(love, like, unicorn, wow, upvote, slug)
                                                }
                                            }
                                            loading={loading}
                                            // loadingIndicator="Loading…"
                                            className="text-white"
                                        // variant="outlined"
                                        >
                                            <h1>{wow} 😲</h1>
                                        </LoadingButton>
                                    </div>
                                    <div className=" bg-yellow-400 hover:bg-yellow-600 rounded flex justify-center content-center text-center">
                                        <LoadingButton
                                            size="small"
                                            title="Love the Post"
                                            onClick={
                                                () => {
                                                    setupvote(upvote + 1)
                                                    // UpdateReaction(unicorn, slug)
                                                    setloading(true)
                                                    UpdateReaction(love, like, unicorn, wow, upvote, slug)
                                                }
                                            }
                                            loading={loading}
                                            // loadingIndicator="Loading…"
                                            className="text-white"
                                        // variant="outlined"
                                        >
                                            <h1>{upvote} ⬆️</h1>
                                        </LoadingButton>
                                    </div>
                                    <div className=" bg-green-400 hover:bg-green-800 rounded flex justify-center content-center text-center">
                                        <LoadingButton
                                            size="small"
                                            title="Share the Post"
                                            onClick={
                                                () => {
                                                    window.open(`https://twitter.com/intent/tweet?text=Check Out this article on \n "${post.meta.title}" posted by @dscjisu &hashtags=dscjisu,dev,developer,${post.meta.tags}\n &url=https://dscjisu.vercel.app/blog/${post.meta.slug}`, "_blank")
                                                }
                                            }
                                            loading={loading}
                                            loadingIndicator="sharing"
                                            className="text-white"
                                        // variant="outlined"
                                        >
                                            <h1>Share</h1>
                                        </LoadingButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const { content, meta } = getPostFromSlug(slug);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight,
                [toc, {
                    headings: "h1, h2, h3, h4, h5, h6",
                    tight: true,
                    className: "toc",
                    slug: (text: String) => text.toLowerCase().replace(/\s/g, "-"),

                }],
            ],
            remarkPlugins: [remarkGfm],
        },
    });

    return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs().map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};