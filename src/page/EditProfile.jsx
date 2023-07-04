import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileUser } from "../features/ProfileUser/slice/profileUserSlice";
import { Label } from "../components/ui/label";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

import { fetchMe } from "../features/auth/slice/authSlice";
import { Textarea } from "../components/ui/textarea";
import { AddPhotoIcon } from "../icons";
import { Input } from "../components/ui/input";

// import { updateProfileImage as updateProfile } from "../features/ProfileUser/slice/profileUserSlice";
// import * as userService from "../api/profileUserApi";

export default function EditProfile() {

    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const user = useSelector((state) => state.auth.user);

    const navigate = useNavigate();


    // console.log(loading, "loading");

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
            console.log(input, image, 'GGGGGGGGWP');
            const formData = new FormData();
            for (let key in input) {
                formData.append(key, input[key]);
            }
            if (image) {
                formData.append("image", image);
            }

            await dispatch(editProfileUser(formData)).unwrap();
            await dispatch(fetchMe()).unwrap()
            await navigate(`/evender/profile/${user?.id}`).unwrap();
            toast.success("Update Success")
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect(() => {
    //     dispatch(fetchMe());
    // }, [user]);

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
                    <h1 className="borber border-b-4 pb-2 border-lightbluecute w-60 text-darkgraycute">
                        Edit Profile
                    </h1>
                </div>

                {/* User */}
                <form onSubmit={hdlUpdate}>
                    <div className="flex flex-row justify-between mb-28">
                        {/* Left */}

                        <div className="w-[50%] flex  items-start flex-col relative">
                            <img
                                src={showImage}
                                // onChange={(e) =>
                                //     setInput({
                                //         ...input,
                                //         image: e.target.value,
                                //     })
                                // }
                                className="w-80 h-80 object-cover rounded-full border border-gray-200 "
                            />
                            <Label htmlFor="picture" className="">
                                <AddPhotoIcon className="absolute bottom-[122px] right-28 border border-gray-200 shadow-sm rounded-full p-3 bg-white hover:bg-gray-100 cursor-pointer" />
                            </Label>
                            <input
                                type="file"
                                id="picture"
                                // className="w-72 mt-8 opacity-75"
                                className="hidden w-80"
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
                                <div className="grid grid-rows-2 grid-flow-col gap-3">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                First Name
                                            </span>
                                        </label>
                                        <Input
                                            className="text-darkgraycute border-darkbluecute placeholder:text-gray-400 "
                                            type="text"
                                            placeholder="First Name"
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
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-darkgraycute border-darkbluecute"
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
                                        <Input
                                            className="text-darkgraycute border-darkbluecute placeholder:text-gray-400 "
                                            type="text"
                                            placeholder="Last Name"
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
                                        <Input
                                            className="text-darkgraycute border-darkbluecute placeholder:text-gray-400 "
                                            type="date"
                                            placeholder="Birthday"
                                            value={input?.bdate}
                                            onChange={(e) => {
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
                                            Bio
                                        </span>
                                    </label>
                                    <Textarea
                                        className="resize-none text-darkgraycute border-darkbluecute placeholder:text-gray-400 "
                                        rows="5"
                                        name="description"
                                        placeholder="Tell us a little bit about yourself..."
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
                                    <Link to={`/evender/profile/${user?.id}`}>
                                        <button
                                            type="submit"
                                            className="w-32 py-2 rounded-full bg-transparent border-lightbluecute border-2 font-medium text-base text-lightbluecute"
                                        >
                                            Cancel
                                        </button>
                                    </Link>

                                    <button className="w-32 py-2 rounded-full font-medium text-base text-white bg-lightbluecute border-2 border-lightbluecute hover:border-lightbluecute hover:bg-transparent hover:text-lightbluecute">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
