import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../lib/ConnectDb";
import EventSchema from "../../models/event";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const method = req.method;


    if (method === "GET") {
        await connectMongo();
        const events = await EventSchema.find({});
        res.status(200).json(events);
        res.send(events);
    }
    else if (method === "POST") {
        await connectMongo();
        const event = await EventSchema.create({
            id: await nanoid(),
            name: req.body.name,
            description: req.body.description,
            date: req.body.date,
            type: req.body.type,
            slug: req.body.slug,
            eventpic: req.body.eventpic,
            eventLink: req.body.eventLink,
            eventbanner: req.body.eventbanner,
            isActive: req.body.isActive,
            isCompleted: req.body.isCompleted,
            locationName: req.body.locationName,
            locationUrl: req.body.locationUrl

        });
        res.status(201).json(event);
    }
    else {
        res.status(400).json({ message: "Invalid request" });
    }
}


