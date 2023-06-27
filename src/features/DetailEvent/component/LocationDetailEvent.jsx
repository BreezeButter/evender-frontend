import { useDispatch, useSelector } from "react-redux";
import { ClockIcon, LocationPin } from "../../../icons";
import { createJointEvent } from "../slice/eventDetailSlice";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LocationDetailEvent({ eventDetail }) {
    const { id } = eventDetail;
    console.log(eventDetail, '------////')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleJointEvent = () => {
        try {
            dispatch(createJointEvent(id));
            navigate(`/evender/chat/${user.id}`);
        } catch {
            toast.error("Room is Full");
        }
    };
    const isAuthToRoom = useSelector((state) => state.eventDetail.isAuthToRoom);
    const user = useSelector((state) => state.auth.user);


    return (
        <>
            <div className="flex flex-col justify-center  gap-4 w-[25%] items-center mb-4">
                <div className="border-2 rounded-xl flex flex-col justify-center ">
                    <div className=" flex flex-col gap-4 p-6">
                        <div className="flex">
                            <ClockIcon />
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid, odit.
                            </p>
                        </div>
                        <div className="flex">
                            <LocationPin />
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid, odit.
                            </p>
                        </div>
                    </div>
                    <img
                        className="rounded-b-lg"
                        src="https://tn.com.ar/resizer/Sb7Z4QS-w6oDL_IvUzPi__pTUPE=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/KQY6CKSVO6RV25FVGEKBDKJUSQ.jpg"
                        alt=""
                    />
                </div>
                {/* {isAuthToRoom ? (
                    <button
                        className="border-2 border-[#004DFF] text-[#004DFF] rounded-xl w-[60%] hover:bg-[#004DFF] hover:text-white"
                        onClick={() => navigate(`/evender/chat/${eventDetail.id}`)}
                    >
                        Chat
                    </button>
                ) : ( */}
                <button
                    className="border-2 border-[#004DFF] text-[#004DFF] rounded-xl w-[60%] hover:bg-[#004DFF] hover:text-white"
                    onClick={handleJointEvent}
                >
                    Join
                </button>
                {/* )} */}
            </div>
        </>
    );
}
