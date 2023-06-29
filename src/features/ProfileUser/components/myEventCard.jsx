import { convertDate } from "../../../utils/dateUtil";
import { useNavigate } from "react-router-dom";

export default function MyEventCard({
    id,
    title,
    placeProvince,
    image1,
    description,
    dateStart,
    id,
}) {
    const navigator = useNavigate();
    const [date, time] = convertDate(dateStart);
    const navigate = useNavigate();
    return (
        <div
            className="w-[70%] border border-gray-300 rounded-md p-6 cursor-pointer  hover:border-lightbluecute "
            onClick={() => navigate(`/evender/eventDetail/${id}`)}
        >
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
                            {placeProvince}
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
