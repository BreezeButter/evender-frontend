import Button from './Button';

export default function CreateNewEventContainer() {
    return (
        <div className="border border-black rounded-md p-5 flex flex-col gap-5">
            <h1 className="font-semibold text-lg">Create your event!</h1>
            <Button />
        </div>
    );
}
