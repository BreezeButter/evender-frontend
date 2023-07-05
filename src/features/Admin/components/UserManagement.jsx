// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Link } from "react-router-dom";
// import TaskEventAdmin from "./tableEventAdmin";
import { getAllUserAsync } from "../Slice/adminSlice";
import TableUserAdmin from "./tableUserAdmin";
import { useState } from "react";
import { initializeConnect } from "react-redux/es/components/connect";

//import Dashboardmanagement from "./Managedashboard";
export default function Usermanagement() {
    const users = useSelector((state) => state.admin.adminUser);
    // console.log(users);
    // const navigate = useNavigate();
    // const [onclick, setOnclick] = useState({});
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);

    useEffect(() => {
        const userFunction = async () => {
            await dispatch(getAllUserAsync()).unwrap();
        };
        userFunction();
    }, [click]);
    console.log("adasdasd", users);
    return (
        <div className="flex flex-row">
            <div className="flex flex-col m-12 ">
                <Link
                    to="/admin/eventmanagement"
                    className="btn btn-active btn-base-200 bg-white rounded-full w-[300px] mb-4"
                >
                    <button
                        className=" "
                    // onClick={() => navigate("/admin/eventmanagement")}
                    >
                        Event
                    </button>
                </Link>

                <Link
                    to="/admin/usermanagement"
                    className="  btn btn-active btn-base-200 rounded-full w-[300px]"
                >
                    <button
                        className=""
                    // onClick={() => navigate("/admin/usermanagement")}
                    >
                        User
                    </button>
                </Link>
            </div>

            <div className="flex">
                {/* <Datachartpolar /> */}
                <div className="overflow-x-auto">
                    <div className="flex flex-col gap-5 p-4 ">
                        {Array.isArray(users) &&
                            users.map((el) => (
                                <TableUserAdmin
                                    key={el.id}
                                    id={el.id}
                                    b={click}
                                    a={setClick}
                                    firstName={el.firstName}
                                    lastName={el.lastName}
                                    email={el.email}
                                    status={el.status}
                                    userName={el.userName}
                                // setOnclick={onclick}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}