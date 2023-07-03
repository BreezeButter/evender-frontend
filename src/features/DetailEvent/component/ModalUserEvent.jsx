import { Link } from "react-router-dom";

export default function ModalUserEvent({ eventDetail }) {
    console.log(eventDetail.JoinEventUsers);
    return (
        <>
            <input type="checkbox" id="showAllUser" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className=" flex flex-col gap-6 ">
                        {eventDetail.JoinEventUsers?.map((el, idex) => (
                            <Link to={`/evender/profile/${el.userId}`} key={idex}>
                                <div
                                    className="flex items-center gap-5"
                                >
                                    <img
                                        className="w-[5rem] h-[5rem] rounded-full"
                                        src={el.User.image}
                                        alt="ProfileImage"
                                    />
                                    <p>{el.User.userName}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="showAllUser">
                    Close
                </label>
            </div>
        </>
    );
}
