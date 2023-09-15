import './App.css';

import { BrowserRouter as Router ,Routes , Route,Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';


function App() {
  return (
    <div className='relative'>
    <Router>
        <Nav/>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
