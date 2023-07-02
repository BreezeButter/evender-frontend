import { useDispatch, useSelector } from "react-redux";
import ModalEditDetailCute from "../component/ModalEditDetailCute";

import Modal from "../../../components/Modal";
import {
    leaveJointEventsync,
    deleteEventEventsync,
} from "../slice/eventDetailSlice";
import { fetchMe } from "../../auth/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import DeleteModal from "../../../components/DeleteModla";
import { Button } from "../../../components/ui/button";

export default function HostDetailEvent({ eventDetail, hostDetail }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const me = useSelector((state) => state.auth.user);
    const joined = useSelector((state) => state.eventDetail.userJoined);
    console.log("joined", joined);
    const host = hostDetail.userId === me?.id;

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        let timeoutId = setTimeout(() => setShowComponent(true), 500); // 5000 ms = 5 seconds
        return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    }, []);

    const hdlOnclick = async () => {
        await dispatch(leaveJointEventsync(eventDetail.id)).unwrap();
        await dispatch(fetchMe()).unwrap();
        toast.info("You are leave this group", {
            icon: "🚀",
        });
        navigate("/evender/event");
    };

    const hdlDelEvent = async () => {
        await dispatch(deleteEventEventsync(eventDetail.id)).unwrap();
        toast.error("You delete this group", {
            icon: "😢",
        });
        navigate("/evender/event");
    };

    console.log("eventDetail", eventDetail);

    return (
        <>
            <div className="flex flex-col gap-4 py-4">
                <div className="mb-5">
                    <h1 className="font-semibold text-3xl text-darkbluecute ">
                        {eventDetail?.title}
                    </h1>
                </div>
                <div
                    className="flex items-center gap-4"
                    // onClick={() =>
                    //     navigate(`/evender/profile/${eventDetail?.userId}`)
                    // }
                >
                    <img
                        className="w-[7rem] h-[7rem] rounded-full object-cover cursor-pointer "
                        src={hostDetail.User?.image}
                        alt=""
                        onClick={() =>
                            navigate(`/evender/profile/${eventDetail?.userId}`)
                        }
                        // onClick={navigate(`evender/profile/${}`)}
                    />
                    <div className="ml-5">
                        <p className="font-normal text-base text-darkgraycute mb-2">
                            Hosted By
                        </p>
                        <p
                            className="font-medium text-base text-darkgraycute cursor-pointer hover:font-semibold"
                            onClick={() =>
                                navigate(
                                    `/evender/profile/${eventDetail?.userId}`
                                )
                            }
                        >
                            {hostDetail.User?.firstName}{" "}
                            {hostDetail.User?.lastName}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                {showComponent && (
                    <>
                        {host && (
                            <div className="grid grid-cols-3 mt-9 -mr-[232px]">
                                {/* <div className="-ml-[152px] "> */}
                                <div className="z-40">
                                    <div className="h-[120px] z-50"></div>
                                    <Button className="bg-violetcute rounded-lg h-11 w-[118px]  text-white  hover:text-violetcute hover:border hover:border-violetcute border-violetcute ">
                                        Boost Event
                                    </Button>
                                </div>
                                <div className="-ml-[133px] flex flex-row">
                                    <div className="flex flex-col justify-between ">
                                        {/* <div className="h-[150px]"></div> */}
                                        <ModalEditDetailCute
                                            eventDetail={eventDetail}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        {/* <div className="h-[150px]"></div> */}
                                        {/* <Modal
                                        num="1"
                                        btnName="Delete Group"
                                        titleModal="Confirm Delete Group"
                                        descriptionModal="Before you delete group please tell everyone know"
                                        btnTextModal="Confirm Delete"
                                        classExpression="text-redcute"
                                        hdlOnclick={hdlDelEvent}
                                    /> */}

                                        <DeleteModal hdlOnclick={hdlDelEvent} />
                                    </div>
                                </div>
                                {/* <Modal
                                        num="2"
                                        btnName="Boost Event"
                                        titleModal="Boost Event"
                                        descriptionModal="Before you delete group please tell everyone know"
                                        btnTextModal="Confirm Boost!!"
                                        classExpression="btn bg-violetcute"
                                        // hdlOnclick={hdlBoost}
                                    /> */}
                                {/* <Button className="bg-violetcute rounded-full h-11 w-36 font-semibold text-white hover:text-violetcute hover:border hover:border-violetcute border-violetcute ">
                                        Boost Event
                                    </Button> */}
                                {/* </div> */}
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
