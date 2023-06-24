import { LeftIcon } from "../icons";
// import Footer from "../layouts/Footer";
import Headers from "../layouts/Headers";

export default function Chat() {
    return (
        <>
            <Headers />

            <div className="border-t border-gray-300 flex flex-row">
                {/* 1 */}
                <div className="w-[300px]">
                    <div className="relative">
                        <div className="w-[300px] h-screen bg-lightbluecute opacity-10"></div>
                        <p className="text-lightbluecute text-base font-medium cursor-pointer absolute left-14 bottom-28 hover:underline flex items-center">
                            <LeftIcon className="mr-2" />
                            Left chat
                        </p>
                    </div>
                </div>

                {/* 2 */}
                <div className="flex flex-col w-[700px] border-l border-r border-gray-300">
                    <div className="py-6 px-2 border-b  border-gray-300 flex flex-row items-center justify-center cursor-pointer hover:bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                            alt=""
                            className="rounded-full w-16 h-16 mr-7"
                        />
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <h1 className="mb-2.5 text-lg font-medium text-darkbluecute">
                                    Urban Music Bar
                                </h1>
                                <p className="text-xs font-light ml-7 pt-1 text-gray-500">
                                    8:00 PM
                                </p>
                            </div>
                            <p className="text-sm font-light ">
                                It is a long established fact...
                            </p>
                        </div>
                    </div>

                    <div className="py-6 px-2 border-b  border-gray-300 flex flex-row items-center justify-center cursor-pointer hover:bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                            alt=""
                            className="rounded-full w-16 h-16 mr-7"
                        />
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <h1 className="mb-2.5 text-lg font-medium text-darkbluecute">
                                    Urban Music Bar
                                </h1>
                                <p className="text-xs font-light ml-7 pt-1 text-gray-500">
                                    8:00 PM
                                </p>
                            </div>
                            <p className="text-sm font-light ">
                                It is a long established fact...
                            </p>
                        </div>
                    </div>

                    <div className="py-6 px-2 border-b  border-gray-300 flex flex-row items-center justify-center cursor-pointer hover:bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                            alt=""
                            className="rounded-full w-16 h-16 mr-7"
                        />
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <h1 className="mb-2.5 text-lg font-medium text-darkbluecute">
                                    Urban Music Bar
                                </h1>
                                <p className="text-xs font-light ml-7 pt-1 text-gray-500">
                                    8:00 PM
                                </p>
                            </div>
                            <p className="text-sm font-light ">
                                It is a long established fact...
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="w-full flex flex-col justify-between pb-32 px-11 pt-8">
                    <div>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=8" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Obi-Wan Kenobi
                                <time className="text-xs opacity-50 ml-2.5">
                                    12:45
                                </time>
                            </div>
                            <div className="chat-bubble bg-gray-200 text-darkbluecute">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </div>
                            <div className="chat-footer opacity-50">
                                Delivered
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=8" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Anakin
                                <time className="text-xs opacity-50 ml-2.5">
                                    12:46
                                </time>
                            </div>
                            <div className="chat-bubble bg-gray-200 text-darkbluecute ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium iusto expedita
                                dolorum, error sit amet deserunt libero sequi
                                nesciunt soluta?
                            </div>
                            <div className="chat-footer opacity-50">
                                Seen at 12:46
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-full flex justify-between p-1.5">
                        <input
                            type="text"
                            className="w-full bg-transparent  outline-none pl-6 text-darkbluecute"
                        />
                        <button className="w-28 bg-lightbluecute rounded-full text-white py-2 hover:opacity-90">
                            Send
                        </button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
