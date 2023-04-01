import React from "react";
import Navbar from '../Navbar.js';
import Sidebar from '../Sidebar.js';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { faPenToSquare,faPlus, faSearch,faTrash,faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useForm,useFormState } from 'react-hook-form';
import classNames from 'classnames'
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Attendend, Educational,Experience,PersonalInformation, Test, Qualification, Background } from './AllFields';
import API_URL from "../../config/config.js";

function Leads() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [value, setvalue] = useState();
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const [searchs,setSearchs]=useState();
 
  const validationSchema = Yup.object().shape({
        
});      
const formOptions = { resolver: yupResolver(validationSchema) };
const { register, handleSubmit, control,reset,formState} = useForm();
const { errors } = formState;




  const onSubmit = async (data) => {
let led=""
data["Id"]=0;
  await axios.post(`${API_URL}/api/Leads/CheckMobile`,data).then((response) =>{
     led=response.data
    console.log("response",led);
      reset();     
      setShow(false)
      }).catch(error => {
console.log(error);
swal("Bad job!", "Your data not save successfully", "warning");  

});

  
  console.log("SaveData",data);
  if(led!="")
  {
    console.log("Error Mobile Number")
    swal("Bad job!", "Your mobile number already exists", "warning");  
  }else
{
  console.log("Save Mobile Number")
  await axios.post(`${API_URL}/api/Leads/SaveData`,data).then((response) =>{
      setUsers(response.data)
        reset();
        swal("Good job!", "Your data save successfully", "success");  
        }).catch(error => {
  console.log(error);
  swal("Bad job!", "Your data not save successfully", "warning");  
 
});
 
  navigate("/leads");
  loadUsers();
  setShow(false)
 }
    
// }
  
};
const compareStrings = (a, b) => {
  //do something i.e. a.toLowerCase(); b.toLowerCase()
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

 const [user1, setUsers] = useState([]);
const Searchs=(e)=>{
  setvalue(e.target.value)
  axios.post(`${API_URL}/api/Leads/FetchLeadsBySearch`,{
    SearchId:3,
    SearchValue:value
}).then((response) =>{
setUsers(response.data)
}).catch(error => {
console.log(error);
});
}

 const handleFilter = async (e)=>{
   let filter =e.target.value
   if(filter=="#")
   {
    await axios
    .post(`${API_URL}/api/Leads/FetchLeads`,{
      Id:0
         }).then((response) => {
          setUsers(response.data);
          console.log("datalist",response.data)
    }).catch(error => {
      console.log(error);
    });
   }else{
         await axios.post(`${API_URL}/api/Leads/FetchLeadsBySearch`,{
            SearchId:1,
            SearchValue:filter
  }).then((response) =>{
    setUsers(response.data)
      }).catch(error => {
console.log(error);
});
   }
}  
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    await axios
     .post(`${API_URL}/api/Leads/FetchLeads`, {
       Id:0
          }).then((response) => {
           setUsers(response.data);
           console.log("datalist",response.data)
     }).catch(error => {
       console.log(error);
     });

//      await axios.post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`,{
//       SearchId:3,
//       SearchValue:value
// }).then((response) =>{
// setUsers(response.data)
// }).catch(error => {
// console.log(error);
// });

    }
    const Delete= async (id) =>{
      console.log("id",id)
     await axios
      .post(`${API_URL}/api/Leads/DeleteData`,{
        Id:id
      }).then((response) => {
            setUsers(response.data);
      }).catch(error => {
        console.log(error);
      });
      await axios
      .post(`${API_URL}/api/EducationSummary/DeleteData`,{
        Id:id
      }).then((response) => {
            setUsers(response.data);
      }).catch(error => {
        console.log(error);
      });    
      await axios
      .post(`${API_URL}/api/SchoolAttented/DeleteData`,{
        Id:id
      }).then((response) => {
            setUsers(response.data);
      }).catch(error => {
        console.log(error);
      });
      await axios
      .post(`${API_URL}/api/TestScore/DeleteData`,{
        Id:id
      }).then((response) => {
            setUsers(response.data);
      }).catch(error => {
        console.log(error);
      });
      await axios
      .post(`${API_URL}/api/WorkExperience/DeleteData`,{
        Id:id
      }).then((response) => {
            setUsers(response.data);
      }).catch(error => {
        console.log(error);
      });
      loadUsers();
      navigate("/leads");
        }
const addFields = ()=>{
    
}
var i=0;
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
                <h3> Manage Enquiry</h3>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 pr-0">
              <div className="react_search_btn">
                <input
                  // type="text"
                  icon='search'
                  className="form-control"
                  name="search"
                  placeholder="Search"
                  value={value}
                  onChange={Searchs}
                  // onClick={handleSearch}
                />
              </div>
            </div>
            {/* <div className="col-md-1 col-xs-12 pl-0">
              <button type="button" className="form-control search_all_btn"  onClick={handleSearch}> 
               <FontAwesomeIcon icon={ faSearch } /></button>
              </div> */}
            <div className="col-md-2 col-xs-12">
              <div className="react_pop_up_btn">
                <Button
                  className="btn btn-primary pop_up_btn"
                  variant="primary"
                  onClick={handleShow}
                >
                 <FontAwesomeIcon icon={ faPlus } />&nbsp;
                  Add Enquiry
                </Button>
              </div>
            </div>
            <div className="col-md-2 col-xs-12">
              <div className="react_dropdown_btn">
                <select name="all" id="all"  onChange={handleFilter}>
                  <option value="#">All</option>
                  <option value="hot">Hot</option>
                  <option value="warm">Warm</option>
                  <option value="cold">Cold</option>
                  </select>
              </div>
            </div>
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
              { Array.isArray(user1)&&(user1.sort((a, b) => compareStrings(a, b)).map((user, index) => {
                  
      
                  return (
                    
                       <tr key={user.id}>
                        {user.Status=== "Registered"? "": <>
                      <td scope="row">{i +=1}</td>
                      <td>{user.FirstName}</td>
                      <td>{user.LastName}</td>
                      <td>{user.MobileNo}</td>
                      <td>{user.Status}</td>
                      <td>{user.Remarks}</td>
                      <td>
                   <Link type="button" name="edit" className="btn_edit" to={`/edit/${user.Id}`}>
                        <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                      </Link> 
                      <button type="button" name="delete"  className="btn_delete" onClick={()=>Delete (user.Id)}>
                        <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon>
                      </button>
                      </td>
                      </>   }
                    </tr>)
             }))}
              </tbody>
            </table>            
          </div>
          </div>
        </div>
        
        <div>
        <Modal show={show} onHide={handleCloses}>
            <Modal.Header closeButton onSubmit={handleCloses}>
              <Modal.Title>Add Enquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body  >
            <Accordion defaultActiveKey="0" >
        <PersonalInformation register={register} errors={errors} classNames={classNames}control={control}/>
        <Educational register={register} control={control} errors={errors} classNames={classNames} />
        <Attendend register={register} control={control} errors={errors} classNames={classNames}/>  
        <Experience register={register} control={control}errors={errors} classNames={classNames} />  
        <Test register={register} control={control} errors={errors} classNames={classNames}/>       
        <Qualification register={register} control={control} errors={errors} classNames={classNames}/>    
        <Background register={register} control={control}errors={errors} classNames={classNames}/>                              
        </Accordion>
           </Modal.Body>
        <Modal.Footer >
              <Button variant="success" type='submit'onClick={handleSubmit(onSubmit)} >
            Add Enquiry
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
      </div>
      </div>
    </>
  );
}
export default Leads;

