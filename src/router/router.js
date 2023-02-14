import { createBrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from '../Pages/About/about';
import { Home } from '../Pages/Home/Home';
import { Shop } from '../Pages/Shop/shop';
import { Blog } from '../Pages/Blog/blog';
import { Register } from '../Pages/RegistrationLogin/register';
import { Cart } from '../Pages/cart/cart';
import { Errorpage } from '../Pages/errorpage/errorpage';
import { Login } from '../Pages/RegistrationLogin/login';
import { Contacts } from '../Pages/Contacts/contacts';
import { Whishlist } from '../Pages/Whishlist/whishlist';
import { Logout } from "../Pages/Logout/logout";

const router = createBrowserRouter([{
        path: '/',
        element: < Home/ >

    },
    {
        path: '/home',
        element: < Home/ >

    },
    {
        path: '/about',
        element: < About/ >
    },
    {
        path: '/shop',
        element: < Shop/ >
    },
    {
        path: '/blog',
        element: < Blog/ >
    },
    {
        path: '/contacts',
        element: < Contacts/ >
    },
    {
        path: '/whishlist',
        element: < Whishlist/ >
    },
    {
        path: '/cart',
        element: < Cart/ >
    },
    {
        path: '/register',
        element: < Register/ >
    },
    {
        path: '/login',
        element: < Login/ >
    },

    {
        path: '/logout',
        element: <Logout/ >
    },

    {
        path: '*',
        element: <Errorpage/ >
    },

])

export default router;