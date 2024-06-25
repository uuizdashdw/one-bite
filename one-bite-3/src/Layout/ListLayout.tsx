// Hooks
import { useState, useRef, useReducer } from "react"

// Header
import Header from "../components/Header"

// Views
import EditorView from "../components/View/EditorView"
import ToDoList from "../components/View/ToDoList"
import FinishedTodoList from "../components/View/FinishedTodoList"

// Types
import { AppState } from "../TodoTypes"

// Reducer
import { reducer } from "../reducer/reducer"

const ListLayout = (): JSX.Element => {

    const initialAppState: AppState = {
        todoList: [],
        finishedList: [],
    }

    // To-Do List State & Reducer
    const [todoList, dispatch] = useReducer(reducer, initialAppState);

    // ID Reference
    const newIdRef = useRef(0); // New Item
    const finishedIdRef = useRef(0); // Finished Item

    // Toss the Content, Date, Id
    const [tossedContent, setTossedContent] = useState<string[]>([]);

    // Create New Item
    const onCreateNewTodoItem = (content: string): void => {

        dispatch({
            type: 'create',
            data: {
                id: newIdRef.current++,
                isDone: false,
                content: content,
                date: new Date().toLocaleDateString(),
            },
        })

        setTossedContent([...tossedContent, content]);
    }

    // Update Existing Item
    const onUpdateExistingItem = (targetId: number): void => {
        dispatch({
            type: 'update',
            targetId: targetId,
        })
    }

    // Delete Existing Item
    const onDeleteExistingItem = (targetId: number): void => {
        dispatch({
            type: 'delete',
            targetId: targetId,
        })
    }

    // Finish Existing Item
    const onFinishExistingItem = (targetId: number, isDone: boolean): void => {
        dispatch({
            type: 'remove',
            isDone: isDone,
        })

        dispatch({
            type: 'finish',
            data: {
                id: finishedIdRef.current++,
                isDone: true,
                content: tossedContent[targetId],
                date: new Date().toLocaleDateString(),
            }
        })
    }

    return (
        <>
        <Header />
        <main className="main">
            <section className="section">
                <EditorView onCreateNewTodoItem={onCreateNewTodoItem} />
            </section>
            
            <section className="section">
                <ToDoList {...todoList}
                          {...todoList.finishedList}
                          onUpdateExistingItem={onUpdateExistingItem} 
                          onDeleteExistingItem={onDeleteExistingItem}
                          onFinishExistingItem={onFinishExistingItem} />
            </section>

            <section className="section">
                <FinishedTodoList finishedList={todoList.finishedList} />
            </section>
        </main>
        </>
    )
}

export default ListLayout