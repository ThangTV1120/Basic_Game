import axios from "./custome-api";
const fetAllCard=()=>{
    //   fetch('http://localhost:3001/class').then(res=>{
    //   // console.log(res.json()) ;
    //   return res.json();
    // })
    // .then(data=>{
    //   console.log(data);
    // })
    return axios.get("/class")
}
const postCard=(name,timeplay)=>{
    
    return axios.post("/class",{name:name,timeplay:timeplay})
}
const putCard=(name,timeplay)=>{
    
    return axios.put("/class",{name:name,timeplay:timeplay})
}
export {fetAllCard,postCard,putCard}