import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/homepage"
import Profile from "./pages/profile"
import Registration from "./pages/registration"
import 'antd/dist/antd.css'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Homepage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
