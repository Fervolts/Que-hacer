import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navb from "./components/Navb";
import CrudApp from "./components/App";

export const App = () => {
  return (
    <div>
      <Navb/>

      <div className="container">
        <Routes>
          <Route path="/" element={<CrudApp/>}/>

        </Routes>

      </div>
    </div>
  )
}

