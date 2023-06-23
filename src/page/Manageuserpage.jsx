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
                    {/*ปุ่มการจัดการด้านข้างของฝั่งแอดมิน*/}
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
                        <Datachartpolar />
                        <Datachartverticalbar />
                    </div>
                </div>
            </div>
            <div className="grid">
                {/* <Datachartpolar /> */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
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
                            {/* row 4 */}
                            <tr>
                                <th>4</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>5</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 6 */}
                            <tr>
                                <th>6</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 7 */}
                            <tr>
                                <th>7</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 8 */}
                            <tr>
                                <th>8</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 9 */}
                            <tr>
                                <th>9</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="flex justify-center mt-4 gap-4">
                        {/* button-create */}
                        <div>
                            {/* Open the modal using ID.showModal() method */}
                            <button
                                className="btn btn-outline btn-success"
                                onClick={() => window.my_modal_1.showModal()}
                            >
                                Create
                            </button>
                            <dialog id="my_modal_1" className="modal">
                                <form method="dialog" className="modal-box">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                    <h3 className="font-bold text-lg">
                                        Hello!
                                    </h3>
                                    <p className="py-4">
                                        Press ESC key or click the button below
                                        to close
                                    </p>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>

                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-outline btn-success">
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                        {/* button-edit */}
                        <div>
                            {/* Open the modal using ID.showModal() method */}
                            <button
                                className="btn btn-outline btn-warning"
                                onClick={() => window.my_modal_2.showModal()}
                            >
                                Edit
                            </button>
                            <dialog id="my_modal_2" className="modal">
                                <form method="dialog" className="modal-box">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                    <h3 className="font-bold text-lg">
                                        Hello!
                                    </h3>
                                    <p className="py-4">
                                        Press ESC key or click the button below
                                        to close
                                    </p>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">
                                                What is your name?
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>

                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-outline btn-warning">
                                            Confirm
                                        </button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                        {/* button-delete */}
                        <div>
                            <button className="btn btn-outline btn-error">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
