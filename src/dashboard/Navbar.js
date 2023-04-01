import React from 'react'
import { useState,useEffect } from 'react'
import logo from './images/logo.png'
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faBell } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faCirclePlus , fasearch } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import icon from './images/icon.jpg'
import swal from 'sweetalert';
import BellIcon from 'react-bell-icon'; 
import {Login}from '../Login/Login';
const Navbar = ()=>
{
  var i=0;
  const {id}=useParams();
  var i="";
 
   const[remarks,setRemarks]= useState({FollowupDate:"",FollowUpRemark:"",Status:"",Id:"0",HDId:""})
   const[showremarks,setShowremarks]= useState("")
  let count="";
  const [values,setValue]=useState();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [shows, setShows] = useState(false);
  const [user1, setUsers] = useState([]);
  let dat ="";
var status="";
  const handleCloses = () => {
      setShow(false); 
    }
  const handleCloses1 = () => {
      setShow1(false); 
    }
    const handleClos = () => {
      setShows(false); 
    }
    const navigate = useNavigate();
    const logOut = ()=>
      {
        window.localStorage.clear();
        navigate("/");
       
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

const StatusReport=async()=>{
  setShows(true);
  await axios
  .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeads`, {
    Id:0
       }).then((response) => {
        setUsers(response.data);
        console.log("datalist",response.data)
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
  }
 const ShowData =async (id)=>{
  setShow(false)
  setShow1(true)
  await axios.post(`http://13.235.85.235/SafalKia/api/LeadsFollowUp/FetchLeadFollowUpHistory`,{
  HDId:id,
}).then((response) =>{

  setShowremarks(response.data)
  // setShow(true);
// console.log("show Data",dat);
}).catch(error => {
console.log(error);
});
 }
 const GetData = (e)=>{
  setRemarks({...remarks,[e.target.name]:e.target.value})
 }
const SaveReminder = async(id , status)=>{
  console.log("id",id)
  console.log("status",status)
  remarks.HDId=id;
  if(remarks.Status!="")
 { 
  await axios.post(`http://13.235.85.235/SafalKia/api/LeadsFollowUp/SaveFollowUp`,remarks).then((response)=>{
    setShowremarks(response.data)
    console.log("date",response.data)
    }).catch(error => {
    console.log(error);
    });
    setRemarks({FollowupDate:"",FollowUpRemark:"",Status:"",Id:"0",HDId:""})
    setShow1(false); 
    swal("Good job!", "Your Reminder save successfully", "success");  
  }
  else{
    remarks.Status=status
    console.log("remarks",remarks.Status)
    await axios.post(`http://13.235.85.235/SafalKia/api/LeadsFollowUp/SaveFollowUp`,remarks).then((response)=>{
      setShowremarks(response.data)
      console.log("date",response.data)
      }).catch(error => {
      console.log(error);
      });
      setRemarks({FollowupDate:"",FollowUpRemark:"",Status:"",Id:"0",HDId:""})
      setShow1(false); 
      swal("Good job!", "Your Reminder save successfully", "success");  
  }
 }
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
                  <th scope="col">Status</th>
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
                      <td>{user.Status}</td>                   
                   {/* <button type="button" name="edit" className="btn_edit"  onClick={()=>ShowData(user.Id)}>
                        <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                      </button>  */}
                     < Link type="button" name="edit" className="btn_edit" to={`/edit/${user.Id}`}>
                        <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                      </Link> 
                         </tr>
                  );
                }))}
              </tbody>
            </table>
          </div>
          {/* {showremarks !="" ?
          <>
          <div className="row">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Follow Up New Date</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              { Array.isArray(showremarks)&&(showremarks.map((user, index) => {
                i=user.HdId
                status=user.Status
                   return (
                      <tr key={user.id}>
                        </tr>
                  );
                }))}
                      <td> <input type="date"className="form-control"onChange={GetData} value={remarks.FollowupDate} name="FollowupDate"/></td>
                      <td><input type="text"className="form-control"onChange={GetData} value={remarks.FollowUpRemark}
                      name="FollowUpRemark" placeholder='Enter Follow Up Remarks'/></td>
                      <td> 
              <span> Status</span>
              <select
                className="form-control"
                name="Status"
                id="backstatus"
                value={remarks.Status}
                onChange={GetData}
              >
               <option value="Cold">Cold</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
               <option value="Registered">Registered</option>
              </select>
            </td>
                      <td><Button className='btn btn-success btn-dark text-light border-0' type='submit' onClick={()=>SaveReminder(i,status)} > Save</Button></td>
                
              </tbody>
            </table>
         </div>
         <div className='row'>
         <table className='table'>
          <tbody className='thead-dark'>
          <tr>
            <th scope="col">Follow Up Old Date</th>
            <th scope="col">Status</th>
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
                      <td>{user.Status}</td>
                      <td>{user.FollowUpRemark}</td>                                 
                   </tr>
                  );
                }))}
              </tbody>
          </table>
          </div> </> : ""  }         */}
          <Button variant="success" type='submit'onClick={handleCloses} >
              Close
              </Button>
           </Modal.Body>
             </Modal>
             <Modal show={show1} onHide={handleCloses1}>
            <Modal.Header closeButton onSubmit={handleCloses1}>
              <Modal.Title>Today Reminder</Modal.Title>
            </Modal.Header>
            <Modal.Body  >         
          <div className="row">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Follow Up New Date</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              { Array.isArray(showremarks)&&(showremarks.map((user, index) => {
                i=user.HdId
                status=user.Status
                   return (
                      <tr key={user.id}>
                        </tr>
                  );
                }))}
                      <td> <input type="date"className="form-control"onChange={GetData} value={remarks.FollowupDate} name="FollowupDate"/></td>
                      <td><input type="text"className="form-control"onChange={GetData} value={remarks.FollowUpRemark}
                      name="FollowUpRemark" placeholder='Enter Follow Up Remarks'/></td>
                      <td> 
              <span> Status</span>
              <select
                className="form-control"
                name="Status"
                id="backstatus"
                value={remarks.Status}
                onChange={GetData}
              >
               <option value="Cold">Cold</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
               <option value="Registered">Registered</option>
              </select>
            </td>
                      <td><Button className='btn btn-success btn-dark text-light border-0' type='submit' onClick={()=>SaveReminder(i,status)} > Save</Button></td>
                
              </tbody>
            </table>
         </div>
         <div className='row'>
         <table className='table'>
          <tbody className='thead-dark'>
          <tr>
            <th scope="col">Follow Up Old Date</th>
            <th scope="col">Status</th>
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
                      <td>{user.Status}</td>
                      <td>{user.FollowUpRemark}</td>                                 
                   </tr>
                  );
                }))}
              </tbody>
          </table>
          </div> 
            <Button variant="success" type='submit'onClick={handleCloses1} >
              Close
              </Button>
           </Modal.Body>
             </Modal>
<nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
<div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
  <a className="navbar-brand brand-logo" href="index.html">
    <img src={logo}  alt="logo" /> </a>
  <a className="navbar-brand brand-logo-mini" href="index.html">
    <img src="../static/assets/images/logo-mini.jpeg" alt="logo" /> </a>
</div>
<div className="navbar-menu-wrapper d-flex align-items-center">
  <ul className="navbar-nav">
    <li className="nav-item font-weight-semibold d-none d-lg-block">Help : +91-9711022011</li>
  </ul>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
   <li className="nav-item font-weight-semibold d-none d-lg-block">WelCome:</li>

  <ul className="navbar-nav ml-auto">
  <button type="button" className="btn btn-primary toolbar-item ">
  <div class="dropdown">
       <span> Report </span>
  <div class="dropdown-content">
  <a href="#"> Date wise report</a>
  <a onClick={StatusReport}> Status</a>
  </div>
</div>
</button> &nbsp;
  <button type="button" onClick={logOut}  className="btn btn-danger toolbar-item ">Logout</button>
    <li className="nav-item dropdown">
      <a className="nav-link count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
      <FontAwesomeIcon className='Bell_icon' icon={faBell} onClick={Reminder} />
       <span className="count">{count}</span>
             </a>
      <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
        <a className="dropdown-item py-3">
          <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
          <span className="badge badge-pill badge-primary float-right">View all</span>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item preview-item">
          <div className="preview-thumbnail">
            <img src="../static/assets/images/faces/face10.jpg" alt="image" className="img-sm profile-pic" />
          </div>
          <div className="preview-item-content flex-grow py-2">
            <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
            <p className="font-weight-light small-text"> The meeting is cancelled </p>
          </div>
        </a>
        <a className="dropdown-item preview-item">
          <div className="preview-thumbnail">
            <img src="../static/assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic" />
          </div>
          <div className="preview-item-content flex-grow py-2">
            <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
            <p className="font-weight-light small-text"> The meeting is cancelled </p>
          </div>
        </a>
        <a className="dropdown-item preview-item">
          <div className="preview-thumbnail">
            <img src="../static/assets/images/faces/face1.jpg" alt="image" className="img-sm profile-pic" />
          </div>
          <div className="preview-item-content flex-grow py-2">
            <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
            <p className="font-weight-light small-text"> The meeting is cancelled </p>
          </div>
        </a>
      </div>
    </li>
    {/* <li className="nav-item dropdown">
      <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
        <i className="mdi mdi-email-outline"></i>
        <span className="count bg-success">3</span>
      </a>
      <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
        <a className="dropdown-item py-3 border-bottom">
          <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
          <span className="badge badge-pill badge-primary float-right">View all</span>
        </a>
        <a className="dropdown-item preview-item py-3">
          <div className="preview-thumbnail">
            <i className="mdi mdi-alert m-auto text-primary"></i>
          </div>
          <div className="preview-item-content">
            <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
            <p className="font-weight-light small-text mb-0"> Just now </p>
          </div>
        </a>
        <a className="dropdown-item preview-item py-3">
          <div className="preview-thumbnail">
            <i className="mdi mdi-settings m-auto text-primary"></i>
          </div>
          <div className="preview-item-content">
            <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
            <p className="font-weight-light small-text mb-0"> Private message </p>
          </div>
        </a>
        <a className="dropdown-item preview-item py-3">
          <div className="preview-thumbnail">
            <i className="mdi mdi-airballoon m-auto text-primary"></i>
          </div>
          <div className="preview-item-content">
            <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
            <p className="font-weight-light small-text mb-0"> 2 days ago </p>
          </div>
        </a>
      </div>
    </li> */}
    { <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
      <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
      <img className="img-xs rounded-circle" src={icon} alt="profile image" /> </a>
      <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
        <div className="dropdown-header text-center">
          <img className="img-md rounded-circle" src="../static/assets/images/faces/icon.jpg" alt="Profile image" />
          <p className="mb-1 mt-3 font-weight-semibold">KIA CONSULTANT</p>
          <p className="font-weight-light text-muted mb-0">kiaconsultant@gmail.com</p>
        </div>
        <a className="dropdown-item">My Profile <span className="badge badge-pill badge-danger">1</span><i className="dropdown-item-icon ti-dashboard"></i></a>
        <a className="dropdown-item">Messages<i className="dropdown-item-icon ti-comment-alt"></i></a>
        <a className="dropdown-item">Activity<i className="dropdown-item-icon ti-location-arrow"></i></a>
        <a className="dropdown-item">FAQ<i className="dropdown-item-icon ti-help-alt"></i></a>
        <a className="dropdown-item">Sign Out<i className="dropdown-item-icon ti-power-off"></i></a>
      </div>
    </li> }
  </ul>

  <Modal show={shows} onHide={handleClos}>
            <Modal.Header closeButton onSubmit={handleClos}>
              <Modal.Title>Report</Modal.Title>
            </Modal.Header>
            <Modal.Body  >
