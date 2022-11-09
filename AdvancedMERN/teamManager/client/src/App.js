import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import PlayList from './views/PlayList';
import NewPlayerPage from './views/NewPlayerPage';
import Games from './views/Games';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/players/list' element={<PlayList/>}/>
        <Route path='/players/addplayer' element={<NewPlayerPage/>}/>
        <Route path='/status/game/:id' element={<Games/>}/>
      </Routes>
    </div>
  );
}

export default App;
