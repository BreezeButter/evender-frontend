import InputErrorMessage from "./InputErrorMessage";
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import validateLogin from "../validators/validateLogin";
import { toast } from "react-toastify";
import { login, loginGoogle } from "../slice/authSlice";
import useForm from "../../../hooks/useForm";
import RegisterInput from "./RegisterInput";
// import Google from "../../../assets/Google_2015_logo.svg.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { GoogleIcon, LeftIcon2 } from "../../../icons";

export default function LoginForm() {
    const navigate = useNavigate();
    const { input, handleChangeInput, error, handleSubmitForm } = useForm(
        {
            email: "",
            password: "",
        },
        validateLogin
    );

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            await dispatch(login(data)).unwrap();
            toast.success("Login success");
            navigate('/');

        } catch (err) {
            toast.error("invalid email");
        }
    };
    // const onSubmitGoogle = async (googleData) => {
    //     try {
    //         console.log(googleData);
    //         // await dispatch(login()).unwrap();
    //     } catch (err) {
    //         // toast.error("invalid email");
    //     }
    // };

    return (
        <form onSubmit={handleSubmitForm(onSubmit)}>
            <div className="pt-20 pb-12 px-14">
                <div className="flex flex-row font-semibold text-3xl text-darkbluecute mb-8 pl-1">
                    Login
                    <p className=" text-redcute">.</p>
                </div>

                <div className="p-1 mb-1">
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
                <div className="flex flex-row font-light text-xs p-2 mt-0.5  ">
                    <p className="mr-2 font-semibold text-xs text-gray-400 ">
                        Don't have an account?
                    </p>
                    <Link
                        to="/register"
                        className="text-lightbluecute font-semibold hover:underline"
                    >
                        Sign up
                    </Link>
                </div>

                <div className="p-1 text-center mt-8">
                    <div className="border-t border-gray-300 pt-8">
                        <button className="bg-darkgraycute hover:bg-lightbluecute text-white text-sm py-3 font-semibold rounded-full w-full">
                            Login
                        </button>
                    </div>
                    {/* <div
                        className="bg-white border border-black w-4/5 h-10 rounded-full"
                        role="button"
                    >
                        <img
                            src={Google}
                            alt=""
                            className="bg-cover p-4  h-10 m-auto"
                        />
                    </div> */}
                    {/* <label htmlFor="googlebtn" role={"button"}>
                        Google login
                    </label> */}

                    <div className="mt-3.5 mb-8">
                        <LoginSocialGoogle
                            client_id={
                                "825684636726-i1p3qeu0pjlh1na0nngj5fqitg0h35ou.apps.googleusercontent.com"
                            }
                            scope="openid profile email"
                            discoveryDocs="claims_supported"
                            access_type="offline"
                            onResolve={({ provider, data }) => {
                                dispatch(loginGoogle(data)).unwrap();
                                navigate('/');
                                toast.success("Login success");
                            }}
                            onReject={(err) => {
                                console.log(err);
                            }}
                        >
                            <div
                                role={"button"}
                                className="text-darkgraycute w-full hover:border-lightbluecute  rounded-full bg-white border border-darkgraycute hover:border hover:text-lightbluecute font-semibold text-sm px-2 py-2 inline-flex items-center justify-between "
                            >
                                <div>
                                    <GoogleIcon />
                                </div>
                                <p className="-ml-6">Continue with Google</p>
                                <p></p>
                            </div>
                        </LoginSocialGoogle>
                    </div>
                    <Link to="/">
                        <p className="text-darkgraycute text-xs font-light cursor-pointer hover:underline flex items-center">
                            <LeftIcon2 className="mr1" />
                            back
                        </p>
                    </Link>
                </div>
            </div>
        </form>
    );
}
