import { useEffect } from "react";
import EventBar from "../features/searchEvent/components/EventBar";

import { useDispatch, useSelector } from "react-redux";
import { syncEventSearch, syncEventPlace } from "../features/searchEvent/slice/searchSlice";
import { useState } from "react";
import SearchContainer from "../features/searchEvent/components/SearchContainer";

export default function SearchPage() {

    const eventCategory = [
        { id: undefined, name: "All", emoji: "👋" },
        { id: 1, name: "Bar", emoji: "🥂" },
        { id: 2, name: "Sport", emoji: "🏈" },
        { id: 3, name: "Resterant", emoji: "🍲" },
        { id: 4, name: "Cafe", emoji: "☕" },
        { id: 5, name: "LifeStyle", emoji: "🛍️" },
    ];

    const dispatch = useDispatch();
    const categoryEvent = useSelector((state) => state.search.event);
    const placeLoad = useSelector((state) => state.search.placeLoad);
    console.log('placeLoad', placeLoad)
    const initialValue = undefined;
    const [selected, setSelected] = useState(initialValue);

    useEffect(() => {

        dispatch(syncEventSearch(selected));

    }, [selected]);

    useEffect(() => {

        dispatch(syncEventPlace());

    }, []);

    return (
        <div>
            <EventBar event={eventCategory} setSelected={setSelected} placeLoad={placeLoad} />
            <div className="flex flex-col gap-5 ">
                {categoryEvent.map((el) => {
                    return (
                        <SearchContainer
                            key={el.id}
                            title={el.title}
                            location={el.location}
                            image1={el.image1}
                            description={el.description}
                            dateStart={el.dateStart}
                            joinEventUsers={el.JoinEventUsers}
                        />
                    );
                })}
            </div>
        </div>
    );
}
