import { useContext } from 'react';

// Css
import '../../css/FinishedTodoList.css';

// Finished Item
import FinishedTodoItem from "./FinishedTodoItem";

// Context
import { TodoStateContext } from '../../Layout/ListLayout';

import { TodoStateContextType } from '../../TodoTypes';

const FinishedTodoList = () => {

    const { todoList } = useContext<TodoStateContextType>(TodoStateContext);
    const finishedList = todoList.finishedList;

    return (
        <div className="finishedList">
            <h4 className='title'>Finished Todo List 💎✨</h4>
            {
                finishedList.length === 0 
                ? (
                    <p className='noFinishedTodo'><strong>완료된 항목이 없네요..</strong> 😓</p>
                ) 
                : (
                    finishedList.map((todo) => (
                        <li key={todo.id}>
                            <FinishedTodoItem { ...todo } />
                        </li>
                    ))
                )
            }
            
        </div>
    )
}

export default FinishedTodoList;