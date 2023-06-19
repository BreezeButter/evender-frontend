import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
// import Landing from '../page/Landing';
import RegisterPage from '../page/RegisterPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <RegisterPage />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
