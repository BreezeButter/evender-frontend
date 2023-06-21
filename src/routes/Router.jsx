import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
import Landing from '../page/Landing';
import EventPage from '../page/EventPage';
import Chat from '../components/Chat';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <EventPage />,
            },
            {
                path: '/chat',
                element: <Chat />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
