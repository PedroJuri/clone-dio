import {Home} from './Pages/Home'
import {Login} from './Pages/Login'
import {Feed} from './Pages/Feed'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  );
}

export default App;
