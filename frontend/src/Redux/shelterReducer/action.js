
import axios from 'axios'
import { GET_SHELTER_FAILURE, GET_SHELTER_REQUEST, GET_SHELTER_SUCCESS, POST_GET_STATUS, } from './actionType'

export const getSheltererData = (param) => async (dispatch) => {

  dispatch({ type: GET_SHELTER_REQUEST })
  return axios.get(`https://tiny-jade-rabbit-gear.cyclic.app/SHELTER`, param)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: GET_SHELTER_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: GET_SHELTER_FAILURE })
    })
}


export const updateGet = ({ id, status }) => async (dispatch) => {

  return await axios.patch(`https://tiny-jade-rabbit-gear.cyclic.app/SHELTER/${id}`, { status: !status })
    .then((res) => {
      dispatch({ type: POST_GET_STATUS, payload: id })
    })
}

