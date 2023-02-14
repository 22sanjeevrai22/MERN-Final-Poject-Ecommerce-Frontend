import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from 'react';


export const ContactUsContext =  createContext([]);

export function ContactUsProvider({children}){
    
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (event) =>{
        const name = event.target.value;
        setName(name)
    }
    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
    }

    const handleMessage = (event) => {
        const message = event.target.value;
        setMessage(message)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(name && email && message)
        
        {
        axios.post('http://localhost:8000/api/v1/contacts',   {  
                name : name,     
                email: email,
                message: message,
                }, {withCredentials : true})
                .then(res => {
                    alert(res.data.message);

                });

                setMessage('')
        }else{
            alert('Please fill all the fields.')
        }

    }


    useEffect(()=>{
        getData();
    }, [])

    const getData = async() =>{
        try{

            const res = await fetch('http://localhost:8000/api/v1/getData', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const userData = await res.json();


            setName(userData.name)
            setEmail(userData.email)

            alert(res.data.message)


            }catch(err){
                console.log(err)
                
            }
       
    }


    return(
        <ContactUsContext.Provider value={{name, email, message, handleName, handleEmail, handleMessage, handleSubmit}}>
            {children}
        </ContactUsContext.Provider>
    )
}

