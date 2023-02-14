import {TbTruckDelivery} from 'react-icons/tb'
import {FcMoneyTransfer} from 'react-icons/fc'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {MdSecurity} from 'react-icons/md'


export function Services(){
    return (
        <div className="container container2">
            <div className ='grid grid-three-column'>
                <div className='icon-together'>
                    <TbTruckDelivery className='service-icon'/>
                    <p>Lightning Speed Delivery</p>
                </div>
                <div className='icon-together'>
                            <FcMoneyTransfer className='service-icon'/>
                            <p>Money-back Guaranteed</p>

                    </div>
                    <div  className='icon-together'>
                            <RiSecurePaymentFill className='service-icon'/>
                            <p>Super-Secure Payment</p>
                    </div>   
                  

                <div className='icon-together'>
                    <MdSecurity className='service-icon'/>
                    <p>Non-contact Shipping</p>
                </div>
            </div>

            
        </div>
    )
}