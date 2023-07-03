import {
    GalleryVertical,
    Beer,
    Sailboat,
    Soup,
    Coffee,
    Goal,
    Map,
} from "lucide-react";
import Reset, { DownIcon } from "../../../icons";
import { SlidersHorizontal, ListRestart } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
// import Input from "../../Event/component/Input";
import CurrentGeo from "./CurrentGeo";
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
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../../components/ui/sheet";
import NearBySearch from "./NearBySearch";
import ProvinceSearch from "./ProvinceSearch";
const SHEET_SIDES = ["left"];

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
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    console.log("radius", radius);

    useEffect(() => {
        dispatch(
            syncEventSearch({
                ...input,
                latitude: location.latitude,
                longitude: location.longitude,
                radi: radius,
                placeProvince: province,
            })
        );
    }, [input, radius, province]);

    return (
        <div className="flex gap-2">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <a className="flex flex-row justify-center ">
                            <Button
                                size="icon"
                                className="hover:bg-gray-200  border border-gray-400"
                            >
                                <SlidersHorizontal className="h-4 w-4 " />
                            </Button>
                        </a>
                    </SheetTrigger>
                    <SheetContent side={side} className="bg-white  ">
                        <SheetHeader className="border-b border-gray-300 pb-4">
                            <SheetTitle className="text-darkbluecute text-2xl">
                                Filter
                            </SheetTitle>
                            <SheetDescription className="text-darkbluecute">
                                Let's filter your event here.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 py-4 ">
                            <div className="flex flex-col  gap-4 mt-2">
                                <Label
                                    htmlFor="Category"
                                    className=" text-darkbluecute"
                                >
                                    Category
                                </Label>
                                <ul className="grid grid-cols-3 mt-4  text-darkgraycute px-1 ">
                                    {eventCategory.map((el, idx) => (
                                        <li key={idx} className="">
                                            <Button
                                                onClick={() => {
                                                    setActiveButtonIndex(idx);
                                                    handleChangeInput({
                                                        target: {
                                                            name: "eventCategoryId",
                                                            value: el.id,
                                                        },
                                                    });
                                                }}
                                                className={`hover:bg-gray-100 mb-6 w-full flex justify-start text-darkgraycute text-sm font-normal hover:font-medium  ${
                                                    activeButtonIndex === idx
                                                        ? " text-lightbluecute stroke-lightbluecute"
                                                        : ""
                                                }`}
                                                // className="hover:bg-gray-200 hover:bg-transparent hover:font-medium font-normal text-base text-darkgraycute pb-8 hover:border-b-4 hover:border-lightbluecute cursor-pointer "

                                                value={el.id}
                                                name="eventCategoryId"
                                            >
                                                {el.emoji}&nbsp;{el.name}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-row items-center gap-[17px]  ">
                                <div className="relative">
                                    <Label
                                        htmlFor="Datestart"
                                        className="text-right text-darkbluecute"
                                    >
                                        Date start
                                    </Label>
                                    <DownIcon className="absolute right-3.5 top-9 -z-50 cursor-pointer " />
                                    <div className="flex flex-row items-center">
                                        <Input
                                            className="border border-gray-400 text-darkgraycute"
                                            title="Date start"
                                            type="datetime-local"
                                            value={input.dateStart}
                                            onChange={handleChangeInput}
                                            name="dateStart"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <Label
                                        htmlFor="Dateend"
                                        className=" text-darkbluecute text-right"
                                    >
                                        Date end
                                    </Label>
                                    <DownIcon className="absolute right-3.5 top-9 -z-50 cursor-pointer" />
                                    <Input
                                        className="border border-gray-400 text-darkgraycute"
                                        title="Date end"
                                        type="datetime-local"
                                        value={input.dateEnd}
                                        onChange={handleChangeInput}
                                        name="dateEnd"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center  gap-[17px] mt-3  ">
                                <div className="flex flex-col w-full">
                                    <Label
                                        htmlFor="Province"
                                        className=" text-darkbluecute text-left mb-1"
                                    >
                                        Province
                                    </Label>
                                    <ProvinceSearch
                                        addAllPlaceLoad={addAllPlaceLoad}
                                        setProvince={setProvince}
                                    />
                                    {/* <Label
                                        htmlFor="province"
                                        className="text-left text-darkbluecute mb-1 "
                                    >
                                        Province
                                    </Label> */}
                                    {/* <select
                                        className=" w-full text-darkgraycute rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        value={input.placeProvince} // Set the value of the select element to reflect the current state
                                        onChange={(e) => handleChangeInput(e)} // Call handleChangeInput when the selection changes
                                        name="placeProvince"
                                    >
                                        <option disabled value={""}>
                                            Province
                                        </option>{" "} */}
                                    {/* Add an empty value for the disabled option */}
                                    {/* {addAllPlaceLoad?.map((el, idx) => (
                                            <option key={idx}>
                                                {el.placeProvince}
                                            </option>
                                        ))}
                                    </select> */}
                                </div>
                                <div className="flex flex-col w-full">
                                    <Label
                                        htmlFor="Nearby"
                                        className=" text-darkbluecute text-left mb-1"
                                    >
                                        Nearby
                                    </Label>
                                    <NearBySearch
                                        setRadiuse={setRadiuse}
                                        className="border border-gray-400"
                                    />
                                </div>
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
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="border border-gray-400 mr-2 mt-8 hover:bg-gray-100   hover:text-darkgraycute  "
                                    onClick={() => {
                                        console.log("first");
                                        setInput(initialValue);
                                        setRadiuse("");
                                    }}
                                >
                                    <ListRestart className="w-5 h-5 text-gray-400 bg-transparent stroke-[1.75px] " />
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    );
}
