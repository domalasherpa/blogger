import { Router } from "express";
import { blogController } from "../controller/blogController.js";
import authenticationToken from "../middleware/auth.js";

const blogRoute = Router();

blogRoute.get('/', blogController.getAllBlogs); 
blogRoute.post('/', authenticationToken, blogController.createBlog);
blogRoute.get('/:id', authenticationToken, blogController.getBlog);
blogRoute.post('/:id', authenticationToken, blogController.updateBlog);
blogRoute.delete('/:id', authenticationToken, blogController.deletBlog);

export default blogRoute;