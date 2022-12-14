
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/ConnectDb";
import BlogSchema from "../../../models/blog";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug, like, love, unicorn, wow, upvote } = req.body;
    try {
        await connectMongo();
        const blog = await BlogSchema.findOneAndUpdate(
            {
                slug,
            },
            {
                reaction: {
                    like,
                    love,
                    unicorn,
                    wow,
                    upvote,
                },
            }).clone();
        res.send({ blog })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        })
        console.log(error)
    }
}
