import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from '../layouts/Container';
// import Landing from '../page/Landing';
// import EventPage from '../page/EventPage';
// import { Search } from 'react-router-dom';
import SearchPage from '../page/SearchPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container />,
        children: [
            {
                path: '/',
                element: <SearchPage />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
