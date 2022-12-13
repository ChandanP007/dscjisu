
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/ConnectDb";
import BlogSchema, { IBlog } from "../../../models/blog";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const { slug, like, love, unicorn, wow, upvote } = req.body;
    try {
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
            },
            (err: any, doc: IBlog) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(doc);
                    // console.log(doc)
                }
            }
        ).clone();
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        })
        console.log(error)
    }
}
