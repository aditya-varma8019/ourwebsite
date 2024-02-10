import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Approval from "./components/pages/Approval"
function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path='/approval' element={<Approval />} />
        {/* <Route path' */}
      </Routes>
  );
}

export default App;
