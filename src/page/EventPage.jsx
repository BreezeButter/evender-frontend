import CreateNewEventContainer from '../features/Event/component/CreateNewEventContainer';
import EventBar from '../features/Event/component/EventBar';
import EventContainer from '../features/Event/component/EventContainer';
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
            <div className="flex justify-center gap-5 ">
                <div className="flex flex-col gap-5 ">
                    <NextEventContainer />
                    <CreateNewEventContainer />
                </div>
                <div className="flex flex-col gap-5">
                    <EventContainer />
                    <EventContainer />
                    <EventContainer />
                    <EventContainer />
                </div>
            </div>
        </>
    );
}
