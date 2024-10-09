import axios from 'axios';

function getJson(setmeme,setError){
    console.log(localStorage.getItem('token'));
    axios.get("http://localhost:2000/meme/data",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res)=>{
        if(res.data=="UnauthorizedError")
        {
            console.log("hi");
            setError("UnauthorizedError");
        }
        else
        {
            console.log("by");
            setmeme(res.data);
        }
    })
    .then((err)=>{
        console.log(err);
    })  
    return;
}

function demo(meme){
    axios.post("http://localhost:2000/meme/auth/data",meme)
    .then((res)=>{})
    .then((err)=>{});
}

export {getJson,demo};