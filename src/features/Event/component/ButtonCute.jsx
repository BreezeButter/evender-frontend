import { Button } from "../../../components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog";
import Input2 from "./Input";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { creatEventAsync } from "../slice/eventSlice";
import { DownIcon } from "../../../icons";

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
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="btn bg-darkbluecute text-white rounded-full w-full h-12 self-center hover:text-darkbluecute flex justify-center text-center"
                    >
                        Create event
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[930px] bg-white rounded-3xl border border-gray-300 ">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold leading-6 text-lightbluecute border-b border-lightbluecute pb-5 mb-2.5">
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
                                className="flex flex-col "
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-row gap-10 justify-center">
                                    <div className="w-[50%] gap-20">
                                        <Input2
                                            placeholder="title"
                                            title="Title"
                                            value={input.title}
                                            onChange={handleChangeInput}
                                            name="title"
                                        />
                                        <Input2
                                            title="Describtion"
                                            placeholder="describe your event"
                                            value={input.description}
                                            onChange={handleChangeInput}
                                            name="description"
                                        />
                                        <Input2
                                            placeholder="location"
                                            title="Location"
                                            value={input.placeProvince}
                                            onChange={handleChangeInput}
                                            name="placeProvince"
                                        />
                                        <div className="grid grid-cols-2 gap-2.5">
                                            <div className="relative">
                                                {/* <CalendarIcon className="absolute right-0.5 top-10 -z-50 " /> */}

                                                <DownIcon className="absolute right-0.5 top-11 -z-50 " />
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
                                                <DownIcon className="absolute right-0.5 top-11 -z-50 " />
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
                                                <p className="font-medium text-darkbluecute">
                                                    Capacity:
                                                </p>
                                                <div className="flex items-center border w-full text-darkbluecute border-gray-400 rounded-lg mt-2 bg-white">
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
                                                        className="h-10 w-full border-transparent   text-center bg-transparent text-graynav [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
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
                                                <h1 className="font-medium text-darkbluecute">
                                                    Category
                                                </h1>
                                                <select
                                                    className="block rounded-lg border border-gray-400 font-normal py-2.5 focus:ring-1 w-full bg-white text-sm pl-4 mt-2 text-darkgraycute"
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
                                    </div>
                                    <div>
                                        <h1 className="font-medium text-darkbluecute">
                                            Upload event images
                                        </h1>
                                        <div className="w-full max-w-sm mt-2.5">
                                            <div className="mb-3 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture"
                                                        className="text-sm font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-20 text-center pl-1.5"
                                                    >
                                                        + Add your event profile
                                                        image
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture"
                                                    type="file"
                                                    name="image1"
                                                    className="hidden"
                                                    onChange={handleChangeFile}
                                                />
                                                <img
                                                    src={
                                                        files.image1 &&
                                                        URL.createObjectURL(
                                                            files.image1
                                                        )
                                                    }
                                                    alt=""
                                                    className="w-[400px] h-[200px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                            <div className="mb-3 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture2"
                                                        className="text-sm font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-20 text-center pl-1.5"
                                                    >
                                                        + Add images about your
                                                        event
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture2"
                                                    type="file"
                                                    name="image2"
                                                    className="hidden"
                                                    onChange={handleChangeFile}
                                                />
                                                <img
                                                    src={
                                                        files.image2 &&
                                                        URL.createObjectURL(
                                                            files.image2
                                                        )
                                                    }
                                                    alt=""
                                                    className="w-[400px] bg-gray-50 h-[200px] rounded-lg object-cover border border-gray-300 mt-2"
                                                />
                                            </div>
                                            <div className="mb-3 relative">
                                                <div className="flex justify-end">
                                                    <Label
                                                        htmlFor="picture3"
                                                        className="text-sm font-normal text-gray-500 hover:text-darkgraycute hover:underline cursor-pointer pr-3 absolute top-24 left-20 text-center pl-1.5"
                                                    >
                                                        + Add images about your
                                                        event
                                                    </Label>
                                                </div>
                                                <Input
                                                    id="picture3"
                                                    type="file"
                                                    name="image3"
                                                    className="hidden"
                                                    onChange={handleChangeFile}
                                                />
                                                <img
                                                    src={
                                                        files.image3 &&
                                                        URL.createObjectURL(
                                                            files.image3
                                                        )
                                                    }
                                                    alt=""
                                                    className="w-[400px] h-[200px] bg-gray-50 rounded-lg object-cover border border-gray-300 mt-2"
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
                                <div className="flex justify-center w-full mt-3">
                                    <button className="hover:bg-white bg-lightbluecute hover:border-2 hover:border-lightbluecute text-white border-2 border-lightbluecute hover:text-lightbluecute text-sm py-3 font-semibold rounded-full w-full  mt-3">
                                        Create event
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
