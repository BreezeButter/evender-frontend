export default function DetailEvent({ eventDetail }) {


    return (
        <>
            <div>
                <h1 className="font-semibold text-3xl">{eventDetail?.title}</h1>
            </div>

            <div>
                <p className="font-light text-sm">{eventDetail?.description}</p>
            </div>
        </>
    );
}
