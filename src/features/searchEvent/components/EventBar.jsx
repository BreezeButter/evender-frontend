import Reset from "../../../icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
import Input from "../../Event/component/Input";
import CurrentGeo from "./CurrentGeo";
import ProvinceSearch from "./ProvinceSearch";

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

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    console.log("input", input);

    useEffect(() => {
        dispatch(
            syncEventSearch({
                ...input,
                latitude: location.latitude,
                longitude: location.longitude,
                radi: radius,
            })
        );
    }, [input, radius]);

    return (
        <div className="navbar bg-white flex justify-stretch">
            <div className="navbar-start"></div>
            <div className="navbar-center hidden lg:flex">
                <ProvinceSearch />
                {/* <select
                    className="select select-bordered w-full max-w-xs mx-10"
                    value={input.placeProvince} // Set the value of the select element to reflect the current state
                    onChange={(e) => handleChangeInput(e)} // Call handleChangeInput when the selection changes
                    name="placeProvince"
                >
                    <option disabled value={""}>
                        Province
                    </option>{" "} */}
                {/* Add an empty value for the disabled option */}
                {/* {addAllPlaceLoad?.map((el, idx) => (
                        <option key={idx}>{el.placeProvince}</option>
                    ))}
                </select> */}

                <ul className="menu menu-horizontal px-1">
                    {eventCategory.map((el, idx) => (
                        <li key={idx}>
                            <a
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
                            </a>
                        </li>
                    ))}
                </ul>
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
            <div className="form-control">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search… title or place name"
                        className="input input-bordered w-[300px]"
                        value={input.box}
                        onChange={handleChangeInput}
                        name="box"
                    />
                </div>
            </div>
            <CurrentGeo setLocation={setLocation} />
            <div className="form-control">
                <div className="input-group">
                    <select
                        className="select select-bordered"
                        value=""
                        onChange={(e) => setRadiuse(e.target.value)}
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
                </div>
            </div>
            <button
                className="btn btn-square mx-4"
                onClick={() => {
                    console.log("first");
                    setInput(initialValue);
                    setRadiuse("");
                }}
            >
                <span>
                    <Reset />
                </span>
            </button>
            <div className="navbar-end"></div>
        </div>
    );
}
