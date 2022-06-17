import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { eventsApi } from "../services/api";

export default function BuyTicket() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setEvents(eventsApi);
    if (router.query.id) {
      const event = events.find((event) => {
        if (event.id == router.query.id) {
          return event;
        }
      });

      if (event) {
        setEvent(event);
      }
    }
  }, [events, router.query.id]);
  return (
    <div>
      <h2>Comprar Ingresso</h2>

      {event && (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={event.photoUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  <small className="text-muted">{event.date}</small>
                </p>

                <p className="card-text">
                  <small className="text-muted">R$ {event.unityPrice}</small>
                </p>
                <div className="card-text">
                  <div className="input-group mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={"DEFAULT"}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    >
                      <option value={"DEFAULT"} disabled>
                        Quantidade
                      </option>
                      <option value={1}>Um</option>
                      <option value={2}>Dois</option>
                      <option value={3}>Três</option>
                    </select>
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      id="button-addon2"
                      onClick={() => {
                        router.push(
                          `/finalize-purchase?id=${event.id}&amount=${amount}`
                        );
                      }}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
