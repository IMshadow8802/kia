import Dashboard from "./dashboard/Dashboard.js";
import Show from "./dashboard/Leads/Show";
import Edit from "./dashboard/Leads/Edit";
import AllForms from "./AllForms";
import Leads from "./dashboard/Leads/Leads";
import Enquiry from "./dashboard/Enquiry/Enquiry.js";
import Register from "./dashboard/Register/Register.js";
import EditReg from "./dashboard/Register/EditReg";
import RegShow from "./dashboard/Register/RegShow";
import Application from "./dashboard/Application/Application.js";
import EditApp from "./dashboard/Application/EditApp";
import Visa from "./dashboard/Visa/Visa.js";
import{ Login }from "./Login/Login";
import Logins from "./Login/Logins";
import ReactDOM from "react-dom/client";
import EditEnquiry from "./dashboard/Enquiry/EditEnquiry";
import { Routes, Route, Navigate,BrowserRouter } from "react-router-dom";
import EditVisa from "./dashboard/Visa/EditVisa";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Logins" element={<Logins />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/Show/:id" element={<Show />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Visa" element={<Visa />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/EditEnquiry/:id" element={<EditEnquiry />} />
        <Route path="/EditReg/:id" element={<EditReg />} />
        <Route path="/RegShow/:id" element={<RegShow/>} />
        <Route path="/EditApp/:id" element={<EditApp />} />
        <Route path="/EditVisa/:id" element={<EditVisa />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
        {/* <Edit/> */}
        {/* <Dashboard/> */}
        {/* <Show/> */}
        {/* <AllForms/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
