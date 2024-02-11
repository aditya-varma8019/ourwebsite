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
import SingleRequest from './components/pages/SingleRequest';
import EventDetails from './components/pages/EventDetails';
import ADean from './components/pages/ADean';
import Dean from './components/pages/Dean';
import CRCAdmin from './components/pages/CRCAdmin';
import Audi from './components/pages/Audi';
import Security from './components/pages/Security';
import Edit from './components/pages/Edit';
import EventSummaryForm from './components/Event Summary/EventSummary';
import DisplayAllEvents from './Display/DisplayAllEvents';
import VendorForm from './components/Vendor/Vendor';
import Header from './components/Auth/header';
import Footer from './components/Auth/footer';
import CG1 from './components/CG1';
function App() {
  return (
    <div>
      <Header />

     
      
      <Routes>

       <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/newevent" element={<Profile />} />
        <Route path='/faculty' element={<ApprovalRequestsTable />} />
        <Route path='/faculty/:clubName' element={<ApprovalRequestsTable />} />
        <Route path="/letter" element={<Home />} />
        <Route path='/generateletter' element={<Letter />} />
        <Route path='/student' element={<StudentRequestsTable />} />
        <Route path='/singlereq/:name' element={<SingleRequest />} />
        <Route path='/eventpage/:name' element={<EventDetails />} />
        <Route path='/adean' element={<ADean />} />
        <Route path='/dean' element={<Dean />} />
        <Route path='/crcadmin' element={<CRCAdmin />} />
        <Route path='/audi' element={<Audi />} />
        <Route path='/security' element={<Security />} />
        <Route path='/edit/:name' element={<Edit />} />
        <Route path='/eventsummary' element={<EventSummaryForm />} />
        <Route path='/display-summary' element={<DisplayAllEvents />} />
        <Route path='/vendor' element={<VendorForm />} />
        <Route path='/certificate' element={<CG1 />} />
        {/* <Route path='/' element={</>} /> */}
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
