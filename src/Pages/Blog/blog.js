import { HeroSection } from "../../components/heroSection"
import Image from '../../multimedia/temple.jpg'
export function Blog(){
    const dynamicComponents = {
        name : 'Blog',
        image : Image,
    }
    return(
        <>

        <HeroSection dynamicComponents = {dynamicComponents}/>

        </>
    )
}