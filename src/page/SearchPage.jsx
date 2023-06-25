import EventBar from "../features/searchEvent/components/EventBar";
import SearchContainer from "../features/searchEvent/components/SearchContainer";
import { useDispatch, useSelector } from "react-redux";

export default function SearchPage() {

    const dispatch = useDispatch();
    // const events = useSelector((state) => state.event.events);
    const categoryEvent = useSelector((state) => state.search.eventFilter);
    console.log(categoryEvent, "categoryEvent")


    return (
        <div>
            <EventBar />
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
