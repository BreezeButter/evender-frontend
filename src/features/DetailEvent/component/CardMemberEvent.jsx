import ModalUserEvent from "./ModalUserEvent";

export default function CardMemberEvent({ eventDetail }) {
    // console.log(eventDetail);
    const joinEventUsersFourPeople = eventDetail.JoinEventUsers?.slice(0, 4);

    return (
        <>
            <div className="border-2 rounded-xl p-4  flex flex-col gap-4 mt-10">
                <div className="flex justify-between">
                    <h1>Attendees (9)</h1>

                    <label
                        htmlFor="showAllUser"
                        role="button"
                        className="hover:text-[#004DFF]"
                    >
                        View all{">"}
                    </label>
                    <ModalUserEvent eventDetail={eventDetail} />
                </div>
                <div className="flex flex-row justify-center gap-6 ">
                    {joinEventUsersFourPeople?.map((el, idex) => (
                        <div
                            className="flex flex-col justify-center items-center"
                            key={idex}
                        >
                            <img
                                className="w-[5rem] h-[5rem] rounded-full"
                                src={el.User.image}
                                alt="ProfileImage"
                            />
                            <p className="text-xs w-[6rem] text-center font-light">
                                {el.User.userName}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
