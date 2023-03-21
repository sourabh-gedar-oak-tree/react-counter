import { actionTypes } from "../constants/actionTypes"
export const increment = (payload) =>{
    return{
        type:actionTypes.INCREMENT,
        payload:payload
    }
}

export const decrement = (payload) =>{
    return{
        type:actionTypes.DECREMENT,
        payload:payload
    }
}
