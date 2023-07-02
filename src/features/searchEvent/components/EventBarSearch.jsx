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

    useEffect(() => {
        dispatch(
            syncEventSearch({
                ...initialValue,
                latitude: location.latitude,
                longitude: location.longitude,
                placeProvince: "",
                radi: "",
            })
        );
    }, [handleReset]);

    return (
        <div className="flex gap-1 m-8  text-darkbluecute">
            <div >
                <div className="border-b border-gray-300 pb-4">
                    <div className="text-darkbluecute text-2xl font-semibold ">
                        Search By Map
                    </div>
                    <div className="text-darkbluecute ">
                        Let's filter your event here.
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-4 ">
                    <div className="flex flex-col  gap-4 mt-2">
                        <Label
                            htmlFor="Category"
                            className=" text-darkbluecute text-xl font-semibold"
                        >
                            Category
                        </Label>
                        <ul className="grid grid-cols-1 text-darkgraycute px-1  ">
                            {eventCategory.map((el, idx) => (
                                <li key={idx} className="">
                                    <Button
                                        className="hover:bg-gray-200  text-darkgraycute  text-base font-normal hover:font-medium"
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

                    <div className="flex flex-row items-center gap-4 ">
                        <div>
                            <Label
                                htmlFor="Datestart"
                                className="text-right text-darkbluecute text-base font-semibold "
                            >
                                Date start
                            </Label>
                            <div className="flex flex-row items-center pt-4">
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
                                className=" text-darkbluecute text-right text-base font-semibold"
                            >
                                Date end
                            </Label>
                            <Input
                                className="border border-gray-300 text-darkgraycute pt-4"
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
                        </div>
                        <NearBySearch setRadiuse={setRadiuse} />

                    </div>
                    <CurrentGeo setLocation={setLocation} />
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
