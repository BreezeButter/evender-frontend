export default function CarouselDetail({ eventDetail }) {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-16 rounded-2x ">
                <div className="carousel max-w-[1250px] rounded-2xl">
                    <div
                        id="item1"
                        className="carousel-item max-w-[1250px] rounded-2xl"
                    >
                        <img
                            src={eventDetail.image1}
                            alt="Image1"
                            className="w-[1250px] h-[420px] object-cover rounded-2xl"
                        />
                    </div>
                    <div
                        id="item2"
                        className="carousel-item max-w-[1250px] rounded-2xl"
                    >
                        <img
                            src={eventDetail.image2}
                            alt="Image2"
                            className="w-[1250px] h-[420px] object-cover rounded-2xl"
                        />
                    </div>
                    <div
                        id="item3"
                        className="carousel-item max-w-[1250px] rounded-2xl"
                    >
                        <img
                            src={eventDetail.image3}
                            alt="Image3"
                            className="w-[1250px] h-[420px] object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2 mt-3">
                    <a href="#item1" className="btn btn-xs">
                        1
                    </a>
                    <a href="#item2" className="btn btn-xs">
                        2
                    </a>
                    <a href="#item3" className="btn btn-xs">
                        3
                    </a>
                </div>
            </div>
        </div>
    );
}
