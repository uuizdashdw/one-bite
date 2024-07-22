// Hook
import { useEffect, useState, useMemo, ChangeEvent, memo, useContext } from 'react';

// Css
import '../../css/TodoList.css';

// Todo - Item
import TodoItem from './TodoItem';

// Type 
import type { TodoItemType, TodoItemList } from '../../TodoTypes';

// Context
import { TodoContext } from '../../Layout/ListLayout';

const ToDoList = (): JSX.Element => {

    const { todoList } = useContext(TodoContext);

    const [ search, setSearch ] = useState('');
    const [ debouncedSearch, setDebouncedSearch ] = useState('')
    
    // Searching TodoItem Function
    const onSearchingTodoItem = (event: ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        setSearch(target.value);
    }

    // Search Debouncing
    useEffect(() => {
        const debouceTimer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(debouceTimer);
        }
    }, [search]);

    // Data Filtering
    const getFilteredData = (): TodoItemList => {
        if(debouncedSearch === '') return todoList.todoList;

        return todoList.todoList.filter((todo: TodoItemType) => 
            todo.content
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase()));
    }

    // Filtered Todo Data List
    const filteredTodoList = getFilteredData();

    // Count useMemo
    const { totalCount, doneCount, notDoneCount } = useMemo(() =>{
        const totalCount = todoList.todoList.length + todoList.finishedList.length; // Total
        const doneCount = todoList.finishedList.length; // Done
        const notDoneCount = totalCount - doneCount; // Not Done

        return { totalCount, doneCount, notDoneCount }
    }, [todoList.todoList, todoList.finishedList]);
  
    return (
        <div className='TodoList'>
            <h4 className='title'>Todo List 💎✨</h4>
            <div>Total : {totalCount}</div>
            <div>Done : {doneCount}</div>
            <div>Not Done : {notDoneCount}</div>
            {
                !todoList.todoList ? (
                    <p className='noTodo'><strong>해야 할 일이 없네요..</strong> 😓</p>
                ) : (
                    <>
                        <input type="text"
                               placeholder="해야할 일을 검색해주세요!"
                               autoComplete="off"
                               value={ search }
                               onChange={ onSearchingTodoItem } />
                        <div className='Todos_wrapper'>
                            <ul>
                            { 
                                filteredTodoList.map((todo, idx) => (
                                    <li key={idx}>
                                        <TodoItem {...todo} />
                                    </li>
                                ))    
                            }
                            </ul>
                        </div>
                    </>
                )
            }
            
        </div>
    )
}

export default memo(ToDoList);