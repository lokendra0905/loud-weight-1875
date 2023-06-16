import { DELETE_PETS_SUCCESS, GET_PETS_SUCCESS, PATCH_PETS_SUCCESS, PETS_FAILURE, PETS_REQUEST } from "./actionTypes"


const initialState = {
    isLoading:false,
    isError:false,
    petsList : []
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case PETS_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case PETS_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        
        case GET_PETS_SUCCESS:{
            return {
                ...state,isLoading:false,petsList:payload
            }
        }
        case PATCH_PETS_SUCCESS:{
            return {
                ...state,isLoading:false
            }
        }
        case DELETE_PETS_SUCCESS:{
            return {
                ...state,isLoading:false
            }
        }
        default:{
            return state
        }
    }
}