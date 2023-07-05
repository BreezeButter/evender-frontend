import {
    GalleryVertical,
    Beer,
    Sailboat,
    Soup,
    Coffee,
    Goal,
    Map,
    CalendarSearch,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
// import Input from "../../Event/component/Input";
import CurrentGeo from "./CurrentGeo";
import ProvinceSearch from "./ProvinceSearch";
import { useNavigate } from "react-router-dom";
// import { useLocation } from 'react-router-dom'
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

import NearBySearch from "./NearBySearch";
import Input2 from "../../Event/component/Input";
import { DownIcon } from "../../../icons";

export default function EventBar() {
    // const location = useLocation();
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
        {
            id: undefined,
            name: "All",
            emoji: <GalleryVertical className="stroke-[1.5px]" />,
        },
        { id: 1, name: "Bar", emoji: <Beer className="stroke-[1.5px]" /> },
        {
            id: 2,
            name: "Sport",
            emoji: <Sailboat className="stroke-[1.5px]" />,
        },
        {
            id: 3,
            name: "Resterant",
            emoji: <Soup className="stroke-[1.5px]" />,
        },
        { id: 4, name: "Cafe", emoji: <Coffee className="stroke-[1.5px]" /> },
        {
            id: 5,
            name: "LifeStyle",
            emoji: <Goal className="stroke-[1.5px]" />,
        },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //placemaping recive from backend
    const placeLoad = useSelector((state) => state.search.placeLoad);
    const user = useSelector((state) => state.auth.users);
    const addAllPlaceLoad = [...placeLoad, { placeProvince: "All" }];
    console.log(user);

    useEffect(() => {
        dispatch(syncEventPlace());
    }, []);

    ///keepdata send to backend
    const [input, setInput] = useState(initialValue);
    const [location, setLocation] = useState("");
    const [radius, setRadiuse] = useState("");
    const [province, setProvince] = useState("");
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [activeCard1, setActiveCard1] = useState(false);
    const [activeCard2, setActiveCard2] = useState(false);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setInput(initialValue);
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
        <div className="flex gap-1  m-8  text-darkbluecute w-6 relative">
            <div className="flex flex-col mt-2">
                <ul className=" text-darkgraycute px-1 flex max-w-[300px] -ml-[160px] ">
                    {eventCategory.map((el, idx) => (
                        <li key={idx} className="">
                            <Button
                                className={` text-darkgraycute ring-1 ring-lightbluecute  bg-white  mt-9  ml-4 text-base font-normal hover:font-medium  hover:transition-transform hover:shadow-md hover:scale-105 hover:bg-lightbluecute hover:text-white transform-gpu ${
                                    activeButtonIndex === idx
                                        ? " bg-lightbluecute text-white  "
                                        : ""
                                }`}
                                onClick={() => {
                                    setActiveButtonIndex(idx);
                                    handleChangeInput({
                                        target: {
                                            name: "eventCategoryId",
                                            value: el.id,
                                        },
                                    });
                                }}
                                value={el.id}
                                name="eventCategoryId"
                            >
                                {el.emoji}&nbsp;{el.name}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div>   
                <img
                    src={user.image}
                    alt="Image3"
                    className="w-[1250px] h-[420px] object-cover rounded-2xl"
                />
            </div> */}

            <div
                className={`flex flex-col items-center gap-2 hover:ring-1  absolute ml-[-140px] mt-[140px] bg-white min-w-[350px] p-8 rounded-lg  hover:transition-transform hover:shadow-md  transform-gpu 
            ${activeCard2 ? "   shadow-md " : ""}`}
                onClick={() => setActiveCard2(!activeCard2)}
            >
                <div className="mr-4 mt-4 text-darkgraycute">
                    <CalendarSearch
                        size={44}
                        className="stroke-lightbluecute"
                    />
                </div>

                <div className="relative w-full mt-5">
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
                <div className="relative w-full">
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
            <div
                className={`flex flex-col items-center gap-4 hover:ring-1 pb-11  absolute ml-[-140px] min-w-[350px]  mt-[480px] bg-white p-8 rounded-lg  hover:transition-transform hover:shadow-md  transform-gpu 
            ${activeCard1 ? "   shadow-md " : ""}`}
                onClick={() => setActiveCard1(!activeCard1)}
            >
                <div className="m-auto mb-4  text-darkgraycute">
                    <Map size={44} className="stroke-lightbluecute" />
                </div>
                <div className="flex flex-col items-baseline w-full ">
                    <div className="w-full flex flex-col mb-4">
                        <Label
                            htmlFor="Province"
                            className=" text-darkbluecute text-left mb-1.5"
                        >
                            Province
                        </Label>
                        <ProvinceSearch
                            addAllPlaceLoad={addAllPlaceLoad}
                            setProvince={setProvince}
                        />
                    </div>
                    <div className="w-full ">
                        <Label
                            htmlFor="Nearby"
                            className=" text-darkbluecute text-left mb-1.5"
                        >
                            Nearby
                        </Label>
                        <NearBySearch
                            setRadiuse={setRadiuse}
                            className="border w-full border-gray-400 z-50"
                        />
                    </div>
                </div>
            </div>
            <CurrentGeo setLocation={setLocation} />

            <div
                className="mt-[860px] ml-80"
                onClick={() => navigate("/evender/event")}
            >
                <button className="btn min-w-[400px] hover:transition-transform bg-lightbluecute  cursor-pointer hover:ring-1 hover:bg-lightbluecute border-none hover:shadow-2xl rounded-xl  hover:scale-105  transform-gpu text-white">
                    Back to event
                </button>
            </div>

            {/* <span>
                <a href="/evender/event" className=" hover:underline">
                    {" "}
                    <span>{`< `}</span>Back to event page
                </a>
            </span> */}
        </div>
    );
}

// <div className="flex gap-1 m-8  text-darkbluecute">
// <div>
//     <div className="border-b border-gray-300 pb-4">
//         <div className="text-darkbluecute text-2xl font-semibold ">
//             <span> Search By Map</span>
//         </div>
//         <div className="text-darkbluecute ">
//             Let's filter your event here.
//         </div>
//     </div>
//     <div className="flex flex-col gap-4 py-4 ">
//         <div className="flex flex-col  gap-4 mt-2">
//             <Label
//                 htmlFor="Category"
//                 className=" text-darkbluecute text-xl font-semibold"
//             >
//                 Category
//             </Label>
//             <ul className=" text-darkgraycute px-1 flex max-w-[300px]">
//                 {eventCategory.map((el, idx) => (
//                     <li key={idx} className="">
//                         <Button
//                             className="hover:bg-white text-darkgraycute bg-white m-4 text-base font-normal hover:font-medium  hover:shadow-indigo-50 hover:transition-transform hover:shadow-xl hover:scale-[120%] transform-gpu"
//                             onClick={() =>
//                                 handleChangeInput({
//                                     target: {
//                                         name: "eventCategoryId",
//                                         value: el.id,
//                                     },
//                                 })
//                             }
//                             value={el.id}
//                             name="eventCategoryId"
//                         >
//                             {el.emoji}&nbsp;{el.name}
//                         </Button>
//                     </li>
//                 ))}
//             </ul>
//         </div>

//         <div className="flex flex-row items-center gap-4 ">
//             <div>
//                 <Label
//                     htmlFor="Datestart"
//                     className="text-right text-darkbluecute text-base font-semibold "
//                 >
//                     Date start
//                 </Label>
//                 <div className="flex flex-row items-center pt-4">
//                     <Input
//                         className=" border border-gray-300 text-darkgraycute"
//                         title="Date start"
//                         type="datetime-local"
//                         value={input.dateStart}
//                         onChange={handleChangeInput}
//                         name="dateStart"
//                     />
//                 </div>
//             </div>
//             <div className="">
//                 <Label
//                     htmlFor="Dateend"
//                     className=" text-darkbluecute text-right text-base font-semibold"
//                 >
//                     Date end
//                 </Label>
//                 <Input
//                     className="border border-gray-300 text-darkgraycute pt-4"
//                     title="Date end"
//                     type="datetime-local"
//                     value={input.dateEnd}
//                     onChange={handleChangeInput}
//                     name="dateEnd"
//                 />
//             </div>
//         </div>
//         <div className="flex flex-col">
//             <div className="flex flex-col mb-5 mt-1">
//                 <Label
//                     htmlFor="province"
//                     className="text-left text-darkbluecute mb-1 "
//                 >
//                     Province
//                 </Label>
//                 <ProvinceSearch
//                     addAllPlaceLoad={addAllPlaceLoad}
//                     setProvince={setProvince}
//                 />

//             </div>
//             <NearBySearch setRadiuse={setRadiuse} />

//         </div>
//         <CurrentGeo setLocation={setLocation} />
//     </div>
//     <span>
//         <a href="/evender/event" className=" hover:underline">
//             {" "}
//             <span>{`< `}</span>Back to event page
//         </a>
//     </span>
// </div>
// </div>
