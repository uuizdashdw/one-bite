import { KeyboardEvent, ChangeEvent, useState, useRef, useEffect } from 'react';

// Css
import '../../css/EditorView.css';

// Type
import { EditorViewProp } from '../../TodoTypes';

const EditorView = ({ onCreateNewTodoItem }: EditorViewProp): JSX.Element => {
    
    // Content State 
    const [content, setContent] = useState('');
    const contentRef = useRef<HTMLInputElement>(null);

    // Content State Change Event Handler
    const onChangeContentState = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setContent(value);
    }

    // Submit Todo Item
    const onSubmitTodoItem = (): void => {
        if(content !== '') {
            onCreateNewTodoItem(content);
            setContent('');
            return alert('추가 되었습니다');
        } else {
            return alert('새로운 TODO 를 입력해주세요');
        }
    }

    // Submit Todo Item by Enter Key
    const onSubmitByEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') onSubmitTodoItem();
    }

    // Focusing on Target
    useEffect(() => {
        const target = contentRef.current as HTMLInputElement;
        if(content === '') target.focus();
    }, [content])

    return (
        <div className="Editor">
            <input type="text" 
                   ref={contentRef}
                   placeholder="새로운 TODO..."
                   value={content}
                   onKeyDown={onSubmitByEnterKey}
                   onChange={onChangeContentState} />
            <button className="addBtn" 
                    onClick={onSubmitTodoItem}>
                컨텐츠 추가
            </button>
        </div>
    )
}

export default EditorView;