import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evaluation" element={<></>}></Route>
        <Route path="/phones" element={<></>}></Route>
        <Route path="/network" element={<></>}></Route>
        <Route path="/dashboard" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
