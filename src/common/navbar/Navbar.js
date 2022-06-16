import { Button } from "react-bootstrap";

export default function CustomNav() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">GS Ingressos</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
          <Button variant="outline-danger">Entrar</Button>
        </div>
      </nav>
    </>
  );
}
