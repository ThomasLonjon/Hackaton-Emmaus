import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Phones from "./pages/Phones/Phones";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evaluation" element={<></>}></Route>
        <Route path="/phones" element={<Phones />}></Route>
        <Route path="/network" element={<></>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
