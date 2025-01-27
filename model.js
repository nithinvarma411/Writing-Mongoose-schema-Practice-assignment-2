import {schema, model} from 'mongoose';

const Blog = schema({
    title: {
        type: String,
        unique: true,
        minlength: 5,
    },
    content: {
        type: String,
        required: true,
        minlength: 50,
    },
    author: {
        type: String,
    },
    tags:{
        type: [String],
        enum: ['tech', 'coding'],
    },
    category: {
        type: String,
        default: 'general',
    },
    likes:{
        type: [String]
    },
    comments: [{
        username: {type: String},
        message: {type:String},
        commentedAt: {
            type: Date,
            default: Date.now,
        }}]
}, {timestamps: true});
export default model('Blog', Blog);