import './App.css'

// Router
import { Routes, Route } from 'react-router-dom';

// Router Elements
import HomeLayout from './Layouts/HomeLayout';
import DiaryLayout from './Layouts/DiaryLayout';
import NewLayout from './Layouts/NewLayout';
import NotFoundLayout from './Layouts/NotFoundLayout';

// Header
import Header from './components/common/Header';

// Emotion Images Utils
import { getEmotionImages } from './utils/get-emotion-images';

// Components
import Button from './components/Button';

const App = (): JSX.Element => {
  return (
    <>
    <Header 
      title={new Date().toLocaleDateString()} 
      leftChild={<Button text='left' type='left' onClick={() => console.log('left')} />} 
      rightChild={<Button text='right' type='right' onClick={() => console.log('right')} />} />

    <Button text={"이동"} type={"default"} onClick={() => console.log('clicked')} />
    <Button text={"123"} type='NEGATIVE' onClick={() => console.log('NEGATIVE')} />
    <Button text='123' type='POSITIVE' onClick={() => console.log('POSITIVE')} />
   
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/diary/:id' element={<DiaryLayout />} />
      <Route path='/new' element={<NewLayout />} />
      <Route path='*' element={<NotFoundLayout />} />
    </Routes>
    </>
  )
}

export default App;