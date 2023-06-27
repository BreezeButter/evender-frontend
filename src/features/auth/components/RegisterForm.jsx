import { useState } from "react";
import validateRegister from "../validators/validateRegister";
import InputErrorMessage from "./InputErrorMessage";
import RegisterInput from "./RegisterInput";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerAsync } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LeftIcon2 } from "../../../icons";

// import useAuth from

const initialInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function RegisterForm() {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeInput = (e) =>
        setInput({ ...input, [e.target.name]: e.target.value });

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const result = validateRegister(input); // ปั้นจาก validateRegister.js ไห้ส่งแค่ error เมื่อมี

            if (result) {
                return setError(result);
            }
            setError({});
            await dispatch(registerAsync(input)).unwrap(); // รอทำเส็จค่อยทำข้างล่างต่อ
            navigate("/");
            toast.success("register successfully");
        } catch (err) {
            toast.error("Error");
        }
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="pt-20 pb-12 px-14">
                <div className="flex flex-row font-semibold text-3xl text-darkbluecute pl-1">
                    Create new account
                    <p className=" text-redcute">.</p>
                </div>

                <div className="flex flex-row font-light text-xs p-2 mt-0.5">
                    <p className="mr-2 font-semibold text-xs text-gray-400 ">
                        Already have an account?
                    </p>
                    <Link
                        to="/login"
                        className="text-lightbluecute font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </div>

                <div className=" grid grid-cols-2 mt-7">
                    <div className="p-1 mb-1">
                        <RegisterInput
                            name="firstName"
                            placeholder="First name"
                            value={input.firstName}
                            onchange={handleChangeInput}
                            isInvalid={error.firstName} //prop นี้เอามารับ error ถ้ามีมาจาก onSubmit
                        />
                        {error.firstName && (
                            <InputErrorMessage message={error.firstName} />
                        )}
                    </div>
                    <div className="p-1">
                        <RegisterInput
                            name="lastName"
                            placeholder="Last name"
                            value={input.lastName}
                            onchange={handleChangeInput}
                            isInvalid={error.lastName}
                        />
                        {error.lastName && (
                            <InputErrorMessage message={error.lastName} />
                        )}
                    </div>
                </div>
                <div className="p-1">
                    <RegisterInput
                        name="email"
                        placeholder="Email"
                        value={input.email}
                        onchange={handleChangeInput}
                        isInvalid={error.email}
                    />
                    {error.email && <InputErrorMessage message={error.email} />}
                </div>
                <div className="p-1">
                    <RegisterInput
                        name="password"
                        placeholder="Password"
                        value={input.password}
                        onchange={handleChangeInput}
                        isInvalid={error.password}
                    />
                    {error.password && (
                        <InputErrorMessage message={error.password} />
                    )}
                </div>
                <div className="p-1">
                    <RegisterInput
                        name="confirmPassword"
                        placeholder="Conform password"
                        value={input.confirmPassword}
                        onchange={handleChangeInput}
                        isInvalid={error.confirmPassword}
                    />
                    {error.confirmPassword && (
                        <InputErrorMessage message={error.confirmPassword} />
                    )}
                </div>

                <div className="p-1 text-center mt-9 mb-8">
                    <button className="bg-darkgraycute hover:bg-lightbluecute text-white text-sm py-3 font-semibold rounded-full w-full">
                        Create account
                    </button>
                </div>
                <Link to="/login">
                    <p className="text-darkgraycute text-xs font-light cursor-pointer hover:underline flex items-center">
                        <LeftIcon2 className="mr1" />
                        back
                    </p>
                </Link>
            </div>
        </form>
    );
}
