import { useParams } from "react-router-dom";
import CardMemberEvent from "../features/DetailEvent/component/CardMemberEvent";
import CarouselDetail from "../features/DetailEvent/component/CarouselDetail";
import DetailEvent from "../features/DetailEvent/component/DetailEvent";
import HostDetailEvent from "../features/DetailEvent/component/HostDetailEvent";
import LocationDetailEvent from "../features/DetailEvent/component/LocationDetailEvent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getEventUserDetail,
    getUserHostEvent,
    checkUserJoined,
} from "../features/DetailEvent/slice/eventDetailSlice";

export default function EventDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const eventDetail = useSelector((state) => state.eventDetail.event);
    const hostDetail = useSelector((state) => state.eventDetail.hostEvent);

    useEffect(() => {
        const eventFunction = async () => {
            await dispatch(getEventUserDetail(id)).unwrap();
            await dispatch(getUserHostEvent(id)).unwrap();
            await dispatch(checkUserJoined(id)).unwrap();
        };
        eventFunction();
    }, []);

    return (
        <div className="flex justify-center flex-col mb-36">
            {/* User Header + Button */}
            <div className=" border-b-2 border-lightbluecute">
                <div className="flex justify-between w-[75%] m-auto p-4 my-4">
                    <HostDetailEvent
                        hostDetail={hostDetail}
                        eventDetail={eventDetail}
                    />
                </div>
            </div>

            {/* carousel */}
            <CarouselDetail eventDetail={eventDetail} />
            {/* detail */}
            <div className="flex justify-center gap-40 w-full mt-28 ">
                <div className="w-[36%] flex flex-col">
                    <DetailEvent eventDetail={eventDetail} />
                    {/* Card Member*/}

                    <CardMemberEvent eventDetail={eventDetail} />
                </div>

                <LocationDetailEvent eventDetail={eventDetail} />
            </div>
        </div>
    );
}
