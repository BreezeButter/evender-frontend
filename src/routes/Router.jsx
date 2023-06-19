import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
import Landing from '../page/Landing';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
