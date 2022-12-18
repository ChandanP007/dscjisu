import { model, models, Schema } from 'mongoose';



export interface ICodeFest {
    id: string;
    name: string;
    email: string;
    sub: string;
    image: string;
    date_registered: string;
    paid: {
        type: boolean;
        required: true;
        default: false;
    };
    accepted: {
        type: boolean;
        required: true;
        default: false;
    };
    food_taken: {
        type: boolean;
        required: true;
        default: false;
    };
    checkin: {
        status: {
            type: boolean;
            required: true;
            default: false;
        };
        time: string | null;
    }
}


const CodeFestSchema = new Schema<ICodeFest>({
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
    image: {
        type: String,
        required: true,
    },
    date_registered: {
        type: String,
        default: new Date().toISOString(),
    },
    paid: {
        type: Boolean,
        required: true,
        default: false,
    },
    accepted: {
        type: Boolean,
        required: true,
        default: false,
    },
    food_taken: {
        type: Boolean,
        required: true,
        default: false,
    },
    checkin: {
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
        time: String || null,
    }


});

export default models.Codefest || model<ICodeFest>('Codefest', CodeFestSchema);

