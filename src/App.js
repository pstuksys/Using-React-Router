import { Link, Route, Routes, Navigate } from 'react-router-dom'

import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <div className="App">
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route path='*' element={<Navigate to='/welcome' />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;