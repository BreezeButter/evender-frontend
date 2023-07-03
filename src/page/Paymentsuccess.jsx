import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { upBoostPost } from "../api/paymentApi";

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
                //const upBoostPostResponse = await upBoostPost(result.data);
                // console.log(result);
                //const responseFromStripe = Object
                //const uploadPostInput = {};
                // const uploadPostInput = {
                //     eventId: result.data.session.metadata.event_id,
                //     productDefaultPrice:
                //         result.data.session.metadata.productDefaultPrice,
                //     paymentStatus: result.data.session.payment_status,
                // };
                // console.log("uploadPostInput", uploadPostInput);
                // const test = { name: "note" };
                // console.log("test", test);
                // const responseUploadPost = await upBoostPost(uploadPostInput);
                // console.log(result.data.session.payment_status);
                // console.log(result.data.session.status);
                // console.log(result.data.session.metadata.event_id);
                // console.log(result.data.session.metadata.productDefaultPrice);
            } catch (error) {
                console.log(error);
            }
        };
        if (sessionId) {
            getPaymentSession();
        }
    }, []);
    // const dispatch = useDispatch();
    // dispatch(addPaymentSuccess(result));
    return <div>

    </div>;
}

export default Paymentsuccess;
