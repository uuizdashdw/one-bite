// Css
import '../../css/FinishedTodoItem.css';

// Types
import { TodoItemType } from "../../TodoTypes";

const FinishedTodoItem = ({ id, isDone, content, date }: TodoItemType) => {
    return (
        <div className="finishedItem">
            <div className="itemId">
                { id === 0 ? '🥇' 
                    : id === 1 ? '🥈' 
                    : id === 2 ? '🥉'
                    : `No. ` + (id + 1) }
                </div>
            <div className="isDone">{isDone}</div>
            <div className="content">{content}</div>
            <div className="date">{date}</div>
        </div>
    )
}

export default FinishedTodoItem;