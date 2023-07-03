import { Link } from "react-router-dom";
import * as React from "react";
import { AlignRightIcon, ChevronRight } from "lucide-react";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function ModalUserEvent({ eventDetail }) {
    console.log(eventDetail.JoinEventUsers);
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <div
                        role="button"
                        className="hover:underline font-light -mr-1.5 text-gray-800 text-xs flex flex-row items-center text-end pl-7"
                    >
                        View all <ChevronRight className="h-4 w-4 stroke-1" />
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-whitebg">
                    <DialogHeader>
                        <DialogDescription>
                            <ScrollArea className="">
                                <div className="flex flex-col justify-center px-14 gap-5">
                                    {/* <h4 className="mb-4 text-sm font-medium leading-none">
                                        Tags
                                    </h4> */}
                                    {eventDetail.JoinEventUsers?.map(
                                        (el, idex) => (
                                            <React.Fragment key={idex}>
                                                <Link
                                                    to={`/evender/profile/${el.id}`}
                                                    key={idex}
                                                >
                                                    <div
                                                        className="flex items-center gap-5 "
                                                        key={idex}
                                                    >
                                                        <img
                                                            className="w-[5rem] h-[5rem] rounded-full object-cover"
                                                            src={el.User.image}
                                                            alt="ProfileImage"
                                                        />
                                                        <p>
                                                            {el.User.userName}
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Separator className="my-2 stroke-black fill-black text-black z-50 " />
                                            </React.Fragment>
                                        )
                                    )}
                                </div>
                            </ScrollArea>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/* <input type="checkbox" id="showAllUser" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className=" flex flex-col gap-6 ">
                        {eventDetail.JoinEventUsers?.map((el, idex) => (
                            <Link to={`/evender/profile/${el.id}`} key={idex}>
                                <div
                                    className="flex items-center gap-5"
                                    key={idex}
                                >
                                    <img
                                        className="w-[5rem] h-[5rem] rounded-full"
                                        src={el.User.image}
                                        alt="ProfileImage"
                                    />
                                    <p>{el.User.userName}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <label className="modal-backdrop" htmlFor="showAllUser">
                    Close
                </label>
            </div> */}
        </>
    );
}
