import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register";
import Navbar from "./Component/Global/Navbar";
import Login from "./Component/Login";
import Index from "./Component/Index";
import SinglePage from "./Component/SinglePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/single/:id" element={<SinglePage/>}/>
      </Routes>
    </>
  );
}

export default App;
