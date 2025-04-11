import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Login />
        {/* You can swap <Login /> with <Home /> to test */}
      </div>
    </div>
  );
};

export default App;
