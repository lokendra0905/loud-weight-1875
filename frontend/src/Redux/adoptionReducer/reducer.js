import { GET_ADOPTION_DATA_FAILURE, GET_ADOPTION_DATA_REQUEST, GET_ADOPTION_DATA_SUCCESS } from "./actionType"

const initState = {
    adoptionData: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ADOPTION_DATA_REQUEST: {
            return { ...state, isLoading: true }
        }
        case GET_ADOPTION_DATA_SUCCESS: {
            return { ...state, adoptionData: payload, isLoading: false }
        }
        case GET_ADOPTION_DATA_FAILURE: {
            return { ...state, isError: true, isLoading: false }
        }
        default: {
            return state
        }
    }

}