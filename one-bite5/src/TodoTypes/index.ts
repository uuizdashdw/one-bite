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


// Context
export interface TodoStateContextType {
    todoList: AppState;
}

export interface TodoDispatchContextType {
    onCreateNewTodoItem: (content: string) => void;
    onUpdateExistingItem: (targetId: number) => void;
    onDeleteExistingItem: (targetId: number) => void;
    onFinishExistingItem: (targetId: number, isDone: boolean) => void;
}