import RegisterInput from './RegisterInput';

export default function RegisterForm() {
    return (
        <form>
            <div>
                <div>
                    <RegisterInput
                        name="firstName"
                        placeholder="First name"
                        //value={input.firstName}
                        //onchange={handleChangeInput}
                        //isInvalid={error.firstName}
                    />
                    {/* {error.firstName && <InputErrorMessage message={error.firstName} />} */}
                </div>
            </div>
        </form>
    );
}
