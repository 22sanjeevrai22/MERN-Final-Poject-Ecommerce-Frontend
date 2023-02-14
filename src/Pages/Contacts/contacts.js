import { useContext } from 'react';
import { ContactUsContext, ContactUsProvider } from '../../context/ContactUsContext';
import './contacts.css'

export function Contacts(){
return(
    <ContactUsProvider>
        <ContactsComponent/>
    </ContactUsProvider>
)
}


function ContactsComponent(){
   
    const {name, email, message, handleName, handleEmail, handleMessage, handleSubmit} = useContext(ContactUsContext);
    return(
        <>
        <h2 className = 'container contact-title'>CONTACT US</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.0819888919116!2d87.2787034458498!3d26.812165096171068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41a18a14f81d%3A0xefb21cb3da470372!2sBhat-Bhateni%20Super%20Store!5e0!3m2!1sen!2snp!4v1671682046719!5m2!1sen!2snp" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className='container1'>
            
        <form className="form-container">
                <h2 className = 'h2'>Contact Us</h2>
        
                <div className="form-group">
                    
                    <input type="text" name='username' placeholder="USERNAME" onChange={handleName}
                    value={name}
                    autoComplete='off'></input>
                </div>

                <div className="form-group">
                    <input type="email" name='email'onChange={handleEmail}
                    value={email} placeholder="EMAIL" autoComplete='off'>
                    </input>
                </div>

                <div className="form-group">
                    <input type="text" name='feedback' 
                    onChange = {handleMessage} value={message}
                    placeholder="FEEDBACK" autoComplete='off' style={{height : '7rem'}}>
                    </input>
                </div>



                <button type ='submit' className="btn1" onClick ={handleSubmit}>Submit</button>


            </form>
        </div>

        </>
    )
}