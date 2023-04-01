import React from 'react'
import Navbar from '../Navbar.js';
import Sidebar from '../Sidebar.js';
import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link,useNavigate,useParams} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import * as jsPDF from 'jspdf';
import { renderToString } from "react-dom/server";
const RegShow = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [user1, setUsers] = useState([]);
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
        navigate("/Register");
    } 
    const loadUsers = async () => {
        await axios
        .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadDate`,{
          Id: id
        }).then((response) => {
          let res = (response.data)
          console.log("editdata",res);
          const curren = new Date(res.DOB)
          const dat = `${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${curren.getFullYear()}`;
          res.DOB=dat
          const current = new Date(res.FollowUp)
          res.FollowUp = `${(current.getDate() < 10 ? '0' : '')+(current.getDate())}-${((current.getMonth() + 1) < 10 ? '0' : '')+(current.getMonth() + 1)}-${current.getFullYear()}`;
     
          res.SchoolAttentedList.map((raa,i)=>
          {
            let curren="";
           curren= new Date(raa.AttentedTill)
          let current= new Date(raa.AttentedFrom)
           res.SchoolAttentedList[i].AttentedFrom = `${(current.getDate() < 10 ? '0' : '')+(current.getDate())}-${((current.getMonth() + 1) < 10 ? '0' : '')+(current.getMonth() + 1)}-${current.getFullYear()}`;
          res.SchoolAttentedList[i].AttentedTill = `${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${curren.getFullYear()}`;
          }
          )
          res.TestScoreList.map((raa,i)=>
          {
            let curren="";
           curren= new Date(raa.ExamDate)           
          res.TestScoreList[i].ExamDate = `${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${curren.getFullYear()}`;
                   
          }
          )
          res.WorkExperienceList.map((raa,i)=>
          {
            let curren="";
           curren= new Date(raa.AttentedFrom)
          let current= new Date(raa.AttentedTill)
          let currents= new Date(raa.AttentedTo)
           res.WorkExperienceList[i].AttentedFrom = `${(current.getDate() < 10 ? '0' : '')+(current.getDate())}-${((current.getMonth() + 1) < 10 ? '0' : '')+(current.getMonth() + 1)}-${current.getFullYear()}`;
          res.WorkExperienceList[i].AttentedTill =`${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${curren.getFullYear()}`;
          res.WorkExperienceList[i].AttentedTo = `${(currents.getDate() < 10 ? '0' : '')+(currents.getDate())}-${((currents.getMonth() + 1) < 10 ? '0' : '')+(currents.getMonth() + 1)}-${currents.getFullYear()}`;
            }
          )
          console.log("SchoolAttenteTill",res);
          setUsers(res);
          console.log("RegShow",res)
            }).catch(error => {
          console.log(error);
        });    
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const print = () => {
    const string = renderToString( 
    <section id="show_form">
    <div className="container">
    <h2>Personal Information</h2>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>First Name </span><br/>
                      <label> {user1.FirstName} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Middle Name </span><br/>
                      <label> {user1.MiddleName}  </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>last Name </span><br/>
                      <label> {user1.LastName} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Are you Known by any other name </span><br/>
                      <label> {user1.OName} </label>
                  </div>
            </div>                                                                                                
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>If checked add affidavit in documents </span><br/>
                      <label> {user1.Doc} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Date of Birth </span><br/>
                      <label> {user1.DOB} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>First Language </span><br/>
                      <label> {user1.FLanguage} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Country of Citizenship </span><br/>
                      <label> {user1.COCitizenship} </label>
                  </div>
            </div>                                                                                                
        </div>    
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Passport Number </span><br/>
                      <label> {user1.PassportNo} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Gender </span><br/>
                      <label> {user1.Gender} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Maritial Status </span><br/>
                      <label> {user1.MaritalStatus} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Address </span><br/>
                      <label> {user1.Address} </label>
                  </div>
            </div>                                                                                                
        </div>   
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>City / Town </span><br/>
                      <label> {user1.City} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Province / State </span><br/>
                      <label> {user1.Province} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Country </span><br/>
                      <label> {user1.Country} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>pin code </span><br/>
                      <label> {user1.PostalCode}</label>
                  </div>
            </div>                                                                                                
        </div> 
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Student Mobile Number </span><br/>
                      <label> {user1.MobileNo} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>mother phone </span><br/>
                      <label> {user1.MPhoneNo}</label>
                  </div>
            </div> 
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>father Phone </span><br/>
                      <label> {user1.FPhoneNo} </label>
                  </div>                                                                                               
        </div> 
        </div>
        {/* <h2>Education Summary</h2>
       {
       Array.isArray(user1.EducationSummaryList)&&( user1.EducationSummaryList.map((raa,i)=>
    {  
        return(     
        <div className="row" key={raa.id}>                          
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>country of education </span><br/>
                      <label>{raa.CountryOEducation} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>highest level of education </span><br/>
                      <label> {raa.EducationLevel} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>grades </span><br/>
                      <label> {raa.Grades} </label>
                  </div>
            </div> 
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>year  </span><br/>
                      <label> {raa.Year} </label>
                  </div>
            </div> 
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>grading scheme </span><br/>
                      <label> {raa.GradingScheme} </label>
                  </div>
            </div>                                                                                              
        </div> )}))} */}
       
       {/* <h2>School Attented</h2>
       {
       Array.isArray(user1.SchoolAttentedList)&&( user1.SchoolAttentedList.map((raa,i)=>
    {  
        return( 
      <div className='school' key={raa.id}>
         <div className="row">                               
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Level of edcutaion </span><br/>
                      <label> {raa.EducationLevel} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Country of edcutaion </span><br/>
                      <label> {raa.InstitutionCountry} </label>
                  </div>
            </div>    
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Grade</span><br/>
                      <label> {raa.Grades} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>State</span><br/>
                      <label> {raa.State}</label>
                  </div>
            </div>                                                                                            
        </div>                                                       

        <div className="row">
          
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Attended Institute From</span><br/>
                      <label> {raa.AttentedFrom} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Attended Institute Till </span><br/>
                      <label> {raa.AttentedTill}  </label>
                  </div>
            </div>    
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Name of Institute</span><br/>
                      <label> {raa.InstituteName} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Address</span><br/>
                      <label> {raa.Address} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Board/University</span><br/>
                      <label> {raa.University}</label>
                  </div>
            </div>
                                                                                     
        </div>  
        </div> )}))} */}

{/* 
        <h2> Work Experience</h2>
        {
       Array.isArray(user1.WorkExperienceList)&&( user1.WorkExperienceList.map((raa,i)=>
    {  
        return( 
      <div className='Work' key={raa.id}>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>job  </span><br/>
                      <label> {raa.Job} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>country of job </span><br/>
                      <label> {raa.Country} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>company name </span><br/>
                      <label>{raa.CompanyName} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>designation </span><br/>
                      <label> {raa.Designation} </label>
                  </div>
            </div>                                                                                                
        </div>  

        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>address  </span><br/>
                      <label> {raa.Address} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Work Experience From </span><br/>
                      <label> {raa.AttentedFrom} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Work Experience To</span><br/>
                      <label> {raa.AttentedTo}</label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Work Experience till </span><br/>
                      <label> {raa.AttentedTill}</label>
                  </div>
            </div>                                                                                                
        </div>  
        </div> )}))} */}
        {/* <h2>Test Score</h2>
        {
       Array.isArray(user1.WorkExperienceList)&&( user1.WorkExperienceList.map((raa,i)=>
    {  
        return( 
      <div className='Work' key={raa.id}>

        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>English Exam </span><br/>
                      <label> {raa.Exam} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Date of Exam </span><br/>
                      <label> {raa.ExamDate} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Enter Exact Scores Listening </span><br/>
                      <label>{raa.Listening} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Enter Exact Scores Reading </span><br/>
                      <label> {raa.Reading} </label>
                  </div>
            </div>                                                                                                
        </div> 
       
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Enter Exact Scores Speaking  </span><br/>
                      <label> {raa.Speaking} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Enter Exact Scores Writing</span><br/>
                      <label> {raa.Writing} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Enter Exact Scores OS</span><br/>
                      <label>{raa.OSScrore}</label>
                  </div>
            </div>
            </div>
            </div> )}))} */}
            {/* <h2>Additional Qualification</h2>
            <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Additional Qualification </span><br/>
                      <label> {user1.AddQualification}</label>
                  </div>
            </div>                                                                                                
            </div> */}
            {/* <h2>Other Information</h2>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Have you been refused a visa  </span><br/>
                      <label>{user1.Refuse} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Have you been refused a visa Which reason </span><br/>
                      <label>{user1.RefuseType} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Status </span><br/>
                      <label>{user1.Status} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Fee Paid Amount </span><br/>
                      <label>{user1.PaidAmt}/- </label>
                  </div>
            </div>
                                                                                                          
        </div>
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Fee Paid Balance </span><br/>
                      <label> {user1.BalanceAmt}/- </label>
                  </div>
            </div> 
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Only IELTS </span><br/>
                      <label>{user1.ILETS} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Only Process</span><br/>
                      <label> {user1.Process} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Discount</span> <br/>
                      <label>{user1.Discount} </label>
                  </div>
            </div>  
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="inner_show_element">
                      <span>Remarks </span><br/>
                      <label> {user1.Remarks} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Follow Up Date</span><br/>
                      <label> {user1.FollowUp} </label>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="inner_show_element">
                      <span>Source</span> <br/>
                      <label>{user1.Source} </label>
                  </div>
            </div>                                                                                                          
        </div>                                                                                                                 */}
    </div>

    </section>
);
    const pdf = new jsPDF();
    pdf.fromHTML(string);
    pdf.save("pdf");
  };
    return (
        <>
              
     <div className="container-scroller">
   <Navbar/>
   <div className="container-fluid page-body-wrapper pl-0 pr-0">
  <Sidebar/> 
            <Button variant="primary" onClick={handleShow}>
                RegShow
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                   
                </Modal.Header>
                <Modal.Body>
                    <section id="show_form">
                        <div className="container">
                        <h2>Personal Information</h2>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>First Name </span><br/>
                                          <label> {user1.FirstName} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Middle Name </span><br/>
                                          <label> {user1.MiddleName}  </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>last Name </span><br/>
                                          <label> {user1.LastName} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Are you Known by any other name </span><br/>
                                          <label> {user1.OName} </label>
                                      </div>
                                </div>                                                                                                
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>If checked add affidavit in documents </span><br/>
                                          <label> {user1.Doc} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Date of Birth </span><br/>
                                          <label> {user1.DOB} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>First Language </span><br/>
                                          <label> {user1.FLanguage} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Country of Citizenship </span><br/>
                                          <label> {user1.COCitizenship} </label>
                                      </div>
                                </div>                                                                                                
                            </div>    
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Passport Number </span><br/>
                                          <label> {user1.PassportNo} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Gender </span><br/>
                                          <label> {user1.Gender} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Maritial Status </span><br/>
                                          <label> {user1.MaritalStatus} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Address </span><br/>
                                          <label> {user1.Address} </label>
                                      </div>
                                </div>                                                                                                
                            </div>   
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>City / Town </span><br/>
                                          <label> {user1.City} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Province / State </span><br/>
                                          <label> {user1.Province} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Country </span><br/>
                                          <label> {user1.Country} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>pin code </span><br/>
                                          <label> {user1.PostalCode}</label>
                                      </div>
                                </div>                                                                                                
                            </div> 

                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Student Mobile Number </span><br/>
                                          <label> {user1.MobileNo} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>mother phone </span><br/>
                                          <label> {user1.MPhoneNo}</label>
                                      </div>
                                </div> 
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>father Phone </span><br/>
                                          <label> {user1.FPhoneNo} </label>
                                      </div>                                                                                               
                            </div> 
                            </div>
                            {/* <h2>Education Summary</h2>
                           {
                           Array.isArray(user1.EducationSummaryList)&&( user1.EducationSummaryList.map((raa,i)=>
                        {  
                            return( 
                            <div className="row" key={raa.id}>                          
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>country of education </span><br/>
                                          <label>{raa.CountryOEducation} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>highest level of education </span><br/>
                                          <label> {raa.EducationLevel} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>grades </span><br/>
                                          <label> {raa.Grades} </label>
                                      </div>
                                </div> 
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>year  </span><br/>
                                          <label> {raa.Year} </label>
                                      </div>
                                </div> 
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>grading scheme </span><br/>
                                          <label> {raa.GradingScheme} </label>
                                      </div>
                                </div>                                                                                              
                            </div> )}))}
                           
                           <h2>School Attented</h2>
                           {
                           Array.isArray(user1.SchoolAttentedList)&&( user1.SchoolAttentedList.map((raa,i)=>
                        {  
                            return( 
                          <div className='school' key={raa.id}>
                             <div className="row">                               
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Level of edcutaion </span><br/>
                                          <label> {raa.EducationLevel} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Country of edcutaion </span><br/>
                                          <label> {raa.InstitutionCountry} </label>
                                      </div>
                                </div>    
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Grade</span><br/>
                                          <label> {raa.Grades} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>State</span><br/>
                                          <label> {raa.State}</label>
                                      </div>
                                </div>                                                                                            
                            </div>                                                       

                            <div className="row">
                              
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Attended Institute From</span><br/>
                                          <label> {raa.AttentedFrom} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Attended Institute Till </span><br/>
                                          <label> {raa.AttentedTill}  </label>
                                      </div>
                                </div>    
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Name of Institute</span><br/>
                                          <label> {raa.InstituteName} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Address</span><br/>
                                          <label> {raa.Address} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Board/University</span><br/>
                                          <label> {raa.University}</label>
                                      </div>
                                </div>
                                                                                                         
                            </div>  
                            </div> )}))}


                            <h2> Work Experience</h2>
                            {
                           Array.isArray(user1.WorkExperienceList)&&( user1.WorkExperienceList.map((raa,i)=>
                        {  
                            return( 
                          <div className='Work' key={raa.id}>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>job  </span><br/>
                                          <label> {raa.Job} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>country of job </span><br/>
                                          <label> {raa.Country} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>company name </span><br/>
                                          <label>{raa.CompanyName} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>designation </span><br/>
                                          <label> {raa.Designation} </label>
                                      </div>
                                </div>                                                                                                
                            </div>  

                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>address  </span><br/>
                                          <label> {raa.Address} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Work Experience From </span><br/>
                                          <label> {raa.AttentedFrom} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Work Experience To</span><br/>
                                          <label> {raa.AttentedTo}</label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Work Experience till </span><br/>
                                          <label> {raa.AttentedTill}</label>
                                      </div>
                                </div>                                                                                                
                            </div>  
                            </div> )}))}
                            <h2>Test Score</h2>
                            {
                           Array.isArray(user1.WorkExperienceList)&&( user1.WorkExperienceList.map((raa,i)=>
                        {  
                            return( 
                          <div className='Work' key={raa.id}>

                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>English Exam </span><br/>
                                          <label> {raa.Exam} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Date of Exam </span><br/>
                                          <label> {raa.ExamDate} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Enter Exact Scores Listening </span><br/>
                                          <label>{raa.Listening} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Enter Exact Scores Reading </span><br/>
                                          <label> {raa.Reading} </label>
                                      </div>
                                </div>                                                                                                
                            </div> 
                           
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Enter Exact Scores Speaking  </span><br/>
                                          <label> {raa.Speaking} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Enter Exact Scores Writing</span><br/>
                                          <label> {raa.Writing} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Enter Exact Scores OS</span><br/>
                                          <label>{raa.OSScrore}</label>
                                      </div>
                                </div>
                                </div>
                                </div> )}))}
                                <h2>Additional Qualification</h2>
                                <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Additional Qualification </span><br/>
                                          <label> {user1.AddQualification}</label>
                                      </div>
                                </div>                                                                                                
                                </div>
                                <h2>Other Information</h2>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Have you been refused a visa  </span><br/>
                                          <label>{user1.Refuse} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Have you been refused a visa Which reason </span><br/>
                                          <label>{user1.RefuseType} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Status </span><br/>
                                          <label>{user1.Status} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Fee Paid Amount </span><br/>
                                          <label>{user1.PaidAmt}/- </label>
                                      </div>
                                </div>
                                                                                                                              
                            </div>
                            <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Fee Paid Balance </span><br/>
                                          <label> {user1.BalanceAmt}/- </label>
                                      </div>
                                </div> 
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Only IELTS </span><br/>
                                          <label>{user1.ILETS} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Only Process</span><br/>
                                          <label> {user1.Process} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Discount</span> <br/>
                                          <label>{user1.Discount} </label>
                                      </div>
                                </div>  
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                      <div className="inner_show_element">
                                          <span>Remarks </span><br/>
                                          <label> {user1.Remarks} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Follow Up Date</span><br/>
                                          <label> {user1.FollowUp} </label>
                                      </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="inner_show_element">
                                          <span>Source</span> <br/>
                                          <label>{user1.Source} </label>
                                      </div>
                                </div>                                                                                                          
                            </div>                                                                                                                 */}
                        </div>

                    </section>
                </Modal.Body>
                <Modal.Footer>
                <div className='pdf'>
                    <Button variant="primary" onClick={print}>PDF Download</Button></div>
                    <Button variant="primary" onClick={handleClose}>
                       Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
            </div>
        </>
    )
}

export default RegShow

