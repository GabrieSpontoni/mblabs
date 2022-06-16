import Navbar from "../src/common/navbar/Navbar";
import BuyTicket from "../src/buyTicket/BuyTicket";

export default function Buy() {
  return (
    <div>
      <Navbar />
      <hr />
      <div
        style={{
          padding: "15px",
        }}
      >
        <BuyTicket />
      </div>
    </div>
  );
}
