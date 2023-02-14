import { HeroSection } from "../../components/heroSection"
// import axios from 'axios'
import Image from '../../multimedia/bg3.jpg'


export function About(){
    
    const dynamicComponents = {
        name : 'About Us',
        image : Image,
    }
    

    return(
        <>

        <HeroSection dynamicComponents = {dynamicComponents}/>

        </>
    )
}