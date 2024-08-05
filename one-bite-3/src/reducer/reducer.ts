// Types
import { AppState, Action, TodoItemType } from "../TodoTypes"

export function reducer(state: AppState, action: Action): AppState{
    
    switch(action.type){
        case 'create': return {
            todoList: [action.data, ...state.todoList],
            finishedList: [...state.finishedList],
        }

        case 'update': return {
            todoList: state.todoList.map((item: TodoItemType) => 
            item.id === action.targetId ? { ...item, isDone: !item.isDone } : item ),
            finishedList: [...state.finishedList],
        }

        case 'delete': return {
            todoList: state.todoList.filter((item: TodoItemType) => 
            item.id !== action.targetId),
            finishedList: [...state.finishedList],
        }

        case 'remove': return {
            todoList: state.todoList.filter((item: TodoItemType) =>
            !item.isDone === action.isDone),
            finishedList: [...state.finishedList],
        }

        case 'finish':
            return {
                todoList: state.todoList.filter((item: TodoItemType) =>
                !item.isDone),
                finishedList: [...state.finishedList, action.data]          
            }
        
        default: return state;
    }

    
}