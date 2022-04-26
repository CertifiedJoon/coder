import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Offers from './pages/Offers'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/explore" element={<Explore/>}></Route>
          <Route path="/offers" element={<Offers/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-out" element={<SignOut/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
