import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { eventsApi } from "../../services/api";

export default function CompaniesEvents() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const companiesEvents = [];
    eventsApi.map((event) => {
      if (event.type === "company") {
        companiesEvents.push(event);
      }
    });

    setEvents(companiesEvents);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {events.map((event) => (
        <div key={event.id} className="col">
          <div className="card h-100">
            <img
              src={event.photoUrl}
              className="card-img-top"
              alt="..."
              weight="400"
              height="300"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text">{event.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted"> {event.date} </small>
              <button
                onClick={() => {
                  router.push(`/buy-ticket?id=${event.id}`);
                }}
                className="btn btn-primary"
                type="submit"
              >
                Comprar ingresso
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
