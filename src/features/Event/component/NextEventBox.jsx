import React from 'react';

export default function NextEventBox() {
    return (
        <div className="flex border border-black rounded-md gap-2 p-3">
            <div>
                <div className="mb-3">
                    <p>today Fri 16 Jun 2023, 9:00 PM</p>
                    <p className="font-semibold">Urban Music Bar</p>
                </div>
                <p>at Liberty Thonglor Music & Bar</p>
            </div>
            <img src="" alt="" className="w-20 h-20 bg-slate-500 rounded" />
        </div>
    );
}
