import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import check from 'sweetalert';
import Register from '../Register/Register';
import DatePicker from "react-datepicker";
// import classNames from 'classnames'
export const PersonalInformation = (prop) => {
const { register,control,errors,classNames} = prop;
  
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
                  className= {classNames("form-control",{"is-invalid":errors.FirstName})}
                  placeholder="First Name"
                  {...register("FirstName",{required:"this field is required"})}
                   id="fname" />             
                   {errors.FirstName && (<div className='invalid-feedback'>{errors.FirstName.message}</div>)}         
             
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
              {/* <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
                <DatePicker 
                dateformat="dd-mm-yyyy"
                //   placeholder="dd-mm-yyyy"
                //   className="form-control"
                  {...register("DOB")}
                  id="dob" /> </div> */}
                  {/* <DatePicker
                   showYearPicker
                  dateFormat="dd-mm-yyyy"
                  {...register("DOB")}
                    /> */}
                <input
                   type="date" 
                    dateFormat="dd-mm-yyyy"
                    locale="pt-BR"
                  placeholder="dd-mm-yyyy"
                  className= "form-control"
                  {...register("DOB")}
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
                  className= {classNames("form-control",{"is-invalid":errors.PostalCode})}
                  placeholder="Postcode"
                  {...register("PostalCode",{
                    pattern:{
                      value:/^\d{6}$/,
                   message:"please enter a valid 6 digit Mobile Number"
                    }
                  })}
                />
                 {errors.PostalCode && (<div className='invalid-feedback'>{errors.PostalCode.message}</div>)}
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
                 className= {classNames("form-control",{"is-invalid":errors.MobileNo})}
                  placeholder="Student Phone Number"
                  {...register("MobileNo",{required:"this field is required",
                  pattern:{
                   value:/^\d{10}$/,
                   message:"please enter a valid 10 digit Mobile Number"
                  }})}
                  />   
                {errors.MobileNo && (<div className='invalid-feedback'>{errors.MobileNo.message}</div>)}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Mother Phone Number:</label>
                <input
                  type="text"
                  className= {classNames("form-control",{"is-invalid":errors.MPhoneNo})}
                  placeholder="Mother Phone Number"
                  {...register("MPhoneNo",{
                  pattern:{
                   value:/^\d{10}$/,
                   message:"please enter a valid 10 digit Mobile Number"
                  }})}
                  />   
                {errors.MPhoneNo && (<div className='invalid-feedback'>{errors.MPhoneNo.message}</div>)}
                 </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group new_b">
                <label>Father Phone Number:</label>
                <input
                  type="text"
                  className= {classNames("form-control",{"is-invalid":errors.FPhoneNo})}
                  placeholder="Father Phone Number"
                  {...register("FPhoneNo",{
                    pattern:{
                     value:/^\d{10}$/,
                     message:"please enter a valid 10 digit Mobile Number"
                    }})}
                    />   
                  {errors.FPhoneNo && (<div className='invalid-feedback'>{errors.FPhoneNo.message}</div>)}
              </div>
            </div>
          </div>
         
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}
export const Educational = (prop) => {
  const { register,control,errors,classNames} = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    errors,
    classNames,
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
                        className= "form-control"
                        // className= {classNames("form-control",{"is-invalid":errors.EducationSummaryList[{index}].Year})}
                        placeholder="Year"
                        {...register(`EducationSummaryList[${index}].Year`)}
                        name={`EducationSummaryList[${index}].Year`}
                        defaultValue={item.GradingScheme}
                      />
                      {/* <small className='form-text text-danger'>
                    {errors.`EducationSummaryList[${index}].Year`&& ""please enter a valid 6 digit Mobile Number""}
                      </small> */}
                       {/* {errors.EducationSummaryList[{index}].Year && (<div className='invalid-feedback'>{errors.EducationSummaryList[{index}].Year.message}</div>)} */}
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
  const { register,control,errors,classNames} = prop;
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
                        placeholder="Attended Institute Till"
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
  const { register,control,errors,classNames} = prop;
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
  const { register,control,errors,classNames} = prop;
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
  const { register,control,errors,classNames} = prop;
  // const { append, fields } = useFieldArray({
  //   control,
  //   name: 'users'
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
  const { register,control,errors,classNames} = prop;
  // const { append, fields, remove } = useFieldArray({
  //   control,
  //   name: 'users'
  // })
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
                checked={values === 'True'}
                onClick={()=>setValues("True")}
                value= {true}
                defaultValue={true}
              />
              &nbsp; Yes
            </div>
            <div className="col-md-6 col-xs-12 ">
            {values== "True" ?<input type='text' {...register("RefuseType")} />:" "}
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
                   className= "form-control"
                {...register("FollowUp")}
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
  const { register,control,errors,classNames} = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'users'
  })
  const append4 = () => {
    append({
      rupdoc: " ",
      upload: " ",
      docremark: " ",
    });
  }
  return (
    <>

      <Accordion.Item eventKey="7">
        <Accordion.Header>
          {" "}
          Upload Documents
        </Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <label>Select Documents</label>
              <select className="form-control" {...register("rupdoc")} id="rupdoc">
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
                {...register("upload")}
                id="upload"
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <textarea type="text"
                placeholder='Remarks'
                {...register("docremark")}

                className="form-control area_ful_width"></textarea>
            </div>

          </div>
          {
            fields.map((item, index) =>
            (
              <div className='map' key={item.id}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <label>Select Documents</label>
                    <select className="form-control"{...register(`users5[${index}].rupdoc`)}
                      name={`users5[${index}].rupdoc`} id="rupdoc">
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
                      {...register(`users5[${index}].upload`)}
                      name={`users5[${index}].upload`}
                      id="upload"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <textarea type="text" placeholder='Remarks'
                      {...register(`users5[${index}].docremark`)}
                      name={`users5[${index}].docremark`}
                      className="form-control area_ful_width"></textarea>
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
  const { register,control,errors,classNames} = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'SA1'
  })
  const [country, setCountry] = useState();

  const append11 = () => {
    append({
      colname: " ", tutfee: " ", colid: " ", colcaq: " ", colcourse: " ", biomet: " ",
      colpass: " ", colgic: " ", colapplied: " ", colmedical: " ", offerltrrec: " ",
      gicapply: " ", appfeepaid: " ", tutfeepaid: " ", rej: " ", loc: " "
    });
  }
  const append12 = () => {
    append({
      colnameuk: " ", tutfeeuke: " ", coliduk: " ", colcaquk: " ", colcourseuk: " ",
      colbiouk: " ", passuk: " ", gicuk: " ", applyuk: " ", medicaluk: " ", offerltruk: " ",
      gicapplyuk: " ", appfeeuk: " ", tutfeeuk: " ", rejectuk: " ", locuk: " "
    })
  }
  return (
    <>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Application</Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="app_filter_data">
                <label> Country </label>
                <select className="form-control" id='appcountry'  {...register("appcountry")} onChange={(e) => setCountry(e.target.value)}>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                </select> <br /> <br />
                {country === "canada" ?
                  <>
                    {/* <Accordion.Header>Canada</Accordion.Header>

                    <Accordion.Body> */}
                      <div className="row">
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> College Name</label>
                            <input type="text"  {...register("colname")} placeholder='College Name' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Tution Fee Receipt</label>
                            <input type="date"   {...register("tutfee")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> ID</label>
                            <input type="text"   {...register("colid")} placeholder='College ID' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> CAQ</label>
                            <input type="date"   {...register("colcaq")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> Course</label>
                            <input type="text" placeholder='Course'  {...register("colcourse")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Biometric</label>
                            <input type="date"   {...register("biomet")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> Password</label>
                            <input type="text" placeholder='Password'  {...register("colpass")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> GIC Certificate</label>
                            <input type="date"    {...register("colgic")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> Applied</label>
                            <input type="date"   {...register("colapplied")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Medical</label>
                            <input type="date"   {...register("colmedical")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> Offer Letter Received</label>
                            <input type="date"   {...register("offerltrrec")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> GIC Applied</label>
                            <input type="date" {...register("gicapply")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> Application Fee Paid</label>
                            <input type="date"   {...register("appfeepaid")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Tution Fee Paid</label>
                            <input type="date" {...register("tutfeepaid")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> Reject</label>
                            <input type="date"   {...register("rej")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> LOC</label>
                            <input type="date"   {...register("loc")} className="form-control" />
                          </div>
                        </div>
                      </div>
                   


                    {fields.map((item, index) => {
                    return  (<>
                        <div className="row" key={item.id}>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> College Name</label>
                              <input type="text"  {...register(`SA1[${index}].colname`)} name={`SA1[${index}].colname`} placeholder='College Name' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Tution Fee Receipt</label>
                              <input type="date"   {...register(`SA1[${index}].tutfee`)} name={`SA1[${index}].tutfee`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> ID</label>
                              <input type="text"   {...register(`SA1[${index}].colid`)} name={`SA1[${index}].colid`} placeholder='College ID' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> CAQ</label>
                              <input type="date"   {...register(`SA1[${index}].colcaq`)} name={`SA1[${index}].colcaq`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> Course</label>
                              <input type="text" placeholder='Course'  {...register(`SA1[${index}].colcourse`)} name={`SA1[${index}].colcourse`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Biometric</label>
                              <input type="date"   {...register(`SA1[${index}].biomet`)} name={`SA1[${index}].biomet`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> Password</label>
                              <input type="text" placeholder='Password'  {...register(`SA1[${index}].colpass`)} name={`SA1[${index}].colpass`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> GIC Certificate</label>
                              <input type="date"    {...register(`SA1[${index}].colgic`)} name={`SA1[${index}].colgic`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> Applied</label>
                              <input type="date"   {...register(`SA1[${index}].colapplied`)} name={`SA1[${index}].colapplied`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Medical</label>
                              <input type="date"   {...register(`SA1[${index}].colmedical`)} name={`SA1[${index}].colmedical`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> Offer Letter Received</label>
                              <input type="date"   {...register(`SA1[${index}].offerltrrec`)} name={`SA1[${index}].offerltrrec`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> GIC Applied</label>
                              <input type="date" {...register(`SA1[${index}].gicapply`)} name={`SA1[${index}].gicapply`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> Application Fee Paid</label>
                              <input type="date"   {...register(`SA1[${index}].appfeepaid`)} name={`SA1[${index}].appfeepaid`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Tution Fee Paid</label>
                              <input type="date" {...register(`SA1[${index}].tutfeepaid`)} name={`SA1[${index}].tutfeepaid`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> Reject</label>
                              <input type="date"   {...register(`SA1[${index}].rej`)} name={`SA1[${index}].rej`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> LOC</label>
                              <input type="date"   {...register(`SA1[${index}].loc`)} name={`SA1[${index}].loc`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                            <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                          </div>

                        </div>

                      </>)
                    })
                    }
                    <div className="text-right my_btn_lead">
                      <Button variant="success" type='submit' onClick={append11} >
                        AddField
                      </Button>
                    </div>

                    {/* </Accordion.Body> */}

                  </>
                  : <>
                    {/* <Accordion.Header>United Kingdom</Accordion.Header>
                    <Accordion.Body> */}
                            <div className="row">
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> College Name</label>
                            <input type="text"   {...register("colnameuk")} placeholder='College Name' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Tution Fee Receipt</label>
                            <input type="date"   {...register("tutfeeuke")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> ID</label>
                            <input type="text"   {...register("coliduk")} placeholder='College ID' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> CAQ</label>
                            <input type="date"   {...register("colcaquk")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> Course</label>
                            <input type="text"   {...register("colcourseuk")} placeholder='Course' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Biometric</label>
                            <input type="date"   {...register("colbiouk")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> Password</label>
                            <input type="text"  {...register("passuk")} placeholder='Password' className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> GIC Certificate</label>
                            <input type="date"   {...register("gicuk")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> Applied</label>
                            <input type="date"   {...register("applyuk")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Medical</label>
                            <input type="date"   {...register("medicaluk")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> Offer Letter Received</label>
                            <input type="date"   {...register("offerltruk")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> GIC Applied</label>
                            <input type="date"   {...register("gicapplyuk")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div className="This_form">
                            <label> Application Fee Paid</label>
                            <input type="date"  {...register("appfeeuk")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> Tution Fee Paid</label>
                            <input type="date"   {...register("tutfeeuk")} className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-1 col-md-1">
                          <div className="This_form">
                            <label> Reject</label>
                            <input type="date"   {...register("rejectuk")} className="form-control" />
                          </div>
                          <div className="This_form">
                            <label> LOC</label>
                            <input type="date"   {...register("locuk")} className="form-control" />
                          </div>
                        </div>
                      </div>
                  
                 
                    {
                  fields.map((item, index) => {
                  return  (
                      <>
                        <div className="row">
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> College Name</label>
                              <input type="text"   {...register(`SA1[${index}].colnameuk`)} name={`SA1[${index}].colnameuk`} placeholder='College Name' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Tution Fee Receipt</label>
                              <input type="date"   {...register(`SA1[${index}].tutfeeuke`)} name={`SA1[${index}].tutfeeuke`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> ID</label>
                              <input type="text"   {...register(`SA1[${index}].coliduk`)} name={`SA1[${index}].coliduk`} placeholder='College ID' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> CAQ</label>
                              <input type="date"   {...register(`SA1[${index}].colcaquk`)} name={`SA1[${index}].colcaquk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> Course</label>
                              <input type="text"   {...register(`SA1[${index}].colcourseuk`)} name={`SA1[${index}].colcourseuk`} placeholder='Course' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Biometric</label>
                              <input type="date"   {...register(`SA1[${index}].colbiouk`)} name={`SA1[${index}].colbiouk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> Password</label>
                              <input type="text"  {...register(`SA1[${index}].passuk`)} name={`SA1[${index}].passuk`} placeholder='Password' className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> GIC Certificate</label>
                              <input type="date"   {...register(`SA1[${index}].gicuk`)} name={`SA1[${index}].gicuk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> Applied</label>
                              <input type="date"   {...register(`SA1[${index}].applyuk`)} name={`SA1[${index}].applyuk`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Medical</label>
                              <input type="date"   {...register(`SA1[${index}].medicaluk`)} name={`SA1[${index}].medicaluk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> Offer Letter Received</label>
                              <input type="date"   {...register(`SA1[${index}].offerltruk`)} name={`SA1[${index}].offerltruk`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> GIC Applied</label>
                              <input type="date"   {...register(`SA1[${index}].gicapplyuk`)} name={`SA1[${index}].gicapplyuk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="This_form">
                              <label> Application Fee Paid</label>
                              <input type="date"  {...register(`SA1[${index}].appfeeuk`)} name={`SA1[${index}].appfeeuk`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> Tution Fee Paid</label>
                              <input type="date"   {...register(`user10s[${index}].tutfeeuk`)} name={`SA1[${index}].tutfeeuk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <div className="This_form">
                              <label> Reject</label>
                              <input type="date"   {...register(`SA1[${index}].rejectuk`)} name={`SA1[${index}].rejectuk`} className="form-control" />
                            </div>
                            <div className="This_form">
                              <label> LOC</label>
                              <input type="date"   {...register(`SA1[${index}].locuk`)} name={`SA1[${index}].locuk`} className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 w-100 text-right pr-0 my_btn_lead">
                            <Button variant='danger' type="submit" onClick={() => remove(index)}>Delete</Button>
                          </div>

                        </div>
                      </>
                    )
                  })
                }
                 

                <div className="text-right my_btn_lead">
                  <Button variant="success" type='submit' onClick={append12} >
                    AddField
                  </Button>
                </div>
                {/* </Accordion.Body> */}
                </>  
              }
          

        
              

               </div>
            
             </div>
           </div>
      </Accordion.Body>
    </Accordion.Item>
        </>
                   )
}
