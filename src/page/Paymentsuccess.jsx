import axios from "axios";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from 'lucide-react';
// import { useDispatch } from "react-redux";
// import { upBoostPost } from "../api/paymentApi";

function Paymentsuccess() {
    const [search] = useSearchParams();
    const sessionId = search.get("session_id");
    useEffect(() => {
        const getPaymentSession = async () => {
            try {
                const result = await axios.get(
                    "http://localhost:8888/payment/session?session_id=" +
                    sessionId
                );
            } catch (error) {
                console.log(error);
            }
        };
        if (sessionId) {
            getPaymentSession();
        }
    }, []);

    return (
        <div>
            <div className="bg-whitebg h-screen grid grid-cols-2 ">
                <div className=" p-6  flex-col mx-0 my-auto items-end rounded-3xl pb-[100px] ">
                    {/* <svg
                        viewBox="0 0 24 24"
                        className="text-green-600 w-36 h-36  my-6 ">
                        <path
                            fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                        ></path>
                    </svg> */}
                    <div className=" text-center flex flex-col items-end justify-center">
                        <div className="flex flex-">
                            <h3 className="md:text-5xl text-lightbluecute font-semibold text-end">
                                <span>Payment Successful</span>
                            </h3>
                            <CheckCircle2 className="text-lightbluecute" size={44} />
                        </div>
                        <p className="text-gray-600 text-xl my-2">
                            Thank you for completing your secure online payment.
                        </p>
                        <p className="text-xl"> Have a great day! </p>

                        <a href="/evender/event "
                            className="mt-[120px] font-bold hover:underline hover:text-lightbluecute cursor-pointer"
                        > Back to Event</a>
                        {/* <div class="py-10 text-center">
                            <a
                                href="#"
                                class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                            >
                                GO BACK
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="mx-0 my-auto ">
                    <img
                        src='/src/assets/techny-payment-by-card-using-a-terminal.png'
                        alt="paymentpicture"
                        className="w-[480px] h-[480px]" />

                </div>
            </div>
        </div>
    );
}

export default Paymentsuccess;

