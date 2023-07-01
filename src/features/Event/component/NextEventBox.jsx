import { convertDate } from "../../../utils/dateUtil";
import { useNavigate } from "react-router-dom";

export default function NextEventBox({ eventUser }) {
    const navigate = useNavigate();

    return (
        <>
            {/* onClick={() => navigate(`/evender/eventDetail/${id}`)} */}
            {/* el.Event.id */}
            <div>
                {eventUser.map((el, index) => {
                    const [date, time] = convertDate(el.Event.dateStart);
                    return (
                        <div
                            key={index}
                            onClick={() =>
                                navigate(`/evender/eventDetail/${el.Event.id}`)
                            }
                            className="cursor-pointer"
                        >
                            <div className="flex flex-col border border-gray-300 rounded-md mb-3.5 px-4 py-3 hover:border-violetcute">
                                <div className="flex flex-row justify-between items-center ">
                                    <div>
                                        <div className="mb-3">
                                            <p className="text-xs text-gray-500 font-medium">
                                                {date} {time}
                                            </p>
                                            <p className="font-medium text-base text-darkbluecute mt-1.5 max-w-[250px]">
                                                {el.Event.title}
                                            </p>
                                        </div>
                                        <div className="flex flex-row px-5 ">
                                            <p className="mr-1 text-sm font-medium text-darkbluecute -ml-5">
                                                at
                                            </p>
                                            <p className="font-light text-sm text-darkbluecute">
                                                {el.Event.placeProvince}
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src={el.Event.image1}
                                        alt=""
                                        className="w-20 h-20 bg-slate-500 rounded-md object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
