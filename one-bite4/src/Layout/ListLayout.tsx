// Hooks
import { useState, useRef, useReducer, memo, useCallback, createContext } from "react";

// Views
import EditorView from "../components/View/EditorView"
import ToDoList from "../components/View/ToDoList"
import FinishedTodoList from "../components/View/FinishedTodoList"

// Types
import { AppState, TodoContextType } from "../TodoTypes"

// Reducer
import { reducer } from "../reducer/reducer"

export const TodoContext = createContext<TodoContextType>({
    todoList: { todoList: [], finishedList: [] },
    onCreateNewTodoItem: (content: string): void => {},
    onUpdateExistingItem: (targetId: number): void => {},
    onDeleteExistingItem: (targetId: number) => {},
    onFinishExistingItem: (targetId: number, isDone: boolean) => {},
});

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
    const onCreateNewTodoItem = useCallback((content: string): void => {

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
    }, [tossedContent]);

    // Update Existing Item
    const onUpdateExistingItem = useCallback((targetId: number): void => {
        dispatch({
            type: 'update',
            targetId: targetId,
        })
    }, []);

    // Delete Existing Item
    const onDeleteExistingItem = useCallback((targetId: number): void => {
        dispatch({
            type: 'delete',
            targetId: targetId,
        })
    }, []);

    // Finish Existing Item
    const onFinishExistingItem = useCallback((targetId: number, isDone: boolean): void => {
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
    }, [tossedContent]);



    return (
        <>
            <main className="main">
                <TodoContext.Provider value={{
                    todoList,
                    onCreateNewTodoItem,
                    onUpdateExistingItem,
                    onDeleteExistingItem,
                    onFinishExistingItem
                }}>
                    <section className="section">
                        <EditorView />
                    </section>
                    
                    <section className="section">
                        <ToDoList />
                    </section>

                    <section className="section">
                        <FinishedTodoList />
                    </section>
                </TodoContext.Provider>
            </main>
        </>
    )
}

export default memo(ListLayout);