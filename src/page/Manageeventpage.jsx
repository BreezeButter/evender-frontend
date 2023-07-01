import { useDispatch, useSelector } from "react-redux";
import TaskEventAdmin from "../features/Admin/components/tableEventAdmin";
import Header from "../features/Event/component/Header";
import { useEffect } from "react";
import { getAllEventsAsync } from "../features/Event/slice/eventSlice";
import CreateNewEventAdmin from "../features/Admin/components/createNewEventAdmin";

export default function Eventmanagement() {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.event.events);
    console.log(events);

    useEffect(() => {
        const eventFunction = async () => {
            await dispatch(getAllEventsAsync()).unwrap();
        };
        eventFunction();
    }, []);

    return (
        <>
            <Header title="Eventmanagement" />
            <div className="flex gap-14 mb-14">
                <div className="grid ml-16">
                    <div>
                        <CreateNewEventAdmin />
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    {Array.isArray(events) &&
                        events.map((el) => (
                            <TaskEventAdmin
                                key={el.id}
                                title={el.title}
                                placeProvince={el.placeProvince}
                                description={el.description}
                                id={el.id}
                                paymentLinkUrl={el.paymentLinkUrl}
                                productDefaultPrice={el.productDefaultPrice}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
