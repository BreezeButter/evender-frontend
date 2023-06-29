import React from "react";
import { useNavigate } from "react-router-dom";
// import {
//     Datachartpolar,
//     Datachartverticalbar,
// } from "../features/Admin/components";

export default function Purchasecoinsmanagement() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 text-black shadow-2xl">
                    <div className="card-body items-center text-center gap-4">
                        <h2 className="card-title">
                            Welcome to Purchase Evender
                        </h2>
                        {/* <p>
                            It's not about how much we lost. It's about how much
                            we have left.
                        </p> */}
                        <div className="flex flex-col gap-12">
                            {/* Boost Post */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>Boost Post</p>
                                </div>
                                <a href="https://buy.stripe.com/test_5kAg0ZgmdfvW8eIbIP">
                                    <button className="btn btn-success">
                                        $1.59 Buy
                                    </button>
                                </a>
                            </div>
                            {/* Super Boost Post */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>Super Boost Post</p>
                                </div>
                                <a href="https://buy.stripe.com/test_bIY8yx1rj1F60MgfZ6">
                                    <button className="btn btn-success">
                                        $2.59 Buy
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-4">
                        <button
                            className="btn btn-outline btn-error"
                            onClick={() =>
                                // console.log(id)
                                navigate(`/evender/profile/${1}`)
                            }
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
