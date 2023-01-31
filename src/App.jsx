import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ProductsList from './components/ProductsList'
import Product from './components/Product'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider/>
      <ProductsList/>
    </div>
  );
}
export default App;
