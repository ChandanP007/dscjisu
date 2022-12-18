import { nanoid } from 'nanoid';

import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/ConnectDb";
import UserSchema, { IUser } from './../../../models/user';

// id: string;
// name: string;
// email: string;
// sub: string;
// linkedin: string;
// github: string;
// tagline: string;
// image: string;
// event_registered: IEvent[];


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const method = req.method;
    await connectMongo();

    if (method === "POST") {

        const user = await UserSchema.find({ sub: req.body.sub });
        if (user.length > 0) {
            return res.status(200).json({
                success: true,
                message: "User already exists",
                data: user
            });
        } else {

            const { name, email, picture, sub } = req.body;
            try {
                const user = await UserSchema.create<IUser>({
                    id: await nanoid(),
                    name,
                    email,
                    sub,
                    linkedin: '',
                    github: '',
                    tagline: '',
                    image: picture,
                    event_registered: []

                });
                return res.status(201).json({
                    success: true,
                    data: user
                });
            } catch (error) {
                return res.status(400).json({
                    success: false
                });
            }
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ success: false, message: `Method ${method} not allowed` });
    }
}



