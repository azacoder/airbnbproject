import { defaultState } from "../State";

 export const reducer = (state = defaultState, actions ) => {
        switch(actions.type) {
            case "GET_IDCARD": 
            return {...state , cardId: actions.cardId }
            default: return state ;
            

        }
}