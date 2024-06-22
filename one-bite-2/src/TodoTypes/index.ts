export interface TodoItemType {
    id: number;
    isDone: boolean;
    content: string;
    date: string;
}

export type TodoItemList = TodoItemType[];


// Finished Todo List
export type FinishedTodoItemList = TodoItemType[] | [];

// Props
export interface EditorViewProp {
    onCreateNewTodoItem: (content: string) => void;
}

export interface TodoListProp {
    todoList: TodoItemList;
}

export interface TodoItemListProp {
    todoList: TodoItemType;
}

interface TodoListChangeProp {
    onUpdateExistingItem: (targetId: number) => void;
}

interface TodoListDeleteProp {
    onDeleteExistingItem: (targetId: number) => void;
}

interface TodoListFinishProp {
    onFinishExistingItem: (targetId: number) => void;
}


// Finished Item's Props
export interface FinishedTodoListProp {
    finishedList: FinishedTodoItemList;
}

export type TodoListProps = TodoListProp & TodoListChangeProp & TodoListDeleteProp & TodoListFinishProp;
export type TodoItemProps = TodoItemType & TodoListChangeProp & TodoListDeleteProp & TodoListFinishProp;