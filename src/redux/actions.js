import axios from "axios";
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./ActionType";

export const getData = (searchString,healthLabel) => async(dispatch)=> {
    const APP_ID="07423c90";
    const APP_KEY=
    "bf8bcf78e0cb86ee5d6ac92fd73f00ff";
    const url =`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;
  dispatch({
      type:GET_DATA,
      
});
try{
    const res = await axios.get(url)
   
   console.log(res);
    dispatch({
        type:GET_DATA_SUCCESS,
        payload:res.data.hits
    })
    
}catch (error){
  dispatch({
      type:GET_DATA_FAIL,
      payload:error.message,
  });
}
}