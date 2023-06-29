import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Evaluation from "./components/evaluation/Evaluation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evaluation" element={<Evaluation />}/>
        <Route path="/phones" element={<></>}></Route>
        <Route path="/network" element={<></>}></Route>
        <Route path="/dashboard" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
