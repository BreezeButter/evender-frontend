import { UserEventIcon } from "../../../icons";
import { convertDate } from "../../../utils/dateUtil";
import { useNavigate } from "react-router-dom";


export default function EventContainer({
    title,
    placeProvince,
    image1,
    description,
    joinEventUser,
    dateStart,
    id,
    capacity,
    isBoost
}) {
    const navigate = useNavigate();
    const [date, time] = convertDate(dateStart);
    function formatDateAndTimeAgo(dateString) {
        // Convert date string to Date object
        const originalDate = new Date(dateString);

        // Format the date and time
        const formattedDate = originalDate.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });

        // Calculate the time difference in milliseconds
        const currentDate = new Date();
        const timeDifference = Math.abs(currentDate - originalDate);

        // Convert milliseconds to seconds, minutes, hours, and days
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        let timeAgo;

        if (days > 0) {
            timeAgo = ` Event start in ${days} day${days > 1 ? "s" : ""}`;
        } else if (hours > 0) {
            timeAgo = `Event start in ${hours} hour${hours > 1 ? "s" : ""}`;
        } else if (minutes > 0) {
            timeAgo = ` Event start in ${minutes} minute${minutes > 1 ? "s" : ""}`;
        } else {
            timeAgo = `Event start in ${seconds} second${seconds !== 1 ? "s" : ""}`;
        }

        return {
            formattedDate,
            timeAgo,
        };
    }

    // Example usage
    const dateString = dateStart;
    const { formattedDate, timeAgo } = formatDateAndTimeAgo(dateString);

    console.log(formattedDate);
    console.log(timeAgo);



    return (
        <div
            className={`flex max-w-[800px] border ${isBoost ? "  border-violetcute border-[2px]" : "border-lightbluecute"} p-3 gap-4 px-10 py-6 rounded-2xl hover:scale-105 duration-500 cursor-pointer justify-between`}
            onClick={() => navigate(`/evender/eventDetail/${id}`)}
        >
            <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 font-medium">
                    {date} {time}
                </p>
                <h1 className="text-lg font-semibold text-darkbluecute -mt-1 ">
                    {title}
                </h1>
                <div className="flex gap-7 items-center ">
                    <div className="flex ">
                        {joinEventUser?.map((el) => (
                            <img
                                key={el.id}
                                src={el.User.image}
                                alt=""
                                className="w-10 h-10 bg-slate-500 rounded-full -mr-4  min-w-[40px] object-cover"
                            />
                        ))}
                    </div>
                    <div className="border border-gray-500 h-fit rounded-md px-2 py-0.5 flex flex-row items-center gap-0.5 ">
                        <UserEventIcon className="pb-0.5" />
                        <p className="text-sm font-light text-darkgraycute">
                            {`${joinEventUser.length}/${capacity}`}
                        </p>
                    </div>
                </div>
                <h1 className="font-medium text-darkbluecute text-base mt-1.5">
                    {placeProvince}
                </h1>
                <div className=" overflow-hidden max-h-10">
                    <p className="max-w-[450px]  text-sm font-light text-darkbluecute ">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between ml-20">
                <p className="text-end text-sm font-light text-gray-400">
                    {timeAgo}
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
