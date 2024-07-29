// Types
import { TodoItemType } from '../../TodoTypes';

// Memo
import { memo, useContext } from 'react';

import '../../css/TodoItem.css';

// Context
import { TodoDispatchContext } from '../../Layout/ListLayout';

//Type
import { TodoDispatchContextType } from '../../TodoTypes';


const TodoItem = ({ id, isDone, content, date  }: TodoItemType): JSX.Element => {

    const { 
        onUpdateExistingItem, 
        onDeleteExistingItem, 
        onFinishExistingItem } = useContext<TodoDispatchContextType>(TodoDispatchContext);

    // Change Checkbox Value
    const onChangeCheckboxValue = (): void => {
        onUpdateExistingItem(id);
    }

    // Delete the Todo Item
    const onDeleteTodoItem = (): void => {
        if(confirm('정말 삭제하시겠습니까?')) onDeleteExistingItem(id);
    }

    // Finish the Todo Item
    const onFinishTodoItem = (id: number, isDone: boolean): void => {
        if(isDone) {
            alert('고생하셨습니다!');
            onFinishExistingItem(id, isDone);
        } else {
            alert('완료하시려면 체크박스를 체크해주세요!');
        }
    }

    return (
        <div className="TodoItem">
            <input type="checkbox"
                   id={'contentCheck' + id}
                   checked={isDone} 
                   onChange={onChangeCheckboxValue} />

            <label htmlFor={'contentCheck' + id}
                   className="content">
                {content}
            </label>
            <div className="date">
                {date}
            </div>
            <button type='button' 
                    onClick={() => onFinishTodoItem(id, isDone)}>
                완료
            </button>
            <button type='button' 
                    onClick={onDeleteTodoItem}>
                삭제
            </button>
        </div>
    )
}

export default memo(TodoItem);