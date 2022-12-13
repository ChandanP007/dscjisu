import { model, models, Schema } from 'mongoose';


// tags: API
// title: Guide to Yaml
// body: YAML (YAML Ain't Markup Language) is a human-readable data serialization language. It is often used for configuration files, but can be used in many other contexts as well. In this blog, we will take a look at the basics of YAML and how it can be used by developers.
// author: Abhishek Kushwaha
// date: 2022-12-12
// blogImage: /blogs/guide-to-yaml/blogimage.png
// authorImage: https://github.com/Abbhiishek.png
// blogslug: guide-to-yaml

export interface IBlog {
    name: string,
    description: string,
    date: string,
    body: object,
    tags: string,
    author: string,
    authorImage: string,
    blogImage: string,
    slug: string,
    reaction: {
        like: number,
        love: number,
        wow: number,
        unicorn: number,
        upvote: number
    }
}


const BlogSchema = new Schema<IBlog>({
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
    body: {
        type: Object,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    authorImage: {
        type: String,
        required: true,
    },
    blogImage: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    reaction: {
        like: {
            type: Number,
            default: 0,
        },
        love: {
            type: Number,
            default: 0,
        },
        wow: {
            type: Number,
            default: 0,
        },
        unicorn: {
            type: Number,
            default: 0,
        },
        upvote: {
            type: Number,
            default: 0,
        }
    }

});
export default models.Blog || model<IBlog>('Blog', BlogSchema);

