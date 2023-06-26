import React from "react";


export default function Header({ title }) {
    return (
        <h1 className="text-4xl text-center border-b border-gray-300 py-20 mb-14 text-darkbluecute font-semibold text-indent:1px">
            {title}
            {/* <p className="text-base font-extralight mt-3">
                Let's join your event!
            </p> */}
        </h1>
    );
}
