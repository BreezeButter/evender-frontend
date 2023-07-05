import { useDispatch, useSelector } from "react-redux";
import TaskEventAdmin from "../components/tableEventAdmin";

import { useEffect } from "react";
import { getAllEventsAsync } from "../../Event/slice/eventSlice";
import CreateNewEventAdmin from "../components/createNewEventAdmin";
import { Link } from "react-router-dom";

export default function EventManagement() {
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
        <div className="flex flex-row">
            <div className="flex flex-col m-12 ">
                <Link
                    to="/admin/eventmanagement"
                    className="btn btn-active btn-base-200 rounded-full w-[300px] mb-4"
                >
                    <button
                        className=" "
                    // onClick={() => navigate("/admin/eventmanagement")}
                    >
                        Event
                    </button>
                </Link>

                <Link
                    to="/admin/usermanagement"
                    className="btn btn-active btn-base-200 bg-white rounded-full w-[300px]"
                >
                    <button
                        className=""
                    // onClick={() => navigate("/admin/usermanagement")}
                    >
                        User
                    </button>
                </Link>
            </div>

            <div className="">
                <div className="flex flex-col gap-10 mt-10">
                    <div className=" m-5">
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
            </div>
        </div>
    );
}