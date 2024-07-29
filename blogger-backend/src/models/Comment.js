import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        immutable: true
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true,
        immutable: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    sub_comment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CommentReply'
        }
    ]},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

export const Comment = model('Comment', commentSchema);