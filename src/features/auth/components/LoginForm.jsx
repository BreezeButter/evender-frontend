import InputErrorMessage from './InputErrorMessage';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import validateLogin from '../validators/validateLogin';
import { toast } from 'react-toastify';
import { login } from '../slice/authSlice';
import useForm from '../../../hooks/useForm';
import RegisterInput from './RegisterInput';

import { Link } from 'react-router-dom';

export default function LoginForm() {
    const { input, handleChangeInput, error, handleSubmitForm } = useForm(
        {
            email: '',
            password: '',
        },
        validateLogin
    );

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            await dispatch(login(data)).unwrap();
        } catch (err) {
            toast.error('invalid email');
        }
    };

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
                </div>
            </div>
        </form>
    );
}
