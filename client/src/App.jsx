import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Feedback from './pages/Feedback';
import Voting from './pages/Voting';
import LegislationSummaries from './pages/LegislationSummaries';
import ImpactVisualizer from './pages/ImpactVisualizer';
import Initiatives from './pages/Initiatives';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import ProtectedRoute from './components/ProtectedRoute';
import Notification from './components/Notification';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<ProtectedRoute>
        
          <Dashboard/>
        </ProtectedRoute>} />
        {/* Add other routes here */}
        <Route path="/notifications" element={<Notification />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/vote" element={<Voting />} />
        <Route path="/legislation" element={<LegislationSummaries />} />
        <Route path="/impact" element={<ImpactVisualizer />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
