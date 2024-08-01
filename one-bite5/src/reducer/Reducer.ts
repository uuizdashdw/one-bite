// Types
import { Diary, Action } from "../types";

// reducer setting
export const reducer = (state: Diary[], action: Action): Diary[] => {
    switch(action.type){
      case "CREATE" : return [action.data, ...state];
      case "UPDATE" : 
        return state.map((item: Diary) => item.id === action.data.id ? action.data : item);
      case "DELETE" :
        return state.filter((item) => item.id !== action.id);
      default :
        return state;
    }
  }