import { Schema, model } from 'mongoose';

// Define the schema for replies
const replySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    sub_reply: [
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
});

export const CommentReply = model('CommentReply', replySchema); 