import React from 'react';
import NextEventBox from './NextEventBox';

export default function NextEventContainer() {
    return (
        <div className="flex flex-col gap-5">
            <div className="border border-black rounded-md p-5 flex flex-col gap-4">
                <h1 className="font-semibold text-lg">Your next events</h1>
                <NextEventBox />
            </div>
            <div className="border border-black rounded-md p-5 flex flex-col gap-5">
                <h1 className="font-semibold text-lg">Create your event!</h1>
                <button className="bg-black text-white rounded-full w-60 h-10 self-center">
                    Create Event
                </button>
            </div>
        </div>
    );
}
