import { model, models, Schema } from 'mongoose';


interface IEvent {
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
}

const EventSchema = new Schema<IEvent>({
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
export default models.Event || model<IEvent>('Event', EventSchema);

