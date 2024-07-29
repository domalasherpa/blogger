import { Schema , model} from "mongoose";

const blogSchema = new Schema({
    author:{    
        type: Schema.Types.ObjectId,
        immutable: true,               //this makes the author field readonly
        required: true,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    sub_title: {
        type: String,
        required: true,
        trim: true
    },
    body:{
        type: String,
        required: true,
        trim: true
    },
    tags:[{
        type: String,
        required: true,
    }],
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
    }
});

export const Blog = model('Blog', blogSchema);

