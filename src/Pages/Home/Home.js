import { Banner } from "../../components/banner";
import { HeroProduct } from "../../components/heroProduct";
import { HeroSection } from "../../components/heroSection";
import { Services } from "../../components/services";
import { TrustedBy } from "../../components/trustedBy";
import Image from '../../multimedia/bg2.jpg'

export function Home(){
    const dynamicComponents = {
        name : 'Welcome to Dooraz.com',
        image : Image
    }
    return(
        <>
        
        <HeroSection dynamicComponents = {dynamicComponents}/>
        <Banner/>
        <HeroProduct/>
        <Services/>
        <TrustedBy/> 
        

        </>
    )
}
