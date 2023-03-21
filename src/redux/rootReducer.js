
import {combineReducers} from 'redux'
import {counterReducer , productReducer} from './reducers/reducers'

const rootReducer = combineReducers({
    counterReducer:counterReducer,
    productReducer:productReducer
})

export default rootReducer;
