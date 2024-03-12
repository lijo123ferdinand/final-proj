import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import SignupPage from './pages/SignupPage';
import AnalyticsPage from './pages/AnalyticsPage';
import StartPage from './pages/StartPage';
import PasswordResetPage from './pages/PasswordResetPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<StartPage />} /> 
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/passwordReset" element={<PasswordResetPage/>}/>
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/analytics" element={<AnalyticsPage />} />
        <Route exact path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
