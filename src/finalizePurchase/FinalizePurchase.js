import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";

import { eventsApi } from "../services/api";

export default function FinalizePurchase() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState(null);
  const [successPayment, setSuccessPayment] = useState(true);

  const [sucessLogin, setSuccessLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const [formPayment, setFormPayment] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const events = eventsApi;
    if (router.query.id && router.query.amount) {
      const event = events.find((event) => {
        if (event.id == router.query.id) {
          return event;
        }
      });

      if (event) {
        setEvent(event);
      }
    }
  }, [router.query.id]);

  const handleConfirm = () => {
    if (
      formPayment.name !== "GABRIEL S E SANTO" ||
      formPayment.cardNumber !== "1111111111111111" ||
      formPayment.expirationDate !== "2022-06-22" ||
      formPayment.cvv !== "123"
    ) {
      setSuccessPayment(false);
    } else {
      setSuccessPayment(true);
      handleShow();
    }
  };

  const handleLogin = () => {
    if (
      formLogin.email !== "spontoni33@gmail.com" ||
      formLogin.password !== "12345678"
    ) {
      console.log("error");
      setSuccessLogin(false);
      setErrorLogin(true);
    } else {
      setSuccessLogin(true);
      setErrorLogin(false);
    }
  };

  const handleClose = () => {
    setErrorLogin(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="alert alert-primary" role="alert">
          Para Validar o Pagamento, é necessário criar uma conta no GS
          Ingressos, caso você não possua uma conta{" "}
          <button
            onClick={() => {
              router.push("/register");
            }}
            className="btn btn-primary"
            type="button"
          >
            Clique Aqui
          </button>
        </div>
      </div>
      {event && (
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumo da Compra</h5>
              <p className="card-text">
                Quantidade de ingressos :{" "}
                <span id="quantity">{router.query.amount}</span>
                <br />
                Preço Unitário :{" "}
                <span id="quantity">R$ {event.unityPrice}</span>
                <br />
                Preço Total :{" "}
                <span id="quantity">
                  R$ {event.unityPrice * router.query.amount}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {event && (
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text">{event.date}</p>
              <p className="card-text">{event.address}</p>
            </div>
          </div>
        </div>
      )}

      <div className="col-sm-12">
        <div className="card border-secondary mt-3">
          <div className="card-header">Informações de Pagamento</div>

          <div className="col-md">
            <div className="form-floating">
              <input
                onChange={(e) => {
                  setFormPayment({ ...formPayment, name: e.target.value });
                }}
                type="text"
                className="form-control"
              />
              <label>Nome do Titular</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                onChange={(e) => {
                  setFormPayment({
                    ...formPayment,
                    cardNumber: e.target.value,
                  });
                }}
                type="number"
                className="form-control"
              />
              <label>Numero do Cartão</label>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  onChange={(e) => {
                    setFormPayment({
                      ...formPayment,
                      expirationDate: e.target.value,
                    });
                  }}
                  type="date"
                  className="form-control"
                />
                <label>Data de Validade</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  onChange={(e) => {
                    setFormPayment({ ...formPayment, cvv: e.target.value });
                  }}
                  type="nunmber"
                  className="form-control"
                />
                <label>CVV</label>
              </div>
            </div>
          </div>
          {!successPayment && (
            <div className="col-md mt-3">
              <div className="alert alert-danger" role="alert">
                Algo Deu Errado com a Verificação do Seu Pagamento, Por Favor
                Tente Novamente ou Entre em Contato com o Administrador
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="col-sm-12 mt-3">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            onClick={handleConfirm}
            className="btn btn-success"
            type="button"
          >
            Validar
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    setFormLogin({ ...formLogin, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  onChange={(e) => {
                    setFormLogin({ ...formLogin, password: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          {sucessLogin && (
            <div className="alert alert-success" role="alert">
              Compra Realizada com sucesso, Verifique seu Email
            </div>
          )}

          {!sucessLogin && errorLogin && (
            <div className="alert alert-danger" role="alert">
              Usuário não encontrado
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
