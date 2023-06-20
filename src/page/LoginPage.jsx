import backgroundImage from '../assets/photo-1607962837359-5e7e89f86776.avif';
import backgroundImage01 from '../assets/photo-1540539234-c14a20fb7c7b.avif';
// import RegisterForm from '../features/auth/components/RegisterForm';
import LoginForm from '../features/auth/components/LoginForm';

export default function LoginPage() {
    return (
        <div
            className="flex items-center bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex justify-between  p-0 border-0 text-xl w-2/4 bg-white rounded-lg mx-auto overflow-hidden">
                <LoginForm />

                <div
                    className=" w-3/6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage01})` }}
                ></div>
            </div>
        </div>
    );
}
