import React from "react";
import Navbar from '../Navbar.js';
import Sidebar from '../Sidebar.js';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import {useParams,useNavigate} from "react-router-dom";
import { Attendend, Educational,Experience,PersonalInformation, Test, Qualification, Background,Upload } from '../Leads/AllField';
import axios from "axios";
import swal from 'sweetalert';
import { useForm, useFieldArray } from 'react-hook-form';
// import {FtpDeploy} from 'ftp-deploy'
const EditReg = () => {
  const { register, handleSubmit, control,reset } = useForm();
  const [show, setShow] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
//   const FtpDeploy = require("ftp-deploy");
// const ftpDeploy = new FtpDeploy();
const {id}=useParams();
const navigate = useNavigate();
// alert(id)
  const handleShow = () => setShow(true);
  const handleCloses = () =>{
     setShow(false);
     navigate("/Register");
     loadUsers();
}
  const handleClose = async (data) => {
 
// const {UploadDocument}=data
// let ads ="" ;
// console.log("reg",data);
// Array.isArray(UploadDocument)&&(UploadDocument.map((res,i)=> ads=res))
// console.log("upload",ads);
// ads["HDId"]= id
// ads["Id"]= 0;
// console.log("regid",ads);

// const formData = new FormData();
// formData.append("ads", ads.DocPath);

// ads.DocPath=formData;


// formData.append("ads", ads);
// console.log("docpath",formData)
await axios.post(`http://13.235.85.235/SafalKia/api//Leads/SaveData`,data).then((response) =>{
  console.log("EditSave",response.data);
  swal("Good job!", "Your data update successfully", "success");
           }).catch(error => {
console.log("EditReg",error);
swal("Bad job!", "Your data not save successfully", "warning");  
});
    
//     await axios.post(`http://13.235.85.235/SafalKia/api/Reg/SaveReg`,ads).then((response) =>{
//       console.log("EditSave",response.data);
//                }).catch(error => {
//   console.log("EditReg",error);
// });
    navigate("/Register");
    loadUsers();
    setShow(false);
   
  };
     const loadUsers = async () => {
        await axios
        .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadDate`,{
          Id: id
        }).then((response) => {
          let res = (response.data)
          console.log("editdata",res);
          const curren = new Date(res.DOB)
          const dat = `${curren.getFullYear()}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}`;
          res.DOB=dat
          const current = new Date(res.FollowUp)
          res.FollowUp = `${current.getFullYear()}-${((current.getMonth() + 1) < 10 ? '0' : '')+(current.getMonth() + 1)}-${(current.getDate() < 10 ? '0' : '')+(current.getDate())}`;
     
          res.SchoolAttentedList.map((raa,i)=>
          {
            let curren="";
           curren= new Date(raa.AttentedTill)
          let current= new Date(raa.AttentedFrom)
           res.SchoolAttentedList[i].AttentedFrom = `${current.getFullYear()}-${((current.getMonth() + 1) < 10 ? '0' : '')+(current.getMonth() + 1)}-${(current.getDate() < 10 ? '0' : '')+(current.getDate())}`;
          res.SchoolAttentedList[i].AttentedTill = `${curren.getFullYear()}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}`;
          }
          )
          res.TestScoreList.map((raa,i)=>
          {
            let curren="";
           curren= new Date(raa.ExamDate)           
          res.TestScoreList[i].ExamDate = `${curren.getFullYear()}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}`;
                   
          }
          )
          res.WorkExperienceList.map((raa,i)=>
          {
            let curren="";
           curren= new Date(raa.AttentedFrom)
          let current= new Date(raa.AttentedTill)
          let currents= new Date(raa.AttentedTo)
           res.WorkExperienceList[i].AttentedFrom = `${current.getFullYear()}-${((current.getMonth() + 1) < 10 ? '0' : '')+(current.getMonth() + 1)}-${(current.getDate() < 10 ? '0' : '')+(current.getDate())}`;
          res.WorkExperienceList[i].AttentedTill = `${curren.getFullYear()}-${((curren.getMonth() + 1) < 10 ? '0' : '')+(curren.getMonth() + 1)}-${(curren.getDate() < 10 ? '0' : '')+(curren.getDate())}`;
          res.WorkExperienceList[i].AttentedTo = `${currents.getFullYear()}-${((currents.getMonth() + 1) < 10 ? '0' : '')+(currents.getMonth() + 1)}-${(currents.getDate() < 10 ? '0' : '')+(currents.getDate())}`;
            }
          )
          console.log("SchoolAttenteTill",res);
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
            <Modal.Title>KIA CONSULTANT</Modal.Title>
          </Modal.Header>
          <Modal.Body  >
          <Accordion defaultActiveKey="0" >
      <PersonalInformation register={register} />
      <Educational register={register} control={control} />
      <Attendend register={register} control={control} />  
      <Experience register={register} control={control} />  
      <Test register={register} control={control} />       
      <Qualification register={register} control={control} />    
      <Background register={register} control={control} />   
      <Upload register={register} control={control} setSelectedFile={setSelectedFile} />                            
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

export default EditReg