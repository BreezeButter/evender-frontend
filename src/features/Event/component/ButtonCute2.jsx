import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Input from "./Input";
import InputImage from "./InputImage";
import { useDispatch, useSelector } from "react-redux";
import { creatEventAsync } from "../slice/eventSlice";

const initialState = {
    title: "",
    description: "",
    placeProvince: "",
    dateStart: "",
    dateEnd: "",
    capacity: "1",
    eventCategoryId: "3",
};

export default function ButtonCute() {
    const [input, setInput] = useState(initialState);
    const [files, setFiles] = useState({});
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.event.loading);
    const ref = useRef();
    const [open, setOpen] = useState(true);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleChangeFile = (e) => {
        if (e.target.files[0]) {
            setFiles({ ...files, [e.target.name]: e.target.files[0] });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !input.title ||
            !input.description ||
            !input.placeProvince ||
            !input.dateStart ||
            !input.dateEnd ||
            !input.capacity ||
            !input.eventCategoryId
        ) {
            return alert("please fill in every field");
        }
        const formData = new FormData();

        for (let key in input) {
            formData.append(key, input[key]);
        }

        for (let key in files) {
            formData.append("image", files[key]);
        }
        await dispatch(creatEventAsync(formData)).unwrap();
        setInput(initialState);
        setFiles({});
        ref.current.click();
        // console.log(ref);
    };

    return (
        <>
            <label
                htmlFor="my_modal_7"
                className="btn bg-darkbluecute text-white rounded-full w-full h-12 self-center hover:text-darkbluecute"
                onClick={() => setOpen(true)}
            >
                Create Event
            </label>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <XMarkIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-xl font-semibold leading-6 text-lightbluecute border-b border-lightbluecute pb-5 ">
                                                    Create your event
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                {/* Your content */}

                                                {loading ? (
                                                    <div className="flex justify-center">
                                                        <span className="loading loading-spinner loading-lg"></span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <form
                                                            className="flex flex-col gap-3  "
                                                            onSubmit={
                                                                handleSubmit
                                                            }
                                                        >
                                                            <Input
                                                                placeholder="title"
                                                                title="Title"
                                                                value={
                                                                    input.title
                                                                }
                                                                onChange={
                                                                    handleChangeInput
                                                                }
                                                                name="title"
                                                            />
                                                            <Input
                                                                title="Describtion"
                                                                placeholder="describe your event"
                                                                value={
                                                                    input.description
                                                                }
                                                                onChange={
                                                                    handleChangeInput
                                                                }
                                                                name="description"
                                                            />
                                                            <Input
                                                                placeholder="location"
                                                                title="Location"
                                                                value={
                                                                    input.placeProvince
                                                                }
                                                                onChange={
                                                                    handleChangeInput
                                                                }
                                                                name="placeProvince"
                                                            />
                                                            <div className="grid grid-cols-2 gap-2.5">
                                                                <Input
                                                                    title="Date start"
                                                                    type="datetime-local"
                                                                    value={
                                                                        input.dateStart
                                                                    }
                                                                    onChange={
                                                                        handleChangeInput
                                                                    }
                                                                    name="dateStart"
                                                                />
                                                                <Input
                                                                    title="Date end"
                                                                    type="datetime-local"
                                                                    value={
                                                                        input.dateEnd
                                                                    }
                                                                    onChange={
                                                                        handleChangeInput
                                                                    }
                                                                    name="dateEnd"
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-2.5">
                                                                <div>
                                                                    <p className="font-medium">
                                                                        Capacity:
                                                                    </p>
                                                                    <div className="flex items-center border w-full border-gray-400 rounded-lg mt-2">
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
                                                                            value={
                                                                                input.capacity
                                                                            }
                                                                            className="h-10 w-full border-transparent text-center bg-transparent text-graynav [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="w-36 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                                                            onClick={
                                                                                handleOnClickIncrease
                                                                            }
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h1 className="font-medium">
                                                                        Category
                                                                    </h1>
                                                                    <select
                                                                        className="block rounded-lg border border-gray-400 font-normal py-2.5 focus:ring-1 w-full bg-white text-sm pl-4 mt-2"
                                                                        name="eventCategoryId"
                                                                        value={
                                                                            input.eventCategoryId
                                                                        }
                                                                        onChange={
                                                                            handleChangeInput
                                                                        }
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
                                                            <h1 className="font-medium">
                                                                Upload event
                                                                images
                                                            </h1>
                                                            <InputImage
                                                                name="image1"
                                                                onChange={
                                                                    handleChangeFile
                                                                }
                                                            />
                                                            <InputImage
                                                                name="image2"
                                                                onChange={
                                                                    handleChangeFile
                                                                }
                                                            />
                                                            <InputImage
                                                                name="image3"
                                                                onChange={
                                                                    handleChangeFile
                                                                }
                                                            />

                                                            <button className="hover:bg-white bg-lightbluecute hover:border-2 hover:border-lightbluecute text-white border-2 border-lightbluecute hover:text-lightbluecute text-sm py-3 font-semibold rounded-full w-full mt-10">
                                                                Create event
                                                            </button>
                                                        </form>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
