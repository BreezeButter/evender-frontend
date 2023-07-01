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
        <div className="flex justify-center flex-col">
            {/* User Header + Button */}
            <div className=" border-b-[1px] border-[#004DFF]">
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
            <div className="flex justify-center items-center gap-20 mt-8">
                <div className="w-[35%] flex flex-col gap-8">
                    <DetailEvent eventDetail={eventDetail} />
                    {/* Card Member*/}

                    <CardMemberEvent eventDetail={eventDetail} />
                </div>
                <LocationDetailEvent eventDetail={eventDetail} />
            </div>
        </div>
    );
}
