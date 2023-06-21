import { Link } from 'react-router-dom';

export default function EditProfile() {
    return (
        <div className="flex justify-center mt-10">
            <div className="w-[65%] ">
                {/* Head */}
                <div className="mb-20 text-4xl font-semibold">
                    <h1 className="borber border-b-4 pb-2 border-lightbluecute w-60">
                        Edit Profile
                    </h1>
                </div>

                {/* User */}
                <form>
                    <div className="flex flex-row justify-between mb-28">
                        {/* Left */}
                        <div className="avatar">
                            <div className="w-72 h-72 rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                                    className=""
                                />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex justify-center w-full">
                            <div className="w-[80%] flex justify-center flex-col">
                                <div className="grid grid-rows-2 grid-flow-col gap-2">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                First Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                Gender
                                            </span>
                                        </label>
                                        <select
                                            id="gender"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        >
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                            <option value="4">
                                                Not Specified
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                Last Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                Birthday
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="First Name"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-full mt-3">
                                    <label className="label">
                                        <span className="label-text text-base text-darkbluecute font-medium">
                                            About me
                                        </span>
                                    </label>
                                    <textarea
                                        className="block rounded-lg  border mb-6 border-gray-200 font-light py-3.5 w-[654px] bg-white text-sm pl-4"
                                        rows="5"
                                        name="description"
                                        placeholder="About me..."
                                    />
                                </div>
                                <div className="flex justify-center gap-4 mt-16">
                                    <Link to="/profile">
                                        <button
                                            type="submit"
                                            className="w-32 py-2 rounded-full bg-transparent border-lightbluecute border-2 font-medium text-base text-lightbluecute"
                                        >
                                            Save
                                        </button>
                                    </Link>
                                    <Link to="/profile">
                                        <button className="w-32 py-2 rounded-full font-medium text-base text-white bg-lightbluecute border-2 border-lightbluecute hover:border-lightbluecute hover:bg-transparent hover:text-lightbluecute">
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
