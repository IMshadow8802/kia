import React from 'react'
import graph1 from './images/graph1.png'
import follow from './images/follow.png'
import enq from './images/enq.png'
import reg from './images/reg.png'
import visa from './images/visa.png'

import Modal from 'react-bootstrap/Modal';
import './Dashboard.css'
import { useState,useEffect } from 'react'
import logo from './images/logo.png'
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faBell } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faCirclePlus , fasearch } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";


const Filecontrol =()=>
{
  const navigate = useNavigate();
const logOut = ()=>
  {
    navigate("/");
  }
  const {id}=useParams();
  var i="";
   const[remarks,setRemarks]= useState({FollowupDate:"",FollowUpRemark:""})
   const[showremarks,setShowremarks]= useState("")
  let count="";
  let count1="";
  const [show, setShow] = useState(false);
  const [user1, setUsers] = useState([]);
  const [user2, setUsers1] = useState([]);
  const [appli, setAppli] = useState([]);
  let dat ="";
  const handleCloses = () => {
      setShow(false); 
    }
    const current = new Date()
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
const Reminder= async ()=>{
  setShow(true);
  await axios.post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`,{
    SearchId:2,
    SearchValue:date
}).then((response) =>{
setUsers(response.data)
 console.log("date",response.data)
}).catch(error => {
console.log(error);
});
} 
useEffect(() => {
  loadUsers();
}, []);
const loadUsers = async () => {
 await axios.post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`,{
  SearchId:2,
  SearchValue:date
}).then((response) =>{
setUsers(response.data)
console.log("date",response.data)
}).catch(error => {
console.log(error);
});
await axios
     .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeads`, {
       Id:0
          }).then((response) => {
         setUsers1(response.data) ;
                }).catch(error => {
       console.log(error);
     });

     await axios
     .post(`http://13.235.85.235/SafalKia/api/Application/fetchApplication`, {
       Id:0
          }).then((response) => {
            setAppli(response.data) ;
                }).catch(error => {
       console.log(error);
     });

    }
 const ShowData =async (id)=>{
  await axios.post(`http://13.235.85.235/SafalKia/api/LeadsFollowUp/FetchLeadFollowUpHistory`,{
  HDId:id,
}).then((response) =>{
  setShowremarks(response.data)
console.log("show Data",response.data)
}).catch(error => {
console.log(error);
});
 }
 const GetData = (e)=>{
  setRemarks({...remarks,[e.target.name]:e.target.value})
 }
const SaveReminder = async(id)=>{
  console.log("id",id)
  remarks["Id"]=0;
  remarks["HDId"]=id;
;  await axios.post(`http://13.235.85.235/SafalKia/api/LeadsFollowUp/SaveFollowUp`,remarks).then((response)=>{
    setShowremarks(response.data)
    console.log("date",response.data)
    }).catch(error => {
    console.log(error);
    });
    setRemarks("")
 }
