import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Profile from './components/Profile/Profile';
import ApprovalRequestsTable from './components/pages/Approval';
import Home from './components/Letter/Home';
import Letter from './components/Letter/Letter';
import StudentRequestsTable from './components/pages/StudentApproval';
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
 
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/newevent" element={<Profile />} />
        <Route path='/approval' element={<ApprovalRequestsTable />} />
        <Route path="/letter" element={<Home/>} />
        <Route path='/generateletter' element={<Letter/>} />
        <Route path='/student' element={<StudentRequestsTable />} />
        {/* <Route path='/' element={</>} /> */}
      </Routes>
    </>
  );
}

export default App;
