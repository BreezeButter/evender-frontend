import EventBar from '../features/Event/component/EventBar';
import Header from '../features/Event/component/Header';
import NextEventContainer from '../features/Event/component/NextEventContainer';
export default function EventPage() {
    return (
        <>
            <Header title="Events" />
            <EventBar
                event={[
                    'All',
                    'Bar',
                    'Sport',
                    'Restaurant',
                    'Cafe',
                    'Life Style',
                ]}
            />
            <div className="flex justify-center gap-5">
                <NextEventContainer />
                <div>right</div>
            </div>
        </>
    );
}
