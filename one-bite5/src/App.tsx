import './App.css'

import { useReducer, useRef, createContext } from 'react';

// Router
import { Routes, Route } from 'react-router-dom';

// Router Elements
import HomeLayout from './Layouts/HomeLayout';
import DiaryLayout from './Layouts/DiaryLayout';
import NewLayout from './Layouts/NewLayout';
import EditLayout from './Layouts/EditLayout';
import NotFoundLayout from './Layouts/NotFoundLayout';

// Header
import Header from './components/common/Header';

// Emotion Images Utils
import { getEmotionImages } from './utils/get-emotion-images';

// Components
import Button from './components/Button';

// Types
import { Diary, Action, DiaryDispatchContextType } from './types';

// reducer setting
const reducer = (state: Diary[], action: Action): Diary[] => {
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : 
      return state.map((item: Diary) => item.id === action.data.id ? action.data : item);
    case "DELETE" :
      return state.filter((item) => item.id !== action.id);
    default :
      return state;
  }
}

// Mock Data
const MockData: Diary[] = [
  {
    id: 1,
    createdDate: new Date().toLocaleDateString(),
    emotionId: 1,
    content: '1번 일기 내용'
  },
  {
    id: 2,
    createdDate: new Date().toLocaleDateString(),
    emotionId: 2,
    content: '2번 일기 내용'
  }
]

const initialDispatchContextValue: DiaryDispatchContextType = {
  onCreateNewDiary: () => {},
  onUpdateDiary: () => {},
  onDeletetheDiary: () => {},
}

// Context
const DiaryStateContext = createContext(MockData);
const DiaryDispatchContext = createContext<DiaryDispatchContextType>(initialDispatchContextValue);

const App = (): JSX.Element => {

  const [data, disaptch] = useReducer(reducer, MockData);
  const idRef = useRef(3);

  // Create New Diary
  const onCreateNewDiary = (createdDate: string, emotionId: number, content: string): void => {
    disaptch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    });
  }

  // Update the Diary
  const onUpdateDiary = (id: number, createdDate: string, emotionId: number, content: string): void => {
    disaptch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // Delete the Diary
  const onDeletetheDiary = (id: number): void => {
    disaptch({
      type: "DELETE",
      id
    })
  }

  return (
    <>
    <Header 
      title={new Date().toLocaleDateString()} 
      leftChild={<Button text='left' type='left' onClick={() => console.log('left')} />} 
      rightChild={<Button text='right' type='right' onClick={() => console.log('right')} />} />

    <Button text={"이동"} type={"default"} onClick={() => console.log('clicked')} />
    <Button text={"123"} type='NEGATIVE' onClick={() => console.log('NEGATIVE')} />
    <Button text='123' type='POSITIVE' onClick={() => console.log('POSITIVE')} />
   
    <button onClick={() => 
      onCreateNewDiary(new Date().toLocaleDateString(), 1, 'hello')}>일기 추가 테스트</button>

    <button onClick={() => 
      onUpdateDiary(1, new Date().toLocaleDateString(), 3, '수정 됨')
    }>일기 수정 테스트</button>

    <button onClick={() => 
      onDeletetheDiary(1)
    }>일기 삭제 테스트</button>

    <DiaryStateContext.Provider value={MockData}>
      <DiaryDispatchContext.Provider value={
        {onCreateNewDiary, onUpdateDiary, onDeletetheDiary}
      }>
        <Routes>
          <Route path='/' element={<HomeLayout />} />
          <Route path='/diary/:id' element={<DiaryLayout />} />
          <Route path='/new' element={<NewLayout />} />
          <Route path='/edit/:id' element={<EditLayout />} />
          <Route path='*' element={<NotFoundLayout />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App;