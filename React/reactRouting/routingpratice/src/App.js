import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Inputs from './components/Inputs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:input' element={<Inputs/>}/>
        <Route path='/:input/:bcolor' element={<Inputs/>}/>
        <Route path='/:input/:bcolor/:tcolor' element={<Inputs/>}/>
      </Routes>
    </div>
  );
}

export default App;
