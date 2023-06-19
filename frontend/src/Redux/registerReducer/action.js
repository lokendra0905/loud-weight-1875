import axios from "axios"


import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"

export const registerUser=(regData)=>(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    axios.post(`https://real-pink-donkey-coat.cyclic.app/users/register`,regData).then((res)=>{
    dispatch({type:REGISTER_SUCCESS})
    console.log(res);
})
.catch((err)=>{
    console.log(err);
    dispatch({type:REGISTER_FAILURE})

})
}

