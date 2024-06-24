import { useEffect, useState, ChangeEvent } from 'react';

// Css
import '../../css/TodoList.css';

// Todo - Item
import TodoItem from './TodoItem';

// Type 
import { TodoItemList, TodoListProps } from '../../TodoTypes';
import type { TodoItemType } from '../../TodoTypes';

const ToDoList = ( { todoList, onUpdateExistingItem, onDeleteExistingItem, onFinishExistingItem }: TodoListProps ): JSX.Element => {

    const [ search, setSearch ] = useState('');
    const [ debouncedSearch, setDebouncedSearch ] = useState('')
    

    // Searching TodoItem Function
    const onSearchingTodoItem = (event: ChangeEvent<HTMLInputElement>) => {
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
        if(debouncedSearch === '') return todoList;

        return todoList.filter((todo: TodoItemType) => 
            todo.content
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase()));
    }

    const filteredTodoList = getFilteredData();

    return (
        <div className='TodoList'>
            <h4 className='title'>Todo List 💎✨</h4>
            {
                todoList.length === 0 ? (
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
                                        <TodoItem 
                                            {...todo} 
                                            onUpdateExistingItem={onUpdateExistingItem}
                                            onDeleteExistingItem={onDeleteExistingItem}
                                            onFinishExistingItem={onFinishExistingItem} 
                                        />
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

export default ToDoList;