import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Navbar/Navbar.js'
import Home from './Pages/Home/Home';
import BrowseNumbers from './Pages/Browse Numbers/BrowseNumbers';
import CreateNumbers from './Pages/Create Numbers/CreateNumbers';
import OrderSim from './Pages/Order Sim/OrderSim';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/browse' element={<BrowseNumbers />}/>
            <Route path='/create' element={<CreateNumbers />}/>
            <Route path='/order-sim' element={<OrderSim /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
