import React from "react";
import Navbar from "../Navbar.js";
import Sidebar from "../Sidebar.js";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Attendend,
  Educational,
  Experience,
  PersonalInformation,
  Test,
  Qualification,
  Background,
  ApplicationInformation,
  Upload,
} from "../Leads/AllField";
import swal from "sweetalert";
import axios from "axios";
// import { faSchool, faUser } from "@fortawesome/fontawesome-free-solid";
import { useForm } from "react-hook-form";
// import { PersonalInformation,} from './AllField';
import { clear } from "@testing-library/user-event/dist/clear.js";
const Visa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const [value, setvalue] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const { register, handleSubmit, control, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   setShow(false);
  // };
  const [lead, setLead] = useState({
    Id: "",
    Country: "",
    CollegeName: "",
    TutionFeeReceipt: "",
    CAS: "",
    Course: "",
    Biometric: "",
    Passport: "",
    Applied: "",
    Medical: "",
    OfferLetterReceived: "",
    GICApplied: "",
    ApllicationFeePaid: "",
    TutionFeePaid: "",
    Reject: "",
    LOC: "",
    RegisterFollowUpDate: "",
    Remarks: "",
    Source: "",
    FamilyDetails: "",
    CAQ: "",
    GICCertificate: "",
    FAQ: "",
    FinancialSummary: "",
    AcademicSummary: "",
    FavouriteGame: "",
    WorkExperience: "",
    IELTS: "",
    SOP: "",
    VisaFrom: "",
    Questionnaire: "",
    Photo: "",
    MemorableDate: "",
    VisaFailed: "",
    GCKey: "",
    UserName: "",
    Password: "",
    FatherName: "",
    MemorableName: "",
    ITR: "",
  });
  const [values, setValues] = useState("uk");
  console.log("Country Nmae", values);
  const handelValue = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  // const addInputField = ()=>{
  //   setLead([...lead, {
  //     coedu:" ",
  //     hledu:" ",
  //     grades:" ",
  //     year:" ",
  //     gradingscheme:" "
  //   } ])
  //   }

  const [user1, setUsers] = useState([]);
  const leadValue = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };
  const handleClose = async () => {
    lead.Country = values;
    lead["HDId"] = 0;
    lead["Id"] = 0;
    await axios
      .post(`http://13.235.85.235/SafalKia/api/Visa/SaveVisa`, lead)
      .then((response) => {
        console.log("EditSave", response.data);
        swal(
          "Good job!",
          "Your Visa Application update successfully",
          "success"
        );
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/Visa");
    loadUsers();
    setShow(false);
    console.log("Country Value All", lead);
    // setShow(false);
    setLead({
      Id: "",
      Country: "",
      CollegeName: "",
      TutionFeeReceipt: "",
      CAS: "",
      Course: "",
      Biometric: "",
      Passport: "",
      Applied: "",
      Medical: "",
      OfferLetterReceived: "",
      GICApplied: "",
      ApllicationFeePaid: "",
      TutionFeePaid: "",
      Reject: "",
      LOC: "",
      RegisterFollowUpDate: "",
      Remarks: "",
      Source: "",
      FamilyDetails: "",
      CAQ: "",
      GICCertificate: "",
      FAQ: "",
      FinancialSummary: "",
      AcademicSummary: "",
      FavouriteGame: "",
      WorkExperience: "",
      IELTS: "",
      SOP: "",
      VisaFrom: "",
      Questionnaire: "",
      Photo: "",
      MemorableDate: "",
      VisaFailed: "",
      GCKey: "",
      UserName: "",
      Password: "",
      FatherName: "",
      MemorableName: "",
      ITR: "",
    });
  };
  const onSubmit = () => setShow(false);

  //   const onSubmit = async (data) => {
  //     data["HDId"]=0;
  //     data["Id"]=0;

  //     console.log("Visa",data)
  //     await axios.post(`http://13.235.85.235/SafalKia/api/Visa/SaveVisa`,data).then((response) =>{
  //       console.log("EditSave",response.data);
  //                }).catch(error => {
  //   console.log(error);
  // });
  //     navigate("/Visa");
  //     loadUsers();
  //     setShow(false);
  //     // swal("Good job!", "Your data update successfully", "success");
  //   };

  axios
    .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`, {
      SearchId: 3,
      SearchValue: value,
    })
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  // const handleFilter = async (e) => {
  //   let filter = e.target.value;
  //   if (filter == "#") {
  //     await axios
  //       .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeads`, {
  //         Id: 0,
  //       })
  //       .then((response) => {
  //         setUsers(response.data);
  //         console.log("datalist", response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     await axios
  //       .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeadsBySearch`, {
  //         SearchId: 1,
  //         SearchValue: filter,
  //       })
  //       .then((response) => {
  //         setUsers(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    await axios
      .post(`http://13.235.85.235/SafalKia/api/Leads/FetchLeads`, {
        Id: 0,
      })
      .then((response) => {
        setUsers(response.data);
        console.log("datalist", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Delete = async (id) => {
    //  await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper pl-0 pr-0">
          <Sidebar />
          <section id="ele_ment_lead">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-xs-12 pl-0">
                  <div className="text_react">
                    <h3> Manage Visa Application</h3>
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
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="col-md-1 col-xs-12 pl-0">
              <button type="button" className="form-control search_all_btn" name="search" value="search"> 
               <FontAwesomeIcon icon={ faSearch } /></button>
              </div> */}

                <div className="col-md-2 col-xs-12">
                  <div className="react_pop_up_btn">
                    {/* <Button
                  className="btn btn-primary pop_up_btn"
                  variant="primary"
                  onClick={handleShow}
                >
                 <FontAwesomeIcon icon={ faPlus } />&nbsp;
                  Add Visa
                </Button> */}
                  </div>
                </div>
                {/* <div className="col-md-2 col-xs-12">
                  <div className="react_dropdown_btn">
                    <select name="all" id="all" onChange={handleFilter}>
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
                    {user1.map((user, index) => {
                      return (
                        <tr key={user.id}>
                          <td scope="row">{index + 1}</td>
                          <td>{user.FirstName}</td>
                          <td>{user.LastName}</td>
                          <td>{user.MobileNo}</td>
                          <td>{user.Status}</td>
                          <td>{user.Remarks}</td>
                          <td>
                         <Link
                            type="button"
                            name="edit"
                            className="btn_edit"
                            to={`/EditVisa/${user.Id}`}
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                            ></FontAwesomeIcon>
                          </Link>
                          <button
                            type="button"
                            name="delete"
                            className="btn_delete"
                            onClick={() => Delete(user.id)}
                          >
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                </div>
              </div>
              <Modal show={show} onHide={onSubmit}>
                <Modal.Header closeButton onSubmit={handleCloses}>
                  <Modal.Title>Add Visa Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Accordion defaultActiveKey="0">
                    {/* <PersonalInformation register={register} control={control}/>       */}
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="app_filter_data">
                          <label> Country </label>
                          <select
                            className="form-control"
                            id="appcountry"
                            // name="Country"
                            onChange={(e) => setValues(e.target.value)}
                            value={values}
                          >
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>
                          </select>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />

                      {values === "uk" ? (
                        <>
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> College Name</label>
                                <input
                                  name="CollegeName"
                                  value={lead.CollegeName}
                                  onChange={handelValue}
                                  type="text"
                                  placeholder="College Name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Tution Fee Receipt</label>
                                <input
                                  name="TutionFeeReceipt"
                                  value={lead.TutionFeeReceipt}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> ID</label>
                                <input
                                  name="Id"
                                  value={lead.Id}
                                  onChange={handelValue}
                                  type="text"
                                  placeholder="College ID"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> CAS</label>
                                <input
                                  name="CAS"
                                  value={lead.CAS}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Course</label>
                                <input
                                  name="Course"
                                  value={lead.Course}
                                  onChange={handelValue}
                                  type="text"
                                  placeholder="Course"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Biometric</label>
                                <input
                                  name="Biometric"
                                  value={lead.Biometric}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Password</label>
                                <input
                                  name="Password"
                                  value={lead.Password}
                                  onChange={handelValue}
                                  type="text"
                                  placeholder="Enter the Password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> GIC Certificate</label>
                                <input
                                  name="GICCertificate"
                                  value={lead.GICCertificate}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Applied</label>
                                <input
                                  name="Applied"
                                  value={lead.Applied}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Medical</label>
                                <input
                                  name="Medical"
                                  value={lead.Medical}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Offer Letter Received</label>
                                <input
                                  name="OfferLetterReceived"
                                  value={lead.OfferLetterReceived}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> GIC Applied</label>
                                <input
                                  name="GICApplied"
                                  value={lead.GICApplied}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Application Fee Paid</label>
                                <input
                                  name="ApllicationFeePaid"
                                  value={lead.ApllicationFeePaid}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Tution Fee Paid</label>
                                <input
                                  name="TutionFeePaid"
                                  value={lead.TutionFeePaid}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> Reject</label>
                                <input
                                  name="Reject"
                                  value={lead.Reject}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="This_form">
                                <label> LOC</label>
                                <input
                                  name="LOC"
                                  value={lead.LOC}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label>Followup Date:</label>
                                <input
                                  name="RegisterFollowUpDate"
                                  value={lead.RegisterFollowUpDate}
                                  onChange={handelValue}
                                  type="date"
                                  format="dd-mm-yyyy"
                                  placeholder="dd-mm-yyyy"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label>Source:</label>
                                <input
                                  name="Source"
                                  value={lead.Source}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label>Remarks :</label>
                                <input
                                  name="Remarks"
                                  value={lead.Remarks}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Remarks "
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Family Details</label>
                                <input
                                  name="FamilyDetails"
                                  value={lead.FamilyDetails}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> CAQ</label>
                                <input
                                  name="CAQ"
                                  value={lead.CAQ}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> GIC Certificate</label>
                                <input
                                  name="GICCertificate"
                                  value={lead.GICCertificate}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Tution Fee Receipt</label>
                                <input
                                  name="TutionFeeReceipt"
                                  value={lead.TutionFeeReceipt}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> FAQ</label>
                                <input
                                  name="FAQ"
                                  value={lead.FAQ}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Financial Summary</label>
                                <input
                                  name="FinancialSummary"
                                  value={lead.FinancialSummary}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Academic Summary</label>
                                <input
                                  name="AcademicSummary"
                                  value={lead.AcademicSummary}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter AcademicSummary"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Medical</label>
                                <input
                                  name="Medical"
                                  value={lead.Medical}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Family Details"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Favourite Game</label>
                                <input
                                  name="FavouriteGame"
                                  value={lead.FavouriteGame}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter FavouriteGame"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Passport</label>
                                <input
                                  name="Passport"
                                  value={lead.Passport}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Passport"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Work Experience</label>
                                <input
                                  name="WorkExperience"
                                  value={lead.WorkExperience}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter WorkExperience"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> IELTS</label>
                                <input
                                  name="IELTS"
                                  value={lead.IELTS}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> SOP</label>
                                <input
                                  name="SOP"
                                  value={lead.SOP}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter SOP Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> ITR</label>
                                <input
                                  name="ITR"
                                  value={lead.ITR}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter ITR"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Visa Form</label>
                                <input
                                  name="VisaFrom"
                                  value={lead.VisaFrom}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter VisaFrom"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Questionnaire</label>
                                <input
                                  name="Questionnaire"
                                  value={lead.Questionnaire}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Questionnaire"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Photo</label>
                                <input
                                  name="Photo"
                                  value={lead.Photo}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Photo"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Memorable Date</label>
                                <input
                                  name="MemorableDate"
                                  value={lead.MemorableDate}
                                  onChange={handelValue}
                                  type="date"
                                  className="form-control"
                                  placeholder="Enter Memorable Date"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Visa Field</label>
                                <input
                                  name="VisaFailed"
                                  value={lead.VisaFailed}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> GC Key</label>
                                <input
                                  name="GCKey"
                                  value={lead.GCKey}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter GC Key"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Username</label>
                                <input
                                  name="UserName"
                                  value={lead.UserName}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter User Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Password</label>
                                <input
                                  name="Password"
                                  value={lead.Password}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Father Name</label>
                                <input
                                  name="FatherName"
                                  value={lead.FatherName}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Father Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label> Memorable Name</label>
                                <input
                                  name="MemorableName"
                                  value={lead.MemorableName}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Memorable Name "
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label>Followup Date:</label>
                                <input
                                  name="RegisterFollowUpDate"
                                  value={lead.RegisterFollowUpDate}
                                  onChange={handelValue}
                                  type="date"
                                  format="dd-mm-yyyy"
                                  placeholder="dd-mm-yyyy"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label>Source:</label>
                                <input
                                  name="Source"
                                  value={lead.Source}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Source Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group new_b">
                                <label>Remarks :</label>
                                <input
                                  name="Remarks"
                                  value={lead.Remarks}
                                  onChange={handelValue}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Remarks "
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Accordion>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  {/* <Button variant="success" type='submit'onClick={handleSubmit(onSubmit)} >
              Update
              </Button> */}
                </Modal.Footer>
              </Modal>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Visa;
