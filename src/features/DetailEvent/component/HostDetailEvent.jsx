
import { useDispatch, useSelector } from "react-redux";
import ModalEditDetail from "../component/ModalEditDetail";
import Modal from "../../../components/Modal";
import { leaveJointEventsync, deleteEventEventsync } from "../slice/eventDetailSlice"
import { fetchMe } from "../../auth/slice/authSlice"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";



export default function HostDetailEvent({ eventDetail, hostDetail }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const me = useSelector(state => state.auth.user)
    const joined = useSelector(state => state.eventDetail.userJoined)
    console.log("joined", joined)
    const host = hostDetail.userId === me?.id

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        let timeoutId = setTimeout(() => setShowComponent(true), 500); // 5000 ms = 5 seconds
        return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    }, []);

    const hdlOnclick = async () => {

        await dispatch(leaveJointEventsync(eventDetail.id)).unwrap()
        await dispatch(fetchMe()).unwrap()
        toast.info("You are leave this group", {
            icon: "🚀"
        });
        navigate('/evender/event')
    }

    const hdlDelEvent = async () => {
        await dispatch(deleteEventEventsync(eventDetail.id)).unwrap()
        toast.error("You delete this group", {
            icon: "😢"
        });
        navigate('/evender/event')

    }

    console.log("eventDetail", eventDetail)



    return (
        <>
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold text-3xl">
                        {eventDetail.placeProvince}
                    </h1>
                </div>
                <div className="flex items-center gap-4"
                    onClick={() => navigate(`/evender/profile/${eventDetail?.userId}`)}>
                    <img
                        className="w-[7rem] h-[7rem] rounded-full"
                        src={hostDetail.User?.image}
                        alt=""
                    // onClick={navigate(`evender/profile/${}`)}
                    />
                    <div>
                        <p>Hosted By</p>
                        <p className="font-semibold">
                            {hostDetail.User?.userName}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                {showComponent && (
                    <>
                        {host && (
                            <div className="flex items-end p-4">
                                <label
                                    className="w-[6rem] h-[2.5rem] bg-[#004DFF] opacity-90 rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#004DFF] hover:border-2 hover:border-[#004DFF]"
                                    htmlFor="Detail"
                                    role="button"
                                >
                                    edit
                                </label>
                                <div>
                                    <Modal
                                        btnName="Delete Group"
                                        titleModal="Confirm Delete Group"
                                        descriptionModal="Before you delete group please tell everyone know"
                                        btnTextModal="Confirm Delete!!"
                                        classExpression="bg-neutral text-white"
                                        hdlOnclick={hdlDelEvent}
                                    />
                                </div>
                                <ModalEditDetail eventDetail={eventDetail} />
                            </div>
                        )}
                        {joined && !host && (
                            <div>
                                <Modal
                                    btnName="Leave group"
                                    titleModal="Confirm Leave Group"
                                    descriptionModal="You can join again if you want before the event ends or the group is full"
                                    btnTextModal="Leave"
                                    classExpression="bg-neutral text-white"
                                    hdlOnclick={hdlOnclick}
                                />
                            </div>
                        )}
                    </>
                )}
            </div>

        </>
    );
}
