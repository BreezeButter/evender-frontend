export default function Button() {
    return (
        <>
            <label
                htmlFor="my_modal_7"
                className="btn bg-black text-white rounded-full w-60 h-10 self-center"
            >
                Create Event
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Create your Event</h3>
                    <form className="flex flex-col gap-5">
                        <div>
                            <h1>Title</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Description</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Location</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </>
    );
}
