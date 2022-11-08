import Main from './views/Main';
import Product from './components/Product'
import ProductForm from './components/ProductForm';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Product />} />
        <Route path='/:id/edit' element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
