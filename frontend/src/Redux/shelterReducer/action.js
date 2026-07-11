
import axios from 'axios'
import { GET_SHELTER_FAILURE, GET_SHELTER_REQUEST, GET_SHELTER_SUCCESS } from './actionType'

export const getShelterData = (params) => async (dispatch) => {

  dispatch({ type: GET_SHELTER_REQUEST })
  console.log(params, "im")
  return axios.get(`https://petconnects-aml6.onrender.com/shelters/`, params)
    .then((res) => {
      // console.log(res.data,"heloo")
      dispatch({ type: GET_SHELTER_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: GET_SHELTER_FAILURE })
    })
}




