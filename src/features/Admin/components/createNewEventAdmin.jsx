// import React, { useRef } from "react";
// import { useState } from "react";
// import { getAccessToken } from "../../../utils/localstorage";
// import { useNavigate } from "react-router-dom";
// import axios from "../../../api/axios";

// export default function CreateNewEventAdmin() {
//     const navigate = useNavigate();
//     const modalRefCreate = useRef(null);
//     const [file1, setFile1] = useState(null);
//     const [file2, setFile2] = useState(null);
//     const [file3, setFile3] = useState(null);

//     const [addeventadminInput, setAddeventadminInput] = useState({
//         title: "",
//         description: "",
//         dateStart: "",
//         dateEnd: "",
//         capacity: "",
//         latitude: "",
//         longitude: "",
//         eventCategoryId: "",
//         placeName: "",
//         placeProvince: "",
//         placeContry: "",
//     });
//     const handleInput = (event) => {
//         console.log(event);
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setAddeventadminInput((prev) => ({
//             ...prev,
//             [event.target.name]: event.target.value,
//         }));
//     };
//     console.log(file1);
//     console.log(file2);
//     console.log(file3);
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log(addeventadminInput);
//         const formData = new FormData();
//         formData.append("title", addeventadminInput.title);
//         formData.append("description", addeventadminInput.description);
//         formData.append("placeName", addeventadminInput.placeName);
//         formData.append("placeProvince", addeventadminInput.placeProvince);
//         formData.append("placeContry", addeventadminInput.placeContry);
//         formData.append("latitude", addeventadminInput.latitude);
//         formData.append("longitude", addeventadminInput.longitude);
//         formData.append("dateStart", addeventadminInput.dateStart);
//         formData.append("dateEnd", addeventadminInput.dateEnd);
//         formData.append("capacity", addeventadminInput.capacity);
//         formData.append("eventCategoryId", addeventadminInput.eventCategoryId);
//         formData.append("image", file1);
//         formData.append("image", file2);
//         formData.append("image", file3);
//         try {
//             const response = await axios.post(
//                 "/admin/adminCreateEvent",
//                 formData
//             );
//             console.log(response.data);
//             navigate("/admin/eventmanagement");
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <div>
//             <div className="border border-darkbluecute rounded-2xl px-7 py-8 flex flex-col ">
//                 <h1 className="font-medium text-xl text-darkbluecute mb-4">
//                     Create event!
//                 </h1>
//                 <p className="max-w-[350px] font-light text-base mb-10 text-darkbluecute">
//                     Connect with people in your area who are curious about the
//                     things you love.
//                 </p>
//                 {/* button-create-new-event */}
//                 <div>
//                     {/* You can open the modal using ID.showModal() method */}
//                     <button
//                         className="btn btn-outline btn-success"
//                         onClick={() => modalRefCreate.current.showModal()}
//                     >
//                         Create New Event
//                     </button>
//                     <dialog
//                         id="my_modal_3"
//                         className="modal"
//                         ref={modalRefCreate}
//                     >
//                         <form
//                             method="dialog"
//                             className="modal-box"
//                             onSubmit={handleSubmit}
//                         >
//                             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                                 ✕
//                             </button>
//                             <h3 className="font-bold text-lg">Please Create</h3>
//                             <p className="py-4">Please Input data</p>
//                             <div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             1.Event Title
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Event name."
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="title"
//                                         value={addeventadminInput.title}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             2.Event Description
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Description about event."
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="description"
//                                         value={addeventadminInput.description}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             3.Name Location
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="etc.province"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="placeName"
//                                         value={addeventadminInput.placeName}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             4.Province Event Location
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="etc.province"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="placeProvince"
//                                         value={addeventadminInput.placeProvince}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             5.Contry Event Location
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="etc.province"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="placeContry"
//                                         value={addeventadminInput.placeContry}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             6.latitude Event
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Etc.13.7063"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="latitude"
//                                         value={addeventadminInput.latitude}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             7.longitude Event
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Etc.100.4597"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="longitude"
//                                         value={addeventadminInput.longitude}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             8.Date Start
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="datetime-local"
//                                         placeholder="BC : xxxx-mm-dd"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="dateStart"
//                                         value={addeventadminInput.dateStart}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             9.Date End
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="datetime-local"
//                                         placeholder="BC : xxxx-mm-dd"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="dateEnd"
//                                         value={addeventadminInput.dateEnd}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             10.Capacity
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Amount Poppulation"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="capacity"
//                                         value={addeventadminInput.capacity}
//                                         onChange={handleInput}
//                                     />
//                                 </div>

//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             11.eventCategoryId
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="eventCategoryId"
//                                         className="input input-bordered input-success w-full max-w-xs"
//                                         name="eventCategoryId"
//                                         value={
//                                             addeventadminInput.eventCategoryId
//                                         }
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             12.Image
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="file"
//                                         className="file-input file-input-bordered file-input-success w-full max-w-xs"
//                                         name="image1"
//                                         value={addeventadminInput.image1}
//                                         onChange={(e) => {
//                                             if (e.target.files[0]) {
//                                                 setFile1(e.target.files[0]);
//                                             }
//                                         }}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             13.Image
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="file"
//                                         className="file-input file-input-bordered file-input-success w-full max-w-xs"
//                                         name="image2"
//                                         value={addeventadminInput.image2}
//                                         onChange={(e) => {
//                                             if (e.target.files[0]) {
//                                                 setFile2(e.target.files[0]);
//                                             }
//                                         }}
//                                     />
//                                 </div>
//                                 <div className="form-control w-full max-w-xs">
//                                     <label className="label">
//                                         <span className="label-text">
//                                             14.Image
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="file"
//                                         className="file-input file-input-bordered file-input-success w-full max-w-xs"
//                                         name="image3"
//                                         value={addeventadminInput.image3}
//                                         onChange={(e) => {
//                                             if (e.target.files[0]) {
//                                                 setFile3(e.target.files[0]);
//                                             }
//                                         }}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex justify-center mt-4">
//                                 <button className="btn btn-outline btn-success ">
//                                     Create
//                                 </button>
//                             </div>
//                         </form>
//                     </dialog>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useRef } from "react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import Input2 from "../../Event/component/Input";
import AutoCompleteComponent from "../../Event/component/AutoCompleteComponent";
import Maps from "../../Event/component/Maps";
import { Input } from "../../../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { DownIcon } from "../../../icons";

export default function CreateNewEventAdmin() {
    const navigate = useNavigate();
    const loading = useSelector((state) => state.loading);
    // const [input, setInput] = useState(initialState);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);

    const [selected, setSelected] = useState(null);
    const [addeventadminInput, setAddeventadminInput] = useState({
        title: "",
        description: "",
        dateStart: "",
        dateEnd: "",
        capacity: "0",
        latitude: "",
        longitude: "",
        eventCategoryId: "1",
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
    console.log(
        selected,
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    console.log(file1);
    console.log(file2);
    console.log(file3);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(addeventadminInput);
        const formData = new FormData();
        formData.append("title", addeventadminInput.title);
        formData.append("description", addeventadminInput.description);
        formData.append("placeName", selected.placeName);
        formData.append("placeProvince", selected.placeProvince);
        formData.append("placeContry", selected.placeContry);
        formData.append("latitude", selected.lat);
        formData.append("longitude", selected.lng);
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
    const handleOnClickIncrease = () => {
        setAddeventadminInput({
            ...addeventadminInput,
            capacity: +addeventadminInput.capacity + 1,
        });
    };

    const handleOnClickDecrease = () => {
        if (addeventadminInput.capacity > 0) {
            setAddeventadminInput({
                ...addeventadminInput,
                capacity: +addeventadminInput.capacity - 1,
            });
        }
    };
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="btn bg-darkbluecute text-white rounded-full w-full h-12 self-center hover:text-darkbluecute flex justify-center text-center"
                    >
                        Create event
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[870px] bg-white rounded-3xl border border-gray-300 ">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-medium leading-6 text-darkbluecute border-b border-gray-400 pb-5 mb-2.5 mx-5 mt-5">
                            Create your event
                        </DialogTitle>
                    </DialogHeader>
                    {loading ? (
                        <div className="flex justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : (
                        <>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col "
                            >
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                                <div className="flex flex-row gap-12 justify-center">
                                    <div className="w-[50%] gap-20">
                                        <Input2
                                            type="text"
                                            placeholder="Title."
                                            className="input input-bordered input-success w-full max-w-xs"
                                            name="title"
                                            title="Title"
                                            value={addeventadminInput.title}
                                            onChange={handleInput}
                                        />

                                        <Input2
                                            type="text"
                                            placeholder="Description about event."
                                            className="input input-bordered input-success w-full max-w-xs"
                                            name="description"
                                            title="description"
                                            value={
                                                addeventadminInput.description
                                            }
                                            onChange={handleInput}
                                        />

                                        <div className="mb-3">
                                            <p className="font-medium text-sm text-darkbluecute -mb-1">
                                                Location
                                            </p>
                                            <AutoCompleteComponent
                                                setSelected={setSelected}
                                            />

                                            {/* <Map /> */}
                                        </div>
                                        <div className="grid grid-cols-2 gap-2.5">
                                            <div className="relative">
                                                <DownIcon className="absolute right-0.5 top-11 -z-50 " />
                                                <Input2
                                                    type="datetime-local"
                                                    placeholder="BC : xxxx-mm-dd"
                                                    name="dateStart"
                                                    title="Date start"
                                                    value={
                                                        addeventadminInput.dateStart
                                                    }
                                                    onChange={handleInput}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Input2
                                                    type="datetime-local"
                                                    placeholder="BC : xxxx-mm-dd"
                                                    name="dateEnd"
                                                    title="Date end"
                                                    value={
                                                        addeventadminInput.dateEnd
                                                    }
                                                    onChange={handleInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2.5">
                                            <div>
                                                <p className="font-medium text-sm text-darkbluecute">
                                                    Capacity:
                                                </p>
                                                <div className="flex items-center  w-full text-darkbluecute  rounded-lg mt-1 bg-white">
                                                    <button
                                                        type="button"
                                                        className="w-36 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                                        onClick={
                                                            handleOnClickDecrease
                                                        }
                                                    >
                                                        &minus;
                                                    </button>
                                                    <input
                                                        type="number"
                                                        placeholder="Amount Poppulation"
                                                        className="h-10 w-full border-transparent text-center bg-transparent text-graynav [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                        name="capacity"
                                                        title="Capacity"
                                                        value={
                                                            addeventadminInput.capacity
                                                        }
                                                        onChange={handleInput}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="w-36 h-10 leading-10  text-darkbluecute transition hover:opacity-75"
                                                        onClick={
                                                            handleOnClickIncrease
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-medium text-sm text-darkbluecute">
                                                    Category
                                                </h1>
                                                <select
                                                    type="text"
                                                    placeholder="eventCategoryId"
                                                    className="block rounded-lg border border-gray-400 font-normal py-2.5 focus:ring-1 w-full bg-white text-sm pl-4 mt-1 text-darkgraycute"
                                                    name="eventCategoryId"
                                                    value={
                                                        addeventadminInput.eventCategoryId
                                                    }
                                                    onChange={handleInput}
                                                >
                                                    <option
                                                        name="Bar"
                                                        value="1"
                                                    >
                                                        Bar
                                                    </option>
                                                    <option
                                                        name="Sport"
                                                        value="2"
                                                    >
                                                        Sport
                                                    </option>
                                                    <option
                                                        name="Restaurant"
                                                        value="3"
                                                    >
                                                        Restaurant
                                                    </option>
                                                    <option
                                                        name="Cafe"
                                                        value="4"
                                                    >
                                                        Cafe
                                                    </option>
                                                    <option
                                                        name="LifeStyle"
                                                        value="5"
                                                    >
                                                        LifeStyle
                                                    </option>
                                                </select>
                                            </div>

                                            <div>
                                                <Maps
                                                    selected={selected}
                                                    mapContainerClassName="map-container w-[410px] h-[182px] mt-5 rounded-lg shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="font-medium text-sm text-darkbluecute">
                                            Upload event images
                                        </h1>
                                        <div className="w-full max-w-sm ">
                                            <div className="mb-2 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture"
                                                        className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 right-16 text-center pl-1.5"
                                                    >
                                                        + Add your event profile
                                                        image
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture"
                                                    type="file"
                                                    className="hidden"
                                                    name="image1"
                                                    value={
                                                        addeventadminInput.image1
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.files[0]) {
                                                            setFile1(
                                                                e.target
                                                                    .files[0]
                                                            );
                                                        }
                                                    }}
                                                />
                                                <img
                                                    src={
                                                        file1 &&
                                                        URL.createObjectURL(
                                                            file1
                                                        )
                                                    }
                                                    alt=""
                                                    className="w-[320px] h-[190px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                            <div className="mb-2 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture2"
                                                        className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 right-16 ext-center pl-1.5"
                                                    >
                                                        + Add image about your
                                                        event
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture2"
                                                    type="file"
                                                    className="hidden"
                                                    name="image2"
                                                    value={
                                                        addeventadminInput.image2
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.files[0]) {
                                                            setFile2(
                                                                e.target
                                                                    .files[0]
                                                            );
                                                        }
                                                    }}
                                                />
                                                <img
                                                    src={
                                                        file2 &&
                                                        URL.createObjectURL(
                                                            file2
                                                        )
                                                    }
                                                    alt=""
                                                    className="w-[320px] h-[190px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                            <div className="mb-2 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture3"
                                                        className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 right-16 text-center pl-1.5"
                                                    >
                                                        + Add image about your
                                                        event
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture3"
                                                    type="file"
                                                    className="hidden"
                                                    name="image3"
                                                    value={
                                                        addeventadminInput.image3
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.files[0]) {
                                                            setFile3(
                                                                e.target
                                                                    .files[0]
                                                            );
                                                        }
                                                    }}
                                                />
                                                <img
                                                    src={
                                                        file3 &&
                                                        URL.createObjectURL(
                                                            file3
                                                        )
                                                    }
                                                    alt=""
                                                    className="w-[320px] h-[190px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center w-full mt-8 mb-2.5">
                                    <button className="btn bg-darkbluecute w-[95%] text-white rounded-full  h-12 self-center hover:text-darkbluecute flex justify-center text-center">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}