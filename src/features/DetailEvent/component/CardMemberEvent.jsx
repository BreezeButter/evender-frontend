import { AlignRightIcon, ChevronRight } from "lucide-react";
import ModalUserEvent from "./ModalUserEvent";

export default function CardMemberEvent({ eventDetail }) {
    // console.log(eventDetail);
    const joinEventUsersFourPeople = eventDetail.JoinEventUsers?.slice(0, 5);
    const JointUserAttendees = eventDetail.JoinEventUsers?.length;

    return (
        <>
            <div className="border border-gray-300 rounded-lg flex flex-col gap-4 mt-40 py-8  px-8">
                <div className="flex justify-between">
                    <h1 className="text-base font-normal text-darkbluecute">
                        Attendees ({JointUserAttendees})
                    </h1>

                    {/* <label
                        htmlFor="showAllUser"
                        role="button"
                        className="hover:underline font-light text-gray-800 text-xs flex flex-row items-center text-end pl-7"
                    >
                        View all <ChevronRight className="h-4 w-4 stroke-1" />
                    </label> */}
                    <ModalUserEvent eventDetail={eventDetail} />
                </div>
                <div className="flex flex-row gap-4 mt-2 pl-0.5  ">
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
                            <p className="text-xs w-[6rem] text-center font-light mt-3 text-gray-800 cursor-pointer  hover:text-black">
                                {el.User.userName}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
