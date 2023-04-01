import React from "react";
import Navbar from '../Navbar.js';
import Sidebar from '../Sidebar.js';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare,faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrash,faSearch} from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useForm,} from 'react-hook-form';
function Ragister() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [value, setvalue] = useState();
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const [user1, setUsers] = useState([]); 
//  const handleSearch = async ()=>{
//   const result = await axios.get(`http://localhost:3003/users?q=${value}`);
//   setUsers(result.data);
//  }

 axios.post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`,{
    SearchId:3,
    SearchValue:value
}).then((response) =>{
setUsers(response.data)
}).catch(error => {
console.log(error);
});
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
var i = 0;
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
                <h3> Manage Register</h3>
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
                    {user.Status=== "Registered"? <>
                      <td scope="row">{i +=1}</td>
                      <td>{user.FirstName}</td>
                      <td>{user.LastName}</td>
                      <td>{user.MobileNo}</td>
                      <td>{user.Status}</td>
                      <td>{user.Remarks}</td>
                      <Link type="button" name="show" className="btn_show" to={`/Show/${user.Id}`}>
                       <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </Link>
                   <Link type="button" name="edit" className="btn_edit" to={`/EditReg/${user.Id}`}>
                        <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                      </Link> 
                      <button type="button" name="delete"  className="btn_delete" onClick={()=>Delete (user.Id)}>
                        <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon>
                      </button>
                      </> :""  }
                    </tr>
                  );
                }))}
              </tbody>
            </table>
          </div>
        </div>
        </section>
        </div>
        </div>
    </>
  );
}
export default Ragister;

