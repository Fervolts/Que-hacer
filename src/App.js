import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navb from "./components/Navb";
import CrudApp from "./components/App";
import InicioApp from "./components/Inicio";
import ListaApp from "./components/TareasLista";

export const App = () => {
  return (
    <div>
      <Navb/>

      <div className="container">
        <Routes>
          <Route path="/" element={<InicioApp/>}/>
          <Route path="/agregartasks" element={<CrudApp/>}/>
          <Route path="/listas" element={<ListaApp/>}/>
        </Routes>

      </div>
    </div>
  )
}

