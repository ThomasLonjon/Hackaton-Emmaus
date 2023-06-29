import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import MapPage from "./pages/MapPage/MapPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evaluation" element={<></>}></Route>
        <Route path="/phones" element={<></>}></Route>
        <Route path="/network" element={<></>}></Route>
        <Route path="/dashboard" element={<></>}></Route>
        <Route path="/map" element={<MapPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
