import { Button } from "../../../components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "../../../components/ui/dialog";
import Input2 from "./Input";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { creatEventAsync } from "../slice/eventSlice";
import { DownIcon } from "../../../icons";
import AutoCompleteComponent from "./AutoCompleteComponent";
import Maps from "./Maps";
import { Textarea } from "../../../components/ui/textarea";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const [input, setInput] = useState(initialState);
    const [files, setFiles] = useState({});
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const loading = useSelector((state) => state.event.loading);
    // const ref = useRef();

    console.log("selected---------->", selected);

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
    const cloneInput = { ...input, ...selected };
    console.log("cloneInput", cloneInput);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (
        //     !cloneInput.title ||
        //     !cloneInput.description ||
        //     !cloneInput.placeProvince ||
        //     !cloneInput.dateStart ||
        //     !cloneInput.dateEnd ||
        //     !cloneInput.capacity ||
        //     !cloneInput.eventCategoryId
        // ) {
        //     return alert("please fill  in every field");
        // }
        const formData = new FormData();

        for (let key in cloneInput) {
            formData.append(key, cloneInput[key]);
        }

        for (let key in files) {
            formData.append("image", files[key]);
        }
        await dispatch(creatEventAsync(formData)).unwrap();
        setInput(initialState);
        setFiles({});
        toast.success("create success");
        setTimeout(() => {
            location.reload();
        }, 500);

        // console.log(ref);
    };

    // useEffect(() => {}, [loading]);

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
                        <div className="flex justify-center px-8 py-8">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : (
                        <>
                            <form
                                className="flex flex-col "
                                onSubmit={handleSubmit}
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
                                                selected={selected}
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

                                <div className="flex justify-center w-full mt-6 mb-2.5">
                                    <Button
                                        type="submit"
                                        className="btn bg-darkbluecute w-[95%] text-white rounded-full h-12 self-center hover:text-darkbluecute flex justify-center text-center"
                                    >
                                        Create event
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
