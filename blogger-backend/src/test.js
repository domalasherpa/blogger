import User from "./models/User.js";
import conn from './db.js';
import Blog  from "./models/Blogs.js";
import Comment from "./models/Comment.js";
import mongoose from "mongoose";
import {generateAccessToken, generateRefreshToken} from "./controller/token.js";


function createUser(){
    conn();
    let username ='test2';
    let email='d@gmail.com';
    let password='domalasherpa';
    let firstName='t';
    let lastName ='s';
    let bio='computer science enthusiast';

    try{
        const user = new User({
            username: username,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            bio: bio
        });
    
        user.save();
        console.log("user created");
    }
    catch(err){
        console.log(err, err.message);
    }
    return ;
}

async function createBlog(){

    const user = await User.findOne({username: 'test'});

    let author= user._id;
    let title='object detection using computer vision';
    let sub_title='yolo(you only look once algorithm';
    let body='yolo is the state of the art object detection algorithm that uses single cnn';
    let tags=['computer vision'];

    try{
        const blog = new Blog({
            author: author,
            title: title,
            sub_title:sub_title,
            body:body,
            tags:tags
        });

        blog.save();


        // user.blogs.push(blog._id);
        console.log('blog created: ', blog);
        user.blogs.push(blog._id);
        user.save();
        console.log(user);
    }
    catch(err){
        console.log(err.message);
    }
}

async function createComment(){
    const blog = await Blog.findById('66a478b259f2614928a0d460');
    const author = '66a46005e8c678bb00a76d67';
    const content = 'nice post. keep it up';

    try{
        const comment = await Comment.create(
            {
                author: author,
                content: content,
                blog: blog._id
            }
        );

        blog.comments.push(comment._id);
        blog.save();

        console.log(comment);
    }
    catch(err){
        console.log(err.message);
    }
    

}


export async function testJWT(){
    conn();
    const userd= await User.findOne({username: 'test'});

    const user = {
        id: userd._id,
        email: userd.email,
        role: userd.role || 'user'
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    console.table([accessToken, refreshToken]);

    return {accessToken: accessToken, refreshToken: refreshToken};
    
}

// const user = await User.findOne({username:'test'}).populate('blogs');
// console.log(user);
// await createBlog();
// const user = await User.findOne({username: 'test'});

// const user = await User.findOneAndUpdate({username:'test'}, {email:'test2email@gmail.com'},{
//     new: true,
//     upsert: true,
//     timestamps: {updatedAt: true}
// });

// console.log(user);

// const user = await User.findOne({username:'test'});
// const date = user.updated_at.toLocaleTimeString('en-us');
// const date2 = user.created_at.toLocaleTimeString('en-us');
// console.log(date, "\t", date2);

// createUser();