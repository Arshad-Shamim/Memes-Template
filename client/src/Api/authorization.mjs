import axios from 'axios';
import Error from '../pages/error.jsx';

function apiSignUp(data,setLink,setError){
    axios.post("http://localhost:2000/meme/auth/signup",data)
    .then((res)=>{
        if(res.data=="You Have Already an account")
            setError("You Have Already an account");
        else if(res.data=="Server error")
            setError("Server error");
        else
        {
            localStorage.setItem("token",res.data.token);
            setLink("/meme/home");
        }
    })
    .then((err)=>{
        console.log(err);
    });

}

function apiSignIn(data,setLink,setWrongPws,setError){
    axios.post("http://localhost:2000/meme/auth/signin",data)
    .then((res)=>{
        res=res.data;
        if(res.token){
            localStorage.setItem("token",res.token);
            setLink("/meme/home");
        }
        else if(res.data=="server error")
            setError("Server Error");
        else
        {
            setError("Invalid Username or Password");
        }
            
    })
    .then((err)=>{
        console.log(err);
    });
}

export {apiSignUp,apiSignIn}