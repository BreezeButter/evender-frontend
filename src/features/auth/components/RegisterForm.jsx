import { useState } from 'react';
import validateRegister from '../validators/validateRegister';
import InputErrorMessage from './InputErrorMessage';
import RegisterInput from './RegisterInput';

const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function RegisterForm() {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});

    const handleChangeInput = (e) =>
        setInput({ ...input, [e.target.name]: e.target.value });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const result = validateRegister(input); // ปั้นจาก validateRegister.js ไห้ส่งแค่ error เมื่อมี
        // console.log(result);
        if (result) {
            return setError(result);
        }
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="p-10">
                <div className="flex flex-col font-bold p-4">
                    Create new account.
                </div>
                <div className="flex flex-col font-light text-xs p-2">
                    Already A Member?
                </div>
                <div className=" grid grid-cols-2">
                    <div className="p-1">
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
                        {error.firstName && (
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
                    {error.firstName && (
                        <InputErrorMessage message={error.email} />
                    )}
                </div>
                <div className="p-1">
                    <RegisterInput
                        name="password"
                        placeholder="Password"
                        value={input.password}
                        onchange={handleChangeInput}
                        isInvalid={error.password}
                    />
                    {error.firstName && (
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
                    {error.firstName && (
                        <InputErrorMessage message={error.confirmPassword} />
                    )}
                </div>
                <div className="p-3 text-center">
                    <button className="btn btn-neutral p-3 rounded-3xl">
                        Create account
                    </button>
                </div>
            </div>
        </form>
    );
}
