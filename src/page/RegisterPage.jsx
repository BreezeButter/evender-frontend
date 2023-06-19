import backgroundImage from '../assets/people-2557396_1280.jpg';
import backgroundImage01 from '../assets/people-2295052_1280.jpg';
import RegisterForm from '../features/auth/components/RegisterForm';

export default function RegisterPage() {
    return (
        <div
            className="flex items-center bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex justify-between  p-0 border-0 text-xl w-2/4 bg-white rounded-lg mx-auto overflow-hidden">
                <div className="p-10">
                    <div className="flex flex-col font-bold p-4">
                        Create new account.
                    </div>
                    <div className="flex flex-col font-light text-xs p-2">
                        Already A Member?
                    </div>
                    <div className=" grid grid-cols-2">
                        <div className="p-1">
                            <RegisterForm />
                        </div>
                        <div className="p-1">
                            <RegisterForm />
                        </div>
                    </div>
                    <div className="p-1">
                        <RegisterForm />
                    </div>
                    <div className="p-1">
                        <RegisterForm />
                    </div>
                    <div className="p-3 text-center">
                        <button className="btn btn-neutral p-3 rounded-3xl">
                            Create account
                        </button>
                    </div>
                </div>

                <div
                    className=" w-3/6 bg-cover"
                    style={{ backgroundImage: `url(${backgroundImage01})` }}
                ></div>
            </div>
        </div>
    );
}
