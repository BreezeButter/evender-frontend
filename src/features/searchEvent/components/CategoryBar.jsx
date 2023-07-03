import { SearchIcon2 } from "../../../icons";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch } from "../slice/searchSlice";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import EventBarCute from "../components/EventBarCute";
import { Search } from "lucide-react";
import CurrentGeo from "./CurrentGeo";

import SearchByType from "./SearchByType";
import NearBySearch from "./NearBySearch";

export default function EventBar() {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const initialValue = {
        eventCategoryId: "",
    };

    const eventCategory = [
        { id: undefined, name: "All" },
        { id: 1, name: "Bar" },
        { id: 2, name: "Sport" },
        { id: 3, name: "Resterant" },
        { id: 4, name: "Cafe" },
        { id: 5, name: "LifeStyle" },
    ];

    // const eventCategory = [
    //     { id: undefined, name: "All", emoji: "👋" },
    //     { id: 1, name: "Bar", emoji: "🥂" },
    //     { id: 2, name: "Sport", emoji: "🏈" },
    //     { id: 3, name: "Resterant", emoji: "🍲" },
    //     { id: 4, name: "Cafe", emoji: "☕" },
    //     { id: 5, name: "LifeStyle", emoji: "🛍️" },
    // ];

    const dispatch = useDispatch();

    ///keepdata send to backend
    const [input, setInput] = useState(initialValue);
    const [location, setLocation] = useState("");
    const [radius, setRadiuse] = useState("");
    console.log(radius, "radius");
    console.log(location, "location");

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        dispatch(
            syncEventSearch({
                ...input,
                latitude: location.latitude,
                longitude: location.longitude,
                radi: radius,
            })
        );
    }, [input, radius, location]);

    return (
        <div className="bg-whitebg text-darkbluecute flex space-x-[300px] border-b border-gray-300 mb-14 pt-5 pb-6 w-full ">
            <div className="navbar-start -mt-2.5 flex flex-row justify-end">
                <EventBarCute />
                <div className="relative  ml-3 w-52">
                    <Search className="absolute top-2.5 left-3 h-5 w-5 " />
                    <SearchByType />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row px-1 gap-10 ">
                    {eventCategory.map((el, idx) => (
                        <li key={idx}>
                            <a
                                onClick={() => {
                                    setActiveButtonIndex(idx ? idx : 0);
                                    handleChangeInput({
                                        target: {
                                            name: "eventCategoryId",
                                            value: el.id,
                                        },
                                    });
                                }}
                                className={`hover:bg-gray-200 hover:bg-transparent hover:font-medium font-normal text-base text-darkgraycute pb-11  cursor-pointer  ${activeButtonIndex === idx
                                    ? "pb-9 border-b-4 border-lightbluecute "
                                    : ""
                                    }`}
                                // className="hover:bg-gray-200 hover:bg-transparent hover:font-medium font-normal text-base text-darkgraycute pb-8 hover:border-b-4 hover:border-lightbluecute cursor-pointer "

                                value={el.id}
                                name="eventCategoryId"
                            >
                                {el.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end  -mt-3.5 ">
                <div>
                    {/* <div className=" hover:bg-gray-200 hover:shadow-sm hover:font-medium text-darkgraycute font-normal text-sm border  border-gray-300 w-28 justify-center py-1.5 rounded-lg cursor-pointer "> */}
                    {/* <SearchIcon2 className=" cursor-pointer " /> */}
                    {/* <EventBarCute /> */}
                    {/* <p className="ml-1.5">search</p> */}
                    <CurrentGeo setLocation={setLocation} />
                    <NearBySearch setRadiuse={setRadiuse} />
                    <div className="w-33"></div>
                </div>
            </div>
            {/* <Reset /> */}
        </div>
    );
}
