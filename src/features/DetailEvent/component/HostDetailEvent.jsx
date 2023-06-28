
import { useDispatch, useSelector } from "react-redux";
import ModalEditDetail from "../component/ModalEditDetail";
import Modal from "../../../components/Modal";
import { leaveJointEventsync, deleteEventEventsync } from "../slice/eventDetailSlice"
import { fetchMe } from "../../auth/slice/authSlice"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



export default function HostDetailEvent({ eventDetail, hostDetail }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const me = useSelector(state => state.auth.user)
    const joined = useSelector(state => state.eventDetail.userJoined)
    console.log("joined", joined)
    const host = hostDetail.userId === me?.id

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


    return (
        <>
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold text-3xl">
                        {eventDetail.placeProvince}
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        className="w-[7rem] h-[7rem] rounded-full"
                        src={hostDetail.User?.image}
                        alt=""
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
                {host ? (
                    <div className="flex  items-end p-4">
                        <label
                            className="w-[6rem] h-[2.5rem] bg-[#004DFF] opacity-90 rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#004DFF] hover:border-2 hover:border-[#004DFF]"
                            htmlFor="Detail"
                            role="button"
                        >
                            edit
                        </label>
                        <div>
                            <Modal btnName='Delete Group '
                                titleModal='Confirm Delete Group'
                                descriptionModal='Before you delete group please tell every one know '
                                btnTextModal=' Cobfirm Delete!!'
                                classExpreesion='bg-neutral text-white'
                                hdlOnclick={hdlDelEvent}
                            />
                        </div>
                        <ModalEditDetail eventDetail={eventDetail} />
                    </div>
                ) : null}
            </div>
            <div>
                {joined & !host ? (<Modal btnName='Leave group '
                    titleModal='Confirm Leave Group'
                    descriptionModal='you can join again if ypu want before event is end or people not full'
                    btnTextModal='Leave'
                    classExpreesion='bg-neutral text-white'
                    hdlOnclick={hdlOnclick} />) : null}
            </div>
        </>
    );
}
