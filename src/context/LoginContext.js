import { createContext } from "react";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext([])

export default function UserProvider ({children}){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail=(event)=>{
        const emailValue = event.target.value
        setEmail((_)=>emailValue);
        
    }

    const handlePassword = (event) =>{
        const passwordValue = event.target.value;
        setPassword((_)=>passwordValue);
        
    }

    const handleLoginButton =  (event) =>{
        event.preventDefault();
        if (email && password){
        try{
            axios.post('http://localhost:8000/api/v1/login', {
                email: email,
                password: password,
                }, {withCredentials : true})
                .then(res => {
        
                    if(res.status === 400){
                        alert(res.data.message);
                        
                    }else{
                        navigate('/home')
                        alert(res.data.message)
                    }

                });
                     }catch(err){
                         alert('Invalid User');
                        alert(err)}

            }else{alert('Invalid input')}

  }  

    const responseGoogle = async(response) =>{
        const {credential} = response;
        
         axios.post('http://localhost:8000/api/v1/googlelogin', {
                idToken: credential,
                
                }, {withCredentials : true})
                .then(res => {
                    
                    alert(res.data.message);
                        
                });
    }


        return (
            <UserContext.Provider value={{email, password, handleEmail, handlePassword, handleLoginButton, responseGoogle}}>
                {children}

            </UserContext.Provider>
        )
}


