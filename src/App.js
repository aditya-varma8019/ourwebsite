import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path' */} //dd
      </Routes>
  );
}

export default App;
