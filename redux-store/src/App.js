import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider/>
    </div>
  );
}
