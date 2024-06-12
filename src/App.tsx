import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import BadgeVariables from './Pages/challenges/BadgeVariables/Index';
import Layout from './Layout';
import AdjacentElements from './Pages/challenges/AdjacentElements/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="challenges/badge-variables" element={<BadgeVariables />} />
          <Route path="challenges/adjacent-elements" element={<AdjacentElements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
