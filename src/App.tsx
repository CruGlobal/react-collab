import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BadgeVariables from "./Pages/challenges/BadgeVariables/Index";
import Layout from "./Layout";
import AdjacentElements from "./Pages/challenges/AdjacentElements/Index";
import Conditional from "./Pages/challenges/ConditionalRendering/Conditional";
import RenderingLists from "./Pages/challenges/RenderingLists/RenderingLists";
import ObjectProps from "./Pages/challenges/ObjectProps/ObjectProps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="challenges/badge-variables"
            element={<BadgeVariables />}
          />
          <Route
            path="challenges/adjacent-elements"
            element={<AdjacentElements />}
          />
          <Route
            path="challenges/conditional-rendering"
            element={<Conditional />}
          />
          <Route
            path="challenges/rendering-lists"
            element={<RenderingLists />}
          />
          <Route path="challenges/object-props" element={<ObjectProps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
