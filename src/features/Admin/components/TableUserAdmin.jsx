import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllUserAsync } from "../Slice/adminSlice";

export default function TableUserAdmin({
    id,
    userName,
    firstName,
    lastName,
    email,
    gender,
    status,
    b,
    a,
}) {
    const dispatch = useDispatch;

    const onBanUser = async () => {
        try {
            // console.log(id, "iddddddd");
            const result = await axios.patch(
                `http://localhost:8888/admin/adminBanUser/${id}`
            );
            a(!b);
            // await dispatch(getAllUserAsync()).unwrap();
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(status);

    const onUnBanUser = async () => {
        try {
            const result = await axios.patch(
                `http://localhost:8888/admin/adminUnBanUser/${id}`
            );
            a(!b);
            // await dispatch(getAllUserAsync()).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="flex max-w-[600px] border border-lightbluecute p-3 gap-4 px-10 py-6 rounded-2xl hover:scale-105 duration-500 cursor-pointer"
        // onClick={() => navigate(`/evender/eventDetail/${id}`)}
        >
            <div className="flex flex-col gap-3 ">
                <h1 className="text-lg font-semibold text-darkbluecute -mt-1 ">
                    {firstName + " " + lastName}
                </h1>

                <h1 className="font-medium text-darkbluecute text-base mt-1.5">
                    {email}
                </h1>
                <div className=" overflow-hidden h-10">
                    <p className="max-w-[450px] text-sm font-light ">
                        {status ? "Activate" : "Un activate"}
                    </p>
                </div>
            </div>
            {/* button-delete */}
            <div className="flex flex-col gap-6">
                <div>
                    {status ? (
                        <div
                            // to={paymentLinkUrl}
                            className="btn btn-outline btn-error"
                            onClick={onBanUser}
                        // setOnclick={onclick}
                        >
                            Ban User
                        </div>
                    ) : (
                        <div
                            // to={paymentLinkUrl}
                            className="btn btn-outline btn-active"
                            onClick={onUnBanUser}
                        // setOnclick={onclick}
                        >
                            Unban
                        </div>
                    )}
                </div>
                {/* You can open the modal using ID.showModal() method */}
            </div>
        </div>
    );
}