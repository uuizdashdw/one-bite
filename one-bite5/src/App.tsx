import './App.css'

import { useReducer, useRef, createContext, useEffect } from 'react';

// Router
import { Routes, Route } from 'react-router-dom';

// Router Elements
import HomeLayout from './Layouts/HomeLayout';
import DiaryLayout from './Layouts/DiaryLayout';
import NewLayout from './Layouts/NewLayout';
import EditLayout from './Layouts/EditLayout';
import NotFoundLayout from './Layouts/NotFoundLayout';

// Types
import { Diary, DiaryDispatchContextType } from './types';

// Reducer
import { reducer } from './reducer/Reducer';

const initialDispatchContextValue: DiaryDispatchContextType = {
  onCreateNewDiary: () => {},
  onUpdateDiary: () => {},
  onDeletetheDiary: () => {},
}

// Context
export const DiaryStateContext = createContext<Diary[]>([]);
export const DiaryDispatchContext = createContext<DiaryDispatchContextType>(initialDispatchContextValue);

const App = (): JSX.Element => {

  const [data, disaptch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    // Get Diary Data from Local Storage
    const storedData = localStorage.getItem("diary");
    if(!storedData) return;
    const parsedData: Diary[] = JSON.parse(storedData);

    // ParsedData Checking
    if(!Array.isArray(parsedData)) return;
    let maxId = 0;

    parsedData.forEach((item) => {
      if(item.id > maxId) maxId = item.id;
    });
    
    idRef.current = maxId + 1;
    disaptch({
      type: "INIT",
      data: parsedData
    });
  }, []);

  // Create New Diary
  const onCreateNewDiary = (createdDate: number, emotionId: number, content: string): void => {
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
  const onUpdateDiary = (id: number, createdDate: number, emotionId: number, content: string): void => {
    disaptch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      }
    });
  }

  // Delete the Diary
  const onDeletetheDiary = (id: number): void => {
    disaptch({
      type: "DELETE",
      id
    });
  }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={
        { onCreateNewDiary, 
          onUpdateDiary, 
          onDeletetheDiary
        }
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