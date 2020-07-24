import {SET_PHOTOS, REQUEST_FAILURE, START_LOADING} from "../actions/types";

const initialState = {
    photos: [],
    errors: [],
    loading: false
}

export const photosReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PHOTOS:
            return{
                ...state,
                photos: state.photos ? state.photos.concat(action.payload) : action.payload,
                errors: [],
                loading: false
            }
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        default:
            return {
                state
            }
    }
}
