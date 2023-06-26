import React from "react";
import { useNavigate } from "react-router-dom";

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
                        <div className="flex flex-col gap-4">
                            {/* 35 */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>35 COINS</p>
                                </div>
                                <a href="https://buy.stripe.com/test_3cs6qp8TL1F63Ys3ce">
                                    <button className="btn btn-success">
                                        $0.99
                                    </button>
                                </a>
                            </div>
                            {/* 69 */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>69 COINS</p>
                                </div>
                                <a href="https://buy.stripe.com/test_bIY6qpfi9abC9iMbIL">
                                    <button className="btn btn-success">
                                        $1.99
                                    </button>
                                </a>
                            </div>
                            {/* 99 */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>99 COINS</p>
                                </div>
                                <a href="https://buy.stripe.com/test_aEUeWV9XPbfG9iM7sw">
                                    <button className="btn btn-success">
                                        $2.99
                                    </button>
                                </a>
                            </div>
                            {/* 149 */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>149 COINS</p>
                                </div>
                                <a href="https://buy.stripe.com/test_9AQ9CBda1abC8eIeUZ">
                                    <button className="btn btn-success">
                                        $3.99
                                    </button>
                                </a>
                            </div>
                            {/* 349 */}
                            <div className="flex justify-between w-72">
                                <div>
                                    <p>349 COINS</p>
                                </div>
                                <a href="https://buy.stripe.com/test_cN29CB4DvfvW8eI28e">
                                    <button className="btn btn-success">
                                        $7.99
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-4">
                        <button
                            className="btn btn-outline btn-error"
                            onClick={() =>
                                navigate("/admin/dashboardmanagement")
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
