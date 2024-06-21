import '../../css/TodoList.css';

// Todo - Item
import TodoItem from './TodoItem';

const ToDoList = (): JSX.Element => {
    return (
        <div className='TodoList'>
            <h4>Todo List 💎✨</h4>
            <input type="text"
                   placeholder="검색어를 입력해주세요"
                   autoComplete="off" />
            <div className='Todos_wrapper'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default ToDoList;