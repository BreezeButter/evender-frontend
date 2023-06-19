import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
import Landing from '../page/Landing';
import EventPage from '../page/EventPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <EventPage />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
