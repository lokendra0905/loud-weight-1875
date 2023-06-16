import { GET_USERS_SUCCESS, PATCH_USERS_ROLE_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionTypes"


const initialState = {
    isLoading:false,
    isError:false,
    allUsers : []
}


export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case USERS_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case USERS_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        
        case GET_USERS_SUCCESS:{
            return {
                ...state,isLoading:false,allUsers:payload
            }
        }
        case PATCH_USERS_ROLE_SUCCESS:{
            return {
                ...state,isLoading:false
            }
        }
        default:{
            return state
        }
    }
}