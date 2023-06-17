import axios from "axios"
import { GET_PETS_SUCCESS, PATCH_PETS_SUCCESS, PETS_FAILURE, PETS_REQUEST } from "./actionTypes"

export const getAllPets=(dispatch)=>{
    dispatch({type:PETS_REQUEST})
   axios.get(`http://localhost:8080/notes/`).then((res)=>{
        dispatch({type:GET_PETS_SUCCESS,payload:res.data})
        console.log("dta...",res.data);
    })
    .catch((err)=>{
        dispatch({type:PETS_FAILURE})
    })
}


export const updatePetDetails = (id,data)=>(dispatch)=>{
    dispatch({type:PETS_REQUEST})
    axios.patch(`http://localhost:8080/notes/update/${id}`,data).then((res)=>{
        dispatch({type:PATCH_PETS_SUCCESS})
        console.log(res.data)
        
    })
    .catch((err)=>{
        dispatch(PETS_FAILURE)
    })
}

export const deletePetDetails = (id)=>(dispatch)=>{
    dispatch({type:PETS_REQUEST})
    axios.delete(`http://localhost:8080/notes/delete/${id}`).then((res)=>{
        dispatch({type:PATCH_PETS_SUCCESS})
        console.log(res.data)
        
    })
    .catch((err)=>{
        dispatch(PETS_FAILURE)
    })
}