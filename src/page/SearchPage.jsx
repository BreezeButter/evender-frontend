import { useEffect } from "react";
import EventBar from "../features/searchEvent/components/EventBar";

import { useDispatch, useSelector } from "react-redux";
import { syncEventByCategory } from "../features/searchEvent/slice/searchSlice";
import { useState } from "react";
import SearchContainer from "../features/searchEvent/components/SearchContainer";

export default function SearchPage() {
    const dispatch = useDispatch();
    const eventCategory = [
        { name: "all", id: 1 },
        { name: " bar", id: 2 },
        { name: "sport", id: 3 },
        { name: "restaurant", id: 4 },
        { name: "cafe", id: 5 },
        { name: "lifestyle", id: 6 },
    ];
    const categoryEvent = useSelector((state) => state.search.event);
    console.log("--->", categoryEvent);

    const initialValue = 1;

    const [selected, setSelected] = useState(initialValue);

    useEffect(() => {
        dispatch(syncEventByCategory(selected));
    }, [selected]);

    return (
        <div>
            <EventBar event={eventCategory} setSelected={setSelected} />
            <div className="flex flex-col gap-5 ">
                {categoryEvent.map((el) => {
                    console.log(el.JoinEventUsers);
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
