import { MainLayout } from '@layouts';
import {
    MainPage
} from '@pages';
import { createBrowserRouter } from 'react-router-dom';

/**
 * @function mainRouter
 * @description 메인 라우터
 * @returns {Router}
 */
export const mainRouter = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <MainPage />,
            },
            {
                path: '*',
                element: <div>404</div>,
            }
        ],
    },
]);
