import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Feed} from './Pages/Feed'
import {Home} from './Pages/Home'
import {Login} from './Pages/Login'
import { GlobalStyle } from './Styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/clone-dio/" element={<Home/>}/>
        <Route path="/clone-dio/Login" element={<Login/>}/>
        <Route path="/clone-dio/Feed" element={<Feed/>}/>
      </Routes>
    </Router>
  );
}

export default App;
