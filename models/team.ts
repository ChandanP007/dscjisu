import mongoose from "mongoose";

type Team = {
    id: string;
    name: string;
    role: string;
    linkedin: string;
    github: string;
    tagline: string;
    image: string;
};


const TeamSchema = new mongoose.Schema<Team>({
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

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);
