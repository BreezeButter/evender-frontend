import Reset from "../../../icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
import Input from '../../Event/component/Input'
import CurrentGeo from "./CurrentGeo";


export default function EventBar() {

    const initialValue = {
        eventCategoryId: undefined,
        dateStart: undefined,
        dateEnd: undefined,
        placeProvince: undefined,
        box: undefined,
    }

    const eventCategory = [
        { id: undefined, name: "All", emoji: "👋" },
        { id: 1, name: "Bar", emoji: "🥂" },
        { id: 2, name: "Sport", emoji: "🏈" },
        { id: 3, name: "Resterant", emoji: "🍲" },
        { id: 4, name: "Cafe", emoji: "☕" },
        { id: 5, name: "LifeStyle", emoji: "🛍️" },
    ];

    const dispatch = useDispatch()
    //placemaping recive from backend
    const placeLoad = useSelector((state) => state.search.placeLoad);
    const addAllPlaceLoad = [...placeLoad, { placeProvince: "All" }];
    useEffect(() => {
        dispatch(syncEventPlace())
    }, []);

    ///keepdata send to backend
    const [input, setInput] = useState(initialValue);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    console.log("input", input)

    useEffect(() => {
        dispatch(syncEventSearch(input))
    }, [input]);


    return (
        <div className="navbar bg-base-100  flex justify-stretch">
            <div className="navbar-start">
            </div>
            <div className="navbar-center hidden lg:flex">
                <select
                    className="select select-bordered w-full max-w-xs mx-10"
                    value={input.placeProvince} // Set the value of the select element to reflect the current state
                    onChange={(e) => handleChangeInput(e)} // Call handleChangeInput when the selection changes
                    name="placeProvince"
                >
                    <option disabled value="">placeProvince?</option> {/* Add an empty value for the disabled option */}
                    {addAllPlaceLoad?.map((el, idx) => (
                        <option
                            key={idx}
                            value={
                                el.placeProvince}
                        >
                            {el.placeProvince}
                        </option>
                    ))}
                </select>
                <ul className="menu menu-horizontal px-1">
                    {eventCategory.map((el, idx) => (
                        <li key={idx}>
                            <a
                                onClick={() => handleChangeInput({ target: { name: 'eventCategoryId', value: el.id } })}
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
                    <input type="text"
                        placeholder="Search… title or place name"
                        className="input input-bordered w-[300px]"
                        value={input.box}
                        onChange={handleChangeInput}
                        name="box" />

                </div>
            </div>
            <div className="form-control">
                <div className="input-group">
                    <CurrentGeo />
                    <select className="select select-bordered">
                        <option disabled selected>Nearby</option>
                        <option>5 km</option>
                        <option>10km</option>
                        <option>30km</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-square mx-4">
                <span><Reset /></span>
            </button>
            <div className="navbar-end">
            </div>
        </div>
    );
}
