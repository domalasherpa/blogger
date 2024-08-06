import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import api from "../utils/api";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({children}){

    const [isAuthorized, setIsAuthorized] = useState(null);
    

    useEffect(()=>{
        const verifyAuth = async () => {
            try {
                await auth();
            } catch {
                setIsAuthorized(false);
            }
        };
        verifyAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refreshToken = async()=>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if(!refreshToken){
            setIsAuthorized(false);
            return;
        }

        try{
            const res = await api.post('/api/token/refresh', {
                refreshToken: refreshToken
            });

            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            }
            else{
                setIsAuthorized(false);
            }
        }
        catch(err){
            console.log(err);
            setIsAuthorized(false);
        }
    }

    const auth = async()=>{

        const token = localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            setIsAuthorized(false);
            return;
        }

        const decoded = jwtDecode(token);
        const tokenExp = decoded.exp;  
        const now = Date.now() / 1000; //sec

        if(tokenExp < now){ //expired token
            await refreshToken();
        }
        else{
            setIsAuthorized(true);
        }
    }

    if(isAuthorized === null){
        return <div>loading...</div>
    }

    
    return ( isAuthorized ? children : <Navigate to='/login' />); 



}