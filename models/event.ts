import { model, models, Schema } from 'mongoose';


export interface IEvent {
    id: {
        type: string;
        required: true;
        unique: true;
    };
    name: {
        type: string;
        required: true;
    };
    description: {
        type: string;
        required: true;
    };
    date: {
        type: string;
        required: true;
    };
    type: {
        type: string;
        required: true;
    };
    slug: {
        type: string;
        required: true;
        unique: true;
    };
    eventpic: {
        type: string;
        required: true;
    };
    eventbanner: {
        type: string;
        required: true;
    };
    eventLink: {
        type: string;
        required: true;
    };
    isActive: {
        type: boolean;
        required: true;
    };
    isCompleted: {
        type: boolean;
        required: true;
    };
    locationName: {
        type: string;
        required: true;
    };
    locationUrl: {
        type: string;
        required: true;
    };
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

