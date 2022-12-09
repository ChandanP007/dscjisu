import { model, models, Schema } from 'mongoose';

export interface ITeam {
    id: string;
    name: string;
    role: string;
    linkedin: string;
    github: string;
    tagline: string;
    image: string;
}


const TeamSchema = new Schema<ITeam>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

export default models.Team || model<ITeam>('Team', TeamSchema);

