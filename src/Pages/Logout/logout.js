import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout(){
    const navigate = useNavigate();
    useEffect(()=>{
        callLogout();
    }, [])

    const callLogout = async() =>{
        try{

            const res = await fetch('http://localhost:8000/api/v1/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const userData = await res.json();

            navigate('/login')
            if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
            }


            }catch(err){
                console.log(err)
                
            }
    }
       
    return(
        <>
       
        </>
    )
}