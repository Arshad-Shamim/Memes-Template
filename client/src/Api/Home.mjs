import axios from 'axios';

function getJson(setmeme,setError){
    let link;   
    console.log(localStorage.getItem("guest"));
    if(localStorage.getItem("guest")==1){
        link=" https://api.imgflip.com/get_memes";
        axios.get(link)
        .then((res)=>{
            setmeme(res.data.data.memes)
        })
        .then((err)=>{
            console.log(err);
        })
    }
    else{
        link="http://localhost:2000/meme/data";
        axios.get(link,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            if(res.data=="UnauthorizedError")
            {
                setError("UnauthorizedError");
            }
            else
            {
                setmeme(res.data);
            }
        })
        .then((err)=>{
            console.log(err);
        })  
    }
    return;
}

export {getJson};