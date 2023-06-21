import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
import Landing from '../page/Landing';
import EventDetailPage from '../page/EventDetailPage';
import EventPage from '../page/EventPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <EventDetailPage />,
            },
            {
                path: '/eventDetail/:id',
                element: <EventDetailPage />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
