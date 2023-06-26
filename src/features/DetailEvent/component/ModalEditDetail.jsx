import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateDetailEvent } from "../slice/eventDetailSlice";
import {
    getEventUserDetail,
    getUserHostEvent,
} from "../slice/eventDetailSlice";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function ModalEditDetail({ eventDetail }) {
    // console.log(eventDetail);
    // const navigate = useNavigate();
    const id = eventDetail.id;
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [file, setFile] = useState({});

    // console.log("OK---->", eventDetail.title);
    // console.log("KO---->", inputRef);

    // const src = image;

    // console.log(eventDetail);

    const handleChangeInput = async (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        if (
            e.target.name == "image1" ||
            e.target.name == "image2" ||
            e.target.name == "image3"
        ) {
            setFile({ ...file, [e.target.name]: e.target.files[0] });
        }
    };
    const updateEventDetail = async (e) => {
        try {
            e.preventDefault();
            console.log(input);
            console.log(file);

            const formData = new FormData();
            console.log(input, "Hellooooooooooooooooo");
            if (input.title) {
                formData.append("title", input.title);
            }
            if (input.description) {
                formData.append("description", input.description);
            }
            if (input.placeProvince) {
                formData.append("placeProvince", input.placeProvince);
            }
            if (input.dateStart) {
                formData.append("dateStart", input.dateStart);
            }
            if (input.dateEnd) {
                formData.append("dateEnd", input.dateEnd);
            }
            if (input.capacity) {
                formData.append("capacity", input.capacity);
            }
            if (file) {
                formData.append("image", file.image1);
                formData.append("image", file.image2);
                formData.append("image", file.image3);
            }

            await dispatch(updateDetailEvent({ formData, id })).unwrap();
            toast.success("Update Success");
            await dispatch(getEventUserDetail(id)).unwrap();
            await dispatch(getUserHostEvent(id)).unwrap();
        } catch (err) {
            toast.error("Update Error");
            console.log(err);
        }
    };

    return (
        <div>
            <input type="checkbox" id="Detail" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex flex-col gap-6">
                        <div>
                            <form
                                className="flex flex-col justify-center items-center gap-6"
                                onSubmit={updateEventDetail}
                            >
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="text"
                                    value={input.title}
                                    placeholder="title"
                                    onChange={handleChangeInput}
                                    name="title"
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="text"
                                    placeholder="description"
                                    value={input.description}
                                    onChange={handleChangeInput}
                                    name="description"
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="text"
                                    placeholder="lplaceProvince"
                                    value={input.placeProvince}
                                    onChange={handleChangeInput}
                                    name="placeProvince"
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="datetime-local"
                                    placeholder="dateStart"
                                    value={input.dateStart}
                                    onChange={handleChangeInput}
                                    name="dateStart"
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="datetime-local"
                                    placeholder="dateEnd"
                                    value={input.dateEnd}
                                    onChange={handleChangeInput}
                                    name="dateEnd"
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="number"
                                    placeholder="Capacity"
                                    value={input.capacity}
                                    onChange={handleChangeInput}
                                    name="capacity"
                                />
                                {/* <div className="w-[400px] rounded-xl">
                                    <img src={src || defaultImage} />
                                </div> */}
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="file"
                                    placeholder="Photo"
                                    value={input.image}
                                    onChange={handleChangeInput}
                                    name="image1"
                                    ref={inputRef}
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="file"
                                    placeholder="Photo"
                                    value={input.image}
                                    onChange={handleChangeInput}
                                    name="image2"
                                    ref={inputRef}
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="file"
                                    placeholder="Photo"
                                    value={input.image}
                                    onChange={handleChangeInput}
                                    name="image3"
                                />
                                <div className="flex flex-row justify-center gap-6">
                                    <button
                                        type="submit"
                                        className="w-[6rem] h-[2.5rem] bg-[#004DFF] opacity-90 rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#004DFF] hover:border-2 hover:border-[#004DFF]"
                                    // onClick={navigate("/")}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        to="/evender/eventdetail/"
                                        role="button"
                                        className=" w-[6rem] h-[2.5rem] bg-[#ff5050] opacity-90 rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#ff5050] hover:border-2 hover:border-[#ff5050]"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="Detail"></label>
            </div>
        </div>
    );
}
