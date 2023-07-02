export default function DetailEvent({ eventDetail }) {
    return (
        <>
            <div>
                <h1 className="font-medium text-2xl text-darkbluecute border-b border-gray-400 pb-6 ">
                    Details
                </h1>
            </div>

            <div>
                <p className="font-light text-base text-darkgraycute mt-6">
                    {eventDetail?.description}
                </p>
            </div>
        </>
    );
}
