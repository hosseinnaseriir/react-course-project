import Auth from 'pages/Auth';
import Shop from 'pages/shop';
import Home from '../pages/Home/index';

export const routes = {
    HOME: {
        path: '/',
        element: <Home />,
    },
    Auth: {
        path: '/auth',
        element: <Auth />,
    },
    Shop: {
        path: '/shop',
        element: <Shop />,
    },
};
