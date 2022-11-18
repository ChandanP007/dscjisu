import Head from "next/head";
import EventCard from "../../components/cards/event/EventCard";
import { EventMeta, getAllEvents } from "../../lib/event";


export default function Blog({ events }: { events: EventMeta[] }) {
    return (
        <>
            <Head>
                <title>Events | Google Developer Student Clubs JIS University - Kolkata</title>
            </Head>
            <div className='lg:p-20 sm:p-2  flex  flex-col  bg-slate-900 py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Events</span></h1>
                    <p className='text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        Thanks to our community for organizing these events.
                    </p>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:mx-5 justify-items-center pt-10'>
                    {
                        events.map((event) => (
                            <EventCard
                                key={event.slug}
                                name={event.name}
                                description={event.description}
                                eventpic={event.eventpic}
                                eventLink={event.eventLink}
                                locationUrl={event.locationUrl}
                                slug={event.slug}
                                date={event.date}
                                id={event.id}
                                isActive={event.isActive}
                                isCompleted={event.isCompleted}
                                locationName={event.locationName}
                                type={event.type}
                            />
                        ))

                    }
                </div>
            </div>

        </>
    );
}

export async function getStaticProps() {
    const events = getAllEvents()
        .map((post) => post.meta);

    return { props: { events } };
}


