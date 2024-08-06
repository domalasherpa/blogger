import api from "../../utils/api";

const userLoader = async({ params })=>{
    let {username} = params;
    username = username.replace(/^@/,'');
    const res = await api.get(`user/${username}`);

    if(res.status !== 200){
        throw new Error("Unable to fetch the user");
    }

    return res.data.user;

}

export default userLoader;