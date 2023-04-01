import React from 'react'
import icon from './images/icon.jpg'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faFilePen, faChartArea, faMoneyCheck, faMobile, faTicket, faUser, faFile } from "@fortawesome/free-solid-svg-icons";
const Sidebar =()=>
{
    return (
  <>
<nav className="sidebar sidebar-offcanvas" id="sidebar">
<ul className="nav">
  <li className="nav-item nav-profile">
    <a href="#" className="nav-link">
      <div className="profile-image">
        <img className="img-xs rounded-circle" src={icon} alt="profile image" />
        <div className="dot-indicator bg-success"></div>
      </div>
      <div className="text-wrapper">
        <p className="profile-name">KIA CONSULTANT</p>
       
      </div>
    </a>
  </li>
  <li className="nav-item nav-category">
  <NavLink className="nav-link" to="/dashboard">
  <FontAwesomeIcon icon={faGauge} /> &nbsp; Dashboard
    </NavLink></li>
  <li className="nav-item">
    <NavLink  className="nav-link" to="/leads">
    <FontAwesomeIcon icon={ faChartArea } />  &nbsp;    Enquiry
    </NavLink >
  </li>
  {/* <li className="nav-item">
    <NavLink className="nav-link" to="/Enquiry">
      <FontAwesomeIcon icon={ faFilePen } /> &nbsp; Enquiry
    </NavLink>
  </li> */}
  <li className="nav-item">
    <NavLink className="nav-link" to="/Register">
      <FontAwesomeIcon icon={ faMoneyCheck } /> &nbsp; Register
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Application">
      <FontAwesomeIcon icon={ faMobile } /> &nbsp; Application
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Visa">
      <FontAwesomeIcon icon={ faTicket } /> &nbsp; Visa
    </NavLink>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" href="/master">
      <i className="menu-icon typcn typcn-shopping-bag"></i>
      <FontAwesomeIcon icon={ faUser } /> &nbsp; Master File
    </a>
  </li> */}
  
  
  
  
  {/* <li className="nav-item">
    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
      <i className="menu-icon typcn typcn-document-add"></i>
      <FontAwesomeIcon icon={ faFile } /> &nbsp; User Pages 
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="auth">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item">
          <a className="nav-link" href="#"> Login </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Register </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> 404 </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> 500 </a>
        </li>
      </ul>
    </div>
  </li> */}
</ul>
</nav>

</>

    
)
}

export default Sidebar ;
