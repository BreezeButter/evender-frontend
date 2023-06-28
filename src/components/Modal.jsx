

export default function Modal({ btnName, titleModal, descriptionModal, btnTextModal, classExpreesion, hdlOnclick }) {
    return (
        <div>
            <button className={`btn ${classExpreesion}`} onClick={() => window.my_modal_1.showModal()}>{btnName}</button>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">{titleModal}</h3>
                    <p className="py-4">{descriptionModal}</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-neutral
                        "
                            onClick={() => hdlOnclick()}>{btnTextModal}</button>
                        <button className="btn btn-accent
                        "
                        >Cancle</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}
