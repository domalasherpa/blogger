import { useState } from "react";

export default function Regiser(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async(e)=>{
        e.preventDefault();
        alert('register');       
    }

    const handleFirstNameChange = (e)=>{setFirstName(e.target.value)}
    const handleLastNameChange = (e)=>{setLastName(e.target.value)}
    const handleEmailChange = (e)=>{setEmail(e.target.value)}
    const handleUsernameChange = (e)=>{setUsername(e.target.value)}
    const handlePasswordChange = (e)=>{setPassword(e.target.value)}

    return (

        <form>
            <label htmlFor="firstname">First Name: </label>
            <input 
                type="text" 
                value={firstName} 
                onChange={(e)=>{handleFirstNameChange(e)}}
                required
            />
            <label htmlFor="lastname">Last Name: </label>
            <input 
                type="text" 
                value={lastName} 
                onChange={(e)=>handleLastNameChange(e)}
                required
            />
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                value={email} 
                onChange={(e)=>handleEmailChange(e)}
                required
            />
            <label htmlFor="username">User Name: </label>
            <input 
                type="text" 
                value={username} 
                onChange={(e)=>handleUsernameChange(e)}
                required
            />
            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                value={password} 
                onChange={(e)=>handlePasswordChange(e)}
                required
            />

            <button 
                type="submit" 
                onClick={(e)=>{onSubmit(e)}}
                className=" p-1 rounded-sm hover:bg-blue-600 hover:text-gray-100 bg-blue-500 cursor-pointer text-gray-200 "    
            >Register</button>
            

        </form>
    )
}