
import './App.css';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from  './components/NavBar'
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <div className="App">
       <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
