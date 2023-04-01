import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
export const PersonalInformation = (prop) => {
  const [country, setCountry] = useState();
  const { register, control } = prop;

  console.log("country", country);
  return (
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Application</Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="app_filter_data">
                <label> Country </label>
                <select
                  className="form-control"
                  id="appcountry"
                  {...register("appcountry")}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
            {country === "uk" ? 
              <>
                <div className="row">
                  <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> College Name</label>
                      <input
                        type="text"
                        {...register("CollegeName")}
                        placeholder="College Name"
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Tution Fee Receipt</label>
                      <input
                        type="date"
                        {...register("TutionFeeReceipt")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> ID</label>
                      <input
                        type="text"
                        {...register("ID")}
                        placeholder="College ID"
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> CAS</label>
                      <input
                        type="date"
                        {...register("CAS")}
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
                        type="text"
                        placeholder="Course"
                        {...register("Course")}
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Biometric</label>
                      <input
                        type="date"
                        {...register("Biometric")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Password</label>
                      <input
                        type="text"
                        placeholder="Enter the Password"
                        {...register("Password")}
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> GIC Certificate</label>
                      <input
                        type="date"
                        {...register("GICCertificate")}
                        className="form-control"
                       />
                    </div>
                  </div>
                    </div>
                    <div className="row">
                  
                  <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Applied</label>
                      <input
                        type="date"
                        {...register("Applied")}
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Medical</label>
                      <input
                        type="date"
                        {...register("Medical")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Offer Letter Received</label>
                      <input
                        type="date"
                        {...register("OfferLetterReceived")}
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> GIC Applied</label>
                      <input
                        type="date"
                        {...register("GICApplied")}
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
                        type="date"
                        {...register("ApllicationFeePaid")}
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Tution Fee Paid</label>
                      <input
                        type="date"
                        {...register("TutionFeePaid")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> Reject</label>
                      <input
                        type="date"
                        {...register("Reject")}
                        className="form-control"
                      />
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="This_form">
                      <label> LOC</label>
                      <input
                        type="date"
                        {...register("LOC")}
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
                        type="date"
                        format="dd-mm-yyyy"
                        placeholder="dd-mm-yyyy"
                        className="form-control"
                        {...register("RegisterFollowUpDate")}
                        required="1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Source:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Source")}
                        required="1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Remarks :</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Remarks "
                        {...register("Remarks")}
                        required="1"
                      />
                    </div>
                  </div>
                </div>
              </>
            : 
              <>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Family Details</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("FamilyDetails")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> CAQ</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("CAQ")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> GIC Certificate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("GICCertificate")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Tution Fee Receipt</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("TutionFeeReceipt")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> FAQ</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("FAQ ")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Financial Summary</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("FinancialSummary ")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Academic Summary</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("AcademicSummary")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Medical</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Medical")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Favourite Game</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("FavouriteGame")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Passport</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Passport")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Work Experience</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("WorkExperience")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> IELTS</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("IELTS")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> SOP</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("SOP")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> ITR</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("ITR")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Visa Form</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("VisaFrom")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Questionnaire</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Questionnaire ")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Photo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Photo")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Memorable Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("MemorableDate")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Visa Field</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("VisaFailed")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> GC Key</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("GCKey")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("UserName")}
                      />
                    </div>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Password")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Father Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("FatherName")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label> Memorable Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("MemorableName")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Followup Date:</label>
                      <input
                        type="date"
                        format="dd-mm-yyyy"
                        placeholder="dd-mm-yyyy"
                        className="form-control"
                        {...register("RegisterFollowUpDate")}
                        required="1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Source:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Source Name"
                        {...register("Source")}
                        required="1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Remarks :</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Remarks "
                        {...register("Remarks")}
                        required="1"
                      />
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

// export const UkVisa = (prop) => {
//   const { register, control } = prop;

//   return (
//     <>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>United Kingdom Visa</Accordion.Header>
//         <Accordion.Body>
//           <div className="row">
//             <div className="col-lg-2 col-md-2">
//               <div className="This_form">
//                 <label> College Name</label>
//                 <input
//                   type="text"
//                   placeholder="College Name"
//                   className="form-control"
//                 />
//               </div>
//               <div className="This_form">
//                 <label> Tution Fee Receipt</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-1 col-md-1">
//               <div className="This_form">
//                 <label> ID</label>
//                 <input
//                   type="text"
//                   placeholder="College ID"
//                   className="form-control"
//                 />
//               </div>
//               <div className="This_form">
//                 <label> CAQ</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-1 col-md-1">
//               <div className="This_form">
//                 <label> Course</label>
//                 <input
//                   type="text"
//                   placeholder="Course"
//                   className="form-control"
//                 />
//               </div>
//               <div className="This_form">
//                 <label> Biometric</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-2">
//               <div className="This_form">
//                 <label> Password</label>
//                 <input
//                   type="text"
//                   placeholder="Password"
//                   className="form-control"
//                 />
//               </div>
//               <div className="This_form">
//                 <label> GIC Certificate</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-1 col-md-1">
//               <div className="This_form">
//                 <label> Applied</label>
//                 <input type="date" className="form-control" />
//               </div>
//               <div className="This_form">
//                 <label> Medical</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-2">
//               <div className="This_form">
//                 <label> Offer Letter Received</label>
//                 <input type="date" className="form-control" />
//               </div>
//               <div className="This_form">
//                 <label> GIC Applied</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-2">
//               <div className="This_form">
//                 <label> Application Fee Paid</label>
//                 <input type="date" className="form-control" />
//               </div>
//               <div className="This_form">
//                 <label> Tution Fee Paid</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//             <div className="col-lg-1 col-md-1">
//               <div className="This_form">
//                 <label> Reject</label>
//                 <input type="date" className="form-control" />
//               </div>
//               <div className="This_form">
//                 <label> LOC</label>
//                 <input type="date" className="form-control" />
//               </div>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//     </>
//   );
// };

// export const CanadaVisa = (prop) => {
//   const { register, control } = prop;

//   return (
//     <>
//       <Accordion.Item eventKey="2">
//         <Accordion.Header>Canada Visa</Accordion.Header>
//         <Accordion.Body>
//           <div className="row">
//             <div className="col-md-4 col-sm-12 col-xs-12 col-md-4">
//               <div className=" All_div_SECTION">
//                 <label> Family Details</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> CAQ</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> GIC Certificate</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Tution Fee Receipt</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Faq</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Financial Summary</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Academic Summary</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Medical</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Favourite Game</label>
//                 <input
//                   type="text"
//                   placeholder="Favourite Game"
//                   className="form-control"
//                 />
//                 <br />
//               </div>
//             </div>
//             <div className="col-md-4 col-sm-12 col-xs-12 col-md-4">
//               <div className=" All_div_SECTION">
//                 <label> Passport</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Work Experience</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> IELTS</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> SOP</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> ITR</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Visa Form</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Questionnaire</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Photo</label>
//                 <input type="checkbox" className="form-control" />
//                 <br />
//                 <label> Memorable Date</label>
//                 <input
//                   type="text"
//                   placeholder="Memorable Date"
//                   className="form-control"
//                 />
//                 <br />
//               </div>
//             </div>
//             <div className="col-md-4 col-sm-12 col-xs-12 col-md-4">
//               <div className=" All_div_SECTION">
//                 <label> Visa Feild</label>
//                 <input type="Date" className="form-control" />
//                 <br />
//                 <label> GC Key</label>
//                 <input
//                   type="text"
//                   placeholder="GC Key"
//                   className="form-control"
//                 />
//                 <br />
//                 <label> Username</label>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   className="form-control"
//                 />
//                 <br />
//                 <label> Password</label>
//                 <input
//                   type="text"
//                   placeholder="Password"
//                   className="form-control"
//                 />
//                 <br />
//                 <label> Father Name</label>
//                 <input
//                   type="text"
//                   placeholder="Father Name"
//                   className="form-control"
//                 />
//                 <br />
//                 <label> Memorable Name</label>
//                 <input
//                   type="text"
//                   placeholder="Memorable Name"
//                   className="form-control"
//                 />
//               </div>
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//     </>
//   );
// };
