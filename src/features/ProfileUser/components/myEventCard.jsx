import { convertDate } from "../../../utils/dateUtil";

export default function MyEventCard({
    title,
    location,
    image1,
    description,
    dateStart,
}) {
    const [date, time] = convertDate(dateStart);
    return (
        <div className="w-[70%] border border-gray-300 rounded-md p-6 ">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">
                        {date} {time}
                    </p>
                    <p className="text-lg font-medium text-darkbluecute mb-7">
                        {title}
                    </p>
                    <div className="flex flex-row">
                        <p className="text-base font-medium mr-1 text-darkbluecute">
                            at
                        </p>
                        <p className="text-base font-normal text-darkbluecute">
                            {location}
                        </p>
                    </div>
                </div>

                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={image1} />
                    </div>
                </div>
            </div>
        </div>
    );
}
