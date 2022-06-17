import { useState } from "react";
import { useRouter } from "next/router";

import styles from "./Register.module.css";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);

    if (
      e.target[0].value !== "spontoni33@gmail.com" ||
      e.target[1].value !== "12345678"
    ) {
      setError(true);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={onSubmit}>
          <div className="mb-3 input-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Senha"
              required
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              Erro ao criar conta, verifique seus dados e tente novamente.
            </div>
          )}

          <div className={styles.button}>
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
