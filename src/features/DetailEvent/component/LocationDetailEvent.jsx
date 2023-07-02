import { useDispatch, useSelector } from "react-redux";
import { ClockIcon, LocationPin } from "../../../icons";
import { createJointEvent } from "../slice/eventDetailSlice";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Maps from "../../Event/component/Maps";
import { convertDate } from "../../../utils/dateUtil"

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

    return (
        <>
            <div className="flex flex-col justify-center  gap-4 w-[25%] items-center mb-4">
                <div className="border-2 rounded-xl flex flex-col justify-center ">
                    <div className=" flex flex-col gap-4 p-6">
                        <div className="flex w-72 h-72 rounded-lg">
                            <Maps selected={position} />
                        </div>
                        <div className="flex">
                            <LocationPin />

                            <p className="text-sm">
                                {eventDetail.placeName}
                                {eventDetail.placeProvince}
                            </p>
                            <a
                                href={`http://maps.google.com/?q=${latitude},${longitude}`}
                            >
                                Google Map
                            </a>
                        </div>
                        <div className="flex">
                            <p className="text-sm">
                                {date}{time}
                            </p>
                        </div>
                        {/* <Maps /> */}
                    </div>
                    {/* <img
                        className="rounded-b-lg"
                        src="https://tn.com.ar/resizer/Sb7Z4QS-w6oDL_IvUzPi__pTUPE=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/KQY6CKSVO6RV25FVGEKBDKJUSQ.jpg"
                        alt=""
                    /> */}
                </div>
                <button
                    className="border-2 border-[#004DFF] text-[#004DFF] rounded-xl w-[60%] hover:bg-[#004DFF] hover:text-white"
                    onClick={handleJointEvent}
                >
                    Join
                </button>
            </div>
        </>
    );
}
