import { GET_SHELTER_FAILURE, GET_SHELTER_REQUEST, GET_SHELTER_SUCCESS } from "./actionType"



const initState = {
  shelterData: [],
  isLoading: false,
  isError: false
}

export const reducer = (state = initState, { type, payload }) => {

  switch (type) {

    case GET_SHELTER_REQUEST: {
      return { ...state, isLoading: true }
    }
    case GET_SHELTER_SUCCESS: {
      return { ...state, shelterData: payload, isLoading: false }
    }
    case GET_SHELTER_FAILURE: {
      return { ...state, isError: true, isLoading: false }
    }
    
    default: {
      return state
    }
  }

}