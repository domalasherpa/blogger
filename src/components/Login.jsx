import { useEffect, useState } from "react";
import api from '../utils/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem(ACCESS_TOKEN)){ //user already logged in
            navigate('/');
        }
    }, []);

    const onSubmit = async (e)=>{
        e.preventDefault();
        try{
            const data = {email: email, password: password};
            const res = await api.post('/login', data);

            if(res.data){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/');
            }
            else{
                navigate('/login');
            }
        }
        catch(err){
            alert(err);
        }
        finally{
            setLoading(false);
        }
    }

    loading && <p>Loading...</p>

    return (
        <form className="text-black p-4 bg-slate-200 text-xs">
            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2" 
                required 
            />

            <label htmlFor="password">Password: </label>
            <input 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2"                 
                required 
            />

            <button 
                type="submit" 
                onClick={(e)=>{onSubmit(e)}}
                className=" p-1 rounded-sm hover:bg-blue-600 hover:text-gray-100 bg-blue-500 cursor-pointer text-gray-200 "    
            >Log In</button>
        </form>
    )
}