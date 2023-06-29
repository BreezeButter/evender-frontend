import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useRef } from "react";
import { getAccessToken } from "../../../utils/localstorage";
import { useDispatch } from "react-redux";
import { getAllEventsAsync } from "../../Event/slice/eventSlice";
import { Link } from "react-router-dom";

export default function TaskEventAdmin({
    id,
    title,
    placeProvince,
    description,
    paymentLinkUrl,
}) {
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    console.log(paymentLinkUrl, "paymentLinkUrl");
    const handleDelete = async () => {
        try {
            const token = getAccessToken();
            await axios.delete(
                `http://localhost:8888/admin/adminDeleteEvent/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            dispatch(getAllEventsAsync());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="flex max-w-[800px] border border-lightbluecute p-3 gap-4 px-10 py-6 rounded-2xl hover:scale-105 duration-500 cursor-pointer"
            // onClick={() => navigate(`/evender/eventDetail/${id}`)}
        >
            <div className="flex flex-col gap-3">
                <h1 className="text-lg font-semibold text-darkbluecute -mt-1 ">
                    {title}
                </h1>

                <h1 className="font-medium text-darkbluecute text-base mt-1.5">
                    {placeProvince}
                </h1>
                <div className=" overflow-hidden h-10">
                    <p className="max-w-[450px] text-sm font-light ">
                        {description}
                    </p>
                </div>
            </div>
            {/* button-delete */}
            <div className="flex flex-col gap-6">
                <div>
                    <Link
                        to={paymentLinkUrl}
                        className="btn btn-outline btn-success"
                    >
                        Boost Post
                    </Link>
                </div>
                {/* You can open the modal using ID.showModal() method */}
                <button
                    className="btn btn-outline btn-error"
                    onClick={() => {
                        // window.my_modal_3.showModal()
                        //เพราะตัวwindowไม่รันขึ้นบนchromeเลยตั้งค่าuseRefและต้อง .current จะเข้าถึงเลย
                        modalRef.current.showModal();
                    }}
                >
                    Delete
                </button>
                <dialog id="my_modal_3" className="modal" ref={modalRef}>
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Delete Event !!!</h3>
                        <p className="py-4">
                            Are you sure want to delete Event?{" "}
                        </p>
                        <p>
                            If you delete Event,you will permanently lose Event.
                        </p>
                        <button
                            className="btn btn-outline btn-error"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}
