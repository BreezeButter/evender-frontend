import Button from "./Button";

export default function CreateNewEventContainer() {
    return (
        <div className="border border-darkbluecute rounded-2xl px-7 py-8 flex flex-col ">
            <h1 className="font-medium text-xl text-darkbluecute mb-4">
                Create your event!
            </h1>
            <p className="max-w-[350px] font-light text-base mb-10 text-darkbluecute">
                Connect with people in your area who are curious about the
                things you love.
            </p>
            <Button />
        </div>
    );
}
