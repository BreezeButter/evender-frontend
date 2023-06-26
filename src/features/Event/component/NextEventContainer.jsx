import NextEventBox from "./NextEventBox";

export default function NextEventContainer({ eventUser }) {
    return (
        <div className="border border-darkgraycute rounded-2xl px-7 pt-8 pb-6 flex flex-col gap-4">
            <h1 className="font-medium text-xl text-darkbluecute mb-3">
                Your next events
            </h1>
            <NextEventBox eventUser={eventUser} />
        </div>
    );
}
