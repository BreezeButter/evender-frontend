import { Datachartpolar } from "../components/chart/Datachartpolar";
import { Datachartverticalbar } from "../components/chart/Datachartverticalbar";
import { useNavigate } from "react-router-dom";
export default function Dashboardmanagement() {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-2">
            <div>
                <div className="flex justify-center">
                    It's not about how much we lost. It's about how much we have
                    left.
                </div>
                <div className="grid grid-cols-2 h-full">
                    <div className="flex flex-col w-full gap-4 mt-4 pl-8 pr-8">
                        <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() =>
                                navigate("/admin/dashboardmanagement")
                            }
                        >
                            Dashboard
                        </button>
                        <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() => navigate("/admin/eventmanagement")}
                        >
                            Event
                        </button>
                        <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() => navigate("/admin/usermanagement")}
                        >
                            User
                        </button>
                        <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() =>
                                navigate("/admin/purchasemanagement")
                            }
                        >
                            Purchase
                        </button>
                    </div>
                    <div>
                        <Datachartverticalbar />
                        <Datachartverticalbar />
                    </div>
                </div>
            </div>
            <div className="justify-center items-center flex">
                <Datachartpolar />
            </div>
        </div>
    );
}
