import React from "react";
import Navbar from '../Navbar.js';
import Sidebar from '../Sidebar.js';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faEye, faMedal, faMemory, faSchoolCircleCheck, faTableList, faCircleInfo, faUserPlus, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faCirclePlus , fasearch } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { faSchool, faUser } from "@fortawesome/fontawesome-free-solid";
import { useForm, useFieldArray } from 'react-hook-form';
import swal from 'sweetalert';

function Application() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [value, setvalue] = useState();

  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const { register, handleSubmit, control,reset } = useForm();
const onSubmit = async (data) => {
  data["Id"]=0;
  console.log("SaveData",data);
  // data["HDId"]=0;
  await axios.post(`http://13.235.85.235/SafalKia/api/Leads/SaveData`,data).then((response) =>{
        setUsers(response.data)
          reset();
          }).catch(error => {
    console.log(error);   
  });
    navigate("/Application");
    loadUsers();
    setShow(false)
    swal("Good job!", "Your data save successfully", "success");  

    
};

 
    const [user1, setUsers] = useState([]);
 
  
//  const handleFilter = async (e)=>{
//   let filter =e.target.value
//   if(filter=="#")
//   {
//    await axios
//    .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeads`,{
//      Id:0
//         }).then((response) => {
//          setUsers(response.data);
//          console.log("datalist",response.data)
//    }).catch(error => {
//      console.log(error);
//    });
//   }else{
//         await axios.post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`,{
//            SearchId:1,
//            SearchValue:filter
//  }).then((response) =>{
//    setUsers(response.data)
//      }).catch(error => {
// console.log(error);
// });
//   }
// } 
  useEffect(() => {
    loadUsers();
  //   axios.post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`,{
  //     SearchId:3,
  //     SearchValue:value
  // }).then((response) =>{
  // setUsers(response.data)
  // }).catch(error => {
  // console.log(error);
  // });
  }, []);
  const loadUsers = async () => {

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
const Delete= async (id) =>{
   await axios.delete(`http://localhost:3003/users/${id}`);
   loadUsers();
}
const addFields = () => {
    
}

  return (
    <>
    <div className="container-scroller">
     <Navbar/>
     <div className="container-fluid page-body-wrapper pl-0 pr-0">
    <Sidebar/> 
      <section id="ele_ment_lead">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-xs-12 pl-0">
              <div className="text_react">
                <h3> Manage Application</h3>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 pr-0">
              <div className="react_search_btn">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="Search"
                  value={value}
                  onChange={(e)=> setvalue(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="col-md-1 col-xs-12 pl-0">
              <button type="button" className="form-control search_all_btn" name="search" value="search" onClick={handleSearch}> 
               <FontAwesomeIcon icon={ faSearch } /></button>
              </div> */}
            <div className="col-md-2 col-xs-12">
              <div className="react_pop_up_btn">
                
               </div>
            </div>
            {/* <div className="col-md-2 col-xs-12">
              <div className="react_dropdown_btn">
                <select name="all" id="all"  onChange={handleFilter}>
                  <option value="#">All</option>
                  <option value="hot">Hot</option>
                  <option value="warm">Warm</option>
                  <option value="cold">Cold</option>
                  <option value="Registered">Registered</option>
                </select>
              </div>
            </div> */}
          </div>
          <br />
          <div className="row">
          <div className="Minimum_height">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Status</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              { Array.isArray(user1)&&(user1.map((user, index) => {
                  return (
                    <tr key={user.id}>
                    <td scope="row">{index + 1}</td>
                    <td>{user.FirstName}</td>
                    <td>{user.LastName}</td>
                    <td>{user.MobileNo}</td>
                    <td>{user.Status}</td>
                    <td>{user.Remarks}</td>
                 <td>                  
                  <Link type="button" name="edit" className="btn_edit" to={`/EditApp/${user.Id}`}>
                        <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                      </Link>
                      <button type="button" name="delete"  className="btn_delete" onClick={()=>Delete (user.id)}>
                        <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon>
                      </button>
                      </td>
                    </tr>
                  );
                }))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
        </section>
        </div>
        </div>
    </>
  );
}
export default Application;

