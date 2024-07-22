import './App.css'

// Header
import Header from './components/Header';

// Layout
import ListLayout from './Layout/ListLayout';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Header />
      <ListLayout />
    </div>
  )
}
export default App;
