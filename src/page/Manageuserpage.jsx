import { Datachartpolar } from "../components/chart/Datachartpolar";
import { Datachartverticalbar } from "../components/chart/Datachartverticalbar";
import { useNavigate } from "react-router-dom";
//import Dashboardmanagement from "./Managedashboard";
export default function Usermanagement() {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-2">
            <div>
                <div className="flex justify-center">
                    Usermanagement - It's not about how much we lost. It's about
                    how much we have left.
                </div>
                <div className="grid grid-cols-2 h-full">
                    <div className="flex flex-col w-full gap-4 mt-4 pl-8 pr-8">
                        {/* <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() => navigate("/admin/eventmanagement")}
                        >
                            Dashboard
                        </button> */}
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
                        {/* <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() => navigate("/managementsample1")}
                        >
                            Sample-1
                        </button>
                        <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() => navigate("/managementsample2")}
                        >
                            Sample-2
                        </button>
                        <button
                            className="btn btn-active btn-base-200 rounded-full"
                            onClick={() => navigate("/adminlogin")}
                        >
                            Logout
                        </button> */}
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>user_name</th>
                                        <th>first_name</th>
                                        <th>email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
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
