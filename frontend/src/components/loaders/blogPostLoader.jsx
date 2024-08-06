import api from "../../utils/api";

const blogPostLoader = async({ params })=>{
    const {blogsId} = params;
    const res = await api.get(`/blog/${blogsId}`);

    if(res.status !== 200){
      throw Error("Could not find that blog");
    }
        
    return [res.data.blog, res.data.comments];
}

export default blogPostLoader;