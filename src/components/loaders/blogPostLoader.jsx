const blogPostLoader = async({ params })=>{
    const {blogsId} = params;
    const res = await fetch(`http://localhost:4000/posts/?id=${blogsId}`);

    if(!res.ok){
      throw Error("Could not find that blog");
    }

    const data = await(res.json());

    return data[0];
}

export default blogPostLoader;