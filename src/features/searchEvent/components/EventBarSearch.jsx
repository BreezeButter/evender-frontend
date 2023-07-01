import Reset from "../../../icons";
// import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
// import Input from "../../Event/component/Input";
import CurrentGeo from "./CurrentGeo";
import ProvinceSearch from "./ProvinceSearch"
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
// } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import NearBySearch from './NearBySearch'


export default function EventBar() {
    const initialValue = {
        eventCategoryId: "",
        dateStart: "",
        dateEnd: "",
        placeProvince: "",
        box: "",
        latitude: "",
        longitude: "",
        radi: "",
    };

    const eventCategory = [
        { id: undefined, name: "All", emoji: "👋" },
        { id: 1, name: "Bar", emoji: "🥂" },
        { id: 2, name: "Sport", emoji: "🏈" },
        { id: 3, name: "Resterant", emoji: "🍲" },
        { id: 4, name: "Cafe", emoji: "☕" },
        { id: 5, name: "LifeStyle", emoji: "🛍️" },
    ];

    const dispatch = useDispatch();
    //placemaping recive from backend
    const placeLoad = useSelector((state) => state.search.placeLoad);
    const addAllPlaceLoad = [...placeLoad, { placeProvince: "All" }];

    useEffect(() => {
        dispatch(syncEventPlace());
    }, []);

    ///keepdata send to backend
    const [input, setInput] = useState(initialValue);
    const [location, setLocation] = useState("");
    const [radius, setRadiuse] = useState("");
    const [province, setProvince] = useState("");



    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleReset = () => {

        setInput(initialValue);
        setRadiuse("");
        setLocation("");
        setProvince("");

    };



    useEffect(() => {
        dispatch(
            syncEventSearch({
                ...input,
                latitude: location.latitude,
                longitude: location.longitude,
                placeProvince: province,
                radi: radius,
            })
        );
    }, [input, radius, province, location, handleReset]);

    return (
        <div className="flex gap-1 m-8  text-darkbluecute">
            <div >
                <div className="border-b border-gray-300 pb-4">
                    <div className="text-darkbluecute text-2xl ">
                        Search
                    </div>
                    <div className="text-darkbluecute">
                        Let's filter your event here.
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-4 ">
                    <div className="flex flex-col  gap-4 mt-2">
                        <Label
                            htmlFor="Category"
                            className=" text-darkbluecute"
                        >
                            Category
                        </Label>
                        <ul className="grid grid-cols-1 text-darkgraycute px-1 ">
                            {eventCategory.map((el, idx) => (
                                <li key={idx} className="">
                                    <Button
                                        className="hover:bg-gray-200  text-darkgraycute text-sm font-normal hover:font-medium"
                                        onClick={() =>
                                            handleChangeInput({
                                                target: {
                                                    name: "eventCategoryId",
                                                    value: el.id,
                                                },
                                            })
                                        }
                                        value={el.id}
                                        name="eventCategoryId"
                                    >
                                        {el.emoji}&nbsp;{el.name}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-2 ">
                        <div>
                            <Label
                                htmlFor="Datestart"
                                className="text-right text-darkbluecute"
                            >
                                Date start
                            </Label>
                            <div className="flex flex-row items-center">
                                <Input
                                    className=" border border-gray-300 text-darkgraycute"
                                    title="Date start"
                                    type="datetime-local"
                                    value={input.dateStart}
                                    onChange={handleChangeInput}
                                    name="dateStart"
                                />
                            </div>
                        </div>
                        <div className="">
                            <Label
                                htmlFor="Dateend"
                                className=" text-darkbluecute text-right"
                            >
                                Date end
                            </Label>
                            <Input
                                className="border border-gray-300 text-darkgraycute"
                                title="Date end"
                                type="datetime-local"
                                value={input.dateEnd}
                                onChange={handleChangeInput}
                                name="dateEnd"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-5 mt-1">
                            <Label
                                htmlFor="province"
                                className="text-left text-darkbluecute mb-1 "
                            >
                                Province
                            </Label>
                            <ProvinceSearch addAllPlaceLoad={addAllPlaceLoad} setProvince={setProvince} />
                            {/* <select
                                className=" w-full text-darkgraycute rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={input.placeProvince} // Set the value of the select element to reflect the current state
                                onChange={(e) => handleChangeInput(e)} // Call handleChangeInput when the selection changes
                                name="placeProvince"
                            >
                                <option disabled value={""}>
                                    Province
                                </option>{" "}
                                {/* Add an empty value for the disabled option */}
                            {/* {addAllPlaceLoad?.map((el, idx) => (
                                    <option key={idx}>
                                        {el.placeProvince}
                                    </option>
                                ))}
                            </select> */}
                        </div>
                        <NearBySearch setRadiuse={setRadiuse} />

                        {/* <div className="flex flex-col">
                                    <Label
                                        htmlFor="NearBy"
                                        className=" text-darkbluecute text-left mb-1 "
                                    >
                                        Nearby
                                    </Label>
                                    <select
                                        className="w-full  text-darkgraycute rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        value=""
                                        onChange={(e) =>
                                            setRadiuse(e.target.value)
                                        }
                                    >
                                        <option disabled value={""}>
                                            Nearby
                                        </option>
                                        <option value={""}>None</option>
                                        <option value={1}>1 km</option>
                                        <option value={5}>5 km</option>
                                        <option value={10}>10km</option>
                                        <option value={30}>30km</option>
                                    </select>
                                </div> */}
                    </div>
                    <CurrentGeo setLocation={setLocation} />
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                    htmlFor="Search"
                                    className=" text-darkbluecute text-right"
                                >
                                    Search
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Search… title or place name"
                                    className="w-80 border border-gray-300 text-darkgraycute"
                                    value={input.box}
                                    onChange={handleChangeInput}
                                    name="box"
                                />
                            </div>
                            <CurrentGeo setLocation={setLocation} /> */}
                </div>
                <div className=" mb-8">
                    <button
                        className="btn btn-square border-gray-200 hover:border-gray-300  bg-transparent hover:bg-gray-200 "
                        onClick={handleReset}
                    >
                        <span>
                            <Reset />
                        </span>
                    </button>
                </div >
                <span >
                    <a href="/evender/event" className=" hover:underline"> <span>{`< `}</span>Back to event page</a>
                </span>
            </div>
        </div >

    );
}
