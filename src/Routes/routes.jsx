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
        element: <Home />
    },
    {
        path: '/bridal',
        element: <BridalPage />
    },
    {
        path: '/lux',
        element: <Home />
    },
];

export default route;