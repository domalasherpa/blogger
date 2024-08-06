import Blog from '../models/Blogs.js';
import Comment from '../models/Comment.js';

export const blogController = {

    'getAllBlogs': async(req, res)=>{
        try{
            const blogs = await Blog.find().populate('author');

            if(!blogs) {blogs = [];}
            return res.status(200).json({blogs: blogs, success:true});
        }
        catch(err){
            console.log(err);
            return res.status(500).json({message:'500 internal server error.', success:false});
        }  
    },

    'getBlog': async(req, res)=>{
        const blogId = req.params.id;
        
        try{
            const blog = await Blog.findById(blogId).populate('author');
            let comments = null;
            if(blog.comments){
                comments = await Comment.find({blog: blog._id}).populate('author');
                console.log(comments);
            }
            
        
            if(blog){
                return res.status(200).json({blog: blog, comments:comments, success: true});
            }
            else{
                return res.status(400).json({message: 'Blog doesnot exist', success:false});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({message:'500 internal server error.', success:false});
        }
    },

    'createBlog': async(req, res)=>{
        const {title, subtitle, body, tags} = req.body;
        const user = req.user.id;
        //perform some validations

        try{
            const createBlog = await Blog.create({title:title, sub_title: subtitle, body: body, tags: tags, author: user});
            if(createBlog){
                return res.status(200).json({success: true, message:'Blog sucessfully created.'});
            }
            else{
                return res.status(400).json({success:false, message: 'Bad Request.'});
            }
        }
        catch(err){
            console.log(err.message);
            return res.status(500).json({message:'500 internal server error.', success:false});
        }
    },

    'updateBlog': async(req, res)=>{
        const user = req.user.id;
        const blogId = req.params.id;
        const update = req.body;
        const filter = {author: user, _id:blogId};
        
        try{
            const updateBlog = await Blog.updateOne(filter, update);
            if(updateBlog){
                return res.status(200).json({success: true, message:'Blog updated sucessfully.'});
            }
            else{
                return res.status(400).json({success:false, message: 'Bad Request.'});
            }
        }
        catch(err){
            console.log(err.message);
            return res.status(500).json({message:'500 internal server error.', success:false});
        }
    },

    'deletBlog': async(req, res)=>{
        const user = req.user.id;
        const blogId = req.params.id;
        const filter = {author: user, _id:blogId};

        try{
            const deleteBlog =  await Blog.deleteOne(filter);
            if(deleteBlog){
                return res.status(200).json({success:true, message:'Blog deleted sucessfully.'});
            }
            else{
                return res.status(400).json({success:false, message: 'Bad Request.'});
            }
        }
        catch(err){
            console.log(err.message);
            return res.status(500).json({message:'500 internal server error.', success:false});
        }
    }

}