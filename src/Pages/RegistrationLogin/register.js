
import { useContext } from 'react';
import RegisterProvider, { RegisterContext } from '../../context/RegisterContext'
import '../RegistrationLogin/login-register.css'

export function Register(){
return(
    <RegisterProvider>
        <RegisterComponent/>
    </RegisterProvider>
)
}

function RegisterComponent(){
    const {name, email, handleName, handleEmail, handlePassword, handlePasswordAgain, handleSubmitButton} = useContext
    (RegisterContext);

    return(
        <>
        <div className='container'>
            
        <form className="login-container">
                <h2>Register Here!</h2>
                <div className="form-group">
                    <label htmlFor='name'>Full Name</label>
                    <input type="text" name='name' placeholder="Enter your Name" autoComplete='off'
                    value = {name} onChange={handleName}>
                    </input>
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder="Enter your Email" autoComplete='off' 
                    value = {email} onChange={handleEmail}>
                    </input>
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder="Enter your Password" autoComplete='off' onChange={handlePassword}></input>
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Re-enter your Password</label>
                    <input type="password" name='password' placeholder="Re-enter your Password" 
                 onChange={handlePasswordAgain}></input>
                </div>
                

                <button type ='submit' className="btn1" onClick={handleSubmitButton}>Register</button>
                
                <div>
                    <p>Already registered?<br></br>Login <a href = '/login'>here</a></p>
                </div>


            </form>
        </div>
        </>
    )
}