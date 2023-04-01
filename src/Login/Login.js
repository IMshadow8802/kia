import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kiaconsultant from '../dashboard/images/kiaconsultant.png';
import { faCheck, faLink, faPenToSquare, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import '../Login/Login.css'
import {useNavigate} from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
  const [userid,setUserid]=useState();
  const [pass,setPass]=useState();
  const [error,setError]=useState("")
  const user = "admin";
  const pas ="kiapassword"
  const user1="Neha"
  const pas1="123"
  const user2="Pankaj"
  const pas2="123"
  const user3="Mahima"
  const pas3="123"
  const user4 = "Arjita";
  const pas4 ="123"
  const user5="Daman"
  const pas5="123"
  const user6="Priyanka"
  const pas6="123"
  const user7="Komal"
  const pas7="123"
const loginPage =()=>{
    if(userid==user&&pass==pas||userid==user1&&pass==pas1||userid==user2&&pass==pas2||userid==user3&&pass==pas2||
         userid==user4&&pass==pas4||userid==user5&&pass==pas5||userid==user6&&pass==pas6||userid==user7&&pass==pas7)
    {
        navigate("/dashboard");
    }
    else{
        setError ("something worng");
        navigate("/Logins");
        window.localStorage.clear(); 
    }
}

    return (
        <>
            <div className="container">
                <div className="card-wrap-1">
                    <div className="card-body-1">
                        <h2 className="card-title-1"><img src={kiaconsultant} alt="login" /></h2>
                        <p>
                            To keep connected with us<br />
                            please login with your personal info
                        </p>
                        <p>
                            or<br />
                            use your account
                        </p>
                        <form method="post">
                            <div className="form-group">
                                <input className="form-control text_kia" type="text" name="username" onChange={(e)=>setUserid(e.target.value)} placeholder="name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control text_kia" type="password" name="password"onChange={(e)=>setPass(e.target.value)} placeholder="Password" required />
                            </div>
                            {/* <p><a href="#">Forgot your password?</a></p> */}
                            <input type="submit" value="LOGIN" onClick={loginPage} name="submit" className="btn-1 btn-lg k_btn" /> &nbsp;
                            {/* <input type="submit" value="SIGNUP" name="" className="btn btn-lg k_btn" /> */}
                            {error}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
 