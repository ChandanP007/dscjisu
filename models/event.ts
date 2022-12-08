import mongoose from "mongoose";


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

// "id": "11",
//     "name": "A Guide to Cybersecurity & Cyberspace",
//     "description": "This event is open to anyone who is interested in learning more about how to prepare for a product company interview or in learning about the software development roadmap.",
//     "date": "2022/11/05",
//     "type": "Speaker Session",
//     "slug": "a-guide-to-cybersecurity-cyberspace",
//     "eventpic": "/events/a-guide-to-cybersecurity-cyberspace/a-guide-to-cybersecurity-cyberspace.jpg",
//     "eventLink": "https://gdsc.community.dev/events/details/developer-student-clubs-jis-university-kolkata-presents-a-guide-to-cybersecurity-cyberspace/",
//     "isActive": true,
//     "isCompleted": false,
//     "locationName": "Online",
// "locationUrl": "https://gdsc.community.dev/events/details/developer-student-clubs-jis-university-kolkata-presents-a-guide-to-cybersecurity-cyberspace/"
const EventSchema = new mongoose.Schema<Event>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    eventpic: {
        type: String,
        required: true,
    },
    eventbanner: {
        type: String,
        required: true,
    },
    eventLink: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
    locationName: {
        type: String,
        required: true,
    },
    locationUrl: {
        type: String,
        required: true,
    }
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
