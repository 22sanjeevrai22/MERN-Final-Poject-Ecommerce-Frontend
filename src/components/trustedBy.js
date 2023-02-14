import {SiYamahamotorcorporation} from 'react-icons/si'
import {FaAmazon, FaInstagram, FaGoogle} from 'react-icons/fa'
import {GiCometSpark} from 'react-icons/gi'


export function TrustedBy(){
    return (
        <div className="container container3">
            <div>
                <div>
                    <p>Trusted by 100+ companies</p>
                </div>
                <div className=" grid grid-five-column">
                    <div>
                        <SiYamahamotorcorporation className = 'trusted-icons'/>
                    </div>
                    <div>
                        <FaAmazon className = 'trusted-icons'/>
                    </div>
                    <div>
                        <GiCometSpark className = 'trusted-icons'/>
                    </div>
                    <div>
                        <FaInstagram className = 'trusted-icons'/>
                    </div>
                    <div>
                        <FaGoogle className = 'trusted-icons'/>
                    </div>
                
                </div>
            </div>
            
            
        </div>
    )
}