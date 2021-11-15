import { defaultState } from "../store";
import {  GET_HOUSE, GET_TOKEN, GET_USER, GET_CITYES } from "../action/action"; 
 
export const reducer = (state = defaultState, actions) => { 
  switch (actions.type) { 
    case GET_USER: 
      return { ...state, userData: actions.userData }; 
    case GET_TOKEN: 
      return { ...state, userToken: actions.userToken }; 
    case GET_CITYES:  
      return {...state, cityData: actions.cityData};  
    case GET_HOUSE:
        return {...state, userHouse: actions.userHouse};
    default: 
      return state; 
  } 
};
