import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const LoginPage = Loadable(lazy(() => import('pages/components/Login')));

// render - utilities
const DataQuery = Loadable(lazy(() => import('pages/components/DataQuery')));
const Order = Loadable(lazy(() => import('pages/components/Order')));
const Subscribe = Loadable(lazy(() => import('pages/components/Subscribe')));
const Websocket = Loadable(lazy(() => import('pages/components/WebSocketConnection')));
const Color = Loadable(lazy(() => import('pages/components/Color')));
const BackTesting = Loadable(lazy(() => import('pages/components/BackTesting')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'login',
            element: <LoginPage />
        },

        {
            path: 'color',
            element: <Color />
        },

        {
            path: 'data-query',
            element: <DataQuery />
        },
        {
            path: 'order',
            element: <Order />
        },
        {
            path: 'subscribe',
            element: <Subscribe />
        },
        {
            path: 'websocket',
            element: <Websocket />
        },
        {
            path: 'backtesting',
            element: <BackTesting />
        }
    ]
};

export default MainRoutes;
