import React, { useState } from 'react'
import {apiSignUp,apiSignIn} from '../Api/authorization.mjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate,useNavigate } from 'react-router-dom';
import Error from './error';

export default function Authorization() {
  const navigate = useNavigate();
  let [flag,setFlag]=useState(true);
  let[formData,setFormdata]=useState({});
  let[link,setLink]=useState("");
  let[wrongPws,setWrongPws]=useState(false);
  let[error,setError] = useState("");
  let pNotify = ()=>toast("Password And Confirm passwrod must be same",{
    style:{
      background:"red",
      color:"white"
    }
  });

  function handleSubmit(e){
    if(!flag){
      let p = e.target.password.value;
      let cp=e.target.confirmPassword.value;
      if(p!=cp && !flag){
          pNotify();
      }
    }
    const data={
        "username":e.target.username.value,
        "password":e.target.password.value
    }
    
    //for guest;
    x=1;
    if(data.username=="guest" && data.password=="guest"){
      localStorage.setItem("guest",1);
      setLink("/Memes/home")
    }
    else{
      localStorage.setItem("guest",0);
      flag?apiSignIn(data,setLink,setWrongPws,setError):apiSignUp(data,setLink,setError);
    }
    e.preventDefault();
  }
  
  if(link)
        navigate(link);

  return (
    <>
    {(error)?<Error error={error} setError={setError}/>:
    <div className='bg-light container-fluid' style={{minHeight:"100vh",paddingTop:"6vh"}}>
      <div className='col-lg-4 col-12 mx-auto border rounded container bg-danger text-white'>
        <div className='container my-4'>
          <div className='text-center'>
            <h2 className='fw-bolder'>
              {flag?"Sign In Form":"Sign Up Form"}
            </h2>
          </div>

          <div className='my-4 text-center'>
            <div class="btn-group col-6 border" role="group" aria-label="Basic example">
              <button type="button" class={`btn ${flag?"btn-warning":"text-white"}`} onClick={()=>{setFlag(!flag)}}>Sign IN</button>
              <button type="button" class={`btn ${!flag?"btn-warning":"text-white"}`} onClick={()=>{setFlag(!flag)}}>Sign Up</button>
            </div>
          </div>

          <div>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User Name :</label>
                <input type="text" placeholder="enter guest" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" placeholder="enter guest" name="password" class="form-control" id="exampleInputPassword1" required/>
              </div>
              <div>
                {flag?  <button type="submit" class="btn btn-warning col-12 mt-3">Sign In</button>:<>
                        <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
                        <input type="password" name="confirmPassword" class="form-control" id="exampleInputPassword1" required/></>
                }
              </div>
              <div>
                {flag?
                  <p className='my-4 text-center'>Does not have account ? <a onClick={()=>{setFlag(!flag)}} href="#" className='text-decoration-none text-warning'>Sign Up</a></p>:
                  <button type="submit" class="btn btn-warning col-12 my-4">Sign Up</button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>}</>
  )
}
