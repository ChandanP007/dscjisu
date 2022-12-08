import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../lib/ConnectDb";
import TeamSchema from "../../models/team";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const method = req.method;
    if (method === "GET") {
        await connectMongo();
        const events = await TeamSchema.find < ({});
        res.status(200).json(events);
        // res.send(events);
    }

    else {
        res.status(400).json({ message: "Invalid request" });
    }
}


