import React from 'react'
import { useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Nav({search,meme}) {
    let form=`d-flex col-4 ${search?"d-block":"invisible"}`;
    let [s_data,setS_data]=useState("");
    let navigate = useNavigate();
    let notFound = ()=>toast("Not Found !",{
        style:{
            background:"red",
            color:"white"
        }
    });

    function handleSubmit(e){
        const el = (meme.find(el=>el.name==s_data));
        if(!el){
            notFound();
        }
        else{
            navigate(`/Memes/edit?url=${el.url}`)
        }
        e.preventDefault();
    }   

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 col-4">
            <li class="nav-item hover-box p-2">
                <a href="/Memes/home" className='link-dark'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>           
                </a>
             </li>
        </ul>
        <form class={form} onSubmit={(e)=>{handleSubmit(e)}}>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setS_data(e.target.value)}}/>
            <button class="btn btn-danger text-light" type="submit">Search</button>
        </form>
        <div class="col-4 d-sm-inline d-block">
            <a href="/Memes" className='text-decoration-none text-dark' onClick={()=>{localStorage.removeItem("token")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left float-end me-4 hover-box" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                </svg>
            </a>
        </div>
        </div>
    </div>
    <ToastContainer/>
    </nav>
  )
}
