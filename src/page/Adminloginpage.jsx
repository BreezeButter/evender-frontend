// import { Datachartpolar } from '../components/Chart/Datachartpolar';
// import { Datachartverticalbar } from '../components/Chart/Datachartverticalbar';
import { useNavigate } from "react-router-dom";

export default function Adminlogin() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 text-black shadow-2xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Welcome to Evender</h2>
                    <p>
                        It's not about how much we lost. It's about how much we
                        have left.
                    </p>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Username Admin
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="username admin"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-neutral"
                            onClick={() => navigate("/")}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
