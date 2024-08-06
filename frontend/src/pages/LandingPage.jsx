import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

export default function LandingPage(){

    const [selected, setSelected] = useState('login');

    return (
        <div className="w-full flex md:flex-wrap">

            <div className="w-6/12 border-2 max-sm:hidden">
                banner
            </div>

            <div className="w-6/12 flex items-center max-sm:w-full justify-center text-xs">
                { selected === 'login' ? (
                    <div >
                        <Login />
                        <p className="bg-gray-500 p-4 mt-3">Don&apos;t have an account? 
                            <span 
                            className="text-blue-200 underline cursor-pointer ml-1" 
                            onClick={()=>{setSelected('register')}}
                            
                            >Sign up</span>
                        </p>
                    </div>
                ) 
                : (
                    <div>
                        <Register />
                        <p className="bg-gray-500 p-4 mt-3">Have an account?  
                            <span 
                            className="text-blue-300 underline cursor-pointer ml-1" 
                            onClick={()=>{setSelected('login')}}
                            >Login here</span>
                        </p>
                    </div>
                )
                }
            </div>
            
            
        </div>
    )
}