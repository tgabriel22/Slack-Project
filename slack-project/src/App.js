import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM naming convention.
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />

          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
            <Route path="/" element={<h1>WELCOME</h1>} />
          </Routes>

          {/* React-Router -> Chat screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
