import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Feed} from './Pages/Feed'
import {Home} from './Pages/Home'
import {Login} from './Pages/Login'
import {SignUp} from './Pages/SignUp'
import { AuthContextProvider } from './Context/auth'

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/clone-dio/" element={<Home/>}/>
          <Route path="/clone-dio/Login" element={<Login/>}/>
          <Route path="/clone-dio/Feed" element={<Feed/>}/>
          <Route path="/clone-dio/SignUp" element={<SignUp/>}/>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
