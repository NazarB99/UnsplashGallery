import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './src/reducers'
// import './config/ReactotronConfig';

const middleware = [thunk]

export const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middleware))
)

export default {store};
