import axios from 'axios'
import { GET_ADOPTION_DATA_FAILURE, GET_ADOPTION_DATA_REQUEST, GET_ADOPTION_DATA_SUCCESS,GET_DETAILS_DATA_SUCCESS } from "./actionType"

const url="https://real-pink-donkey-coat.cyclic.app"
export const getAdoptionData = (params) => async (dispatch) => {
    dispatch({ type: GET_ADOPTION_DATA_REQUEST })
    return await axios.get(`${url}/pets`,params)
        .then((res) => {
            console.log(res)
            dispatch({ type: GET_ADOPTION_DATA_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: GET_ADOPTION_DATA_FAILURE })
            console.log(err)
        })
}


export const DetailspageData = (petId) => async (dispatch) => {
        dispatch({ type: GET_ADOPTION_DATA_REQUEST })
        return await axios.get(`${url}/pets/${petId.petId}`)
            .then((res) => {
                console.log(res)
                dispatch({ type: GET_DETAILS_DATA_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: GET_ADOPTION_DATA_FAILURE })
                console.log(err)
            })
    }
    