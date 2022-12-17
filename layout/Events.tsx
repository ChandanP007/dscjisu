import Link from "next/link"
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
            <div className="bg-slate-800  text-center pt-2">
                <div className="conatiner mx-auto lg:mx-24">
                    <h1 className='lg:text-5xl text-4xl text-white font-mono'>Upcoming Events</h1>
                    {
                        events?.length === 0 && (
                            <p className='text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                                No events found
                            </p>
                        )
                    }
                    <div className="">
                        <div className={`grid  ${events.length >= 3 ? "grid-cols-3" : `${events.length == 2 ? "grid-cols-2" : "grid-cols-1"}`} gap-4 p-10 justify-items-center items-center content-center`}>
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

                    <div className="p-5 events-btn">
                        <Link href="/event" passHref>
                            <button className="bg-yellow-400 p-5 rounded-lg ">
                                <h1 className=' text-black font-mono'>View Past Events</h1>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events