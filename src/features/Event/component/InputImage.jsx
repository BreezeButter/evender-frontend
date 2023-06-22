import React from "react";

export default function InputImage({ name, onChange }) {
    return (
        <div>
            <input type="file" onChange={onChange} name={name} />
        </div>
    );
}
