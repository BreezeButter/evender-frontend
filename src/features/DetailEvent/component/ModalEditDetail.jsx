export default function ModalEditDetail() {
    return (
        <div>
            <input type="checkbox" id="EditEvent" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="">
                        <div className="flex flex-col justify-center items-center">
                            <input type="text" placeholder="title" />
                            <input type="text" placeholder="title" />
                            <input type="text" placeholder="title" />
                            <input type="text" placeholder="title" />
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="EditEvent">
                    Close
                </label>
            </div>
        </div>
    );
}
