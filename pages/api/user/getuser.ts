
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/ConnectDb";
import UserSchema from './../../../models/user';

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

    if (method === 'GET') {
        const user = await UserSchema.find();
        return res.status(200).json({
            success: true,
            data: user
        });
    }
    else if (method === "POST") {
        const { sub } = req.body;
        const user = await UserSchema.findOne({
            sub: sub
        });
        if (user) {
            return res.status(200).json({
                success: true,
                data: user
            });
        }
        else {
            return res.status(200).json({
                success: false,
                data: null
            });
        }

    }
}