<div>
  <label> Please select what type of report you want</label>
  <br></br>
  <select
                className="form-control"
                value={values}
                onChange={(e)=> setValue(e.target.value)}
                id="backstatus"
              >
                 <option value="#">Select</option>
               <option value="Cold">Cold</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
               <option value="Registered">Registered</option>
              </select>
</div>
<br/>
            <div className="row">
            <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {/* <th scope="col">Id</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Status</th>
                  <th scope="col">Remarks</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>
              <tbody>
              { Array.isArray(user1)&&(user1.map((user, index) => {
                  
      
                  return (
                    
                       <tr key={user.id}>
                        {user.Status===values?<>
                      {/* <td scope="row">{i +=1}</td> */}
                      <td>{user.FirstName}</td>
                      <td>{user.LastName}</td>
                      <td>{user.MobileNo}</td>
                      <td>{user.Status}</td>
                      <td>{user.Remarks}</td>
                   
                      </> :" "  }
                    </tr>
);
             }))}
              </tbody>
            </table>

            
          </div>
          </div>
         <br/>
          <Button variant="success" type='submit'onClick={handleClos} >
              Close
              </Button>
           </Modal.Body>
        <Modal.Footer >         
        </Modal.Footer>
          </Modal>
  <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
    <span className="mdi mdi-menu"></span>
  </button>
</div>
</nav>  
  </> 
    )
}
export default Navbar ;
