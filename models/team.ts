import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
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
