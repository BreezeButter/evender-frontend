export default function ModalUserEvent({ eventDetail }) {
    console.log(eventDetail);
    return (
        <>
            <input type="checkbox" id="showAllUser" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className=" flex flex-col gap-6 ">
                        {eventDetail.JoinEventUsers?.map((el) => (
                            <div className="flex items-center gap-5">
                                <img
                                    className="w-[5rem] h-[5rem] rounded-full"
                                    src={el.User.image}
                                    alt="ProfileImage"
                                />
                                <p>{el.User.userName}</p>
                            </div>
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
