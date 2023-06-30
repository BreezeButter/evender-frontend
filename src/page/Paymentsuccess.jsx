import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        if (sessionId) {
            getPaymentSession();
        }
    }, []);
    return <div>Paymentsuccess</div>;
}

export default Paymentsuccess;
