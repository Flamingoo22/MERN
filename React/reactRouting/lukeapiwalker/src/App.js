import Content from './components/Content';
import SearchBar from './components/SearchBar';
import NoResult from './components/NoResult';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchBar />}>
          <Route path=':type/:id' element={<Content/>}/>
          <Route path='*' element={<NoResult />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
