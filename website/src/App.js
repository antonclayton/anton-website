import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      <h1></h1>
    </div>
  );
}

export default App;
