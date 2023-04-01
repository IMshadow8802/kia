import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Attendend, Educational,Experience,PersonalInformation, Test, Qualification, Background } from './dashboard/Leads/AllField';
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useParams,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
const AllForms = () => {
  const [show, setShow] = useState(true);
  // const handleShow = () => setShow(true);
  const handleCloses = () =>{
    setShow(false);
    // navigate("/leads");
    // loadUsers();
}
const handleClose = () =>{
  setShow(false);
  // navigate("/leads");
  // loadUsers();
}
const [lead, setLead] = useState({});
const { register, handleSubmit, control } = useForm();
const onSubmit = (data) => {
  // e.preventDefault();
  console.log(data);
  // await axios.put(`http://localhost:3003/users/${id}`,lead);
  // navigate("/leads");
  // loadUsers();
  setShow(false);
};
// const leadValue = (e) => {
//   setLead({ ...lead, [e.target.name]: e.target.value });
// };

 
  // const onSubmit = (data) => {
  //   console.log(data);
  // }
  return (
    <>
    <Modal show={show} onHide={onSubmit}>
            <Modal.Header closeButton onSubmit={handleCloses}>
              <Modal.Title>Edit Leads</Modal.Title>
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
              {/* <Button variant="secondary" onClick={handleCloses}>
                Close
              </Button> */}
              <Button variant="success" type='submit'onClick={handleSubmit(onSubmit)} >
              Update
              </Button>
            </Modal.Footer>
          </Modal>
{/*    
    <form className='asd' onSubmit={handleSubmit(onSubmit)}>
     <div>
    <PersonalInformation register={register} control={control} />
    <button className='btn btn-success' type='submit'>
Submit
    </button>
     </div>
    </form> */}
    </>
  )
}

export default AllForms