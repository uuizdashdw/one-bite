// Header
import { useState, useRef } from "react"
import Header from "../components/Header"

// Views
import EditorView from "../components/View/EditorView"
import ToDoList from "../components/View/ToDoList"
import FinishedTodoList from "../components/View/FinishedTodoList"

// Types
import { TodoItemType, TodoItemList } from "../TodoTypes"


const ListLayout = (): JSX.Element => {

    // To-Do List State
    const [todoList, setTodoList] = useState<TodoItemList>([]);
    
    // Finished To-Do List State
    const [finishedList, setFinishedList] = useState<TodoItemList>([]);

    // ID Reference
    const newIdRef = useRef(0); // New Item
    const finishedIdRef = useRef(0); // Finished Item

    // Toss the Content, Date, Id
    const [tossedContent, setTossedContent] = useState<string[]>([]);
    const [tossedId, setTossedId] = useState([0]);

    // Create New Item
    const onCreateNewTodoItem = (content: string): void => {
        const newTodo: TodoItemType = {
            id: newIdRef.current++,
            isDone: false,
            content: content,
            date: new Date().toLocaleDateString(),
        }

        setTodoList([newTodo, ...todoList]);

        setTossedContent([...tossedContent, content]);
        setTossedId([...tossedId, newTodo.id]);
            
    }

    // Update Existing Item
    const onUpdateExistingItem = (targetId: number): void => {
        setTodoList(
            todoList.map((todo: TodoItemType) => 
                todo.id === targetId 
                    ? { ...todo, isDone: !todo.isDone } 
                    : todo)
        )
    }

    // Delete Existing Item
    const onDeleteExistingItem = (targetId: number): void => {
        setTodoList(
            todoList.filter((todo: TodoItemType) => 
                todo.id !== targetId)
        )
    }

    // Finish Existing Item
    const onFinishExistingItem = (targetId: number): void => {
        setTodoList(
            todoList.filter((todo: TodoItemType) => !todo.isDone)
        )

        const finishiedTodo: TodoItemType = {
            id: finishedIdRef.current++,
            isDone: true,
            content: tossedContent[targetId],
            date: new Date().toLocaleDateString(),
        }

        setFinishedList([...finishedList, finishiedTodo]);
    }

    return (
        <>
        <Header />
        <main className="main">
            <section className="section">
                <EditorView onCreateNewTodoItem={onCreateNewTodoItem} />
            </section>
            
            <section className="section">
                <ToDoList todoList={todoList} 
                          onUpdateExistingItem={onUpdateExistingItem} 
                          onDeleteExistingItem={onDeleteExistingItem}
                          onFinishExistingItem={onFinishExistingItem} />
            </section>

            <section className="section">
                <FinishedTodoList finishedList={finishedList} />
            </section>
        </main>
        </>
    )
}

export default ListLayout