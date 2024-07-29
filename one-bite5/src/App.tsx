import './App.css'

// Router
import { Routes, Route } from 'react-router-dom';

// Router Elements
import HomeLayout from './Layouts/HomeLayout';
import DiaryLayout from './Layouts/DiaryLayout';
import NewLayout from './Layouts/NewLayout';
import NotFoundLayout from './Layouts/NotFoundLayout';


const App = ():JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/diary' element={<DiaryLayout />} />
      <Route path='/new' element={<NewLayout />} />
      <Route path='*' element={<NotFoundLayout />} />
    </Routes>
  )
}

export default App;