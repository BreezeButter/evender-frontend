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

export default function ModalLeaveGroup({
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
                    className="hover:bg-transparent rounded-lg h-11 w-[120px] hover:text-redcute  text-white hover:border bg-redcute border-redcute border hover:border-redcute  "
                >
                    Leave Group
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-whitebg">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-darkgraycute">
                        Confirm Leave Group
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-500">
                        You can join again if you want before the event ends or
                        the group is full
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
                        Leave
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
