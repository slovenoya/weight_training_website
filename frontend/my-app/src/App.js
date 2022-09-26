import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Homepage from "./pages_outdated/homepage"
// import Profile from "./pages_outdated/profile"
// import Registration from "./pages_outdated/registration"
import Homepage from "./pages/1-homepage/homepage"
import Login from "./pages/2-loggin/login"
import Registration from "./pages/3-registration/registration"
import Profile from "./pages/4-profile/profile"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Homepage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
