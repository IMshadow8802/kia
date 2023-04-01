import React from 'react'
import './Dashboard.css';
import Navbar from './Navbar.js';
import Filecontrol from './Filecontrol.js';
import Sidebar from './Sidebar.js';
import Leads from './Leads/Leads';
import Enquiry from './Enquiry/Enquiry.js';
import Register from './Register/Register.js';
import EditReg from './Register/EditReg';
import Application from './Application/Application.js';
import EditApp from './Application/EditApp';
import Visa from './Visa/Visa.js';
// import Leads from './Leads/Leads.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Edit from './Leads/Edit';
import EditEnquiry from './Enquiry/EditEnquiry';
const Dashboard =()=>
{
      return (
  <>
{/* <BrowserRouter> */}
  <div className="container-scroller">
  <Navbar/>
 <div className="container-fluid page-body-wrapper pl-0 pr-0">
<Sidebar/> 
<Filecontrol/>
{/* <Router> */}

   {/* <Leads.js/> */}
 
{/*  
    <Route>
      <Route path="/" element={<Filecontrol/>} /> */}
      {/* <Route path="" element={} />
      <Route path="" element={} /> */}
    {/* </Route>
    </Router> */}
 
  
{/*      
        <Route exact path="/" element={<Filecontrol/>}/>
        <Route path="/leads" element={<Leads/>}/>
        <Route path="/Enquiry" element={<Enquiry/>}/>   
        <Route path="/Register" element={<Register/>}/>    
        <Route path="/Application" element={<Application/>}/>   
        <Route path="/Visa" element={<Visa/>}/>        
        <Route path="/Edit/:id" element={<Edit/>}/>
        <Route path="/EditEnquiry/:id" element={<EditEnquiry/>}/>
        <Route path="/EditReg/:id" element={<EditReg/>}/>
        <Route path="/EditApp/:id" element={<EditApp/>}/>
        <Route path="*" element={<Navigate to='/' />} /> */}
          {/* <Route path="/filecontrol" element={<Filecontrol/>} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      
   
      </div>
  </div>
    {/* </BrowserRouter> */}
  </>

    
    )
}

export default Dashboard ;