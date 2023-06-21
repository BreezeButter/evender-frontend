import ModalEditDetail from './ModalEditDetail';

export default function HostDetailEvent({ eventDetail, hostDetail }) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold text-3xl">
                        {eventDetail.location}
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        className="w-[7rem] h-[7rem] rounded-full"
                        src={hostDetail.User?.image}
                        alt=""
                    />
                    <div>
                        <p>Hosted By</p>

                        <p className="font-semibold">
                            {hostDetail.User?.userName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex  items-end p-4">
                <label
                    className="w-[6rem] h-[2.5rem] bg-[#004DFF] opacity-90 rounded-full text-white flex justify-center items-center hover:bg-white hover:text-[#004DFF] hover:border-2 hover:border-[#004DFF]"
                    htmlFor="EditEvent"
                    role="button"
                >
                    edit
                </label>
                <ModalEditDetail />
            </div>
        </>
    );
}
