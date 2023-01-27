import logo from "./logo.svg";
import Counter from "./components/counter";
import "./App.css";
import GorestAPI from "./components/GorestApi";
import AdminProject from "./components/AdminProject";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/gorestapi" element={<GorestAPI />}></Route>
        <Route path="/adminproject" element={<AdminProject />}></Route>
      </Routes>
    </div>
  );
}

export default App;
