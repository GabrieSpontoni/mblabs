import Navbar from "../src/common/navbar/Navbar";
import HomeBody from "../src/home/Home";

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr />
      <div
        style={{
          padding: "15px",
        }}
      >
        <HomeBody />
      </div>
    </div>
  );
}
