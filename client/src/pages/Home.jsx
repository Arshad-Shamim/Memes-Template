import React, { useEffect, useState } from 'react'
import { getJson ,demo} from '../Api/Home'
import { useNavigate } from 'react-router-dom';
import Nav from '../compenent/Nav';
import Error from './error';


function Card({res}){
  let navigate=useNavigate();
  return(
    <div className="card col-lg-3 col-5 mx-1  mb-3 bg-warning p-0">
      <img src={res.url} class="card-img-top img-fluid" style={{height:"15rem"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-dark">{res.name}</h5>
        <a  class="btn btn-danger" onClick={(e)=>{navigate(`/meme/edit?url=${res.url}`)}}>Edit</a>
      </div>
    </div>
  )
}

export default function Home() {
    let [error,setError]=useState("eror");
    let [meme,setmeme]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
        getJson(setmeme,setError);
      },[])
    
      console.log(error);
  return(
    <>
      {(error=="UnauthorizedError")?<Error error={error} setError={setError}/>:
          <>
            {(!error)?navigate("/meme"):
            <>
              <Nav search={1} meme={meme}/>
              <div className="container-fluid bg-light">
                <div className="container py-4 mt-5">
                    <div className="row  justify-content-around">
                    {
                      meme.map((res,i)=>{
                        return(<Card res={res} key={i}/>)
                      })
                    }
                    </div>
                </div>
              </div>
            </>
            } 
          </>
      }
    </>
  )
}
