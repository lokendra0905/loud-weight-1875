import { GET_TEACHER_FAILURE, GET_TEACHER_REQUEST, GET_TEACHER_SUCCESS, POST_HEIRE_STATUS } from "./actionType"



const initState={
    teacherData:[],
    isLoading:false,
    isError:false
}

  export const reducer=(state=initState,{type,payload})=>{

       switch(type){

           case GET_TEACHER_REQUEST:{
              return {...state,isLoading:true}
           }
           case GET_TEACHER_SUCCESS:{
              return {...state, teacherData:payload,isLoading:false}
           }
           case GET_TEACHER_FAILURE:{
               return {...state,isError:true,isLoading:false}
           }
           case POST_HEIRE_STATUS:{
               let update=state.teacherData.map((el)=> {
                  if(el.id===payload){
                    return {...el,status:!el.status}
                  }
                  else{
                    return el
                  }
               })

               return {...state,teacherData:update}
           }
          default:{
            return state
          }
       }

  }