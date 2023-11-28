import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navb from "./components/Navb";
import { Lista } from './components/Lista';
import {To_do} from './components/To_do'

export const App = () => {
  return (
    <div>
      <Navb/>

      <div className="container">
        <Routes>
          <Route path="/" element={<Lista/>}/>
          <Route path="/Quehacer" element={<To_do/>}/>

        </Routes>

      </div>
    </div>
  )
}

