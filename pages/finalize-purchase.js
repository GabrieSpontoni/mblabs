import Navbar from "../src/common/navbar/Navbar";
import FinalizePurchase from "../src/finalizePurchase/FinalizePurchase";

export default function Finalize() {
  return (
    <div>
      <hr />
      <div
        style={{
          padding: "15px",
        }}
      >
        <FinalizePurchase />
      </div>
    </div>
  );
}
