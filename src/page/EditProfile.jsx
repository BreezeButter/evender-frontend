import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileUser } from "../features/ProfileUser/slice/profileUserSlice";
// import { toast } from "react-toastify";
import { fetchMe } from "../features/auth/slice/authSlice";
// import { updateProfileImage as updateProfile } from "../features/ProfileUser/slice/profileUserSlice";
// import * as userService from "../api/profileUserApi";

export default function EditProfile() {
    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const user = useSelector((state) => state.auth.user);

    console.log(user);

    const initialInput = {
        firstName: "",
        lastName: "",
        gender: "",
        bdate: "",
        aboutMe: "",
    };
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input, setInput] = useState(initialInput);

    const hdlUpdate = async (e) => {
        try {
            e.preventDefault();
            console.log(input, image);
            const formData = new FormData();
            for (let key in input) {
                formData.append(key, input[key]);
            }
            if (image) {
                formData.append("image", image);
            }

            dispatch(editProfileUser(formData));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        dispatch(fetchMe());
    }, []);
    useEffect(() => {
        console.log(user);
        if (user) {
            setInput({
                firstName: user?.firstName,
                lastName: user?.lastName,
                gender: user?.gender,
                bdate: user?.bdate,
                aboutMe: user?.aboutMe,
            });
            setShowImage(user?.image);
        }
    }, [user]);

    // useEffect(() => {
    //     setInput(user);
    // }, [user]);

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
                <form onSubmit={hdlUpdate}>
                    <div className="flex flex-row justify-between mb-28">
                        {/* Left */}

                        <div className="w-72 h-72 rounded-full">
                            <img
                                src={showImage}
                                // onChange={(e) =>
                                //     setInput({
                                //         ...input,
                                //         image: e.target.value,
                                //     })
                                // }
                                className="w-72 h-72 object-cover rounded-full border border-gray-300 "
                            />
                            <input
                                type="file"
                                className="w-72 mt-8 opacity-75"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                    setShowImage(
                                        URL.createObjectURL(e.target.files[0])
                                    );
                                }}
                            />
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
                                            value={input?.firstName}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    firstName: e.target.value,
                                                })
                                            }
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
                                            value={input?.gender}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    gender: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                                Female
                                            </option>
                                            <option value="Other">Other</option>
                                            <option value="Not Specified">
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
                                            value={input?.lastName}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    lastName: e.target.value,
                                                })
                                            }
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
                                            placeholder="Birthday"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                            value={input?.bdate}
                                            onChange={(e) => {
                                                console.log(e.target.value);
                                                return setInput({
                                                    ...input,
                                                    bdate: e.target.value,
                                                });
                                            }}
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
                                        value={input?.aboutMe}
                                        onChange={(e) =>
                                            setInput({
                                                ...input,
                                                aboutMe: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="flex justify-center gap-4 mt-16">
                                    <button
                                        // onClick={hdlUpdate}
                                        type="submit"
                                        className="w-32 py-2 rounded-full bg-transparent border-lightbluecute border-2 font-medium text-base text-lightbluecute"
                                    >
                                        Save
                                    </button>

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
