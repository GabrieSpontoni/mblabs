import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/router";

import { eventsApi } from "../../services/api";

export default function CustomNav() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [eventsFound, setEventsFound] = useState([]);

  useEffect(() => {
    setEvents(eventsApi);
  }, [events]);

  const handleSearch = (e) => {
    e.preventDefault();
    handleShow();

    const word = e.target[0].value.toLowerCase();
    const eventsFoundArray = [];
    events.map((event) => {
      if (
        event.title.toLowerCase().includes(word) &&
        !eventsFound.some((eventFound) => eventFound.id === event.id)
      ) {
        eventsFoundArray.push(event);
      }
    });

    setEventsFound([...eventsFound, ...eventsFoundArray]);
  };

  const handleClose = () => {
    setEventsFound([]);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Button
            onClick={() => {
              router.push("/home");
            }}
            variant="btn btn-light"
          >
            GS Ingressos
          </Button>
          {/* <a className="navbar-brand">GS Ingressos</a> */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar evento"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eventos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {eventsFound.map((event, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Univeridade</h6>
                <p className="card-text">{event.description}</p>

                <p className="card-text">{event.date}</p>
                <a
                  href="#"
                  className="card-link"
                  onClick={() => {
                    router.push(`/buy-ticket/?id=${event.id}`);
                    handleClose();
                  }}
                >
                  Comprar ingresso
                </a>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
