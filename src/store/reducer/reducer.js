import { defaultState } from "../store";
import { GET_TOKEN, GET_USER, GET_CITYES } from "../action/action"; 
 
export const reducer = (state = defaultState, actions) => { 
  switch (actions.type) { 
    case GET_USER: 
      return { ...state, userData: actions.userData }; 
    case GET_TOKEN: 
      return { ...state, userToken: actions.userToken }; 
    case GET_CITYES:  
      return {...state, cityData: actions.cityData};  
    default: 
      return state; 
  } 
};
