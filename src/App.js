import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path' */}
      </Routes>
  );
}

export default App;
