import axios from "axios"
import { ADD_PETS_SUCCESS, DELETE_PETS_SUCCESS, GET_PETS_SUCCESS, PATCH_PETS_SUCCESS, PETS_FAILURE, PETS_REQUEST } from "./actionTypes"

export const getAllPets=(dispatch)=>{
    dispatch({type:PETS_REQUEST})
   axios.get(`https://real-pink-donkey-coat.cyclic.app/pets/`,).then((res)=>{
        dispatch({type:GET_PETS_SUCCESS,payload:{allPets:res.data.data,noOfPets:res.data.totalData}})
        console.log("dta...",res.data);
    })
    .catch((err)=>{
        dispatch({type:PETS_FAILURE})
    })
}

export const getAllPetsNumber=()=>(dispatch)=>{//getting the total number of pets
    dispatch({type:PETS_REQUEST})
   axios.get(`https://real-pink-donkey-coat.cyclic.app/pets`).then((res)=>{
        dispatch({type:GET_PETS_SUCCESS,payload:{allPets:res.data.data,noOfPets:res.data.totalData}})
        console.log("dta...",res.data);
    })
    .catch((err)=>{
        dispatch({type:PETS_FAILURE})
    })
}

export const updatePetDetails = (id,data)=>(dispatch)=>{
    dispatch({type:PETS_REQUEST})
    axios.patch(`https://real-pink-donkey-coat.cyclic.app/pets/update/${id}`,data,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res)=>{
        dispatch({type:PATCH_PETS_SUCCESS,payload:Math.random()})
        console.log(res.data.msg)
        
    })
    .catch((err)=>{
        console.log(err);
        dispatch(PETS_FAILURE)
    })
}

export const deletePetDetails = (id)=>(dispatch)=>{
    dispatch({type:PETS_REQUEST})
    
    let payload=[]
    axios.get(`https://real-pink-donkey-coat.cyclic.app/pets`).then((res)=>{
        payload = res.data.data.filter((el)=>el.id!==id)
    })
   
   return axios.delete(`https://real-pink-donkey-coat.cyclic.app/pets/delete/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res)=>{
        dispatch({type:DELETE_PETS_SUCCESS,payload})
        console.log(res.data)
        
    })
    .catch((err)=>{
        dispatch(PETS_FAILURE)
    })
}

export const addPetDetails = (data)=>(dispatch)=>{
    dispatch({type:PETS_REQUEST})
    axios.post(`https://real-pink-donkey-coat.cyclic.app/pets/addPet`,data,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res)=>{
        dispatch({type:ADD_PETS_SUCCESS})
        console.log(res.data)
        
    })
    .catch((err)=>{
        console.log(err);
        dispatch(PETS_FAILURE)
    })
}