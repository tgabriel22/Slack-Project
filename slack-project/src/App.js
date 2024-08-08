import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention.
    <div className="App">
      <Router>
        {/* If there's no user, show the login page */}
        {/* Otherewise show the app */}
        {!user ? (
          <Login />
        ) : (
          <>
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
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
