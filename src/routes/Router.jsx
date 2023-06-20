import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
// import Landing from '../page/Landing';
import RegisterPage from '../page/RegisterPage';
import LoginPage from '../page/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <RegisterPage />,
            },
            {
                path: '/login',
                element: (
                    // <RedirectIfLogin>
                    <LoginPage />
                    // </RedirectIfLogin>
                ),
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
