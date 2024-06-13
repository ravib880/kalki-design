import OfferBanner from "../Components/OfferBanner";
import AboutUsPage from "../View/About Us/AboutUsPage";
import ContactUsPage from "../View/About Us/ContactUsPage";
import BridalPage from "../View/Bridal/BridalPage";
import CartPage from "../View/Cart/CartPage";
import CheckOutPage from "../View/Checkout/CheckOutPage";
import Home from "../View/Home/Home";
import ProductDetail from "../View/Product/ProductDetail";
import ProductListing from "../View/Product/ProductListing";
import WishList from "../View/Wishlist/WishList";
import IndexRoutes from "./User/IndexRoutes";


const route = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/women',
        element: <Home />
    },
    {
        path: '/products',
        element: <><OfferBanner /> <ProductListing /></>
    },

    {
        path: '/productdetails',
        element: <><OfferBanner /> <ProductDetail /></>
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/men',
        element: <></>
    },
    {
        path: '/bridal',
        element: <BridalPage />
    },
    {
        path: '/luxe',
        element: <></>
    },
    {
        path: '/cart',
        element: <CartPage />
    },
    {
        path: '/wishlist',
        element: <WishList />
    },
    {
        path: '/about-us',
        element: <AboutUsPage />
    },
    {
        path: '/contact',
        element: <ContactUsPage />
    },
    {
        path: '/checkout',
        element: <CheckOutPage />
    },
    {
        path: '/user/*',
        element: <IndexRoutes />
    },
];

export default route;