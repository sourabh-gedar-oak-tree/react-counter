import { actionTypes } from "../constants/actionTypes";

export const productFecthing = (payload) =>{
    return{
        type:actionTypes.PRODUCT_DATA_FATCHING,
        payload:payload
    }
}

export const productFetched = (payload) =>{
 
    return{

        type:actionTypes.PRODUCT_DATA_SUCCESS,
        payload:payload
    }
}

export const productError = (payload) =>{
    return{
        type:actionTypes.PRODUCT_DATA_FAILED,
        payload:payload
    }
}