import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useParams,useNavigate} from "react-router-dom";


export const PersonalInformation = (prop) => {
    const { register, control } = prop;

    return (
        <>
          <Accordion.Item eventKey="0">
                  <Accordion.Header>Application</Accordion.Header>
                  <Accordion.Body>
                  <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="app_filter_data">
                      <label> Country </label>
                      <select className="form-control" name="appcountry">
                        <option value="#">Select</option>
                        <option value="canada">Canada</option>
                        <option value="uk">United Kingdom</option>                        
                      </select>
                    </div>
                  </div>
                </div>

                  </Accordion.Body>
                </Accordion.Item>
        </>
    )
}

export const Canada = (prop) => {
  const { register, control } = prop;

  return (
      <>
                      <Accordion.Item eventKey="1">
                <Accordion.Header>Canada</Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> College Name</label>
                                        <input type="text" placeholder='College Name'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Tution Fee Receipt</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> ID</label>
                                        <input type="text" placeholder='College ID'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> CAQ</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div> 
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> Course</label>
                                        <input type="text" placeholder='Course'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Biometric</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>  
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> Password</label>
                                        <input type="text" placeholder='Password'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> GIC Certificate</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>      
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> Applied</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Medical</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>     
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> Offer Letter Received</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> GIC Applied</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div> 
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> Application Fee Paid</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Tution Fee Paid</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div> 
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> Reject</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> LOC</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>                                                                                                                                                                                                                      
                              </div>
                  </Accordion.Body>
                  </Accordion.Item>
      </>
  )
}

export const Uk = (prop) => {
  const { register, control } = prop;

  return (
      <>
                                            <Accordion.Item eventKey="2">
                <Accordion.Header>United Kingdom</Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> College Name</label>
                                        <input type="text" placeholder='College Name'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Tution Fee Receipt</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> ID</label>
                                        <input type="text" placeholder='College ID'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> CAQ</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div> 
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> Course</label>
                                        <input type="text" placeholder='Course'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Biometric</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>  
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> Password</label>
                                        <input type="text" placeholder='Password'  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> GIC Certificate</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>      
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> Applied</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Medical</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>     
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> Offer Letter Received</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> GIC Applied</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div> 
                              <div className="col-lg-2 col-md-2">
                                  <div className="This_form">
                                        <label> Application Fee Paid</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> Tution Fee Paid</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div> 
                              <div className="col-lg-1 col-md-1">
                                  <div className="This_form">
                                        <label> Reject</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                                  <div className="This_form">
                                        <label> LOC</label>
                                        <input type="date"  className="form-control"/>
                                  </div>
                              </div>                                                                                                                                                                                                                      
                              </div>
                  </Accordion.Body>
                  </Accordion.Item>    
      </>
  )
}