import { UserEventIcon } from "../../../icons";
import { convertDate } from "../../../utils/dateUtil";

export default function EventContainer({
    title,
    location,
    image1,
    description,
    joinEventUser,
    dateStart,
}) {
    const [date, time] = convertDate(dateStart);

    return (
        <div className="flex max-w-[800px] border border-lightbluecute p-3 gap-4 px-10 py-6 rounded-2xl hover:scale-105 duration-500 cursor-pointer">
            <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 font-medium">
                    {date} {time}
                </p>
                <h1 className="text-lg font-semibold text-darkbluecute -mt-1 ">
                    {title}
                </h1>
                <div className="flex gap-7 items-center">
                    <div className="flex">
                        {joinEventUser?.map((el) => (
                            <img
                                key={el.id}
                                src={el.User.image}
                                alt=""
                                className="w-10 h-10 bg-slate-500 rounded-full -mr-4"
                            />
                        ))}
                    </div>
                    <div className="border border-gray-500 h-fit rounded-md px-2 py-0.5 flex flex-row items-center gap-0.5">
                        <UserEventIcon className="pb-0.5" />
                        <p className="text-sm font-light">43/53</p>
                    </div>
                </div>
                <h1 className="font-medium text-darkbluecute text-base mt-1.5">
                    {location}
                </h1>
                <div className=" overflow-hidden h-10">
                    <p className="max-w-[450px] text-sm font-light ">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between ml-20">
                <p className="text-end text-sm font-light text-gray-400">
                    1 day
                </p>
                <img
                    src={image1}
                    alt=""
                    className="w-28 h-28 bg-slate-500 rounded-lg object-cover"
                />
            </div>
        </div>
    );
}
