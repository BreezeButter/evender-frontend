import NextEventBox from "./NextEventBox";

export default function NextEventContainer({ eventUser }) {
    return (
        <div className="border border-darkgraycute rounded-2xl px-7 pt-8 pb-6 flex flex-col gap-4">
            <h1 className="font-medium text-xl text-darkbluecute mb-3">
                Your next events
            </h1>
            {eventUser.length !== 0 ? (
                <NextEventBox eventUser={eventUser} />
            ) : (
                <p className="text-darkbluecute font-light pb-3">
                    Let's join your first event to connect with people in your
                    area.
                </p>
            )}
        </div>
    );
}
