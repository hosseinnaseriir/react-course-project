import Auth from 'pages/Auth';
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
};
