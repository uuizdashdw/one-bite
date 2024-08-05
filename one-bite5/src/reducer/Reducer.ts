// Types
import { Diary, Action } from "../types";

// reducer setting
export const reducer = (state: Diary[], action: Action): Diary[] => {
  let nextState: Diary[];
  
  switch(action.type){
      case "INIT" :
        return action.data;
        
      case "CREATE" : 
        { 
          nextState = [action.data, ...state];  
          break;
        }
      case "UPDATE" : 
        {
          nextState =  state.map((item: Diary) => item.id === action.data.id ? action.data : item); 
          break;
        }
      case "DELETE" :
        { 
          nextState = state.filter((item) => item.id !== action.id); 
          break;
        }
      default :
        return state;
    }

    localStorage.setItem('diary', JSON.stringify(nextState));
    return nextState;
  }