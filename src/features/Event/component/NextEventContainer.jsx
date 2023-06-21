import NextEventBox from './NextEventBox';

export default function NextEventContainer() {
    return (
        <div className="border border-black rounded-md p-5 flex flex-col gap-4">
            <h1 className="font-semibold text-lg">Your next events</h1>
            <NextEventBox />
        </div>
    );
}
