import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Display from './components/display/Display';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import {ToastContainer} from 'react-toastify'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Display/>}/>
     <Route path='/cart' element={<Cart/>}/>

     </Routes>
     <Footer/>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
