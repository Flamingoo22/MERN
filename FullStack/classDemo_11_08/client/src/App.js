import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import './App.css';
import ViewOne  from './components/ViewOne';
import Update from './components/Update';

function App() {
  // const navigate = useNavigate()
  return (
    <div className="App">

      <Link to='/notes/create'>Create</Link>
      <Routes>
        {/* Main --All Notes-- */}
        <Route path='/notes' element={<Main />}/>

        {/* Create */}
        <Route path='/notes/create' element={<Create />} />

        {/* View One */}
        <Route path='/notes/:id' element={<ViewOne />}/>

        {/* Update */}
        <Route path='/notes/:id/edit' element={<Update />}/>

        {/* Redirect */}
        {/* <Route path='*' element={<navigate to='/notes' replace/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
