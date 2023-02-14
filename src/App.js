
import { RouterProvider } from 'react-router-dom';
import { Footer } from './components/footer';
import Header from './components/header';
import CategoryProvider from './context/CategoryContext';
import ProductSearchContextProvider from './context/ProductSearchContext';
import router from './router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
    return ( <>

        <ProductSearchContextProvider>
        <GoogleOAuthProvider clientId="330918037634-i4f9aeovosbu8vvgqg2lui2vpgmu9ul4.apps.googleusercontent.com">

        <div >
        
        <CategoryProvider>
        <Header/>
        </CategoryProvider>
        
        </div>
        
        <RouterProvider router = {router} > </RouterProvider>
        
        </GoogleOAuthProvider>
        </ProductSearchContextProvider>
        
        <Footer/>
        
        </>
    );
}

export default App;