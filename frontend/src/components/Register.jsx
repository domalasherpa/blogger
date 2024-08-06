import { useState } from "react";
import Logo from "./Logo";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Regiser(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await api.post('/register', {
                firstname: firstName, 
                lastname: lastName,
                email: email,
                username: username,
                password: password
            })

            if(res.status === 200){
                alert('account successfully created.');
                navigate('/login');
            }
            else{
                alert('something went wrong. Please try again.');
            }
        }
        catch(error){
            const errorMessage = error.response ? error.response.data.message : 'An error occured. Please try again.';
            alert(errorMessage);
            console.log(errorMessage);
        }
    }

    const handleFirstNameChange = (e)=>{setFirstName(e.target.value)}
    const handleLastNameChange = (e)=>{setLastName(e.target.value)}
    const handleEmailChange = (e)=>{setEmail(e.target.value)}
    const handleUsernameChange = (e)=>{setUsername(e.target.value)}
    const handlePasswordChange = (e)=>{setPassword(e.target.value)}

    return (

        <form className="text-black p-4 bg-gray-500  text-xs max-w-80 h-fit">
            <Logo />
            <label htmlFor="firstname">First Name: </label>
            <input 
                type="text" 
                value={firstName} 
                onChange={(e)=>{handleFirstNameChange(e)}}
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2" 
                required
            />
            <label htmlFor="lastname">Last Name: </label>
            <input 
                type="text" 
                value={lastName} 
                onChange={(e)=>handleLastNameChange(e)}
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2" 
                required
            />
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                value={email} 
                onChange={(e)=>handleEmailChange(e)}
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2" 
                required
            />
            <label htmlFor="username">User Name: </label>
            <input 
                type="text" 
                value={username} 
                onChange={(e)=>handleUsernameChange(e)}
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2" 
                required
            />
            <label htmlFor="password">Password: </label>
            <input 
                type="password" 
                value={password} 
                onChange={(e)=>handlePasswordChange(e)}
                className="border-2 border-slate-50 focus:border-blue-500 rounded-lg outline-none bg-slate-50 p-1 w-full mb-2" 
                required
            />

            <button 
                type="submit" 
                onClick={(e)=>{onSubmit(e)}}
                className=" p-1 rounded-sm hover:bg-gray-400 hover:text-gray-100 bg-gray-600 cursor-pointer text-gray-200 "    
            >Sign Up</button>
            

        </form>
    )
}