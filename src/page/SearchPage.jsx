import EventBar from "../features/Event/component/EventBar"
import EventContainer from "../features/Event/component/EventContainer"

export default function SearchPage() {
  return (
    <div>
        <EventBar event={[
                    'All',
                    'Bar',
                    'Sport',
                    'Restaurant',
                    'Cafe',
                    'Life Style',
                ]}/>
                <div className="flex flex-col gap-5 ">
                    <EventContainer />
                    <EventContainer />
                    <EventContainer />
                    <EventContainer />
                </div>
    </div>
  )
}
