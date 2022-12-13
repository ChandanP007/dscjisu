
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/ConnectDb";
import BlogSchema from "../../../models/blog";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const method = req.method
    await connectMongo();


    if (method === "GET") {
        const blogs = await BlogSchema.find({});

        if (blogs) {
            res.status(200).json(blogs);
            res.end();
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }



    else if (method === "POST") {
        // await connectMongo();
        // create the document 
        const blogdata = await BlogSchema.find({
            slug: req.body.slug
        })
        // if the blog with slug is not present then create on e
        if (blogdata.length === 0) {
            const { name, description, date, body, tags, author, authorImage, blogImage, slug } = req.body;
            const blog = await BlogSchema.create({
                name,
                description,
                date,
                body,
                tags,
                author,
                authorImage,
                blogImage,
                slug
            });

            if (blog) {
                res.status(201).json(blog);
            } else {
                res.status(400).json({ message: "Something went wrong" });
            }
        }
        else {
            res.status(200).json(blogdata);
        }
    }
}
