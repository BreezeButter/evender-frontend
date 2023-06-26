import { useDispatch, useSelector } from "react-redux";
import CreateNewEventContainer from "../features/Event/component/CreateNewEventContainer";
// import EventBar from '../features/Event/component/EventBar';
import EventContainer from "../features/Event/component/EventContainer";
import Header from "../features/Event/component/Header";
import NextEventContainer from "../features/Event/component/NextEventContainer";
import { useEffect } from "react";
import { getAllEventsAsync } from "../features/Event/slice/eventSlice";
import { getNextEventUser } from "../features/Event/slice/eventSlice";

export default function EventPage() {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.event.events);
    const eventUser = useSelector((state) => state.event.eventUser);

    useEffect(() => {
        const eventFunction = async () => {
            await dispatch(getAllEventsAsync()).unwrap();
            await dispatch(getNextEventUser()).unwrap();
        };
        eventFunction();
    }, []);

    return (
        <>
            <Header title="Events" />
            {/* <div className="text-center font-semibold text-xl m-5">
                Let's join your event!
            </div> */}
            <div className="flex justify-center gap-14 mb-14">
                {/* <div className="w-[401px]"></div> */}
                <div className="flex flex-col gap-8">
                    {/* <div className="flex flex-col gap-5 fixed left-64 top-80 pt-1.5"> */}
                    <NextEventContainer eventUser={eventUser} />
                    <CreateNewEventContainer />
                </div>
                <div className="flex flex-col gap-5">
                    {events.map((el) => (
                        <EventContainer
                            key={el.id}
                            title={el.title}
                            location={el.location}
                            image1={el.image1}
                            description={el.description}
                            dateStart={el.dateStart}
                            joinEventUser={el.JoinEventUsers}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
