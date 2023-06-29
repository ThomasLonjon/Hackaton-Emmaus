import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Phones from "./pages/Phones/Phones";
import Connect from "./pages/composant/Connect";

function App() {
  return (
    <>
    {/* <Connect/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evaluation" element={<></>}></Route>
        <Route path="/phones" element={<Phones />}></Route>
        <Route path="/network" element={<></>}></Route>
        <Route path="/dashboard" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
