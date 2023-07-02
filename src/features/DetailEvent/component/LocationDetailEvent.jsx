import { useDispatch, useSelector } from "react-redux";
import { ClockIcon, LocationPin } from "../../../icons";
import { createJointEvent } from "../slice/eventDetailSlice";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Maps from "../../Event/component/Maps";
import { Clock, MapPin } from "lucide-react";
// import { deleteEventEventsync } from "../slice/eventDetailSlice";
// import Modal from "../../../components/Modal";
import { convertDate } from "../../../utils/dateUtil";

export default function LocationDetailEvent({ eventDetail }) {
    const { id } = eventDetail;

    const [date, time] = convertDate(eventDetail.dateStart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleJointEvent = () => {
        try {
            dispatch(createJointEvent(id));
            navigate(`/evender/chat/${id}`);
        } catch {
            toast.error("Room is Full");
        }
    };

    // const user = useSelector((state) => state.auth.user);
    console.log(id);
    console.log("alsdlkasdlk", eventDetail);
    // const joined = useSelector(state => state.eventDetail.UserJoined)

    const { latitude, longitude } = eventDetail;

    const position = {
        lat: +latitude,
        lng: +longitude,
    };

    // const hdlDelEvent = async () => {
    //     await dispatch(deleteEventEventsync(eventDetail.id)).unwrap();
    //     toast.error("You delete this group", {
    //         icon: "😢",
    //     });
    //     navigate("/evender/event");
    // };

    return (
        <>
            <div className="flex flex-col w-[27%]">
                <div className="flex flex-col justify-center bg-transparent  bg-gray-200  rounded-2xl  gap-4 w-full items-center mb-4">
                    <div className="bg-gray-200 rounded-2xl flex flex-col w-full px-10 pt-10 justify-center ">
                        <div className=" flex flex-col gap-5 ">
                            <div className="flex items-center">
                                <Clock className="h-[30px] w-[30px] text-darkgraycute ml-0.5 mr-4" />
                                <p className="text-base font-normal text-darkgraycute ">
                                    {date}
                                    {time}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <LocationPin className="mr-3.5" />
                                <p className="text-base font-normal text-darkgraycute">
                                    {eventDetail.placeName}
                                    {eventDetail.placeProvince}
                                </p>
                            </div>
                            {/* <Maps /> */}
                        </div>
                    </div>
                    <div className="flex w-full rounded-lg flex-col ">
                        <a
                            className="font-light text-xs text-end pr-4 mb-2.5 hover:text-darkgraycute hover:underline"
                            href={`http://maps.google.com/?q=${latitude},${longitude}`}
                        >
                            Google Map
                        </a>
                        <Maps
                            selected={position}
                            mapContainerClassName="w-full h-[330px] rounded-b-2xl"
                        />
                    </div>
                    {/* <div>
                    <Modal
                    num="1"
                    btnName="Delete Group"
                    titleModal="Confirm Delete Group"
                    descriptionModal="Before you delete group please tell everyone know"
                    btnTextModal="Confirm Delete!!"
                    classExpression="bg-neutral text-white"
                    hdlOnclick={hdlDelEvent}
                    />
                </div> */}
                </div>
                <button
                    className="hover:border-2 hover:border-lightbluecute mt-5  font-medium text-base hover:text-lightbluecute hover:bg-transparent rounded-full w-full h-11 bg-lightbluecute text-white"
                    onClick={handleJointEvent}
                >
                    Join
                </button>
            </div>
        </>
    );
}
