// Css
import '../../css/FinishedTodoList.css';

// Finished Item
import FinishedTodoItem from "./FinishedTodoItem";

// Types
// import { FinishedTodoListProp } from '../../TodoTypes';
import { FinishedTodoListProp } from '../../TodoTypes';


const FinishedTodoList = ({ finishedList }: FinishedTodoListProp) => {
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