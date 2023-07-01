// import Reset from "../../../icons";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
// import Input from "../../Event/component/Input";
// import CurrentGeo from "./CurrentGeo";

// export default function NearBySearch() {
//     const initialValue = {
//         eventCategoryId: "",
//         dateStart: "",
//         dateEnd: "",
//         placeProvince: "",
//         box: "",
//         latitude: "",
//         longitude: "",
//         radi: "",
//     };

//     const eventCategory = [
//         { id: undefined, name: "All", emoji: "👋" },
//         { id: 1, name: "Bar", emoji: "🥂" },
//         { id: 2, name: "Sport", emoji: "🏈" },
//         { id: 3, name: "Resterant", emoji: "🍲" },
//         { id: 4, name: "Cafe", emoji: "☕" },
//         { id: 5, name: "LifeStyle", emoji: "🛍️" },
//     ];

//     const dispatch = useDispatch();
//     //placemaping recive from backend
//     const placeLoad = useSelector((state) => state.search.placeLoad);
//     const addAllPlaceLoad = [...placeLoad, { placeProvince: "All" }];

//     useEffect(() => {
//         dispatch(syncEventPlace());
//     }, []);

//     ///keepdata send to backend
//     const [input, setInput] = useState(initialValue);
//     const [location, setLocation] = useState("");
//     const [radius, setRadiuse] = useState("");

//     const handleChangeInput = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     console.log("input", input);

//     useEffect(() => {
//         dispatch(
//             syncEventSearch({
//                 ...input,
//                 latitude: location.latitude,
//                 longitude: location.longitude,
//                 radi: radius,
//             })
//         );
//     }, [input, radius]);

//     return (
//         <>
//             <CurrentGeo setLocation={setLocation} />
//             <select
//                 className="select select-bordered"
//                 value=""
//                 onChange={(e) => setRadiuse(e.target.value)}
//             >
//                 <option disabled value={""}>
//                     Nearby
//                 </option>
//                 <option value={""}>None</option>
//                 <option value={1}>1 km</option>
//                 <option value={5}>5 km</option>
//                 <option value={10}>10km</option>
//                 <option value={30}>30km</option>
//             </select>
//         </>
//     );
// }

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const radius = [
    {
        id: "",
        name: "none",
    },
    {
        id: 1,
        name: "1 km",
    },
    {
        id: 5,
        name: "5 km",
    },
    {
        id: 10,
        name: "10 km",
    },
    {
        id: 30,
        name: "30 km",
    },
    {
        id: 50,
        name: "50 km",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function SelectedBarRadius({ setRadiuse }) {
    const [selected, setSelected] = useState(radius[0].id);
    setRadiuse(selected.id ? selected.id : "");

    return (
        <Listbox value={selected} onChange={setSelected} >
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-darkbluecute "></Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-[200px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-darkbluecute text-sm  font-semibold border-darkbluecute border-[1px]">
                            <span className="flex items-center">
                                <span className="ml-2 first-letter:block truncate ">
                                    {selected.name ? selected.name : "Nearby"}
                                </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-[200px]  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {radius.map((radius) => (
                                    <Listbox.Option
                                        key={radius.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-indigo-600 text-white"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={radius}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {radius.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? "text-white"
                                                                : "text-indigo-600",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}
