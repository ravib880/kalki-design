import BridalPage from "../View/Bridal/BridalPage";
import Home from "../View/Home/Home";

const route = [
    {
        path: '/',
        element: <Home />
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
];

export default route;