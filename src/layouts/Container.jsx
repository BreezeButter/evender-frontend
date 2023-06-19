import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';

export default function Container() {
    return (
        <>
            <Headers />
            <Outlet />
            <Footer />
        </>
    );
}
