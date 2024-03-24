import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Dashboard/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
