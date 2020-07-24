import {REQUEST_FAILURE, SET_PHOTOS, START_LOADING} from './types'
import {getCallApi} from "../commons/ApiCalls";

export const getPhotos = (page) => async dispatch => {
    dispatch({type: START_LOADING})
    console.log(page)
    const response = await getCallApi(`photos?page=${page}`)
    console.log(response)

    if (response.errors) {
        dispatch({type: REQUEST_FAILURE, payload: response.errors})
    }else{
        dispatch({type: SET_PHOTOS, payload: response})
    }
}
