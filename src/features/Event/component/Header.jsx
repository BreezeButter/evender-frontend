import React from "react";

export default function Header({ title }) {
    return (
        <h1 className="text-4xl text-center  pt-16 pb-16 text-lightbluecute font-semibold text-indent:1px">
            {title}
            {/* <p className="text-base font-extralight mt-3">
                Let's join your event!
            </p> */}
        </h1>
    );
}
