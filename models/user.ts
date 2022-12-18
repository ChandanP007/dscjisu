import { model, models, Schema } from 'mongoose';

interface IEvent {
    id: string;
    name: string;
    description: string;
    event_slug: string;
    date: string;
    time: string;
    paid: boolean;
    accepted: boolean;
    price: number;
    food_taken: boolean;
    checkin: {
        status: boolean;
    }
}


export interface IUser {
    id: string;
    name: string;
    email: string;
    sub: string;
    linkedin: string;
    github: string;
    tagline: string;
    image: string;
    event_registered: IEvent[];
}


const UserSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    sub: {
        type: String,
        required: true,
        unique: true,
    },
    linkedin: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
    tagline: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    event_registered: [{
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        event_slug: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        paid: {
            type: Boolean,
            required: true,
        },
        accepted: {
            type: Boolean,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        food_taken: {
            type: Boolean,
            required: true,
        },
        checkin: {
            status: {
                type: Boolean,
                required: true,
            }
        }
    }],

});

export default models.User || model<IUser>('User', UserSchema);

