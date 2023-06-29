import React, { useRef } from "react";
import { useState } from "react";
//import { eventManager } from "react-toastify/dist/core";
import { getAccessToken } from "../../../utils/localstorage";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

export default function CreateNewEventAdmin() {
    const navigate = useNavigate();
    const modalRefCreate = useRef(null);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);

    const [addeventadminInput, setAddeventadminInput] = useState({
        title: "",
        description: "",
        dateStart: "",
        dateEnd: "",
        capacity: "",
        latitude: "",
        longitude: "",
        eventCategoryId: "",
        placeName: "",
        placeProvince: "",
        placeContry: "",
    });
    const handleInput = (event) => {
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        setAddeventadminInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    console.log(file1);
    console.log(file2);
    console.log(file3);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(addeventadminInput);
        const formData = new FormData();
        formData.append("title", addeventadminInput.title);
        formData.append("description", addeventadminInput.description);
        formData.append("placeName", addeventadminInput.placeName);
        formData.append("placeProvince", addeventadminInput.placeProvince);
        formData.append("placeContry", addeventadminInput.placeContry);
        formData.append("latitude", addeventadminInput.latitude);
        formData.append("longitude", addeventadminInput.longitude);
        formData.append("dateStart", addeventadminInput.dateStart);
        formData.append("dateEnd", addeventadminInput.dateEnd);
        formData.append("capacity", addeventadminInput.capacity);
        formData.append("eventCategoryId", addeventadminInput.eventCategoryId);
        formData.append("image", file1);
        formData.append("image", file2);
        formData.append("image", file3);
        try {
            const response = await axios.post(
                "/admin/adminCreateEvent",
                formData
            );
            console.log(response.data);
            navigate("/admin/eventmanagement");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="border border-darkbluecute rounded-2xl px-7 py-8 flex flex-col ">
                <h1 className="font-medium text-xl text-darkbluecute mb-4">
                    Create event!
                </h1>
                <p className="max-w-[350px] font-light text-base mb-10 text-darkbluecute">
                    Connect with people in your area who are curious about the
                    things you love.
                </p>
                {/* button-create-new-event */}
                <div>
                    {/* You can open the modal using ID.showModal() method */}
                    <button
                        className="btn btn-outline btn-success"
                        onClick={() => modalRefCreate.current.showModal()}
                    >
                        Create New Event
                    </button>
                    <dialog
                        id="my_modal_3"
                        className="modal"
                        ref={modalRefCreate}
                    >
                        <form
                            method="dialog"
                            className="modal-box"
                            onSubmit={handleSubmit}
                        >
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                            <h3 className="font-bold text-lg">Please Create</h3>
                            <p className="py-4">Please Input data</p>
                            <div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            1.Event Title
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Event name."
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="title"
                                        value={addeventadminInput.title}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            2.Event Description
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Description about event."
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="description"
                                        value={addeventadminInput.description}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            3.Name Location
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="etc.province"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="placeName"
                                        value={addeventadminInput.placeName}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            4.Province Event Location
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="etc.province"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="placeProvince"
                                        value={addeventadminInput.placeProvince}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            5.Contry Event Location
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="etc.province"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="placeContry"
                                        value={addeventadminInput.placeContry}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            6.latitude Event
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Etc.13.7063"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="latitude"
                                        value={addeventadminInput.latitude}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            7.longitude Event
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Etc.100.4597"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="longitude"
                                        value={addeventadminInput.longitude}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            8.Date Start
                                        </span>
                                    </label>
                                    <input
                                        type="datetime-local"
                                        placeholder="BC : xxxx-mm-dd"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="dateStart"
                                        value={addeventadminInput.dateStart}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            9.Date End
                                        </span>
                                    </label>
                                    <input
                                        type="datetime-local"
                                        placeholder="BC : xxxx-mm-dd"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="dateEnd"
                                        value={addeventadminInput.dateEnd}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            10.Capacity
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Amount Poppulation"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="capacity"
                                        value={addeventadminInput.capacity}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            11.eventCategoryId
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="eventCategoryId"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        name="eventCategoryId"
                                        value={
                                            addeventadminInput.eventCategoryId
                                        }
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            12.Image
                                        </span>
                                    </label>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-success w-full max-w-xs"
                                        name="image1"
                                        value={addeventadminInput.image1}
                                        onChange={(e) => {
                                            if (e.target.files[0]) {
                                                setFile1(e.target.files[0]);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            13.Image
                                        </span>
                                    </label>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-success w-full max-w-xs"
                                        name="image2"
                                        value={addeventadminInput.image2}
                                        onChange={(e) => {
                                            if (e.target.files[0]) {
                                                setFile2(e.target.files[0]);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            14.Image
                                        </span>
                                    </label>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-success w-full max-w-xs"
                                        name="image3"
                                        value={addeventadminInput.image3}
                                        onChange={(e) => {
                                            if (e.target.files[0]) {
                                                setFile3(e.target.files[0]);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="btn btn-outline btn-success ">
                                    Create
                                </button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
}
