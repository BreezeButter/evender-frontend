import Reset from "../../../icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { syncEventSearch, syncEventPlace } from "../slice/searchSlice";
import Input from "../../Event/component/Input";
import CurrentGeo from "./CurrentGeo";

export default function NearBySearch() {
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
        <>
            <CurrentGeo setLocation={setLocation} />
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
        </>
    );
}
