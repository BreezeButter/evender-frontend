import { useDispatch, useSelector } from "react-redux";
import CreateNewEventContainer from "../features/Event/component/CreateNewEventContainer";
// import EventBar from '../features/Event/component/EventBar';
import EventContainer from "../features/Event/component/EventContainer";
import Header from "../features/Event/component/Header";
import NextEventContainer from "../features/Event/component/NextEventContainer";
import { useEffect } from "react";
import { getAllEventsAsync } from "../features/Event/slice/eventSlice";


export default function EventPage() {
    const dispatch = useDispatch();

    const events = useSelector((state) => state.event.events);

    useEffect(() => {
        dispatch(getAllEventsAsync());
    }, []);
    // console.log(events);
    return (
        <>
            <Header title="Events" />
            <div className="text-center font-semibold text-xl m-5">
                Let's join your event!
            </div>
            <div className="flex justify-center gap-5 ">
                <div className="flex flex-col gap-5 ">
                    <NextEventContainer />
                    <CreateNewEventContainer />
                </div>
                <div className="flex flex-col gap-5">
                    {Array.isArray(events) && events.map((el) => (
                        <EventContainer
                            key={el.id}
                            title={el.title}
                            location={el.location}
                            image1={el.image1}
                            description={el.description}
                            dateStart={el.dateStart}
                            joinEventUser={el.JoinEventUsers}
                            id={el.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
