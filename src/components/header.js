import '../components/header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaFacebook, FaInstagram, FaYoutube, FaCartArrowDown, FaHeart, FaWhatsapp, FaTwitter} from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { useContext, useRef, useState, useEffect } from 'react';
import CategoryProvider, { CategoryContext } from '../context/CategoryContext';
import { ProductSearchContext } from '../context/ProductSearchContext';


function Header(){

    return(
        <Navbar/>
    )
}

function Navbar(){
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

    return(
      <>
        <CategoryProvider>
        <nav className='main-nav'>
            <NavTitle/>  
            <SearchBar/>
            <DropdownCategories/>
            <MenuLinks/>
            <ShoppingList isLoggedIn={isLoggedIn}/>
        </nav>   
        </CategoryProvider>
        </>
        )
}

function NavTitle(){
    return(
        <div className = 'main-title'>
                <h2>Dooraz.com</h2>
            </div>
    )
}

function SearchBar(){
    const {categories, activeCategory, handleCategoryChange} = useContext(CategoryContext);

    // const {handleSearchStringChange} = useContext(ProductSearchContext)
    
    const searchRef = useRef('');
    const handleSearch = (event) =>{
       if(event.key === 'Enter'){
        console.log('entered')
            // handleSearchStringChange(searchRef.current.value)
       } 
    }

    return(
    <div className='search-barDiv'>
    <InputGroup>
        <DropdownButton
          variant="outline-secondary"
          title='Categories'
          id="input-group-dropdown-1">

            {
                categories.map((category, index)=>{
                    return(
                    <Dropdown.Item onClick={()=> handleCategoryChange(category.name)} key={category._id} active = {activeCategory === category._id? true : false}>{category.name}</Dropdown.Item>
                    )
                })
            }

        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" onKeyDown={handleSearch} ref = {searchRef}/>
      </InputGroup>
      </div>

    )
}

function DropdownCategories(){
    const {categories, activeCategory, handleCategoryChange} = useContext(CategoryContext);
    return(
        <Dropdown className='dropdown-categories'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
            categories.map((category, index)=>{
                    return(<Dropdown.Item onClick={() => handleCategoryChange(category.name)} key={category._id} active = {activeCategory === category._id ? true : false}>{category.name}</Dropdown.Item>)
                })
        }
        
      </Dropdown.Menu>
    </Dropdown>
    )
}

function MenuLinks(){
    return(
        <>
        <div className = 'menu-links'>
                <ul>
                    <li>
                        <a href = '/home'>Home</a>
                    </li>
                    <li>
                        <a href = '/about'>About</a>
                    </li>
                    <li>
                        <a href = '/shop'>Shop</a>
                    </li>
                    <li>
                        <a href = '/blog'>Blog</a>
                    </li>
                    <li>
                        <a href = '/contacts'>Contacts</a>
                    </li>
                </ul>
            </div>


            <div className = 'social-media'>
                <ul>
                    <li>
                        <a href='#'><FaFacebook/></a>
                    </li>
                    <li>
                        <a href='#'><FaYoutube/></a>
                    </li>
                    
                    <li>
                        <a href='#'><FaInstagram/></a>
                    </li>
                    <li>
                        <a href='#'><FaWhatsapp/></a>
                    </li>
                    <li>
                        <a href='#'><FaTwitter/></a>
                    </li>
                </ul>
            </div>
           </>
    )
}

function ShoppingList({isLoggedIn}){
    return(
        <div className = 'shopping-list'>
            <ul>

                    {/* <li>
                        <a href='/whishlist' title = 'Whishlist'><FaHeart/></a>
                    </li> */}
                    <li>
                        <a href='/cart' title = 'Cart'><FaCartArrowDown/></a>
                    </li>
                    {isLoggedIn?
                    (<li>
                        <a href='/logout' title='Logout'><HiLogout/></a>
                    </li>):(
                    <li>
                        <a href='/login' title='Account'><BsFillPersonFill/></a>
                    </li>)

                    
                    }
                    
                    
                </ul>
        </div>
    )
}

export default Header;

