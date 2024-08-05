export interface TodoItemType {
    id: number;
    isDone: boolean;
    content: string;
    date: string;
}

export type TodoItemList = TodoItemType[];
export interface AppState {
    todoList: TodoItemList;
    finishedList: TodoItemList;
}

// Dispatch Type
interface CreateAction{
    type: 'create';
    data: TodoItemType;
}

interface UpdateAction {
    type: 'update';
    targetId: number;
}

interface DeleteAction {
    type: 'delete';
    targetId: number;
}

interface RemoveAction {
    type: 'remove';
    isDone: boolean;
}

interface FinishAction {
    type: 'finish';
    data: TodoItemType;
}

export type Action = CreateAction | UpdateAction | DeleteAction | RemoveAction | FinishAction;


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
    onFinishExistingItem: (targetId: number, isDone: boolean) => void;
}


// Finished Item's Props
export interface FinishedTodoListProp {
    finishedList: FinishedTodoItemList;
}

export interface TodoListProps {
    todoList: TodoItemList;
    finishedList: FinishedTodoItemList;
    // TodoListProp: TodoListProp; 
    onUpdateExistingItem: (targetId: number) => void;
    onDeleteExistingItem: (targetId: number) => void;
    onFinishExistingItem: (targetId: number, isDone: boolean) => void;
}
export type TodoItemProps = TodoItemType & TodoListChangeProp & TodoListDeleteProp & TodoListFinishProp;