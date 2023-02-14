import '../globalCss.css'
import '../components/banner.css'

import Carousel from 'react-material-ui-carousel'
import sale4 from '../multimedia/sale4.jpg'
import banner1 from '../multimedia/banner1.jpg'
import sale1 from '../multimedia/sale1.jpg'


const images = [sale4, sale1, banner1]


export function Banner(){
    return(
        
        <Carousel className='container container4'>
            
            {
            images.map((image, i) => (
                
                <img src={image} alt = 'none' className = 'cont4'/>   
            ))
            
            }
                
            </Carousel>
        
    )
}