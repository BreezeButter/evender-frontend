import InputErrorMessage from "./InputErrorMessage";
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import validateLogin from "../validators/validateLogin";
import { toast } from "react-toastify";
import { login, loginGoogle } from "../slice/authSlice";
import useForm from "../../../hooks/useForm";
import RegisterInput from "./RegisterInput";
import Google from "../../../assets/Google_2015_logo.svg.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

import { Link } from "react-router-dom";

export default function LoginForm() {
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
            <div className="p-10">
                <div className="flex flex-col font-bold p-4">Login</div>
                <div className="flex flex-col font-light text-xs p-2">
                    <Link to="/">register</Link>
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

                <div className="p-3 text-center">
                    <button className="btn btn-neutral p-3 rounded-3xl">
                        Log in
                    </button>
                    <hr className="p-4 mt-4" />
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
                    <div>
                        <LoginSocialGoogle
                            client_id={
                                "825684636726-i1p3qeu0pjlh1na0nngj5fqitg0h35ou.apps.googleusercontent.com"
                            }
                            scope="openid profile email"
                            discoveryDocs="claims_supported"
                            access_type="offline"
                            onResolve={({ provider, data }) => {
                                dispatch(loginGoogle(data)).unwrap();
                            }}
                            onReject={(err) => {
                                console.log(err);
                            }}
                        >
                            <GoogleLoginButton />
                        </LoginSocialGoogle>
                    </div>
                </div>
            </div>
        </form>
    );
}
