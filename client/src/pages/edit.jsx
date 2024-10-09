import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useState } from 'react';
import Draggable from 'react-draggable'
import Nav from '../compenent/Nav'


function Inputc({text,setText,list,setList,url}){
    return (
      <form>
          <div class="mb-3 my-3">
              <label for="exampleInputEmail1" class="form-label text-white fs-4">Enter Text</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={text} onChange={(e)=>setText(e.target.value)}/>
          </div>
        <button type="button" class="btn btn-success" onClick={(e)=>{setList([...list,text]);setText("")}}>Add</button>
          <button type="button" class="btn btn-danger ms-2" onClick={(e)=>{setList([])}}>Reset</button>
      </form>
    )
  }


function List({list}){
    return(
    <>
        {
            list.map((el,id)=>{
                return(
                    <Draggable>
                        <h4 key={id} className="fw-bold text">{el}</h4>
                    </Draggable>
                )
            })
        }
    </>
    )
}

export default function Edit() {
    let [params]=useSearchParams();
    let [inputf,setInputf] = useState(false)
    let [text,setText]=useState("");
    let [list,setList]=useState([]);


  return (
    <>
        <Nav search={0}/>
        <div className="container-fuid mt-5 bg-info" style={{minHeight:"100vh"}}>
            <div className="container row mx-auto" style={{height:"inherit"}}>
                <div className='col-lg-6 col-12 pt-3' style={{height:"inherit"}}>
                    <img src={params.get("url")} alt="....." className='border col-12 img-fluid' style={{height:"90vh"}}/>
                </div>

                <div className='col-lg-6 col-12 border mt-4 border-3 box-2'>
                <div class="d-grid gap-2 my-4">
                        <Inputc text={text} setText={setText} list={list} setList={setList} url={params.get("url")}/>
                        <List list={list}/>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}



// onclick done add input value in text list and made input field empty by value=""
// by position adsolute only last element of text list display 
// onclick reset made text list empty
// by react-dragable made text dragable
