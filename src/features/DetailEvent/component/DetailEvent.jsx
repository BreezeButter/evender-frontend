export default function DetailEvent({ eventDetail }) {
    return (
        <>
            <div className="">
                <div className="">
                    <h1 className="font-medium text-3xl text-darkbluecute border-b border-gray-300 pb-6 ">
                        Details
                    </h1>
                </div>

                <div className="">
                    <p className="font-normal text-base  text-darkgraycute mt-6">
                        {eventDetail?.description}
                    </p>
                </div>
            </div>
        </>
    );
}
