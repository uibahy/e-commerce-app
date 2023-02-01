import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Slider/>
              <ProductsList/>
            </>
          } 
        />

        <Route path='about' element={<About/>} />
      </Routes>
    </div>
  );
}
// bahy
export default App;