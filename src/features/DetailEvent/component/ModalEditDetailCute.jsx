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
Textarea;

import { Button } from "../../../components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog";
import Input2 from "../../Event/component/Input";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import { DownIcon } from "../../../icons";
import { Textarea } from "../../../components/ui/textarea";

export default function ModalEditDetailCute({ eventDetail }) {
    // console.log(eventDetail);
    const navigate = useNavigate();
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

    const loading = useSelector((state) => state.eventDetail.loading);

    useEffect(() => {
        if (loading) {
            toast.loading("loading");
        } else {
            toast.dismiss();
        }
    }, [loading]);

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

    const handleOnClickIncrease = () => {
        setInput({ ...input, capacity: +input.capacity + 1 });
    };

    const handleOnClickDecrease = () => {
        if (input.capacity > 0) {
            setInput({ ...input, capacity: +input.capacity - 1 });
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
            if (input.eventCategoryId) {
                formData.append("eventCategoryId", input.eventCategoryId);
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
            if (selected.placeProvince) {
                formData.append("placeProvince", selected.placeProvince);
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
                eventCategoryId: eventDetail?.eventCategoryId,

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
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="hover:underline pr-5 hover:text-darkgraycute font-normal z-40 text-gray-500 border-gray-400 border-r rounded-none h-6 "
                    >
                        Edit
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[870px] bg-white rounded-3xl border border-gray-300 ">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-medium leading-6 text-darkbluecute border-b border-gray-400 pb-5 mb-2.5 mx-5 mt-5">
                            Edit your event
                        </DialogTitle>
                    </DialogHeader>

                    {loading ? (
                        <div className="flex justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : (
                        <>
                            <form
                                className="flex flex-col "
                                onSubmit={updateEventDetail}
                            >
                                <div className="flex flex-row gap-12 justify-center">
                                    <div className="w-[50%] gap-20">
                                        <Input2
                                            placeholder="title"
                                            title="Title"
                                            value={input.title}
                                            onChange={handleChangeInput}
                                            name="title"
                                        />
                                        <h1 className="font-medium text-sm text-darkbluecute">
                                            Describtion
                                        </h1>
                                        <Textarea
                                            className="resize-none text-darkgraycute border-gray-400 mt-1 mb-3 placeholder:text-gray-400"
                                            rows="5"
                                            title="Describtion"
                                            placeholder="describe your event"
                                            value={input.description}
                                            onChange={handleChangeInput}
                                            name="description"
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
                                                {/* <CalendarIcon className="absolute right-0.5 top-10 -z-50 " /> */}

                                                <DownIcon className="absolute right-0.5 top-9 -z-50 " />
                                                <Input2
                                                    title="Date start"
                                                    type="datetime-local"
                                                    value={input.dateStart}
                                                    onChange={handleChangeInput}
                                                    name="dateStart"
                                                />
                                            </div>
                                            <div className="relative">
                                                {/* <CalendarIcon className="absolute" /> */}
                                                <DownIcon className="absolute right-0.5 top-9 -z-50 " />
                                                <Input2
                                                    title="Date end"
                                                    type="datetime-local"
                                                    value={input.dateEnd}
                                                    onChange={handleChangeInput}
                                                    name="dateEnd"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2.5">
                                            <div className="">
                                                <p className="font-medium text-sm text-darkbluecute">
                                                    Capacity:
                                                </p>
                                                <div className="flex items-center border w-full text-darkbluecute border-gray-400 rounded-lg mt-1 bg-white">
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
                                                        name="capacity"
                                                        onChange={
                                                            handleChangeInput
                                                        }
                                                        value={input.capacity}
                                                        className="h-10 w-full border-transparent text-center bg-transparent text-graynav [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
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
                                                    className="block rounded-lg border border-gray-400 font-normal py-2.5 focus:ring-1 w-full bg-white text-sm pl-4 mt-1 text-darkgraycute"
                                                    name="eventCategoryId"
                                                    value={
                                                        input.eventCategoryId
                                                    }
                                                    onChange={handleChangeInput}
                                                >
                                                    <option value="1">
                                                        Bar
                                                    </option>
                                                    <option value="2">
                                                        Sport
                                                    </option>
                                                    <option value="3">
                                                        Restaurant
                                                    </option>
                                                    <option value="4">
                                                        Cafe
                                                    </option>
                                                    <option value="5">
                                                        LifeStyle
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <Maps
                                                selected={
                                                    position
                                                        ? position
                                                        : selected
                                                }
                                                mapContainerClassName="map-container w-[410px] h-[182px] mt-5 rounded-lg shadow-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="font-medium text-sm text-darkbluecute mb-2">
                                            Upload event images
                                        </h1>
                                        <div className="w-full max-w-sm ">
                                            <div className="mb-4 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture"
                                                        className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-16 text-center pl-1.5"
                                                    >
                                                        + Add your event profile
                                                        image
                                                    </Label>
                                                </div>

                                                <Input
                                                    id="picture"
                                                    type="file"
                                                    value={input.image1}
                                                    onChange={handleChangeInput}
                                                    className="hidden"
                                                    name="image1"
                                                    ref={inputRef}
                                                />
                                                <img
                                                    src={
                                                        file.image1
                                                            ? URL.createObjectURL(
                                                                  file.image1
                                                              )
                                                            : eventDetail.image1
                                                    }
                                                    alt=""
                                                    className="w-[320px] h-[190px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                            <div className="mb-4 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture2"
                                                        className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-16 ext-center pl-1.5"
                                                    >
                                                        + Add image about your
                                                        event
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture2"
                                                    type="file"
                                                    value={input.image2}
                                                    onChange={handleChangeInput}
                                                    name="image2"
                                                    className="hidden"
                                                    ref={inputRef}
                                                />
                                                <img
                                                    src={
                                                        file.image2
                                                            ? URL.createObjectURL(
                                                                  file.image2
                                                              )
                                                            : eventDetail.image2
                                                    }
                                                    alt=""
                                                    className="w-[320px] h-[190px] bg-gray-50  rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                            <div className="mb-2 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture3"
                                                        className="text-xs font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-16 text-center pl-1.5"
                                                    >
                                                        + Add image about your
                                                        event
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture3"
                                                    type="file"
                                                    value={input.image3}
                                                    className="hidden"
                                                    onChange={handleChangeInput}
                                                    name="image3"
                                                />
                                                <img
                                                    src={
                                                        file.image3
                                                            ? URL.createObjectURL(
                                                                  file.image3
                                                              )
                                                            : eventDetail.image3
                                                    }
                                                    alt=""
                                                    className="w-[320px] h-[190px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                        </div>
                                        {/* <InputImage
                                        name="image1"
                                        onChange={handleChangeFile}
                                    />
                                    <InputImage
                                        name="image2"
                                        onChange={handleChangeFile}
                                    />
                                    <InputImage
                                        name="image3"
                                        onChange={handleChangeFile}
                                    /> */}
                                    </div>
                                </div>
                                <div className="flex justify-center w-full mt-6 mb-2.5 gap-5">
                                    <Button
                                        type="submit"
                                        className="btn bg-darkbluecute w-[95%] text-white rounded-full  h-12 self-center hover:text-darkbluecute flex justify-center text-center"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
