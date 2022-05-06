import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Test from "./pages/test"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
