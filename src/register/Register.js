import { useRouter } from "next/router";

import styles from "./Register.module.css";

export default function Register() {
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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

          {/* {error && <div className="alert alert-danger">{error}</div>} */}

          <div className={styles.button}>
            <button
              onClick={() => {
                router.push("/home");
              }}
              type="submit"
              className="btn btn-primary"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
