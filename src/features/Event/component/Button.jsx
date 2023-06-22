import Input from "./Input";
import { useState, useRef } from "react";
import InputImage from "./InputImage";
import { useDispatch, useSelector } from "react-redux";
import { creatEventAsync } from "../slice/eventSlice";
const initialState = {
    title: "",
    description: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    capacity: "",
    eventCategoryId: "3",
};

export default function Button() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !input.title ||
            !input.description ||
            !input.location ||
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
        console.log(ref);
    };

    return (
        <>
            <label
                htmlFor="my_modal_7"
                className="btn bg-black text-white rounded-full w-60 h-10 self-center"
                ref={ref}
            >
                Create Event
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    {loading ? (
                        <div className="flex justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-lg font-bold text-center">
                                Create your Event
                            </h3>
                            <form
                                className="flex flex-col gap-3 items-center"
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    title="title"
                                    value={input.title}
                                    onChange={handleChangeInput}
                                    name="title"
                                />
                                <Input
                                    title="Description"
                                    value={input.description}
                                    onChange={handleChangeInput}
                                    name="description"
                                />
                                <Input
                                    title="Location"
                                    value={input.location}
                                    onChange={handleChangeInput}
                                    name="location"
                                />
                                <Input
                                    title="Date start"
                                    type="datetime-local"
                                    value={input.dateStart}
                                    onChange={handleChangeInput}
                                    name="dateStart"
                                />
                                <Input
                                    title="Date end"
                                    type="datetime-local"
                                    value={input.dateEnd}
                                    onChange={handleChangeInput}
                                    name="dateEnd"
                                />
                                <Input
                                    title="Capacity"
                                    value={input.capacity}
                                    onChange={handleChangeInput}
                                    name="capacity"
                                />
                                <div className="flex gap-5">
                                    <h1 className="font-semibold">
                                        Choose your category
                                    </h1>
                                    <select
                                        name="eventCategoryId"
                                        value={input.eventCategoryId}
                                        onChange={handleChangeInput}
                                    >
                                        <option value="1">Bar</option>
                                        <option value="2">Sport</option>
                                        <option value="3">Restaurant</option>
                                        <option value="4">Cafe</option>
                                        <option value="5">LifeStyle</option>
                                    </select>
                                </div>

                                <InputImage
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
                                />

                                <button className="bg-black text-white rounded-full w-36 h-8">
                                    Create
                                </button>
                            </form>
                        </>
                    )}
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </>
    );
}
