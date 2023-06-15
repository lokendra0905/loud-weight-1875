
import axios from 'axios'
import { GET_TEACHER_FAILURE, GET_TEACHER_REQUEST, GET_TEACHER_SUCCESS, POST_HEIRE_STATUS } from './actionType'

  export const getTeacherData=(param)=> async(dispatch)=>{
      
        dispatch({type:GET_TEACHER_REQUEST})
     return  axios.get(`https://tiny-jade-rabbit-gear.cyclic.app/teacher`,param)
      .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_TEACHER_SUCCESS,payload:res.data})
      })
       .catch((err)=>{
          dispatch({type:GET_TEACHER_FAILURE})
       })
  }


  export const updateHire=({id,status})=>async(dispatch)=>{
     
     return await axios.patch(`https://tiny-jade-rabbit-gear.cyclic.app/teacher/${id}`,{status:!status})
       .then((res)=>{
        dispatch({type:POST_HEIRE_STATUS,payload:id})
       })
  }

