import { AlignRightIcon, ChevronRight } from "lucide-react";
import ModalUserEvent from "./ModalUserEvent";

export default function CardMemberEvent({ eventDetail }) {
    // console.log(eventDetail);
    const joinEventUsersFourPeople = eventDetail.JoinEventUsers?.slice(0, 4);

    return (
        <>
            <div className="border border-gray-400 rounded-xl  flex flex-col gap-4 mt-52 py-8 px-10">
                <div className="flex justify-between">
                    <h1 className="text-base font-medium text-darkbluecute">
                        Attendees(9)
                    </h1>

                    <label
                        htmlFor="showAllUser"
                        role="button"
                        className="hover:text-darkgraycute font-light text-gray-400 text-sm flex flex-row items-center text-end pl-7"
                    >
                        View all <ChevronRight className="h-5 w-5 ml-1" />
                    </label>
                    <ModalUserEvent eventDetail={eventDetail} />
                </div>
                <div className="flex flex-row gap-6 mt-2 ">
                    {joinEventUsersFourPeople?.map((el, idex) => (
                        <div
                            className="flex flex-col justify-center items-center"
                            key={idex}
                        >
                            <img
                                className="w-[5rem] h-[5rem] rounded-full object-cover cursor-pointer"
                                src={el.User.image}
                                alt="ProfileImage"
                            />
                            <p className="text-xs w-[6rem] text-center font-light mt-3 text-darkgraycute cursor-pointer  hover:font-normal">
                                {el.User.userName}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
