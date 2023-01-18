import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Proffs from "./components/Proffs/Proffs.jsx";
import Register from "./components/Register/Register";
// import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/proffs" element={<Proffs />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
