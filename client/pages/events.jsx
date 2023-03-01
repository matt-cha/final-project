import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../lib/format-date';

export default function Events() {
  const [events, setEvents] = useState();

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(events => setEvents(events));
  }, []);

  return (
    <div className="m-2">
      <h1>All Events</h1>

      <div className="">
        {
          events?.map(event => (
            <div key={event.eventId} className="">
              <EventCard event={event} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

function EventCard({ event }) {
  const { eventId, name, startDate, endDate, location, details, image } = event;
  return (
    <Link to={`/events/${eventId}`}>
      <div className='h-52 w-74 max-w-xs mx-auto rounded bg-blue-300'>
        <img src={image} className="object-contain  rounded h-full w-full" />
      </div>
      <div>
        <h5 className="mx-auto">{name}</h5>
      </div>
      <div>
        <p className="mx-auto">{formatDate(startDate)}</p>
      </div>
      <div>
        <p className="mx-auto" >{location}</p>
      </div>
    </Link>
  );
}
