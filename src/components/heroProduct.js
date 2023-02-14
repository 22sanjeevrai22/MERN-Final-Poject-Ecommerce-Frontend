import '../globalCss.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import one from '../multimedia/uploads/1.jpg'
import two from '../multimedia/uploads/2.jpg'
import three from '../multimedia/uploads/3.jpg'
import four from '../multimedia/uploads/4.jpg'
import five from '../multimedia/uploads/5.png'
import six from '../multimedia/uploads/6.jpg'
import seven from '../multimedia/uploads/7.jpg'
import eight from '../multimedia/uploads/8.jpg'

const images = [one, two, three, four, five, six, seven, eight]



export function HeroProduct (){

    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    return(

        <div>
            <Carousel responsive={responsive}  className="container5 container">
                {
            images.map((image, i) => (
                
                <img src={image} alt = 'none' style={{width : '10rem', height : '10rem', borderRadius : '8px'}}/>   
            ))
            
            }
            </Carousel>

        </div>
        
    )
}