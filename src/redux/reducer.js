import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./ActionType";

const init={
    loading:false,
    data:[],
    errors:null
};
const reducer =(state=init,{type,payload})=>{
    switch(type){
        case GET_DATA:
            return {
                ...state,
                loading:true,
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:payload
            }
            case GET_DATA_FAIL:
            return {
                ...state,
                loading:false,
                errors:payload
            }
        default:
            return state;

    }
}
export default reducer