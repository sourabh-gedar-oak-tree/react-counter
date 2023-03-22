
import { actionTypes } from "../constants/actionTypes";
export const counterReducer = (state={count:0},action) =>{
    switch (action.type) {
        case actionTypes.INCREMENT:
            console.log("re inc '",state.count)
            return{
               ...state, count:action.payload
            }
        case actionTypes.DECREMENT:
            return{
               ...state, count:action.payload
            }
        default:
            return state         
    }
}


export const productReducer =  (state={ items:[]} , action) =>{
  

    switch (action.type) {
        case actionTypes.PRODUCT_DATA_FATCHING:
            return{ loading:true , items:[] }
        case actionTypes.PRODUCT_DATA_SUCCESS:
            return{ loading:false , items:action.payload } 
        case actionTypes.PRODUCT_DATA_FAILED:
            return{ loading:false , error:action.payload}        
        default:
            return state;
    }
}