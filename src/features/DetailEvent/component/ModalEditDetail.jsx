import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateDetailEvent } from "../slice/eventDetailSlice";
import {
    getEventUserDetail,
    getUserHostEvent,
} from "../slice/eventDetailSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AutoCompleteComponent from "../../Event/component/AutoCompleteComponent";
import Maps from "../../Event/component/Maps";
// import { Link } from "react-router-dom";

export default function ModalEditDetail({ eventDetail }) {
    // console.log(eventDetail);
    // const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    // console.log(showImage);
    const id = eventDetail.id;
    const inputRef = useRef();
    const dispatch = useDispatch();
    const initialInput = {
        title: "",
        description: "",
        location: "",
        dateStart: "",
        dateEnd: "",
        capacity: "",
        // image1: "",
        // image2: "",
        // image3: "",
    };
    const [input, setInput] = useState(initialInput);
    // console.log(input);
    const [file, setFile] = useState({});

    // console.log("OK---->", eventDetail.title);
    // console.log("KO---->", inputRef);

    // const src = image;

    // console.log(eventDetail);

    const handleChangeInput = async (e) => {
        // console.log(e.target.value);
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

            const formData = new FormData();
            console.log(input, "Hellooooooooooooooooo");
            if (input.title) {
                formData.append("title", input.title);
            }
            if (input.description) {
                formData.append("description", input.description);
            }
            // if (input.location) {
            //     formData.append("location", input.location);
            // }
            if (input.dateStart) {
                formData.append("dateStart", input.dateStart);
            }
            if (input.dateEnd) {
                formData.append("dateEnd", input.dateEnd);
            }
            if (input.capacity) {
                formData.append("capacity", input.capacity);
            }
            if (selected.lat) {
                formData.append("lat", selected.lat);
            }
            if (selected.lng) {
                formData.append("lng", selected.lng);
            }
            if (selected.placeId) {
                formData.append("placeId", selected.placeId);
            }
            if (selected.placeName) {
                formData.append("placeName", selected.placeName);
            }
            if (selected.placeCountry) {
                formData.append("placeCountry", selected.placeCountry);
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

    useEffect(() => {
        if (eventDetail) {
            setInput({
                title: eventDetail?.title,
                description: eventDetail?.description,
                location: eventDetail?.location,
                dateStart: eventDetail?.dateStart?.slice(0, 16),
                dateEnd: eventDetail?.dateEnd?.slice(0, 16),
                capacity: eventDetail?.capacity,

                // image1: eventDetail?.image1,
                // image2: eventDetail?.image2,
                // image3: eventDetail?.image3,
            });
        }
        // setFile({ image1: eventDetail.image1 });
    }, [eventDetail]);

    // console.log(eventDetail);

    const { latitude, longitude } = eventDetail;

    const position = {
        lat: +latitude,
        lng: +longitude,
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
                                {/* <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="text"
                                    placeholder="location"
                                    value={input.location}
                                    onChange={handleChangeInput}
                                    name="location"
                                /> */}
                                <div>
                                    <AutoCompleteComponent
                                        setSelected={setSelected}
                                    />

                                    {/* <Map /> */}
                                </div>
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
                                <img
                                    src={
                                        file.image1
                                            ? URL.createObjectURL(file.image1)
                                            : eventDetail.image1
                                    }
                                    className="w-72 h-72 object-cover rounded-full border border-gray-300 "
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="file"
                                    placeholder="Photo"
                                    value={input.image1}
                                    onChange={handleChangeInput}
                                    name="image1"
                                    ref={inputRef}
                                />
                                {/* <img
                                    src={URL.createObjectURL(file?.image2)}
                                    className="w-72 h-72 object-cover rounded-full border border-gray-300 "
                                /> */}
                                <img
                                    src={
                                        file.image2
                                            ? URL.createObjectURL(file.image2)
                                            : eventDetail.image2
                                    }
                                    className="w-72 h-72 object-cover rounded-full border border-gray-300 "
                                />
                                <Maps
                                    selected={position ? position : selected}
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="file"
                                    placeholder="Photo"
                                    value={input.image2}
                                    onChange={handleChangeInput}
                                    name="image2"
                                    ref={inputRef}
                                />
                                <img
                                    src={
                                        file.image3
                                            ? URL.createObjectURL(file.image3)
                                            : eventDetail.image3
                                    }
                                    className="w-72 h-72 object-cover rounded-full border border-gray-300 "
                                />
                                <input
                                    className="border-2 border-gray-400 rounded-md p-2 w-[20rem]"
                                    type="file"
                                    placeholder="Photo"
                                    value={input.image3}
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
