export default function Create() {

    //     "id": "563646",
    //   "name": "Compose Camp Day 01",
    //   "description": "Learn how to build Android apps! Join us for ComposeCamp on September 9 , 2022.",
    //   "date": "2022/09/09",
    //   "type": "Compose Camp",
    //   "slug": "compose-camp-day-01",
    //   "eventpic": "/events/compose-camp/compose-camp.png",
    //   "eventLink": "https://gdsc.community.dev/events/details/developer-student-clubs-jis-university-kolkata-presents-compose-camp-day-01/",
    //   "isActive": false,
    //   "isCompleted": true,
    //   "locationName": "Online",
    //   "locationUrl": "https://gdsc.community.dev/events/details/developer-student-clubs-jis-university-kolkata-presents-compose-camp-day-01/"
    return (
        <div className="flex flex-col">
            <h1>Create Event</h1>
            <form action="/api/event" method="post" className="flex flex-col p-10 bg-slate-900 text-white">
                <label htmlFor="id">Id</label>
                <input type="text" name="id" id="id" />
                <label htmlFor="name">Event Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="description">Event Description</label>
                <input type="text" name="description" id="description" />
                <label htmlFor="date">Event Date</label>
                <input type="date" name="date" id="date" />
                <label htmlFor="type">Event Type</label>
                <input type="text" name="type" id="type" />
                <label htmlFor="slug">Event Slug</label>
                <input type="text" name="slug" id="slug" />
                <label htmlFor="eventpic">Event Picture</label>
                <input type="text" name="eventpic" id="eventpic" />
                <label htmlFor="eventLink">Event Link</label>
                <input type="text" name="eventLink" id="eventLink" />
                <label htmlFor="isActive">Event Active</label>
                <input type="checkbox" name="isActive" id="isActive" />
                <label htmlFor="isCompleted">Event Completed</label>
                <input type="checkbox" name="isCompleted" id="isCompleted" />
                <label htmlFor="locationName">Event Location Name</label>
                <input type="text" name="locationName" id="locationName" />
                <label htmlFor="locationUrl">Event Location Url</label>
                <input type="text" name="locationUrl" id="locationUrl" />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}
