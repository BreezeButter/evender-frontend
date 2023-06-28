import Input from "./Input";
import { useState, useRef } from "react";
import InputImage from "./InputImage";
import { useDispatch, useSelector } from "react-redux";
import { creatEventAsync } from "../slice/eventSlice";
import { useLoadScript } from "@react-google-maps/api";
// import Map from "./Map";
import AutoCompleteComponent from "./AutoCompleteComponent";
import Maps from "./Maps";
// import backgroundImage01 from "../../../assets/photo-1540539234-c14a20fb7c7b.avif";

const initialState = {
    title: "",
    description: "",
    placeProvince: "",
    dateStart: "",
    dateEnd: "",
    capacity: "",
    eventCategoryId: "3",
};

export default function Button() {
    const [input, setInput] = useState(initialState);
    const [files, setFiles] = useState({});
    const [selected, setSelected] = useState(null);
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

    const cloneInput = { ...input, ...selected };
    console.log("cloneInput", cloneInput);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !input.title ||
            !input.description ||
            !input.placeProvince ||
            !input.dateStart ||
            !input.dateEnd ||
            !input.capacity ||
            !input.eventCategoryId ||
            !selected
        ) {
            return alert("please fill in every field");
        }
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
        ref.current.click();
        console.log(ref);

        // console.log(selected);
    };

    return (
        <div>
            <label
                htmlFor="my_modal_7"
                className="btn bg-darkbluecute text-white rounded-full w-full h-12 self-center hover:text-darkbluecute"
                ref={ref}
            >
                Create Event
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full">
                    {loading ? (
                        <div className="flex justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : (
                        <div>
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
                                <div>
                                    <h3>Location</h3>
                                </div>
                                <div>
                                    <AutoCompleteComponent
                                        setSelected={setSelected}
                                    />
                                    {/* <Map /> */}
                                </div>
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
                        </div>
                    )}

                    {/* <div className="w-96 h-80"> */}
                    <Maps selected={selected} />
                    {/* </div> */}

                    {/* <div
                className=" w-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage01})`,
                }}
            ></div> */}
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </div>
    );
}
