import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../lib/ConnectDb";
import EventSchema from "../../models/event";

type Event = {
    id: string;
    name: string;
    description: string;
    date: string;
    type: string;
    slug: string;
    eventpic: string;
    eventbanner: string;
    eventLink: string;
    isActive: boolean;
    isCompleted: boolean;
    locationName: string;
    locationUrl: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const method = req.method;

    if (method === "GET") {
        // This code retrieves all events from the database and returns them as an array.
        const events = await EventSchema.find < ({});
        res.status(200).json(events);
    }
    // else if (method === "POST") {
    //     // This code creates a new event in the database.
    //     const event = await EventSchema.create  ({
    //         id: await nanoid(),
    //         name: req.body.name,
    //         description: req.body.description,
    //         date: req.body.date,
    //         type: req.body.type,
    //         slug: req.body.slug,
    //         eventpic: req.body.eventpic,
    //         eventLink: req.body.eventLink,
    //         eventbanner: req.body.eventbanner,
    //         isActive: req.body.isActive,
    //         isCompleted: req.body.isCompleted,
    //         locationName: req.body.locationName,
    //         locationUrl: req.body.locationUrl
    //     });
    //     res.status(201).json(event);
    // }
    else {
        // Invalid Request
        res.status(400).json({ message: "Invalid request" });
    }
}