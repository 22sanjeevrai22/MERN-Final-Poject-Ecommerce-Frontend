import { useEffect, useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductSearchContext } from '../../context/ProductSearchContext';
import { CartContext, CartProvider } from '../../context/CartContext';



export default function Product(product){
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setisLoggedIn] = useState(false);

     useEffect(()=>{
        getData();
    }, [])

    const getData = async() =>{
        try{

            const res = await fetch('http://localhost:8000/api/v1/getData', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const userData = await res.json();

            if(userData){
            setisLoggedIn(true);
             }

            }catch(err){
                console.log(err)
                
            }
       
    }

    
    useEffect(()=>{
        fetchAllProducts();
    }, []);

    async function fetchAllProducts(){
        const response = await fetch("http://localhost:8000/api/v1/products");
        const {data} = await response.json();
        setProducts(data);
        
    }

    return(
        <>
        <Row>
            <CartProvider>
            {products.map((product) =>{
            return(<Col key = {product._id} sm={4} md = {3}>
                    <ProductCard product = {product} isLoggedIn = {isLoggedIn}/>
                </Col>);
            }
            )}
            </CartProvider>
        </Row>

        </>

    )
}


export function ProductCard({product, isLoggedIn}){

    const {addToCart} = useContext(CartContext)
 

    return(<>

        
        <Card style={{ width: '16rem' }}>
        { 
            product.image && <Card.Img variant='top' style={{ height : '12rem', padding : '5px'}} src = {`http://localhost:8000/uploads/${product.image}`}/>
        }

      
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <small>
           Price : {product.price}
           </small>
             </Card.Text>

          
        {isLoggedIn && <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>}
      </Card.Body>
    </Card>
        </>

    )
}







