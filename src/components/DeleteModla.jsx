import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

export default function DeleteModal({
    btnName,
    titleModal,
    descriptionModal,
    btnTextModal,
    // classExpreesion,
    hdlOnclick,
    num,
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="hover:underline pl-5 hover:text-redcute  font-normal text-gray-500  rounded-none h-6 z-40"
                >
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-whitebg">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-darkgraycute">
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-500">
                        This action cannot be undone. This will permanently
                        delete your event and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="border border-darkgraycute text-darkgraycute hover:text-darkgraycute hover:font-semibold">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="border border-darkgraycute bg-darkgraycute text-white hover:text-darkgraycute"
                        onClick={() => hdlOnclick()}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        // <div>
        // <button
        //     className={`${classExpreesion}`}
        //     onClick={() => window[`my_modal_${num}`].showModal()}
        // >
        //     {btnName}
        // </button>
        // <dialog id={`my_modal_${num}`} className="modal">
        //     <form method="dialog" className="modal-box">
        //         <h3 className="font-bold text-lg">{titleModal}</h3>
        //         <p className="py-4">{descriptionModal}</p>
        //         <div className="modal-action">
        //             {/* if there is a button in form, it will close the modal */}
        //             <button
        //                 className="btn btn-neutral
        //             "
        //                 onClick={() => hdlOnclick()}
        //             >
        //                 {btnTextModal}
        //             </button>
        //             <button
        //                 className="btn btn-accent
        //             "
        //             >
        //                 Cancle
        //             </button>
        //         </div>
        //     </form>
        // </dialog>
        // </div>
    );
}
