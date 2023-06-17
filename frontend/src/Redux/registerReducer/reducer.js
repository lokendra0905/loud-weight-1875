import { GET_USERS_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, PATCH_USERS_ROLE_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, USERS_FAILURE, USERS_REQUEST } from "./actionTypes"


const initialState = {
    isLoading:false,
    isError:false
}


export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case REGISTER_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case REGISTER_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        
        case REGISTER_SUCCESS:{
            return {
                ...state,isLoading:false
            }
        }
        default:{
            return state
        }
    }
}