import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import UpdatePage from './views/UpdatePage';
import CreatePage from './views/CreatePage';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/new' element={<CreatePage />}/>
        <Route path='/edit/:id' element={<UpdatePage />}/>
      </Routes>
    </div>
  );
}

export default App;
