export default function EventDetailPage() {
    return (
        <div className="flex justify-center flex-col">
            {/* User Header + Button */}
            <div className=" border-b-[1px] border-[#004DFF]">
                <div className="flex justify-between w-[75%] m-auto p-4 my-4">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="font-semibold text-3xl">
                                Chilling House
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-[7rem] h-[7rem] rounded-full"
                                src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
                                alt=""
                            />
                            <div>
                                <p>Hosted By</p>
                                <p className="font-semibold">
                                    Henrik J. and 3 others
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex  items-end p-4">
                        <button className="w-[6rem] h-[2.5rem] bg-[#004DFF] opacity-90 rounded-full text-white">
                            edit
                        </button>
                    </div>
                </div>
            </div>

            {/* carousel */}
            <div className="flex flex-col justify-center items-center mt-10 rounded-2xl">
                <div className="carousel w-[1250px] rounded-2xl">
                    <div
                        id="item1"
                        className="carousel-item w-[1250px] rounded-2xl"
                    >
                        <img
                            src="https://cdn.pixabay.com/photo/2023/03/22/01/41/little-girl-7868485_1280.jpg"
                            className="w-[1250px] h-[450px] object-cover rounded-2xl"
                        />
                    </div>
                    <div
                        id="item2"
                        className="carousel-item w-[1250px] rounded-2xl"
                    >
                        <img
                            src="https://cdn.pixabay.com/photo/2023/06/12/19/32/metro-8059215_1280.jpg"
                            className="w-[1250px] h-[450px] object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">
                        1
                    </a>
                    <a href="#item2" className="btn btn-xs">
                        2
                    </a>
                </div>
            </div>
            {/* detail */}
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <h1 className="font-semibold text-3xl">Details</h1>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa neque rem consectetur ipsum! Quae, modi.
                            Necessitatibus ipsa distinctio explicabo obcaecati
                            consequuntur dignissimos eum odit eius saepe totam,
                            suscipit laborum perspiciatis at doloremque vero
                            omnis amet porro dicta eligendi modi soluta
                            veritatis animi. Animi ex, rerum ratione atque
                            architecto dolorem iure?
                        </p>
                    </div>
                    {/* Card Member*/}
                    <div>
                        <div>
                            <h1>Attendees (9)</h1>

                            <a href="">View all{'>'}</a>
                        </div>
                        <img
                            className="w-[7rem] h-[7rem] rounded-full"
                            src="https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_1280.jpg"
                            alt=""
                        />
                        <img
                            className="w-[7rem] h-[7rem] rounded-full"
                            src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
                            alt=""
                        />
                        <img
                            className="w-[7rem] h-[7rem] rounded-full"
                            src="https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_1280.jpg"
                            alt=""
                        />
                        <img
                            className="w-[7rem] h-[7rem] rounded-full"
                            src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <input type="datetime-local" />
                        </div>
                        <div>icon</div>
                    </div>
                    <button>Join</button>
                </div>
            </div>
        </div>
    );
}
