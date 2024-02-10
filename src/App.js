import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Profile from './components/Profile/Profile';
import ApprovalRequestsTable from './components/pages/Approval';
function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/approval' element={<ApprovalRequestsTable />} />
        {/* <Route path' */}
      </Routes>
  );
}

export default App;
