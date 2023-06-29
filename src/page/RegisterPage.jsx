import backgroundImage from "../assets/backgroundlogin.jpg";
import backgroundImage01 from "../assets/backgroundlogin2.jpg";
import RegisterForm from "../features/auth/components/RegisterForm";

export default function RegisterPage() {
    return (
        <>
            <div
                className="flex items-center bg-cover bg-center h-screen relative"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h1 className="absolute right-10 bottom-8 text-lightbluecute font-semibold text-2xl shadow-lg opacity-90">
                    Evender.
                </h1>
                <div className="flex justify-between  p-0 border-0  text-xl w-[50%] bg-white rounded-2xl mx-auto overflow-hidden shadow-xl">
                    <div className="w-full">
                        <RegisterForm />
                    </div>
                    <div
                        className="w-full bg-cover bg-center flex items-end"
                        style={{ backgroundImage: `url(${backgroundImage01})` }}
                    ></div>
                </div>
            </div>
        </>
    );
}
