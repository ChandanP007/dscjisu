

import { nanoid } from 'nanoid';

import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/ConnectDb";
import CodeFestSchema, { ICodeFest } from './../../../models/codefest';

// id: string;
// name: string;
// email: string;
// sub: string;
// image: string;
// date_registered: string;
// paid: {
//     type: boolean;
//     required: true;
//     default: false;
// };
// accepted: {
//     type: boolean;
//     required: true;
//     default: false;
// };
// food_taken: {
//     type: boolean;
//     required: true;
//     default: false;
// };
// checkin: {
//     status: {
//         type: boolean;
//         required: true;
//         default: false;
//     };
//     time: string | null;
// }


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const method = req.method;
    await connectMongo();
    if (method === "POST") {
        const user = await CodeFestSchema.find({ sub: req.body.sub });
        if (user.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Your already registered",
                data: user
            });
        } else {
            const { name, email, image, sub, } = req.body;
            try {
                const user = await CodeFestSchema.create<ICodeFest>({
                    id: await nanoid(),
                    name,
                    email,
                    sub,
                    image,
                    date_registered: new Date().toISOString(),
                    paid: false,
                    accepted: false,
                    food_taken: false,
                    checkin: {
                        status: false,
                        time: null
                    }
                });
                return res.status(201).json({
                    success: true,
                    message: "wow you are registered",
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



