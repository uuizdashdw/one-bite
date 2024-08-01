import { MouseEventHandler } from "react";

export interface ButtonProps {
    text: string;
    type: string;
    onClick: () => void;
}

export interface HeaderProps {
    title: string;
    leftChild: React.ReactNode;
    rightChild?: React.ReactNode;
}


// Diary Type
export interface Diary {
    id: number;
    createdDate: number;
    emotionId: number;
    content: string;
}

// Diary List Type
export interface DiaryList {
    diaryList: Diary[];
}


// Reducer
interface AddDiary {
    type: 'CREATE';
    data: Diary;
}

interface UpdateDiary {
    type: 'UPDATE',
    data: Diary;
}

interface DeleteDiary {
    type: 'DELETE',
    id: number;
}

export type Action = AddDiary | UpdateDiary | DeleteDiary;

export interface DiaryDispatchContextType {
    onCreateNewDiary: (createdDate: number, emotionId: number, content: string) => void; 
    onUpdateDiary: (id: number, createdDate: number, emotionId: number, content: string) => void; 
    onDeletetheDiary: (id: number) => void;
}


// EmotionItem Prop Types
export interface EmotionItemType {
    emotionId: number;
    emotionName: string;
    isSelected: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

// EmotionItem Click Event Prop Type
export interface EmotionItemClickType {
    name: string;
    value: number;
}

// Submit Diary Data Type
export interface onSubmitDiary {
    onSubmit: (input: Omit<Diary, 'id'>) => void;
}