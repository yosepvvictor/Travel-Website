import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import Stories from "./pages/Stories";
import Agents from "./pages/Agents";
import NotFound from "./pages/NotFound";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/browse-by" element={<Browse />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/agents" element={<Agents />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
