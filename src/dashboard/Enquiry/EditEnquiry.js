import React from "react";
import Navbar from '../Navbar.js';
import Sidebar from '../Sidebar.js';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useParams,useNavigate} from "react-router-dom";
import { Attendend, Educational,Experience,PersonalInformation, Test, Qualification, Background } from '../Leads/AllField';
import axios from "axios";
import swal from 'sweetalert';
import { useForm, useFieldArray } from 'react-hook-form';
import API_URL from "../../config/config.js";

const EditEnquiry = () => {
  const { register, handleSubmit, control,reset } = useForm();
    const [show, setShow] = useState(true);
const {id}=useParams();
const navigate = useNavigate();
// alert(id)
    const handleShow = () => setShow(true);
    const handleCloses = () =>{
       setShow(false);
       navigate("/Enquiry");
       loadUsers();
  }
  const handleClose = async (data) => {
    await axios.post(`${API_URL}/api/Leads/SaveData`,data).then((response) =>{
      console.log("EditSave",response.data);
               }).catch(error => {
  console.log(error);
});
    navigate("/Enquiry");
    loadUsers();
    setShow(false);
    swal("Good job!", "Your data update successfully", "success");
  };
 
 

  const loadUsers = async () => {
    await axios
    .post(`${API_URL}/api/Leads/FetchLeadDate`,{
      Id: id
    }).then((response) => {
      let res = (response.data)
      console.log("editdata",res);
       reset(res);
        }).catch(error => {
      console.log(error);
    });    
};
  useEffect(() => {
    loadUsers();
  }, []);
    
  return (
    <div>
      <div className="container-scroller">
     <Navbar/>
     <div className="container-fluid page-body-wrapper pl-0 pr-0">
    <Sidebar/> 
    <div>  
       <Modal show={show} onHide={handleCloses}>
            <Modal.Header closeButton onSubmit={handleCloses}>
              <Modal.Title>Edit Enquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body  >
            <Accordion defaultActiveKey="0" >
        <PersonalInformation register={register} control={control} />
        <Educational register={register} control={control} />
        <Attendend register={register} control={control} />  
        <Experience register={register} control={control} />  
        <Test register={register} control={control} />       
        <Qualification register={register} control={control} />    
        <Background register={register} control={control} />                              
        </Accordion>
           </Modal.Body>
        <Modal.Footer >
        <Button variant="success" type='submit'onClick={handleSubmit(handleClose)} >
              Update
              </Button>
            </Modal.Footer>
          </Modal>
          </div></div>  </div> 
    </div>
  )
}

export default EditEnquiry