let cou
 user2.map((e,i)=> count1 = i)
 appli.map((e,i)=> cou = i)
  
    return (
  <>

<Modal show={show} onHide={handleCloses}>
            <Modal.Header closeButton onSubmit={handleCloses}>
              <Modal.Title>Today Reminder</Modal.Title>
            </Modal.Header>
            <Modal.Body  >
            <div className="row">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Follow Up Date</th>
                  <th scope="col">Source Name</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              { Array.isArray(user1)&&(user1.map((user, index) => {
                   const curren = new Date()
                   const dat = `${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${curren.getFullYear()}`;
                   return (
                      <tr key={user.id}>
                      <th scope="row">{count=index + 1}</th>
                      <td>{user.FirstName}</td>
                      <td>{user.MobileNo}</td>
                     
                      <td>{dat}</td>
                      <td>{user.Source}</td>
                      <td>{user.Remarks}</td>                   
                   <button type="button" name="edit" className="btn_edit"  onClick={()=>ShowData(user.Id)}>
                        <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                      </button> 
                         </tr>
                  );
                }))}
              </tbody>
            </table>
          </div>
          {showremarks !="" ?
          <>
          <div className="row">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Follow Up New Date</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              { Array.isArray(showremarks)&&(showremarks.map((user, index) => {
                i=user.HdId
                   return (
                      <tr key={user.id}>
                        </tr>
                  );
                }))}
                      <td> <input type="date"className="form-control"onChange={GetData} value={remarks.FollowupDate} name="FollowupDate"/></td>
                      <td><input type="text"className="form-control"onChange={GetData} value={remarks.FollowUpRemark}
                      name="FollowUpRemark" placeholder='Enter Follow Up Remarks'/></td>
                      <td><Button className='btn btn-success btn-dark text-light border-0' type='submit' onClick={()=>SaveReminder(i)} > Save</Button></td>
                
              </tbody>
            </table>
         </div>
         <div className='row'>
         <table className='table'>
          <tbody className='thead-dark'>
          <tr>
            <th scope="col">Follow Up Old Date</th>
            <th scope="col">Old Remarks</th>
            </tr>
          </tbody>
          <tbody>
          { Array.isArray(showremarks)&&(showremarks.map((user, index) => {
            const curren = new Date()
            const dat = `${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${curren.getFullYear()}`;
                   return (
                      <tr key={user.id}>
                      <td>{dat}</td>
                      <td>{user. FollowUpRemark}</td>                                 
                   </tr>
                  );
                }))}
              </tbody>
          </table>
          </div> </> : ""  }        
          <Button variant="success" type='submit'onClick={handleCloses} >
              Close
              </Button>
           </Modal.Body>
        <Modal.Footer >         
        </Modal.Footer>
          </Modal>

  <div className="container-fluid page-body-wrapper">
<div className="main-panel">
  <div className="content-wrapper">
    {/* <div className="row page-title-header">
      <div className="col-12">        
      </div>
      <div className="col-md-12">
        <div className="page-header-toolbar">
          <div className="btn-group toolbar-item" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-left"></i></button>
            <button type="button" className="btn btn-secondary">03/02/2019 - 20/08/2019</button>
            <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-right"></i></button>
          </div>
          <div className="filter-wrapper">
            <div className="dropdown toolbar-item">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownsorting" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Day</button>
              <div className="dropdown-menu" aria-labelledby="dropdownsorting">
                <a className="dropdown-item" href="#">Last Day</a>
                <a className="dropdown-item" href="#">Last Month</a>
                <a className="dropdown-item" href="#">Last Year</a>
              </div>
            </div>
            <a href="#" className="advanced-link toolbar-item">Advanced Options</a>
          </div>
          <div className="sort-wrapper">
          <button type="button" className="btn btn-primary toolbar-item">New</button> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={logOut}  className="btn btn-danger toolbar-item ">Logout</button>    
            <div className="dropdown ml-lg-auto ml-3 toolbar-item">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownexport" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Export</button>
              <div className="dropdown-menu" aria-labelledby="dropdownexport">
                <a className="dropdown-item" href="#">Export as PDF</a>
                <a className="dropdown-item" href="#">Export as DOCX</a>
                <a className="dropdown-item" href="#">Export as CDR</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                  <div className="wrapper">
                    <h3 className="mb-0 font-weight-semibold">32,451</h3>
                    <h5 className="mb-0 font-weight-medium text-primary">Visits</h5>
                    <p className="mb-0 text-muted">+14.00(+0.50%)</p>
                  </div>
                  <div className="wrapper my-auto ml-auto ml-lg-4">
                  <img className="element_class" src={graph1} alt="profile image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                <div className="d-flex">
                  <div className="wrapper">
                    <h3 className="mb-0 font-weight-semibold">15,236</h3>
                    <h5 className="mb-0 font-weight-medium text-primary">Impressions</h5>
                    <p className="mb-0 text-muted">+138.97(+0.54%)</p>
                  </div>
                  <div className="wrapper my-auto ml-auto ml-lg-4">
                  <img className="element_class" src={graph1} alt="profile image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                <div className="d-flex">
                  <div className="wrapper">
                    <h3 className="mb-0 font-weight-semibold">7,688</h3>
                    <h5 className="mb-0 font-weight-medium text-primary">Conversation</h5>
                    <p className="mb-0 text-muted">+57.62(+0.76%)</p>
                  </div>
                  <div className="wrapper my-auto ml-auto ml-lg-4">
                  <img className="element_class" src={graph1} alt="profile image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                <div className="d-flex">
                  <div className="wrapper">
                    <h3 className="mb-0 font-weight-semibold">1,553</h3>
                    <h5 className="mb-0 font-weight-medium text-primary">Downloads</h5>
                    <p className="mb-0 text-muted">+138.97(+0.54%)</p>
                  </div>
                  <div className="wrapper my-auto ml-auto ml-lg-4">
                  <img className="element_class" src={graph1} alt="profile image" />
                  </div>
                </div>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>  */}

    <div className="row">
          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
          <div className='full_toggle-2'>
          <a href="#" id="messageDropdown" data-toggle="dropdown" aria-expanded="false"  onClick={Reminder}>
            <div className='absol_tech'>
                  <h3> Today's Enquiry <br/>Reminder </h3>
                  <span>{count}</span> <br/>
             </div>
             </a>
                <div className='SideBar_img'>
                <img className='img img-responsive image-fit img-fluid' src={enq} alt="profile image" />
                </div>
                <div className='allBox'>
                 <h1>  Enquiry </h1> 
                  <p> {count1+1}+ </p>    
                </div>
                <div className='dash_link'>
                <a href="#"> View More</a>
                </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className='full_toggle-3'>
                <a href="#" id="messageDropdown" data-toggle="dropdown" aria-expanded="false"  onClick={Reminder}>
                <div className='absol_tech_2'>
                  <h3> Today's Registration<br/> Reminder </h3>
                  <span> 45</span> <br/>
                               </div>    
                               </a>              
                <div className='SideBar_img'>
                <img className='img img-responsive image-fit img-fluid' src={reg} alt="profile image" />
                </div>
                <div className='allBox'>
                 <h1> Register </h1> 
                 <p> 13K+ </p>    
                </div>
                <div className='dash_link'>
                <a href="#"> View More</a>
                </div>
                </div>
          </div>
        </div>
        <br/>
        <div className="row">
        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className='full_toggle-1'>
                  <a href="#" id="messageDropdown" data-toggle="dropdown" aria-expanded="false"  onClick={Reminder}>
                <div className='absol_tech_3'>
                  <h3> Today's Application <br/>Reminder</h3>
                  <span> 20 </span> <br/>
             </div> 
             </a>   
                <div className='SideBar_img'>
                <img className='img img-responsive image-fit img-fluid' src={follow} alt="profile image" />
                </div>
                <div className='allBox'>
                 <h1> Application </h1> 
                 <p> {cou+1}+  </p>    
                </div>
                <div className='dash_link'>
                <a href="#"> View More</a>
                </div>
                </div>
          </div>        
          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
          <div className='full_toggle-4'>
          <a href="#" id="messageDropdown" data-toggle="dropdown" aria-expanded="false"  onClick={Reminder}>
          <div className='absol_tech_4'>
                  <h3> Today's Visa <br/> Reminder</h3>
                  <span> 51</span> <br/>
             </div>  
             </a>
                <div className='SideBar_img'>
                <img className='img img-responsive image-fit img-fluid' src={visa} alt="profile image" />
                </div>
                <div className='allBox'>
                 <h1>  Visa </h1> 
                 <p> 9K+ </p>    
                </div>
                <div className='dash_link'>
                <a href="#"> View More</a>
                </div>
                </div>
          </div>
        </div>
        <br/>
  <footer className="footer">
    <div className="container-fluid clearfix">
      <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © KIA CONSULTANT 2021</span>
      <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> <a href="index.html" target="_blank">KIA CONSULTANT</a> KIA CONSULTANT</span>
    </div>
  </footer>
</div>
</div>
</div>
</>

    
)
}

export default Filecontrol ;
