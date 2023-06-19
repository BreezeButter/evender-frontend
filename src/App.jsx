import { ToastContainer } from 'react-toastify';
import Router from './routes/Router';

function App() {
    return (
        <div>
            <Router />
            <ToastContainer
                position="bottom-center"
                theme="dark"
                autoClose={3000}
            />
        </div>
    );
}

export default App;
