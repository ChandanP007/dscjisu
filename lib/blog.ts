import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "blogs");

export const getSlugs = (): string[] => {
    const paths = sync(`${POSTS_PATH}/*.mdx`);

    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        // eslint-disable-next-line no-unused-vars
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
};

export const getAllPosts = () => {
    const posts = getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (new Date(a.meta.date) > new Date(b.meta.date)) return 1;
            if (new Date(a.meta.date) < new Date(b.meta.date)) return -1;
            return 0;
        })
        .reverse();
    return posts;
};

interface Post {
    content: string;
    meta: PostMeta;
}

export interface PostMeta {
    title: string;
    body: string;
    author: string;
    blogImage: string;
    authorImage: string;
    slug: string;
    tags: string;
    date: string;
    description: string;
    readingTime: string;
}

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);
    // console.log(content);

    return {
        content,
        meta: {
            slug,
            description: data.description ?? "",
            title: data.title ?? slug,
            tags: data.tags ?? "",
            date: (data.date ?? new Date()).toString(),
            body: data.body ?? "",
            author: data.author ?? "",
            blogImage: data.blogImage ?? "",
            authorImage: data.authorImage ?? "",
            readingTime: readingTime(content).text,
        },
    };
};


