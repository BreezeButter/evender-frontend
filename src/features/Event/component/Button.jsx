import Input from "./Input";
import { useState } from "react";
const initialState = {
    title: "",
    description: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    capacity: "",
};

export default function Button() {
    const [input, setInput] = useState(initialState);
    const [files, setFiles] = useState({});

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleChangeFile = (e) => {
        if (e.target.files[0]) {
            setFiles({ ...files, [e.target.name]: e.target.files[0] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        console.log("imggggggggg", files);
    };

    return (
        <>
            <label
                htmlFor="my_modal_7"
                className="btn bg-black text-white rounded-full w-60 h-10 self-center"
            >
                Create Event
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
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
                            type="date"
                            value={input.dateStart}
                            onChange={handleChangeInput}
                            name="dateStart"
                        />
                        <Input
                            title="Date end"
                            type="date"
                            value={input.dateEnd}
                            onChange={handleChangeInput}
                            name="dateEnd"
                        />
                        <Input
                            title="Capacity"
                            value={input.capatity}
                            onChange={handleChangeInput}
                            name="capacity"
                        />
                        <div>
                            <input
                                type="file"
                                onChange={handleChangeFile}
                                name="image1"
                            />
                        </div>
                        <div>
                            <input
                                type="file"
                                onChange={handleChangeFile}
                                name="image2"
                            />
                        </div>
                        <div>
                            <input
                                type="file"
                                onChange={handleChangeFile}
                                name="image3"
                            />
                        </div>

                        <button className="bg-black text-white rounded-full w-36 h-8">
                            Create
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </>
    );
}
