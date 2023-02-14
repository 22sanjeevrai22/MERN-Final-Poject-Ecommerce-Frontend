import axios from 'axios'
import { createContext, useState } from 'react'


export const RegisterContext = createContext([]);

export default function RegisterProvider({children}){
    
    const [name, setName] = useState(''
    )
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const handleName = (event) => {
        const nameValue = event.target.value;
        setName(nameValue)
    }

    const handleEmail = (event) =>{
        const emailValue = event.target.value;
        setEmail(emailValue)
    }

    const handlePassword = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
    }

    const handlePasswordAgain = (event) => {
        const passwordValueAgain = event.target.value;
        setPasswordAgain(passwordValueAgain);
    }

    const handleSubmitButton = async (event) => {
        event.preventDefault();

        if (name && email && password && (password === passwordAgain)){
            
              axios.post('http://localhost:8000/api/v1/register', {
                name: name,
                email: email,
                password: password,
                })
                .then(res => {
                    
                    alert(res.data.message);
                    setName('')
                    setEmail('')
                    setPassword('_')
                    setPasswordAgain('_')
                   
                });

           
    }else{
                alert('Your input credentials do not match');
            }
        }
    

        return(
            <>
            <RegisterContext.Provider value = {{name, email, password, passwordAgain, handleName, handleEmail, handlePassword, handlePasswordAgain, handleSubmitButton}}>
                {children}
            </RegisterContext.Provider>
            </>
        )
}