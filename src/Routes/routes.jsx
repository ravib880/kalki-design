import OfferBanner from "../Components/OfferBanner";
import BridalPage from "../View/Bridal/BridalPage";
import CartPage from "../View/Cart/CartPage";
import Home from "../View/Home/Home";
import ProductDetail from "../View/Product/ProductDetail";
import ProductListing from "../View/Product/ProductListing";

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
];

export default route;