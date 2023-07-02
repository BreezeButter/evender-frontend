
import { GalleryVertical, Beer, Sailboat, Soup, Coffee, Goal, Map, CalendarSearch } from "lucide-react";
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
        { id: undefined, name: "All", emoji: <GalleryVertical /> },
        { id: 1, name: "Bar", emoji: <Beer /> },
        { id: 2, name: "Sport", emoji: <Sailboat /> },
        { id: 3, name: "Resterant", emoji: <Soup /> },
        { id: 4, name: "Cafe", emoji: <Coffee /> },
        { id: 5, name: "LifeStyle", emoji: <Goal /> },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate()
    //placemaping recive from backend
    const placeLoad = useSelector((state) => state.search.placeLoad);
    const user = useSelector((state) => state.auth.users);
    const addAllPlaceLoad = [...placeLoad, { placeProvince: "All" }];
    console.log(user)

    useEffect(() => {
        dispatch(syncEventPlace());
    }, []);

    ///keepdata send to backend
    const [input, setInput] = useState(initialValue);
    const [location, setLocation] = useState("");
    const [radius, setRadiuse] = useState("");
    const [province, setProvince] = useState("");
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [activeCard1, setActiveCard1] = useState(false);
    const [activeCard2, setActiveCard2] = useState(false);


    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleReset = () => {

        setInput(initialValue)

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
        <div className="flex gap-1 m-8  text-darkbluecute relative">
            <div className="flex flex-col  gap-4 mt-2">
                <ul className=" text-darkgraycute px-1 flex max-w-[300px] ">
                    {eventCategory.map((el, idx) => (
                        <li key={idx} className="">
                            <Button
                                className={`hover:bg-white text-darkgraycute  ring-1 ring-violetcute hover:shadow-violetcute bg-white m-4 text-base font-normal hover:font-medium  hover:transition-transform hover:shadow-md hover:scale-[120%] transform-gpu ${activeButtonIndex === idx
                                    ? " bg-violetcute text-white hover:text-violetcute "
                                    : ""}`}
                                onClick={() => {
                                    setActiveButtonIndex(idx)
                                    handleChangeInput({
                                        target: {
                                            name: "eventCategoryId",
                                            value: el.id,
                                        },
                                    })
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


            <div className={`flex flex-col items-center gap-4 hover:ring-1 hover:ring-violetcute hover:shadow-violetcute absolute ml-[-140px] mt-[100px] bg-white p-8 rounded-lg  hover:transition-transform hover:shadow-md hover:scale-[110%] transform-gpu 
            ${activeCard2 ? " text-violetcute hover:text-violetcute ring-1 ring-violetcute shadow-violetcute shadow-md "
                    : ""}`}
                onClick={() => setActiveCard2(!activeCard2)}>
                <div className="mr-4 mt-4 text-darkgraycute" >
                    <CalendarSearch size={44} />
                </div>
                <div>
                    <Label
                        htmlFor="Datestart"
                        className="text-right text-darkbluecute text-base font-semibold "
                    >
                        Date start
                    </Label>
                    <div className="flex flex-col items-center">
                        <Input

                            className=" border border-darkgraycute text-darkgraycute "
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
                        className="border border-darkgraycute text-darkgraycute"
                        title="Date end"
                        type="datetime-local"
                        value={input.dateEnd}
                        onChange={handleChangeInput}
                        name="dateEnd"
                    />
                </div>
            </div>
            <div className={`flex flex-col items-center gap-4 hover:ring-1 hover:ring-violetcute hover:shadow-violetcute absolute ml-[-140px] mt-[400px] bg-white p-8 rounded-lg  hover:transition-transform hover:shadow-md hover:scale-[110%] transform-gpu 
            ${activeCard1 ? " text-violetcute hover:text-violetcute ring-1 ring-violetcute shadow-violetcute shadow-md "
                    : ""}`}
                onClick={() => setActiveCard1(!activeCard1)}>
                <div className="m-auto mb-4  text-darkgraycute">
                    <Map size={44} />
                </div>
                <div className="flex flex-col items-baseline">
                    <Label
                        htmlFor="Dateend"
                        className=" text-darkbluecute text-right text-base font-semibold"
                    >
                        Location
                    </Label>
                    <ProvinceSearch
                        addAllPlaceLoad={addAllPlaceLoad}
                        setProvince={setProvince}

                    />
                    <Label
                        htmlFor="Dateend"
                        className=" text-darkbluecute text-right text-base font-semibold mt-4"
                    >
                        Nearby
                    </Label>
                    <NearBySearch setRadiuse={setRadiuse} />
                </div>
            </div>
            <CurrentGeo setLocation={setLocation} />

            <div className="mt-[720px] ml-[-430px] 
            " onClick={() => navigate('/evender/event')}>
                <button className="btn w-[230px] hover:transition-transform hover:ring-1 hover:ring-darkgraycute hover:shadow-2xl rounded-xl  hover:scale-[110%] transform-gpu text-white">Back to event</button>

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