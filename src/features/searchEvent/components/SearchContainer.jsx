export default function SearchContainer(
    title,
    location,
    image1,
    description,
    joinEventUser,
    dateStart,
) {
    return (
        <div className="flex max-w-[800px] border border-blue-800 rounded-md p-3 gap-4">
            <div className="flex flex-col gap-3">
                <p></p>
                <h1 className="text-xl font-semibold">Urban Music Bar</h1>
                <div className="flex gap-5">
                    <div className="flex">
                        <img
                            src=""
                            alt=""
                            className="w-10 h-10 bg-slate-500 rounded-full -mr-2"
                        />
                        <img
                            src=""
                            alt=""
                            className="w-10 h-10 bg-slate-500 rounded-full -mr-2"
                        />
                        <img
                            src=""
                            alt=""
                            className="w-10 h-10 bg-slate-500 rounded-full -mr-2"
                        />
                    </div>
                    <div className="border border-black h-fit my-auto rounded-md">
                        43/53
                    </div>
                </div>
                <h1 className="font-semibold">Liberty Thonglor Music & Bar</h1>
                <p className="max-w-[450px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nam dolorum animi labore! Vitae, reprehenderit. Voluptate
                    earum ipsum blanditiis quis nobis.
                </p>
            </div>
            <div className="flex flex-col justify-around">
                <p>1 day</p>
                <img
                    src=""
                    alt=""
                    className="w-20 h-20 bg-slate-500 rounded-md"
                />
            </div>
        </div>
    );
}
