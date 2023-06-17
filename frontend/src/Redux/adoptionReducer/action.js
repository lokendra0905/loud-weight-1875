import axios from 'axios'
import { GET_ADOPTION_DATA_FAILURE, GET_ADOPTION_DATA_REQUEST, GET_ADOPTION_DATA_SUCCESS } from "./actionType"

const url=""
export const getAdoptionData = (param) => async (dispatch) => {

    dispatch({ type: GET_ADOPTION_DATA_REQUEST })
    return await axios.get(`${url}`, param)
        .then((res) => {
            dispatch({ type: GET_ADOPTION_DATA_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: GET_ADOPTION_DATA_FAILURE })
            console.log(err)
        })
}


