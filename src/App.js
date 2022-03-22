import "./style.css";
import Sidebar from "./Components/sidebar/Sidebar";
import Buttons from "./Components/Buttons/Buttons";

export default function App() {
  return (
    <div className="main d-flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="buttons p-5">
        <h5>Buttons</h5>
        <Buttons />
      </div>
    </div>
  );
}
