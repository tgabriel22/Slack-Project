// import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="App">
      {/* Header */}
      <Header/>
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        {/* React-Router -> Chat screen */}
      </div>

    </div>
  );
}

export default App;
