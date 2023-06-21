import { ClockIcon, LocationPin } from '../../../icons';

export default function LocationDetailEvent() {
    return (
        <>
            <div className="flex flex-col justify-center  gap-4 w-[25%] items-center">
                <div className="border-2 rounded-xl flex flex-col justify-center ">
                    <div className=" flex flex-col gap-4 p-6">
                        <div className="flex">
                            <ClockIcon />
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid, odit.
                            </p>
                        </div>
                        <div className="flex">
                            <LocationPin />
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid, odit.
                            </p>
                        </div>
                    </div>
                    <img
                        className="rounded-b-lg"
                        src="https://tn.com.ar/resizer/Sb7Z4QS-w6oDL_IvUzPi__pTUPE=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/KQY6CKSVO6RV25FVGEKBDKJUSQ.jpg"
                        alt=""
                    />
                </div>
                <button className="border-2 border-[#004DFF] text-[#004DFF] rounded-xl w-[60%] hover:bg-[#004DFF] hover:text-white">
                    Join
                </button>
            </div>
        </>
    );
}
