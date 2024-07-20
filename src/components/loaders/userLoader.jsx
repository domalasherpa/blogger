const userLoader = async({ params })=>{
    let {username} = params;
    username = username.replace(/^@/,'');
    const res = await fetch(`http://localhost:4000/users/?username=${username}`);


    if(!res.ok){
        throw new Error("Unable to fetch the user");
    }

    const data = await res.json();
    console.log(data);
    return data[0];
}

export default userLoader;