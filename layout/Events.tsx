import EventCard from "../components/cards/event/EventCard"

interface EventProps {
    id: string
    key: string
    name: string
    eventpic: string
    description: string
    date: string
    eventLink: string
    locationUrl: string
    locationName: string
    type: string
    isActive: boolean
    isCompleted: boolean
    slug: string
}

interface EventsProps {
    events: EventProps[]
}

function Events({ events: events }: EventsProps) {
    return (
        <>
            <div className="bg-slate-800  text-center pt-20">
                <div className="conatiner mx-auto">
                    <h1 className='lg:text-6xl text-4xl dark:text-white font-mono'>Upcoming Events</h1>
                    <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        Checkout our upcoming events
                        {
                            events?.length === 0 && (
                                <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                                    No events found
                                </p>
                            )
                        }
                    </p>
                    <div>
                        <div className="grid p-10 justify-center items-center">
                            {
                                events?.map((item: EventProps) => {
                                    return (
                                        <EventCard
                                            id={item.id}
                                            key={item.id}
                                            name={item.name}
                                            eventpic={item.eventpic}
                                            description={item.description}
                                            date={item.date}
                                            eventLink={item.eventLink}
                                            locationUrl={item.locationUrl}
                                            locationName={item.locationName}
                                            type={item.type}
                                            isActive={item.isActive}
                                            isCompleted={item.isCompleted}
                                            slug={item.slug}

                                        />
                                    );
                                })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Events