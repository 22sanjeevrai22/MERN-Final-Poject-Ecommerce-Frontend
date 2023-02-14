import '../globalCss.css'
export function HeroSection({dynamicComponents}) {
    const {name, image} = dynamicComponents;
    return (<>
        <div className = "container container1" >
        <div className = "grid grid-two-column" >
        <div className = 'hero-section-data' >
        

        <h1 className='hero-title'>{name}</h1><br/>

        <p>Dooraz provides authentic products from the trusted vendors all over the world. The quality is world class and FSO standard. Our clients include celebrities of Hollywood and entrepreneurs like Warren Buffet and Jason Statham. We provide and deliver products all around the world. </p> <a href='/shop'>
        <button className = 'btn2'>Shop now </button></a> 
        </div>

        <div className = 'hero-section-image'>

        
        <img src={image} alt = 'apple' className='image-style'/>
         
        
        </div>

        </div>

        </div>
         </>
    )
}