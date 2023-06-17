import axios from "axios"


import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const userDetails=(loginData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    axios.post(`http://localhost:8080/users/login`,loginData).then((res)=>{
    dispatch({type:LOGIN_SUCCESS,payload:res.data.role})
})
.catch((err)=>{
    console.log(err);
    dispatch({type:LOGIN_FAILURE})

})
}

