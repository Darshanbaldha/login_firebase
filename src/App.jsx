import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import SignIn_SignUp from "./components/SignIn_SignUp/SignIn_SignUp";
import UserProfile from "./components/UserProfile/UserProfile";


function App() {
  return (
    <>
    
    <Router>
      <Routes>
      <Route exact path='/' element={<SignIn_SignUp />}></Route>
      <Route exact path='/userprofile' element={<UserProfile />}></Route>
      {/* <Route exact path='/' element={<SignIn_SignUp />}></Route> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
