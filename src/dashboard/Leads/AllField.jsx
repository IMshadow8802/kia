import React, { useState } from 'react'
import {useFieldArray } from 'react-hook-form';
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
// import axios from 'axios';
// import Modal from "react-bootstrap/Modal";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useParams, useNavigate } from "react-router-dom";
// import check from 'sweetalert';
// import Register from '../Register/Register';
// import DatePicker from "react-datepicker";
export const PersonalInformation = (prop) => {
  const { register,control,errors,classNames} = prop;
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Personal Information</Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>First Name :<a className="asd">*</a>  </label>
                <input
                  type="text"
                  // className={`form-control ${errors.FirstName ? 'is-invalid' : ''}`}
                  className="form-control"
                  placeholder="First Name"
                  {...register("FirstName")}
                  id="fname"
                  // required="please enter Name"
                />
                 {/* <div className="invalid-feedback">{errors.FirstName?.message}</div> */}
                {/* {dirtyFields.firstName && <p>Please enter name.</p>} */}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Middle Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Middle name"
                  {...register("MiddleName")}
                  id="mname"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("LastName")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Are you known by any other name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Other name"
                  name="oname"
                  {...register("OName")}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>If checked add affidavit in documents:</label>

                <input
                  type="checkbox"
                  {...register("Doc")}
                  id="Doc"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Date of birth</label>
                {/* <DatePicker 
               selected={startDate}
                format="dd-mm-yyyy"
                  placeholder="dd-mm-yyyy"
                  className="form-control"
                  {...register("DOB")}
                  id="dob" /> */}
                <input
                // type="date"
                  format="dd-mm-yyyy"
                  placeholder="dd-mm-yyyy"
                  className="form-control"
                  {...register("DOB")}
                  id="dob"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>First Language</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("FLanguage")}
                  placeholder="first language"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Country of Citizenship</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("COCitizenship")}
                  placeholder="country of citizenship"

                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Passport Number</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("PassportNo")}
                  placeholder="Passport number"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Gender</label>
                <select
                  className="form-control"
                  {...register("Gender")}
                >
                  <option value="#">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Marital Status</label>
                <select
                  className="form-control"
                  {...register("MaritalStatus")}
                >
                  <option value="#">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("Address")}
                  placeholder="Address"

                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>City / Town</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("City")}
                  placeholder="Address"

                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Province / State</label>
                <select
                  className="form-control"
                  {...register("Province")}
                >
                  <option value="#">Select</option>
                  <option value="Delhi / NCR">Delhi / NCR</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Uttrakhand">Uttrakhand</option>
                  <option value="Andhra Pradesh">
                    Andhra Pradesh
                  </option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Pune">Pune</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Ahemdabad">Ahemdabad</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Kerla">Kerla</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Uttar Pardesh">Uttar Pardesh</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Assam">Assam</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Madhya Pradesh">
                    Madhya Pradesh
                  </option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Jammu & Kashmir">
                    Jammu & Kashmir
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Country</label>
                <select
                  className="form-control"
                  {...register("Country")}
                >
                  <option value="#">Select</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Europe">Europe</option>
                  <option value="China">China</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="U.S.A">U.S.A</option>
                  <option value="India">India</option>
                  <option value="France">France</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Sri lanka">Sri lanka</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Australia">Australia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Italy">Italy</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mexico">Mexico</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Thailand">Thailand</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Postcode</label>
                <input
                  type="text"
                  // className={`form-control ${errors.PostalCode ? 'is-invalid' : ''}`}
                  className="form-control"
                  placeholder="Postcode"
                  {...register("PostalCode")}
                />
                {/* <div className="invalid-feedback">{errors.PostalCode?.message}</div> */}
              </div>
            </div>
          </div>
          <div className="row">
       
       <div className="col-lg-6 col-md-6 col-sm-6">
         <div className="form-group new_b">
           <label>Kia Email Id:</label>
           <input
             type="text"
             className= "form-control"
             placeholder="Kia Email Id"
             {...register("KIAEmailId")}
             />   
            </div>
       </div>
       <div className="col-lg-6 col-md-6 col-sm-6">
         <div className="form-group new_b">
           <label> Personal Email Id:</label>
           <input
             type="text"
             className= "form-control"
             placeholder="Personal Email Id"
             {...register("EmailId")}
             />   
            </div>
       </div>
     </div>
          <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Student Phone Number:</label>
                <input
                  //  className={`form-control ${errors.MobileNo ? 'is-invalid' : ''}`}
                  className="form-control"
                  placeholder="Student Phone Number"
                  // {...register("MobileNo",{ required: true, maxLength: 10,minLength: 10  })}
                  {...register("MobileNo")}
                  />
                 {/* {errors?.MPhoneNo?.type === "required" && (
                 <h4>This field is required</h4>)}
                   {errors?.MPhoneNo?.type === "maxLength" && (
                     <p>Mobile Number cannot exceed 10 digit</p>
                         )}
                         {errors?.MPhoneNo?.type === "minLength" && (
                         <p>Mobile Number  minimum length 10 digit</p>
                         )} */}
                {/* <div className="invalid-feedback">{errors.MobileNo?.message}</div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Mother Phone Number:</label>
                <input
                  type="text"
                  // className={`form-control ${errors.MPhoneNo ? 'is-invalid' : ''}`}
                  className="form-control"
                  placeholder="Mother Phone Number"
                  {...register("MPhoneNo")}
                />
                 {/* <div className="invalid-feedback">{errors.MPhoneNo?.message}</div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Father Phone Number:</label>
                <input
                  type="text"
                  // className={`form-control ${errors.FPhoneNo ? 'is-invalid' : ''}`}
                  className="form-control"
                  placeholder="Father Phone Number"
                  {...register("FPhoneNo")}
                />
                {/* <div className="invalid-feedback">{errors.FPhoneNo?.message}</div> */}
              </div>
            </div>
          </div>
         
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}
export const Educational = (prop) => {
  const { register, control } = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'EducationSummaryList'
  })
  const append7 = () => {
    append({
      CountryOEducation: " ",
      EducationLevel: " ",
      Grades: " ",
      Year: " ",
      GradingScheme: " "
    });
  }
  return (
    <>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Educational Summary</Accordion.Header>
        <Accordion.Body>
          {/* <>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b">
                  <label>Country of Education</label>
                  <select
                    className="form-control"
                    {...register("CountryOEducation")}
                  >
                    <option value="#">Select</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Europe">Europe</option>
                    <option value="China">China</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="U.S.A">U.S.A</option>
                    <option value="India">India</option>
                    <option value="France">France</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Sri lanka">Sri lanka</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Australia">Australia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Italy">Italy</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Thailand">Thailand</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b">
                  <label>Highest Level of Education</label>
                  <select
                    className="form-control"
                    {...register("EducationLevel")}
                  >
                    <option value="#">Select</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">
                      Post Graduation
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b">
                  <label>Grades</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Grades"
                    {...register("Grades")}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group new_b">
                  <label>Year</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    {...register("Year")}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group new_b new_r new_l">
                  <label>Grading Scheme</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Grading Scheme"
                    {...register("GradingScheme")}
                  />
                </div>
              </div>
            </div>

          </> */}
          {
            fields.map((item,index) => (

              <div className='map' key={item.id}>
                <div className="row" >
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Country of Education</label>
                      <select
                        className="form-control"
                        {...register(`EducationSummaryList[${index}].CountryOEducation`)}
                        name={`EducationSummaryList[${index}].CountryOEducation`}
                        defaultValue={item.CountryOEducation}
                      >
                        <option value="#">Select</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Europe">Europe</option>
                        <option value="China">China</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="U.S.A">U.S.A</option>
                        <option value="India">India</option>
                        <option value="France">France</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Sri lanka">Sri lanka</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Italy">Italy</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mexico">Mexico</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Thailand">Thailand</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Highest Level of Education</label>
                      <select
                        className="form-control"
                        {...register(`EducationSummaryList[${index}].EducationLevel`)}
                        name={`EducationSummaryList[${index}].EducationLevel`}
                        defaultValue={item.EducationLevel}
                      >
                        <option value="#">Select</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post Graduation">
                          Post Graduation
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Grades</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Grades"
                        {...register(`EducationSummaryList[${index}].Grades`)}
                        name={`EducationSummaryListS[${index}].Grades`}
                        defaultValue={item.Grades}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group new_b">
                      <label>Year</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                        {...register(`EducationSummaryList[${index}].Year`)}
                        name={`EducationSummaryList[${index}].Year`}
                        defaultValue={item.Year}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group new_b new_r new_l">
                      <label>Grading Scheme</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Grading Scheme"
                        {...register(`EducationSummaryList[${index}].GradingScheme`)}
                        name={`EducationSummaryList[${index}].GradingScheme`}
                        defaultValue={item.GradingScheme}
                      />
                    </div>
                  </div>

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                  <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                </div>


              </div>

            ))}

          <div className="text-right my_btn_lead">
            <Button variant="success" type='submit' onClick={append7} >
              AddField
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>

  )
}
export const Attendend = (prop) => {
  const { register, control } = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'SchoolAttentedList'
  })
  const append1 = () => {

    append({
      EducationLevel:" ",
      InstitutionCountry:" " ,
      Grades:" ",
      State:" ",
      AttentedFrom:"",
      AttentedTill:"",
      InstituteName:" ",
      Address:" " ,
      University:" "

    });
  }
  return (
    <>
      <Accordion.Item eventKey="2">
        <Accordion.Header>School Attended</Accordion.Header>
        <Accordion.Body>
          {/* <>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b">
                  <label>Level of Education</label>
                  <select
                    className="form-control"
                    {...register("EducationLevel")}
                    id="ledu"
                  >
                    <option value="#">Select</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">
                      Post Graduation
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Country of Institution</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country of Institution"
                    {...register("InstitutionCountry")}
                    id="couint"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Grades</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Grades"
                    {...register("Grades")}
                    id="countgrades"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b">
                  <label>State</label>
                  <select
                    className="form-control"
                    {...register("State")}
                    id="coustate"
                  >
                    <option value="#">Select</option>
                    <option value="Delhi / NCR">Delhi / NCR</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Uttrakhand">Uttrakhand</option>
                    <option value="Andhra Pradesh">
                      Andhra Pradesh
                    </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Pune">Pune</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Ahemdabad">Ahemdabad</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Kerla">Kerla</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Uttar Pardesh">Uttar Pardesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Assam">Assam</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Madhya Pradesh">
                      Madhya Pradesh
                    </option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Jammu & Kashmir">
                      Jammu & Kashmir
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Attended Institute From</label>
                  <input
                     format="dd-mm-yyyy"
                     placeholder="dd-mm-yyyy"
                    className="form-control"
                    {...register("AttentedFrom")}
                    id="attendinstitute"
                     />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Attended Institute Till</label>
                  <input
                     format="dd-mm-yyyy"
                     placeholder="dd-mm-yyyy"
                    className="form-control"
                    {...register("AttentedTill")}
                    id="coedu"
                    />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Name of Institute</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Institute"
                    {...register("InstituteName")}
                    id="nameofinst"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    {...register("Address")}
                    id="instaddr"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="form-group new_b new_r">
                  <label>Board/University</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Board/University"
                    {...register("University")}
                    id="board"
                  />
                </div>
              </div>
            </div>
          </> */}

          {
            fields.map((item1, index) => (

              <div className='map' key={item1.id}>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Level of Education</label>

                      <select
                        className="form-control"
                        {...register(`SchoolAttentedList[${index}].EducationLevel`)}
                        name={`SchoolAttentedList[${index}].EducationLevel`}
                        defaultValue={item1.EducationLevel}
                      >
                        <option value="#">Select</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post Graduation">
                          Post Graduation
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Country of Institution</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(`SchoolAttentedList[${index}].InstitutionCountry`)}
                        name={`SchoolAttentedList[${index}].InstitutionCountry`}
                        defaultValue={item1.InstitutionCountry}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Grades</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register(`SchoolAttentedList[${index}].Grades`)}
                        name={`SchoolAttentedList[${index}].Grades`}
                        defaultValue={item1.Grades}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>State</label>
                      <select
                        className="form-control"
                        {...register(`SchoolAttentedList[${index}].State`)}
                        name={`SchoolAttentedList[${index}].State`}
                        defaultValue={item1.State}
                      >
                        <option value="#">Select</option>
                        <option value="Delhi / NCR">Delhi / NCR</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Uttrakhand">Uttrakhand</option>
                        <option value="Andhra Pradesh">
                          Andhra Pradesh
                        </option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Pune">Pune</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Ahemdabad">Ahemdabad</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Kerla">Kerla</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Uttar Pardesh">Uttar Pardesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Assam">Assam</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Madhya Pradesh">
                          Madhya Pradesh
                        </option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Jammu & Kashmir">Jammu & Kashmir  </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Attended Institute From</label>
                      <input 
                      type="date"
                         format="dd-mm-yyyy"
                         placeholder="dd-mm-yyyy"
                        className="form-control"
                        {...register(`SchoolAttentedList[${index}].AttentedFrom`)}
                        name={`SchoolAttentedList[${index}].AttentedFrom`}
                        defaultValue={item1.AttentedFrom}
                              
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Attended Institute Till</label>
                        <input
                        type="date"
                       format="dd-mm-yyyy"
                       className="form-control"
                       placeholder="dd-mm-yyyy"
                        {...register(`SchoolAttentedList[${index}].AttentedTill`)}
                        name={`SchoolAttentedList[${index}].AttentedTill`}
                        defaultValue={item1.AttentedTill}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Name of Institute</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name of Institute"
                        {...register(`SchoolAttentedList[${index}].InstituteName`)}
                        name={`SchoolAttentedList[${index}].InstituteName`}
                        defaultValue={item1.InstituteName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        {...register(`SchoolAttentedList[${index}].Address`)}
                        name={`SchoolAttentedList[${index}].Address`}
                        defaultValue={item1.Address}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Board/University</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Board/University"
                        {...register(`SchoolAttentedList[${index}].University`)}
                        name={`SchoolAttentedList[${index}].University`}
                        defaultValue={item1.University}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right my_btn_lead">
                    <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                  </div>
                </div>

              </div>

            ))}

          <div className="text-right my_btn_lead">
            <Button variant="success" type='submit' onClick={append1} >
              AddField
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>

    </>

  )
}
export const Experience = (prop) => {
  const { register, control } = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'WorkExperienceList'
  })
   return (
    <>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Work Experience</Accordion.Header>
        <Accordion.Body>
          {/* <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Job</label>
                <select
                  className="form-control"
                  {...register("Job")}
                  id="Job"
                >
                  <option value="#">Select</option>
                  <option value="Job1">Job1</option>
                  <option value="Job2">Job2</option>
                  <option value="Job3">Job3</option>
                  <option value="Job4">Job4</option>
                  <option value="Job5">Job5</option>
                  <option value="Job6">Job6</option>
                  <option value="Job7">Job7</option>
                  <option value="Job8">Job8</option>
                  <option value="Job9">Job9</option>
                  <option value="Job10">Job10</option>
                  <option value="Job11">Job11</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b new_r">
                <label>Country of job</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country of job"
                  {...register("Country")}
                  id="Country"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  {...register("CompanyName")}
                  id="CompanyName"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Designation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  {...register("Designation")}
                  id="Designation"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  {...register("Address")}
                  id="Address"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Work Experience From</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Work Experience From"
                  {...register("AttentedFrom")}
                  id="AttentedFrom"
                  defaultValue={date}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Work Experience To</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Work Experience to"
                  {...register("AttentedFrom")}
                  id="AttentedFrom"
                  defaultValue={date}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Work Experience till</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Work Experience till"
                  {...register("AttentedTill")}
                  id="AttentedTill"
                  defaultValue={date}
                />
              </div>
            </div>
          </div> */}


          {
            fields.map((item, index) => (

              <div className='map' key={item.id}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group new_b">
                      <label>Job</label>
                      <select
                        className="form-control"
                        {...register(`WorkExperienceList[${index}].Job`)}
                        name={`WorkExperienceList[${index}].Job`}
                        defaultValue={item.Job}
                      >
                        <option value="#">Select</option>
                        <option value="Job1">Job1</option>
                        <option value="Job2">Job2</option>
                        <option value="Job3">Job3</option>
                        <option value="Job4">Job4</option>
                        <option value="Job5">Job5</option>
                        <option value="Job6">Job6</option>
                        <option value="Job7">Job7</option>
                        <option value="Job8">Job8</option>
                        <option value="Job9">Job9</option>
                        <option value="Job10">Job10</option>
                        <option value="Job11">Job11</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group new_b new_r">
                      <label>Country of job</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country of job"
                        {...register(`WorkExperienceList[${index}].Country`)}
                        name={`WorkExperienceList[${index}].Country`}
                        defaultValue={item.Country}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                        {...register(`WorkExperienceList[${index}].CompanyName`)}
                        name={`WorkExperienceList[${index}].CompanyName`}
                        defaultValue={item.CompanyName}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Designation"
                        {...register(`WorkExperienceList[${index}].Designation`)}
                        name={`WorkExperienceList[${index}].Designation`}
                        defaultValue={item.Designation}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b new_r">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        {...register(`WorkExperienceList[${index}].Address`)}
                        name={`WorkExperienceList[${index}].Address`}
                        defaultValue={item.Address}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Work Experience From</label>
           
                <input
                  type="date"
                 format="dd-mm-yyyy"
                 placeholder="dd-mm-yyyy"
                  className="form-control"
                 {...register(`WorkExperienceList[${index}].AttentedFrom`)}
                        name={`WorkExperienceList[${index}].AttentedFrom`}
                        defaultValue={item.AttentedFrom}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Work Experience To</label>
                 <input
                  type="date"
                  format="dd-mm-yyyy"
                  placeholder="dd-mm-yyyy"
                  className="form-control"
                  {...register(`WorkExperienceList[${index}].AttentedTo`)}
                  name={`WorkExperienceList[${index}].AttentedTo`}
                  defaultValue={item.AttentedTill}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b new_r">
                <label>Work Experience till</label>
                 <input
                  type="date"
                  format="dd-mm-yyyy"
                  placeholder="dd-mm-yyyy"
                  className="form-control"
                {...register(`WorkExperienceList[${index}].AttentedTill`)}
                  name={`WorkExperienceList[${index}].AttentedTill`}
                  defaultValue={item.AttentedTill}
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                  <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                </div>
          </div>
              </div>

            ))}

          <div className="text-right my_btn_lead">
            <Button variant="success" type='submit' onClick={() => append({
               Job:" ",
               Country:" ",
               CompanyName:" ",
               Designation:" ",
               Address:" ",
               AttentedFrom:"",
               AttentedTo:"",
              AttentedTill:""
            })} >
              AddField
            </Button>
          </div>


        </Accordion.Body>
      </Accordion.Item>


    </>

  )
}
export const Test = (prop) => {
  const { register, control } = prop;
   const { append, fields, remove } = useFieldArray({
    control,
    name: 'TestScoreList'
  })
   return (
    <>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Test Score</Accordion.Header>
        <Accordion.Body>
          {/* <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b new_r">
                <div className="my_exam">
                  <div className="eet">
                    <label>English Exam</label>
                    <select
                      className="form-control"
                      {...register("Exam")}
                      id="Exam"
                    >
                      <option value="IELTS">IELTS</option>
                      <option value="DUOLINGO">DUOLINGO</option>
                      <option value="PTE">PTE</option>
                      <option value="TOFEL">TOFEL</option>
                      <option value="dont-have">
                        I don't have this
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b new_r">
                <div className="doe">
                  <label>Date of Exam</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DD/MM/YYYY"
                    {...register("ExamDate")}
                    id="ExamDate"
                    defaultValue={date}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Enter Exact Scores L</label>
                <input
                  type="text"
                  placeholder="L"
                  className="form-control"
                  {...register("Listening")}
                  id="Listening"
                />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Enter Exact Scores R</label>
                <input
                  type="text"
                  placeholder="R"
                  className="form-control"
                  {...register("Reading")}
                  id="Reading"
                />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Enter Exact Scores S</label>
                <input
                  type="text"
                  placeholder="S"
                  className="form-control"
                  {...register("Speaking")}
                  id="Speaking"
                />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Enter Exact Scores W</label>
                <input
                  type="text"
                  placeholder="w"
                  className="form-control"
                  {...register("Writing")}
                  id="Writing"
                />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Enter Exact Scores OS</label>
                <input
                  type="text"
                  placeholder="oS"
                  className="form-control"
                  {...register("OSScrore")}
                  id="OSScrore"
                />
                <br />
              </div>
            </div>
          </div> */}

          {
            fields.map((item, index) => (

              <div className='map' key={item.id}>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group new_b new_r">
                      <div className="my_exam">
                        <div className="eet">
                          <label>English Exam</label>
                          <select
                            className="form-control"
                            {...register(`TestScoreList[${index}].Exam`)}
                            name={`TestScoreList[${index}].Exam`}
                            defaultValue={item.Exam}
                          >
                            <option value="IELTS">IELTS</option>
                            <option value="DUOLINGO">DUOLINGO</option>
                            <option value="PTE">PTE</option>
                            <option value="TOFEL">TOFEL</option>
                            <option value="dont-have">
                              I don't have this
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group new_b new_r">
                      <div className="ExamDate">
                        <label>Date of Exam</label>
                        <input
                        type="date"
                        format="dd-mm-yyyy"
                        className="form-control"
                          placeholder="DD/MM/YYYY"
                          {...register(`TestScoreList[${index}].ExamDate`)}
                          name={`TestScoreList[${index}].ExamDate`}
                          defaultValue={item.ExamDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Enter Exact Scores L</label>
                      <input
                        type="text"
                        placeholder="L"
                        className="form-control"
                        {...register(`TestScoreList[${index}].Listening`)}
                        name={`TestScoreList[${index}].Listening`}
                        defaultValue={item.Listening}
                      />
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Enter Exact Scores R</label>
                      <input
                        type="text"
                        placeholder="R"
                        className="form-control"
                        {...register(`TestScoreList[${index}].Reading`)}
                        name={`TestScoreList[${index}].Reading`}
                        defaultValue={item.Reading}
                      />
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Enter Exact Scores S</label>
                      <input
                        type="text"
                        placeholder="S"
                        className="form-control"
                        {...register(`TestScoreList[${index}].Speaking`)}
                        name={`TestScoreList[${index}].Speaking`}
                        defaultValue={item.Speaking}
                      />
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Enter Exact Scores W</label>
                      <input
                        type="text"
                        placeholder="W"
                        className="form-control"
                        {...register(`TestScoreList[${index}].Writing`)}
                        name={`TestScoreList[${index}].Writing`}
                        defaultValue={item.Writing}
                      />
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group new_b">
                      <label>Enter Exact Scores OS</label>
                      <input
                        type="text"
                        placeholder="OS"
                        className="form-control"
                        {...register(`TestScoreList[${index}].OSScrore`)}
                        name={`TestScoreList[${index}].OSScrore`}
                        defaultValue={item.OSScrore}
                      />
                      <br />
                    </div>
                  </div>

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                  <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                </div>

              </div>

            ))}

          <div className="text-right my_btn_lead">
            <Button variant="success" type='submit' onClick={() => append({
              Exam: "",
              ExamDate: "",
              Listening: "",
              Reading: "",
              Speaking: "",
              Writing: "",
              OSScrore: ""
            })} >
              AddField
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>


    </>

  )
}
export const Qualification = (prop) => {
  const { register, control } = prop;
  // const { append, fields } = useFieldArray({
  //   control,
  //   name: 'UploadDocument'
  // })

  return (
    <>

      <Accordion.Item eventKey="5">
        <Accordion.Header>
          {" "}
          Additional Qualificational
        </Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label>Additional Qualification</label>
              <input
                type="text"
                className="form-control"
                placeholder="Additional Qualification"
                {...register("AddQualification")}
                id="qualification"
              />
            </div>
          </div>

        </Accordion.Body>
      </Accordion.Item>


    </>

  )
}
export const Background = (prop) => {
  const { register, control } = prop;
  // const { append, fields, remove } = useFieldArray({
  //   control,
  //   name: 'UploadDocument'
  // })
  // const [startDate, setStartDate] = useState(new Date());
  const [values,setValues]=useState("false");


  return (
    <>

      <Accordion.Item eventKey="6">
        <Accordion.Header> Other Information</Accordion.Header>
        <Accordion.Body>
          <div className="back_info">
            <p>
              Have you been refused a visa from Canada, the USA, the
              United Kingdom, New Zealand or Australia?
            </p>
          </div>

          <div className="row">
            <div className="col-md-1 col-xs-12 ">
              <input
                type="radio"
                checked={values === 'false'}
                onClick={()=>setValues("false")}
                {...register("Refuse")}
                id="tabno"
                value = {false}
                defaultValue={false}
              />
              &nbsp; No
            </div>
            <div className="col-md-1 col-xs-12 ">
              <input
                type="radio"
                {...register("Refuse")}
                id="tabyes"
                checked={values === "True"}
                onClick={()=>setValues("True")}
                value={"True"}
                defaultValue={"True"}
              />
              &nbsp; Yes
            </div>
            <div className="col-md-6 col-xs-12 ">
            {values=== "True" ?<input type='text' {...register("RefuseType")} />:" "}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <span> Status</span>
              <select
                className="form-control"
                {...register("Status")}
                id="backstatus"
              >
               <option value="Cold">Cold</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
               <option value="Registered">Registered</option>
              </select>
            </div>
            <div className="col-md-4 col-xs-4 col-sm-6">
              <span> Fee Paid Amount</span>
              <input
                type="number"
                {...register("PaidAmt")}
                id="amount"
                defaultValue={0.00}
              
              />
            </div>
            <div className="col-md-4 col-xs-4 col-sm-6">
              <span> Fee Paid Balance</span>
              <input
                type="number"
                {...register("BalanceAmt")}
                id="balance"
                defaultValue={0.00}
              
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6  col-md-6 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-4 col-xs-4 col-sm-6">
                  <span> Only IELTS</span>
                  <br />
                  <input
                    type="checkbox"
                    {...register("ILETS")}
                    id="oi"
                  />
                </div>
                <div className="col-md-4 col-xs-4 col-sm-6">
                  <span> Only Process</span>
                  <br />
                  <input
                    type="checkbox"
                    {...register("Process")}
                    id="op"
                  />
                </div>
                <div className="col-md-4 col-xs-4 col-sm-6">
                  <span> Discount</span>
                  <br />
                  <input
                    type="checkbox"
                    {...register("Discount")}
                    id="disc"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12 col-xs-12">
              <span> Remarks</span>
              <br />
              <textarea
                type="text"
                plceholder="Remarks"
                {...register("Remarks")}
                id="remarks"
                row="800"
                cols="56"
              >
             </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Follow Up Date:</label>
                <input
                 type="date"
                   format="dd-mm-yyyy"
                   placeholder="dd-mm-yyyy"
                  className="form-control"
                {...register("FollowUp")}
                  required="1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
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
          </div>

        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}
export const Upload = (prop) => {
  const { register, control,setSelectedFile } = prop;
  
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'UploadDocument'
  })

  const append4 = () => {
    append({
      DocName:"",
      DocPath:"",
      RegFollowupDate:"",
      Remarks:"",
      Source:"",
    });
  }
  return (
    <>

      <Accordion.Item eventKey="7">
        <Accordion.Header>
        Upload Documents
        </Accordion.Header>
        <Accordion.Body>
          {/* <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label>Select Documents</label>
              <select className="form-control" {...register("DocName")} id="rupdoc">
                <option value="#">Select Documents</option>
                <option value="Passport">Passport</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="Graduation Certificate">Graduation Certificate</option>
                <option value="Graduation Transcript">Graduation Transcript</option>
                <option value="12th Pass Certificate">12th Pass Certificate</option>
                <option value="12th Transcript">12th Transcript</option>
                <option value="10th Pass Certificate">10th Pass Certificate</option>
                <option value="10th Transcript">10th Transcript</option>
                <option value="Affidavit">Affidavit</option>
                <option value="Backlog Certificate">Backlog Certificate</option>
                <option value="Resume">Resume</option>
                <option value="Academic LOR">Academic LOR</option>
                <option value="IELTS">IELTS</option>
                <option value="Professional LOR">Professional LOR</option>
                <option value="Work Experience Documents">Work Experience Documents</option>
                <option value="Birth Certificate">Birth Certificate</option>
                <option value="SOP">SOP</option>

              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label>Upload Documents</label>
              <input
                type="file"
                className="form-control file_EVENT_Upload"
                {...register("DocPath")}
                id="upload"
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <label>Remarks</label>
              <textarea type="text"
                placeholder='Remarks'
                {...register("Remarks")}

                className="form-control area_ful_width"></textarea>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Followup Date:</label>
                <input
                 type="date"
                   format="dd-mm-yyyy"
                   placeholder="dd-mm-yyyy"
                  className="form-control"
                {...register("RegFollowupDate")}
                  required="1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
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
          </div> */}
          {
            fields.map((item, index) =>
            (
              <div className='map' key={item.id}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label>Select Documents</label>
                    <select className="form-control"{...register(`UploadDocument[${index}].DocName`)}
                      name={`UploadDocument[${index}].DocName`} id="rupdoc"
                       defaultValue={item.DocName}>
                      <option value="#">Select Documents</option>
                      <option value="Passport">Passport</option>
                      <option value="Post Graduation">Post Graduation</option>
                      <option value="Graduation Certificate">Graduation Certificate</option>
                      <option value="Graduation Transcript">Graduation Transcript</option>
                      <option value="12th Pass Certificate">12th Pass Certificate</option>
                      <option value="12th Transcript">12th Transcript</option>
                      <option value="10th Pass Certificate">10th Pass Certificate</option>
                      <option value="10th Transcript">10th Transcript</option>
                      <option value="Affidavit">Affidavit</option>
                      <option value="Backlog Certificate">Backlog Certificate</option>
                      <option value="Resume">Resume</option>
                      <option value="Academic LOR">Academic LOR</option>
                      <option value="IELTS">IELTS</option>
                      <option value="Professional LOR">Professional LOR</option>
                      <option value="Work Experience Documents">Work Experience Documents</option>
                      <option value="Birth Certificate">Birth Certificate</option>
                      <option value="SOP">SOP</option>

                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label>Upload Documents</label>
                    <input
                      type="file"
                      className="form-control file_EVENT_Upload"
                    //  onChange={(e)=> setSelectedFile(e.target.files[0])}
                      {...register(`UploadDocument[${index}].DocPath`)}
                      name={`UploadDocument[${index}].DocPath`}
                      defaultValue={item.DocPath}
                      id="DocPath"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <label>Remarks</label>
                    <textarea type="text" placeholder='Remarks'
                      {...register(`UploadDocument[${index}].Remarks`)}
                      name={`UploadDocument[${index}].Remarks`}
                      defaultValue={item.Remarks}
                      className="form-control area_ful_width"></textarea>
                  </div>
                </div>
                <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Followup Date:</label>
                <input
                 type="date"
                   format="dd-mm-yyyy"
                   placeholder="dd-mm-yyyy"
                  className="form-control"
                  {...register(`UploadDocument[${index}].RegFollowupDate`)}
                  name={`UploadDocument[${index}].RegFollowupDate`}
                  defaultValue={item.RegFollowupDate}
                  />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Source:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Source Name"
                  {...register("Source")}
                  {...register(`UploadDocument[${index}].Source`)}
                  name={`UploadDocument[${index}].Source`}
                  defaultValue={item.Source}
                />
              </div>
            </div>
          </div>
                <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                  <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                </div>
              </div>
            )
            )}
          <div>
            <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
              <Button variant='success' type="submit" onClick={append4} >AddField</Button>
            </div>
          </div>

        </Accordion.Body>
      </Accordion.Item>


    </>

  )
}
export const ApplicationInformation = (prop) => {
  const { register, control} = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'ApplicationInformation'
  })
  const [country, setCountry] = useState();

  const append11 = () => {
    append({
      Country:"",
      CollegeName:"",
      TutionFeeReceipt:"",
      ID:"",
      CAQ:"",
      CAS:"",
      Course:"",
      Biometric:"",
      Password:"",
      GICCertificate:"",
      GICApplied:"",
      Applied:"",
      Medical:"",
      OfferLetterReceived:"",
      ApllicationFeePaid:"",
      TutionFeePaid:"",
      Reject:"",
      LOA:"",
      LOC:"",
      RegisterFollowupDate:"",
      Remarks:"",
      Source:""
    });
  }
   return (
    <>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Application</Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="app_filter_data">
                {/* <label> Country </label>
                <select className="form-control" id='appcountry'  {...register("CountryName")} onChange={(e) => setCountry(e.target.value)}>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                </select> <br /> <br />                   */}
                      {/* <div className="row">
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> College Name</label>
                            <input type="text"{...register("CollegeName")} placeholder='College Name' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Tution Fee Receipt</label>
                            <input type="date"   {...register("TutionFeeReceipt")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> ID</label>
                            <input type="text"   {...register("ID")} placeholder='College ID' className="form-control" />
                          </div>
                          <div className="This_form">
                          { country === "canada" ?<><label> CAQ</label> <input type="date" {...register("CAQ")} className="form-control"/> </>:<>
                            <label> CAS</label>
                            <input type="date"{...register("CAS")} className="form-control" /> </>}
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> Course</label>
                            <input type="text" placeholder='Course'  {...register("Course")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Biometric</label>
                            <input type="date"   {...register("Biometric")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> Password</label>
                            <input type="text" placeholder='Password'  {...register("Password")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> GIC Certificate</label>
                            {country === "canada" ? <input type="date" {...register("GICCertificat")} className="form-control" />:
                            <input type="date"    {...register("colgic")} className="form-control" disabled />}
                            
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> Applied</label>
                            <input type="date"   {...register("Applied")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Medical</label>
                            <input type="date"   {...register("Medical")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> Offer Letter Received</label>
                            <input type="date" {...register("OfferLetterReceived")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> GIC Applied</label>
                            <input type="date" {...register("GICAlipped")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> Application Fee Paid</label>
                            <input type="date"   {...register("ApplicationFeePaid")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Tution Fee Paid</label>
                            <input type="date" {...register("TutionFeePaid")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="This_form">
                            <label> Reject</label>
                            <input type="date"   {...register("Reject")} className="form-control" />
                          </div>
                          <div className="This_form">
                            {country === "canada" ? <label> LOA</label> :
                            <label> LOC</label>}
                            <input type="date"   {...register("LOC")} className="form-control" />
                          </div>
                        </div>
                      </div><br/>
                      <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Followup Date:</label>
                <input
                 type="date"
                   format="dd-mm-yyyy"
                   placeholder="dd-mm-yyyy"
                  className="form-control"
                {...register("RegisterFollowupDate")}
                  required="1"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Remarks</label>
                <input
                 type="text"
                 placeholder="Enter Remarks"
                  className="form-control"
                {...register("Remarks")}
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
          </div> */}
                    {fields.map((item, index) => {
                    return  (<>
                        <div className="row" key={item.id}>
                        <div className="app_filter_data">
                        <label> Country </label>
                <select className="form-control" id='appcountry'  {...register(`ApplicationInformation[${index}].Country`)} 
                   name={`ApplicationInformation[${index}].Country`} 
                   defaultValue={item.Country} 
                   onChange={(e) => setCountry(e.target.value)}>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                </select>
                </div> <br /> <br />    
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> College Name</label>
                              <input type="text" 
                               {...register(`ApplicationInformation[${index}].CollegeName`)}
                                name={`ApplicationInformation[${index}].CollegeName`} 
                                defaultValue={item.CollegeName} 
                                placeholder='College Name' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Tution Fee Receipt</label>
                              <input type="date"   {...register(`ApplicationInformation[${index}].TutionFeeReceipt`)} name={`ApplicationInformation[${index}].TutionFeeReceipt`} defaultValue={item.TutionFeeReceipt} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> ID</label>
                              <input type="text"   {...register(`ApplicationInformation[${index}].ID`)} name={`ApplicationInformation[${index}].ID`} defaultValue={item.ID} placeholder='College ID' className="form-control" />
                            </div>
                            <div className="This_form">
                              
                            { country === "canada" ? <> <label> CAQ</label> <input type="date"{...register(`ApplicationInformation[${index}].CAQ`)} name={`ApplicationInformation[${index}].CAQ`} defaultValue={item.CAQ} className="form-control" /></>:<>
                            
                            <label> CAS</label> <input type="date"   {...register(`ApplicationInformation[${index}].CAS`)} name={`ApplicationInformation[${index}].CAS`} defaultValue={item.CAS} className="form-control" /> </>}
                              
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> Course</label>
                              <input type="text" placeholder='Course'  {...register(`ApplicationInformation[${index}].Course`)} name={`ApplicationInformation[${index}].Course`} defaultValue={item.Course} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Biometric</label>
                              <input type="date"   {...register(`ApplicationInformation[${index}].Biometric`)} name={`ApplicationInformation[${index}].Biometric`} defaultValue={item.Biometric} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> Password</label>
                              <input type="text" placeholder='Password'  {...register(`ApplicationInformation[${index}].Password`)} name={`ApplicationInformation[${index}].Password`} defaultValue={item.Password} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> GIC Certificate</label>
                              {country === "canada" ? <><input type="date"    {...register(`ApplicationInformation[${index}].GICCertificate`)} name={`ApplicationInformation[${index}].GICCertificate`} defaultValue={item.GICCertificate} className="form-control" /></>:""}
                          
                            {/* <input type="date" {...register(`ApplicationInformation[${index}].GICCertificat`)} name={`ApplicationInformation[${index}].GICCertificat`} defaultValue={item.GICCertificat} className="form-control" disabled /> */}
                         
                             </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> Applied</label>
                              <input type="date"   {...register(`ApplicationInformation[${index}].Applied`)} name={`ApplicationInformation[${index}].Applied`} defaultValue={item.Applied} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Medical</label>
                              <input type="date"   {...register(`ApplicationInformation[${index}].Medical`)} name={`ApplicationInformation[${index}].Medical`} defaultValue={item.Medical} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> Offer Letter Received</label>
                              <input type="date"   {...register(`ApplicationInformation[${index}].OfferLetterReceived`)} name={`ApplicationInformation[${index}].OfferLetterReceived`} defaultValue={item.OfferLetterReceived} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> GIC Alipped</label>
                              <input type="date" {...register(`ApplicationInformation[${index}].GICApplied`)} name={`ApplicationInformation[${index}].GICApplied`} defaultValue={item.GICApplied} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> Application Fee Paid</label>  ApllicationFeePaid
                              <input type="date" {...register(`ApplicationInformation[${index}].ApllicationFeePaid`)} name={`ApplicationInformation[${index}].ApllicationFeePaid`} defaultValue={item.ApllicationFeePaid} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Tution Fee Paid</label>
                              <input type="date" {...register(`ApplicationInformation[${index}].TutionFeePaid`)} name={`ApplicationInformation[${index}].TutionFeePaid`} defaultValue={item.TutionFeePaid} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="This_form">
                              <label> Reject</label>
                              <input type="date" {...register(`ApplicationInformation[${index}].Reject`)} name={`ApplicationInformation[${index}].Reject`} defaultValue={item.Reject} className="form-control" />
                            </div>
                            <div className="This_form">
                            {country === "canada" ?<> <label> LOA</label>  <input type="date" {...register(`ApplicationInformation[${index}].LOC`)} name={`ApplicationInformation[${index}].LOC`} defaultValue={item.LOC} className="form-control"/></>:<>
                            <label> LOC</label> 
                            <input type="date" {...register(`ApplicationInformation[${index}].LOA`)} name={`ApplicationInformation[${index}].LOA`} defaultValue={item.LOA} className="form-control" /></>}
                            </div>
                          </div>
                          </div>
                          <br/>
                          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Followup Date:</label>
                <input
                 type="date"
                   format="dd-mm-yyyy"
                   placeholder="dd-mm-yyyy"
                  className="form-control"
                {...register(`ApplicationInformation[${index}].RegisterFollowupDate`)}
                name= {`ApplicationInformation[${index}].RegisterFollowupDate`}
                defaultValue={item.RegisterFollowupDate} 
                 />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group new_b">
                <label>Source:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Source Name"
                  {...register(`ApplicationInformation[${index}].Source`)}
                  name= {`ApplicationInformation[${index}].Source`}
                  defaultValue={item.Source} 
                />
              </div>
            </div>
          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                            <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                          </div>
                      </>)
                    })
                    }
                    <div className="text-right my_btn_lead">
                      <Button variant="success" type='submit' onClick={append11} >
                        AddField
                      </Button>
                    </div>
               </div>
            
             </div>
           </div>
         
      </Accordion.Body>
    </Accordion.Item>
        </>
                   )
}

export const VisaApplication=(prop)=>{
  const [country, setCountry] = useState();
  const { register, control } = prop;

  console.log("country", country);
  return (
    <>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Visa Application</Accordion.Header>
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
}