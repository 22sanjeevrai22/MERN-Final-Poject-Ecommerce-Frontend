
import { GoogleLogin } from '@react-oauth/google';
import { useContext } from 'react'
import UserProvider, { UserContext } from '../../context/LoginContext'
import '../RegistrationLogin/login-register.css'

export function Login(){
    return(
        
        <UserProvider>
            <LoginComponent/>
        </UserProvider>
        
        
    )
}

    function LoginComponent(){

    const {email, password, handleEmail, handlePassword, handleLoginButton, responseGoogle} = useContext(UserContext);


        
        
    return(
        <>
        
        <div className='container'>
            
        <form className="login-container">
                <h2>Please Login!</h2>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                
                    <input type="email" name='email' placeholder="Enter your Email" autoComplete='off' value={email} onChange={handleEmail}>
                    </input>
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="Password" name='password' placeholder="Enter your Password" autoComplete='off'  value ={password} onChange={handlePassword}></input>
                </div>
                

                <button type ='submit' className="btn1" onClick={handleLoginButton}>Login</button>

                <div className ='googleLogin'>
                <GoogleLogin
            onSuccess={responseGoogle}
            onError={responseGoogle}
                />
                </div>
                

                <div>
                    <p>Not registered?<br></br>Sign up <a href='/register'>here</a></p>
                </div>
                
                


            </form>
        </div>
        
        </>
    )
}