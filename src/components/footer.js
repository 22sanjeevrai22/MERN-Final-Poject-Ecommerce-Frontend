import '../components/footer.css'
import { FaFacebook, FaPhone } from 'react-icons/fa';
export function Footer(){
    return(
        <div className = 'main-footer'>
            <div id='one'>
                <p>Dooraz.com<br/>
                <small>Sanjeev Inc. Sunsari, Dharan</small></p>
            </div>
            <div id = 'two'>
                <p>PRIVACY POLICY TERMS & CONDITIONS</p>
            
            </div>
            <div id ='three'>
                <p>@2022<br/>
                <small>All rights reserved.</small></p>
            </div>
            <div id ='four'>
                <p>Contact <br/>
                <FaFacebook/>Dooraz Ofiicial<br/><FaPhone/>+9779876543210</p>
            </div>
        </div>
    )
}