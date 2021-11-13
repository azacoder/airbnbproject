
import {createStore} from "redux"
import { reducer } from "./reducer/reducer";
export const defaultState = { 
  
  userData: null, 
  userToken: null, 
  userHouse: [],

}; 

const store = createStore(reducer);
export default store
